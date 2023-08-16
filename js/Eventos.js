$(document).ready(function (){
    setTimeout(() => {
        MostrarMensajeFelicidades()
      }, "6000");
});


function MostrarMensajeFelicidades(){
    Swal.fire({  
    title: 'Felicidades...',
    html: `Querida Yess,<br>
    Hoy, mientras el sol brilla más intensamente y el aire parece estar lleno de una energía especial, quiero tomarme un momento para celebrar el día en que llegaste a este mundo y comenzaste a iluminar nuestras vidas con tu presencia única. <br>En este día de tu cumpleaños, quiero expresar cuán significativo eres para mí y cuánto valoro la bendición de tenerte como parte de mi vida.<br>
    A lo largo de los años, hemos compartido momentos de risas, lágrimas, triunfos y desafíos. Cada uno de esos momentos ha contribuido a forjar un lazo inquebrantable entre nosotros, un lazo que atesoro con todo mi corazón. <br>Tu capacidad para iluminar cualquier habitación con tu sonrisa, para brindar consuelo con tus palabras y para compartir incondicionalmente tu amor y amistad, son cualidades que hacen de ti alguien realmente excepcional.<br>
    En este capítulo de tu vida que estamos celebrando hoy, quiero desearte un sinfín de alegrías, sueños cumplidos y emocionantes aventuras. <br>Que la vida te ofrezca oportunidades para crecer, aprender y prosperar en todas las áreas que te apasionan. <br>Que tu camino esté lleno de momentos de gratitud y satisfacción, y que encuentres felicidad en cada paso que tomes.<br>
    Espero que nunca olvides lo especial que eres y el impacto positivo que has tenido en tantas vidas, incluida la mía. <br>Tu amistad (o tu amor, si es el caso) ha sido un regalo invaluable, y cada día que compartimos se convierte en un tesoro que atesoro. <br>Siempre estoy aquí para apoyarte en cada desafío y para celebrar contigo cada logro, por pequeño o grande que sea.<br>
    En este día, celebro no solo el día de tu nacimiento, sino también la persona asombrosa en la que te has convertido. <br>Eres un recordatorio constante de la belleza y la bondad que existen en el mundo, y no puedo sentirme más agradecido/a por tenerte en mi vida.
    Feliz cumpleaños, querida Yess. Que este año sea un capítulo emocionante y lleno de bendiciones en tu historia, y que cada día esté lleno de amor, risas y maravillosas sorpresas.
    Con todo mi cariño y mejores deseos,<br>
    [ASM]`,
    footer: '<a href="https://youtu.be/dH7_By3Y2i0" target="_blank">Ver</a> <a href="listado.html" target="_blank">Leer</a>' })
}