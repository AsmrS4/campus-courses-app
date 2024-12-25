export const getUserRoles = async() => {
    let token = localStorage.getItem('token');
    try {
        const response = await fetch(`${process.env.REACT_APP_API}/roles`, {
            method: 'GET',
            headers: {
                'Accept': 'text/plain',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + token
            }
        })
        return response.json();
    } catch (error) {
        console.error('Запрос завершился с ошибкой: ' + error)
    }
} 