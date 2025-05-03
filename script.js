document.querySelectorAll('a[href^="#"').forEach(anchor => {
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
document.getElementById('contactForm').addEventListener('submit',function(e){
    e.preventDefault();
    alert("your message has been sent succesfully!");
    this.requestFullscreen();
});