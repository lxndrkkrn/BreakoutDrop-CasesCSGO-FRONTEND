export const registerUser = async (userData) => {

    try {
        const response = await fetch('http://localhost:8080/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Без этого бэк получит null
                'Accept': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Registration error');
        }

        return await response.text();
    } catch (error) {
        console.log(error);
        throw error;
    }

}