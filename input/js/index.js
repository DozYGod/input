let login = document.forms.login 
let requiredInps = document.querySelectorAll('.box-required input')
let text1 = document.querySelector('.text1')
let error = 0
let success = 0


    login.onsubmit = (event) => {
    event.preventDefault()
    let isError = false

    requiredInps.forEach((inp) => {
        let label = inp.previousElementSibling.previousElementSibling
        inp.classList.remove('error')
        inp.nextElementSibling.classList.remove('icon-error-active')
        inp.nextElementSibling.nextElementSibling.innerHTML = `need to fill`
        label.style.color = '#8D7FD9'
        inp.nextElementSibling.nextElementSibling.style.color = 'gray'

        if(inp.value.length === 0) {
            inp.classList.add('error')
            inp.nextElementSibling.classList.add('icon-error-active')
            isError = true
            inp.nextElementSibling.nextElementSibling.innerHTML = `need to fill ${label.innerHTML}!`
            label.style.color = 'red'
            console.log(label);
            inp.nextElementSibling.nextElementSibling.style.color = 'red'
            error++
            
        } 
    })
    console.log(alert(error));

    if(isError === true) {
    } else{
        sumbit()
    }

}
function sumbit() {
    let user = {}
    let fm = new FormData(login)

    fm.forEach((value, key) => {
        user[key] = value
    })

    error = 0

    console.log(user);
}
