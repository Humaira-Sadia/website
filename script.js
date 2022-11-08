// console.log("Script Working...")

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.menu li a');
console.log(navLi);

window.addEventListener('scroll', () => {
    let curr = '';

    sections.forEach(section => {
        const sectiontop = section.offsetTop;
        console.log(scrollY);
        // console.log(section.offsetTop);
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectiontop - sectionHeight / 3)) {
            curr = section.getAttribute('id');
            // console.log(curr);
        }
    })

    navLi.forEach(li => {
        // console.log(li);
        li.classList.remove('.active');
        if (li.classList.contains(curr)) {
            li.classList.add('active');
            // console.log("hiii" + curr);
        }
    })

})

let list = document.getElementById('list');
// list.style.display = 'none';
document.querySelector('.menu-btn').addEventListener('click', () => {
    // list.style.display = 'block';
    document.querySelector('.menu-list').classList.toggle('menuGo');
})



const toggle = document.getElementById('bars');
const sidebar = document.getElementById('list');

toggle.onclick = function () {
    toggle.classList.toggle('active');
}


// Explore button working
function explore() {
    const exp = document.getElementById('explore_btn');
    window.location.href = '#about';
}

// cv button working
function cv() {
    const cv1 = document.getElementById('c_v');
    window.location.href = 'C_V.pdf';
}
// hire me button working
function hire() {
    const hire = document.getElementById('hire_me');
    window.location.href = '#contact1';
}

// Portfolio Button working...
function see_quad() {
    const btn = document.getElementById('see1');
    window.location.href = 'https://humaira-sadia.github.io/Quadratic_Equation./';
}
function see_sudoku() {
    const btn = document.getElementById('see2');
    window.location.href = 'https://humaira-sadia.github.io/Sudoku-Game./';
}
function see_math() {
    const btn = document.getElementById('see3');
    // window.location.href = 'https://humaira-sadia.github.io/Quadratic_Equation./';
}
function see_web() {
    const btn = document.getElementById('see4');
    // window.location.href = 'https://humaira-sadia.github.io/Quadratic_Equation./';
}

// typing animation script

var typed = new Typed(".typing", {
    strings: ["YouTuber", "Developer", "Designer", "Freelancer"],
    typeSpeed: 200,
    backSpeed: 100,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["YouTuber", "Web - Developer", "Designer", "Freelancer"],
    typeSpeed: 200,
    backSpeed: 100,
    loop: true
});

// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        750: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 3,
        }
    }
});


