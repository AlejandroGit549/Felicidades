$(document).ready(function (){
    setTimeout(() => {
        MostrarMensajeFelicidades()
      }, "1000");
});


function MostrarMensajeFelicidades(){
    Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
      )
}