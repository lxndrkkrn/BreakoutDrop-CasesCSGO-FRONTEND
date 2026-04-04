import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. ПУТИ (проверь, чтобы skins.json лежал рядом с этим скриптом)
const skinsRootDir = path.join(__dirname, 'public', 'skins');
const outputFile = path.join(__dirname, 'src', 'data', 'skin.js');
const dbPath = path.join(__dirname, 'skins.json');

// 2. ЗАГРУЗКА БАЗЫ
let skinsDB = [];
if (fs.existsSync(dbPath)) {
    skinsDB = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    console.log('📦 База skins.json успешно загружена');
} else {
    console.error('❌ Файл skins.json не найден в корне проекта!');
}

const skinsData = {};

function formatName(fileName) {
    return fileName.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function scanRecursive(currentPath) {
    if (!fs.existsSync(currentPath)) return;
    const files = fs.readdirSync(currentPath);

    files.forEach(file => {
        const fullPath = path.join(currentPath, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            scanRecursive(fullPath);
        } else if (file.match(/\.(png|jpg|jpeg|webp)$/i)) {
            const ext = path.extname(file);
            const nameWithoutExt = path.basename(file, ext);
            const weaponName = path.basename(currentPath).toLowerCase();

            if (!skinsData[weaponName]) {
                skinsData[weaponName] = [];
            }

            const relativeToPublic = path.relative(path.join(__dirname, 'public'), fullPath);
            const webPath = '/' + relativeToPublic.replace(/\\/g, '/');

            // --- УМНЫЙ ПОИСК РЕДКОСТИ ---
            // Убираем всё кроме букв и цифр для точного сравнения
            const cleanFileName = nameWithoutExt.toLowerCase().replace(/[^a-z0-9]/g, '');

            const skinInfo = skinsDB.find(s => {
                const cleanDbName = s.name.toLowerCase().replace(/[^a-z0-9]/g, '');
                // Ищем, чтобы имя файла было частью имени из базы (или наоборот)
                return cleanDbName.includes(cleanFileName) || cleanFileName.includes(cleanDbName);
            });

            // Формируем цвет (проверка на решетку #)
            let finalColor = "#b0c3d9"; // Серый по дефолту
            if (skinInfo && skinInfo.rarity && skinInfo.rarity.color) {
                const color = skinInfo.rarity.color;
                finalColor = color.startsWith('#') ? color : `#${color}`;
            }

            skinsData[weaponName].push({
                id: nameWithoutExt,
                name: skinInfo ? skinInfo.name : formatName(nameWithoutExt),
                rarity: skinInfo && skinInfo.rarity ? skinInfo.rarity.name : "Consumer Grade",
                color: finalColor,
                img: webPath,
                price: 0 // Твоя дефолтная цена
            });
        }
    });
}

console.log('🚀 Начинаю магию сопоставления...');
scanRecursive(skinsRootDir);

const fileContent = `export const SKINS_DATA = ${JSON.stringify(skinsData, null, 4)};`;
fs.writeFileSync(outputFile, fileContent, 'utf8');

console.log(`✅ Готово! Данные сохранены в: ${outputFile}`);
