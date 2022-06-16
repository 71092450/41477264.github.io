
if (localStorage.getItem('usuario') !== '') {
    document.getElementById('usuario_sesion').innerText = localStorage.getItem('usuario');
    document.getElementById('vista_login').innerHTML = '';
    document.getElementById('vista_login').style.display = 'none'
} else {
    document.getElementById('vista_cerrarsesion').innerHTML = '';
    document.getElementById('vista_cerrarsesion').style.display = 'none'
}

$(document).ready(function(){
    $('ul.menu-inicio-pestania li a:first').addClass('active');
    $('.grid-contenedor').hide();
    $('.grid-contenedor:first').show();

    $('ul.menu-inicio-pestania li a').click(function(){
        $('ul.menu-inicio-pestania li a').removeClass('active');
        $(this).addClass('active');
        $('.grid-contenedor').hide();

        var activePestania = $(this).attr('href');
        $(activePestania).show();
        return false
    })
})

const cerrarSesion = () => {
    localStorage.removeItem('usuario');
    document.getElementById('usuario_sesion').innerText = '';
    document.getElementById('vista_login').innerHTML = '<a href="./vistas/login.html">LOGIN</a>';
    document.getElementById('vista_login').style.display = ''
    document.getElementById('vista_cerrarsesion').innerHTML = '';
    document.getElementById('vista_cerrarsesion').style.display = 'none'
}