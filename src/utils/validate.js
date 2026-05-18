
export const checkValidate = (email, password, name="") => {

    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const checkPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)
    // const checkName = /^[A-Za-z\s]+$/.test(name);

    
    if (!checkPassword && !checkEmail) {
        return "Email and Password is Not Valid"
    }

    //if name is given then check name if doesn't just ignore the name
    // if (name && !checkName){
    //     return "Name is Not Valid"
    // }
    if (!checkEmail) {
        return "Email is Not Valid"
    }
    if (!checkPassword) {
        return "Password is Not Valid"
    }

    return null

}