/* eslint-disable no-undef */
const myScript = () =>{
    const selectElement = (element) => {
        return document.querySelector(element)
        
    }
    
    let menuToggler = selectElement(".menu-toggle")
    let body = selectElement("body")
    
    menuToggler.addEventListener("click", () => {
        body.classList.toggle("open")
    })
    
    /* eslint-disable no-undef */
// scroll review
const scrollReview = () => {
    console.log("scrolling...");
try {
    window.sr = ScrollReveal()
    
    sr.reveal(".animate-left", {
        origin: "left",
        duration: 1000,
        distance: "25rem",
        delay: 300
    })

    sr.reveal(".animate-right", {
        origin: "right",
        duration: 1000,
        distance: "25rem",
        delay: 600
    })

    sr.reveal(".animate-top", {
        origin: "top",
        duration: 1000,
        distance: "25rem",
        delay: 600
    })

    sr.reveal(".animate-bottom", {
        origin: "bottom",
        duration: 1000,
        distance: "25rem",
        delay: 600
    })
} catch (error) {
    console.log(error);
}
   
}

scrollReview();

}

export default myScript