import './assets/header'
import './assets/footer'
import './assets/sidebar'
import './assets/hamburger'
import './style.css'

import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: true,
    cssMode: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
        pauseOnMouseEnter: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

document.addEventListener('DOMContentLoaded', () => {
    const sliclSlides = document.querySelectorAll('.slick-slide');

    sliclSlides.forEach((elem) => {
        const imgUrl = elem.getAttribute('data-img');
        if (imgUrl) {
            elem.style.backgroundImage = 'url(' + imgUrl + ')';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const bgImgs = document.querySelectorAll('.bg-imgs');

    bgImgs.forEach((elem) => {
        const imgUrl = elem.getAttribute('data-img');
        if (imgUrl) {
            elem.style.backgroundImage = 'url(' + imgUrl + ')';
        }
    });
});


const emailForm = document.querySelector("#emailForm");

const title = document.querySelector("#title");
const comment = document.querySelector("#comment");

const name = document.querySelector('#edit-name')
const phone = document.querySelector('#edit-phone')
const email = document.querySelector('#edit-email')


if (emailForm) {
    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const url =
            'https://wa.me/77479903858' + '?text=' +
            'Тема:' + title.value + '%0a' +
            'Комментарий:' + comment.value + '%0a' +
            'name:' + name.value + '%0a' +
            'phone:' + phone.value + '%0a' +
            'email:' + email.value + '%0a%0a' +
            'Здраствуйте, я из сайта ecosystem.kz';

        window.open(url, '_blank').focus()

        clearFields()
    })
}


const contactForm = document.querySelector("#contactForm");


const cemail = document.querySelector('#cemail')
const cname = document.querySelector('#cname')
const ctext = document.querySelector("#ctext");


if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const url =
            'https://wa.me/77479903858' + '?text=' +
            'email:' + cemail.value + '%0a' +
            'name:' + cname.value + '%0a' +
            'Тема:' + ctext.value + '%0a%0a' +
            'Здраствуйте, я из сайта ecosystem.kz';

        window.open(url, '_blank').focus()

        clearFieldsContact()
    })
}

const clearFields = () => {
    title.value = '';
    comment.value = '';
    name.value = '';
    phone.value = '';
    email.value = '';
}

const clearFieldsContact = () => {
    cemail.value = '';
    cname.value = '';
    ctext.value = '';
}

