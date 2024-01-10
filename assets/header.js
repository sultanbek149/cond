class Header extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <header class="header">
                <div class="container">
                    <div class="inner flex justify-between">
                        <a href="/" class="logo">
                            <img src="assets/logo.png" alt="logotype">
                        </a>

                        <nav class="nav-desktop hidden items-center">
                            <div class="relative">
                                <a href="/" class="mx-4 ${this.getAttribute('main')}">Главная</a>
                            </div>

                            <div class="relative">
                                <a href="about.html" class="mx-4 ${this.getAttribute('about')}">О нас</a>
                            </div>

                            <div class="relative">
                                <a href="catalog.html" class="mx-4 ${this.getAttribute('catalog')}">Каталог</a>
                            </div>

                            <div class="relative">
                                <a href="contacts.html" class="mx-4 ${this.getAttribute('contacts')}">Контакты</a>
                            </div>
                        </nav>

                        <div class="hidden contacts items-center">
                            <a href="tel:+77007798641" class="phone">
                                +7 (700) 779-86-41
                            </a>

                            <a class="btn btn-pulse" href="#form">
                                ОТПРАВИТЬ ЗАПРОС
                            </a>
                        </div>

                        <div class="flex hamburger-icon">
                            <button class="items-center">
                                <div data-hamburger class="hamburger">
                                    <div class="line line-1"></div>
                                    <div class="line line-2"></div>
                                    <div class="line line-3"></div>
                                </div>
                            </button>
                        </div>


                        <nav data-navmobile class="nav-mobile">
                            <div class="relative mt-2">
                                <a data-subcollapse href="/" class="mx-4 ${this.getAttribute('main')}">Главная</a>
                            </div>

                            <div class="relative">
                                <a data-subcollapse href="about.html" class="mx-4 ${this.getAttribute('about')}">О нас</a>
                            </div>

                            <div class="relative">
                                <div data-subcollapse class="mx-4 ${this.getAttribute('catalog')}">Каталог
                                    <i class="fa-sharp fa-solid fa-caret-down ms-1"></i>
                                </div>
                                <div data-subcontent class="modal modal-1 flex flex-col text-[15px]">
                                    <a class="${this.getAttribute('vent')}" href="/vent.html">ВЕНТИЛЯЦИЯ</a>
                                    <a class="${this.getAttribute('conditioner')}" href="/conditioner.html">КОНДИЦИОНЕРЫ</a>
                                    <a class="${this.getAttribute('industrial_vent')}" href="/industrial_vent.html">ПРОМЫШЛЕННЫЕ КОНДИЦИОНЕРЫ</a>
                                    <a class="${this.getAttribute('radiator')} href="/radiator.html">ВОЗДУШНОЕ ОТОПЛЕНИЕ</a>
                                    <a class="${this.getAttribute('thermal_pump')} href="/thermal_pump.html">ТЕПЛОВЫЕ НАСОСЫ</a>
                                    <a class="${this.getAttribute('coolers')} href="/coolers.html">УВЛАЖНИТЕЛИ ВОЗДУХА</a>
                                    <a class="${this.getAttribute('cold_panels')} href="/cold_panels.html">ХОЛОДНЫЕ ПАНЕЛИ И АВТОМАТИЗАЦИЯ УПРАВЛЕНИЯ ИНЖЕНЕРНЫМИ СИСТЕМАМИ</a>
                                </div>
                            </div>
                            <div class="relative mb-3">
                                <a href="contact.html" class="mx-4 ${this.getAttribute('contacts')}">Контакты</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        `

        // this.attachShadow({ mode: 'open' });
        // this.shadowRoot.appendChild(header.content.cloneNode(true));
        // this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        // this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
    }

    // Element functionality written in here
}

customElements.define("my-header", Header);

