$(document).ready(function () {
    $("#btnEjecutar").click(function () {
        let mensajes = `1.- Flores<br> 
        2.- Generar pagina Web <br> 
        3.- Escribir algunos poemas para ella<br> 
        Posibles Ideas:
        1.- Mandarle mensaje(descartado)
        2.- Llamarle(Descartado)
        3.- Ir a verla(descartado - Agenda llena hasta Finales de Sep)
        4.- Simplemente no molestarla - Posible 
        -------------------Tiempo Asignado para este plan() (de 04:00 am a 05:00 am)----------------------
        Nota: Esperar que todo salga bien, 
        no molestarla al parece ella ya esta bien, 
        entonces eso me da alegria, evita hablarle, 
        sino ella no lo hace es porque todo esta bien. Tomalo como despedida. 
        *** Si te escribe, agradecer por la persona que me he convertido, 
        los momentos hermosos que pasamos y me hizo inmensanmente feliz, por ella dimos todo. :D*** `
        MostrarMensajeFelicidades(mensajes)
    })

})

function MostrarMensajeFelicidades(mensaje) {
    Swal.fire({
        title: 'Plan - Cumpleaños.!',
        html: mensaje
    })
}