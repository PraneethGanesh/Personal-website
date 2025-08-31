let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

document.querySelectorAll('.view-details-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const details = this.previousElementSibling;
        if (details.style.display === "none" || details.style.display === "") {
            details.style.display = "block";
            this.textContent = "Hide Details";
        } else {
            details.style.display = "none";
            this.textContent = "View Details";
        }
    });
});

const typed = new Typed('.multiple-text', {
    strings: ['DevOps Engineer ','Frontend Developer','Backend developer'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop:true,
  });

document.getElementById('readMoreBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const card = document.getElementById('aboutCard');
    card.style.display = card.style.display === 'none' ? 'block' : 'none';
});