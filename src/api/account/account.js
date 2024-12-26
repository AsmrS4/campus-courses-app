export const registryUser = async(data) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API}/registration`, {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    fullName: data?.fullName,
                    birthDate: data?.birthDate,
                    email: data?.email,
                    password: data?.password,
                    confirmPassword: data?.password
                }
            )
        })
        return response.json();
    } catch (error) {
        console.error('Запрос завершился с ошибкой: ' + error)
    }
}

export const loginUser = async(data) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API}/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...data
            })
        })
        return response.json();
    } catch (error) {
        console.error('Запрос завершился с ошибкой: ' + error)
    }
}

export const logoutUser = async() => {
    let token = localStorage.getItem('token');
    try {
        await fetch(`${process.env.REACT_APP_API}/logout`, {
            method: 'POST',
            headers: {
                'Accept': 'text/plain',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + token
            }
        })
        localStorage.clear();
    } catch (error) {
        console.error('Запрос завершился с ошибкой: ' + error)
    }
}