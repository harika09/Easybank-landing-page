/* ========== Menu Toggle ========== */
function toggleMenu(){
    const menutoggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-menu');
    menutoggle.classList.toggle('active');
    nav.classList.toggle('active');
}


/* ========== Change Color When Sticky Activate ========== */
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})
