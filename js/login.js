
if (localStorage.getItem('usuario') !== '') {
    document.getElementById('usuario_sesion').innerText = localStorage.getItem('usuario');
    document.getElementById('vista_login').innerHTML = '';
    document.getElementById('vista_login').style.display = 'none'
} else {
    document.getElementById('vista_cerrarsesion').innerHTML = '';
    document.getElementById('vista_cerrarsesion').style.display = 'none'
}


const iniciarLogin= () => {
    let socio = document.getElementById('txtSocio').value;
    let passsword = document.getElementById('txtPassword').value;

    if (socio === '') {
        alert('Complete el campo socio');
        return;
    }

    if (passsword === '') {
        alert('Complete el campo contraseña');
        return;
    }


    alert('Bienvenido a BreakingMovie');
    localStorage.setItem("usuario", socio);
    document.getElementById('usuario_sesion').innerText = localStorage.getItem('usuario');
    window.location.href = './../index.html'
}

const cerrarSesion = () => {
    localStorage.removeItem('usuario');
    document.getElementById('usuario_sesion').innerText = '';
    document.getElementById('vista_login').innerHTML = '<a href="./login.html">LOGIN</a>';
    document.getElementById('vista_login').style.display = ''
    document.getElementById('vista_cerrarsesion').innerHTML = '';
    document.getElementById('vista_cerrarsesion').style.display = 'none'
}