const av = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

// gsap.from('.ticketya', {
//     duration: 3,
//     x: 600,
//     // delay: 1,
//     ease: 'bounce.out',
// })

// let tl = gsap.timeline ({
//     repeat: 0,
// });

// tl.from('.ticketya', {
//     duration: 1.5,
//     // borderRadius: '50%',
//     x: 500,
// },
// '-=1.5')
