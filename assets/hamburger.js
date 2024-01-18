const hamburger = document.querySelector('[data-hamburger]');
let content = document.querySelector('[data-navmobile]')
const header = document.querySelector('header')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('clicked');

    if (hamburger.classList.contains('clicked')) {
        content.style.maxHeight = content.scrollHeight + "px";
        // header.classList.add('bg-black')
    } else {
        content.style.maxHeight = null;
        // if (window.scrollY < 50) {
        // header.classList.remove('bg-black')
        // }
    }
});

const handleMediaChange = () => {
    if (screen.width <= 1024) {
        hamburger.classList.remove('clicked');
        content.style.maxHeight = null;
    }
}

window.addEventListener('resize', handleMediaChange);


const subcollapseAll = document.querySelectorAll('[data-subcollapse]');

for (let i = 0; i < subcollapseAll.length; i++) {
    subcollapseAll[i].addEventListener("click", function () {
        content.style.maxHeight = 'fit-content';

        this.classList.toggle("clicked");
        let subcontent = this.nextElementSibling;

        if (subcontent.style.maxHeight) {
            subcontent.style.maxHeight = null;
        } else {
            subcontent.style.maxHeight = subcontent.scrollHeight + "px";
        }
    });
}


const subs = document.querySelectorAll('[data-subans]');

for (let i = 0; i < subs.length; i++) {
    subs[i].addEventListener("click", function () {
        content.style.maxHeight = 'fit-content';

        this.classList.toggle("clicked");
        let subcontent = this.querySelector('.subanswer')
        // let subcontent = this.nextElementSibling;

        if (subcontent.style.maxHeight) {
            subcontent.style.maxHeight = null;
        } else {
            subcontent.style.maxHeight = subcontent.scrollHeight + "px";
        } 
    });
}


const categories = document.querySelectorAll('.main-category');

for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener("click", function () {

        this.classList.toggle("clicked");
        
        let subcontent = this.querySelector('.modal-cat')
        // let subcontent = this.nextElementSibling;

        if (subcontent.style.maxHeight) {
            subcontent.style.maxHeight = null;
            subcontent.closest('.categories-block').style.marginBottom = '20px'
        } else {
            setTimeout(() => {
                subcontent.closest('.categories-block').style.marginBottom = '8px'

                subcontent.style.maxHeight = subcontent.scrollHeight + "px";
            }, 50)
        }
    });
}



