export const emailIsValid = (email) => {
    return !String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export const isEmpty = (value) => {
    if(value !== null && value !== '') {
        return false;
    } 
    return true;
}

export const passwordIsValid = (password) => {
    return String(password).length < 6;
}