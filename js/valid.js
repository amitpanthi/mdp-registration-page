const f_name = document.getElementById('fname')
const lname = document.getElementById("lname")
const dob = document.getElementById("dob")
const email = document.getElementById("email")
const mobile_num = document.getElementById("mobile-num")
const password = document.getElementById("pass")
const password_conf = document.getElementById("pass-confirm")

const validate = () => {
    checkRequired([f_name, lname, dob, email, mobile_num, password, password_conf]);
}

const checkRequired = (inputs) => {
    inputs.forEach(input => {
        if(input.value.trim() === ''){
            showError(input, `${input.id} is required`)
        } else {
            if(input.id == 'fname'){
                checkFirstName(input.value)
            } else if (input.id == 'lname'){
                checkLastName(input.value)
            } else if (input.id == 'email'){
                checkEmail(input.value)
            } else if (input.id == 'mobile-num'){
                checkMobile(input.value)
            } else if (input.id == 'pass'){
                checkPassword(input.value)
            } else if (input.id == 'pass-confirm'){
                checkPasswordConfirm(input.value)
            }
        }
    });
}

const showError = (input, message) => {
    const inputBox = input.parentElement
    inputBox.className = 'input-box error'
    const smallElement = inputBox.querySelector('small')
    smallElement.innerText = message
}

const checkFirstName = (f_name) => {
    name_rgx = /^([A-Z])([\w]){1}([\w])+$/
    const inputBox = fname.parentElement
    const smallElement = inputBox.querySelector('small')

    if(name_rgx.test(f_name)){
        inputBox.className = 'input-box success'
        smallElement.innerText = ''
    } else {
        inputBox.className = 'input-box error'
        smallElement.innerText = 'First Name must begin with capital letter and contain 3 characters'
    }
}

const checkLastName = (l_name) => {
    name_rgx = /^([A-Z])([\w]){1}([\w])+$/
    const inputBox = lname.parentElement
    const smallElement = inputBox.querySelector('small')

    if(name_rgx.test(l_name)){
        inputBox.className = 'input-box success'
        smallElement.innerText = ''
    } else {
        inputBox.className = 'input-box error'
        smallElement.innerText = 'Last Name must begin with capital letter and contain 3 characters'
    }
}

const checkEmail = (email_str) => {
    email_rgx = /^([a-zA-Z0-9_])+(@)(\w)+(.)([a-zA-Z]){2,3}(.)?(\w){2,3}?$/
    const inputBox = email.parentElement
    const smallElement = inputBox.querySelector('small')

    if(email_rgx.test(email_str)){
        inputBox.className = 'input-box success'
        smallElement.innerText = ''
    } else {
        inputBox.className = 'input-box error'
        smallElement.innerText = 'Please enter a valid Email ID'
    }
}

const checkMobile = (mobile) => {
    mobile_rgx = /^[\d]{2}[ ][6789][\d]{9}$/
    const inputBox = mobile_num.parentElement
    const smallElement = inputBox.querySelector('small')

    if(mobile_rgx.test(mobile)){
        inputBox.className = 'input-box success'
        smallElement.innerText = ''
    } else {
        inputBox.className = 'input-box error'
        smallElement.innerText = 'Please enter a valid mobile number, in format countrycode ten-digit-num'
    }
}

const checkPassword = (pass) => {
    password_rgx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]{1}).{8,}$/
    const inputBox = password.parentElement
    const smallElement = inputBox.querySelector('small')

    if(password_rgx.test(pass)){
        inputBox.className = 'input-box success'
        smallElement.innerText = ''
    } else {
        inputBox.className = 'input-box error'
        smallElement.innerText = 'Please enter a valid password'
    }
}

const checkPasswordConfirm = (pass) => {
    const inputBox = password_conf.parentElement
    const smallElement = inputBox.querySelector('small')

    if(pass == password.value){
        inputBox.className = 'input-box success'
        smallElement.innerText = ''
    } else {
        inputBox.className = 'input-box error'
        smallElement.innerText = 'The two given passwords do not match'
    }
}