window.handlerVotar = function () {
    let name = document.getElementById("nombre")
    let email = document.getElementById("email")
    let btn = document.getElementById("btnenviar")

    if ( localStorage.getItem('votos') ) {
        let existe = `${localStorage.getItem('votos')}`.includes(email.value.toString())
        if (existe) {
            alert('usted ya voto, no moleste señor')
            btn.classList.add('hide')
            return
        }else {
            localStorage.setItem('votos', email.getAttribute('value') + '|' + email.value.toString())
        }
    } else {
        // nuevo
        localStorage.setItem('votos', email.value.toString())
    }

    btn.classList.add('hide')
    alert('Gracias por votar')
}