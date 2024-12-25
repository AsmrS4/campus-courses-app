export const getCourses = async() => {
    let token = localStorage.getItem('token');
    try {
        const response = await fetch(`${process.env.REACT_APP_API}/groups`, {
            method: 'GET',
            headers: {
                'Accept': '*/*',
                'Authorization': 'Bearer ' + token
            }
        })
        return response.json()
    } catch (error) {
        console.error(error)
    }
}  