import logowhite from '../assets/logowhite.jpg'


class Footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <footer class="footer">
            <div class="container">
                <div class="inner">
                    <div class="row flex space-between">
                        <div class="footer-left">
                            <div class="footer-logotype">
                                <a href="/">
                                    <img src=${logowhite} alt="logowhite">
                                </a>
                            </div>
                            <p class="copyright">© 2023 - 2024. Все права защищены</p>
                        </div>
                        <div class="footer-right flex space-between">
                            <div class="footer-menu">
                                <div class="label extra-bold">Полезные ссылки</div>
                                <ul class="links">
                                    <li class="menu-910 first ${this.getAttribute('main')}">
                                        <a href="/">Главная</a>
                                    </li>
                                    <li class="menu-911 ${this.getAttribute('about')}">
                                        <a href="about.html">О нас</a>
                                    </li>
                                    <li class="menu-912 ${this.getAttribute('catalog')}">
                                        <a href="catalog.html" class="open-catalog">Каталог</a>
                                    </li>
                                    <li class="menu-916 last ${this.getAttribute('contacts')}">
                                        <a href="contacts.html">Контакты</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="footer-categories">
                                <div class="label extra-bold">Каталог</div>
                                <ul class="links">
                                    <li class="menu-615 first ${this.getAttribute('vent')}">
                                        <a href="vent.html">ВЕНТИЛЯЦИЯ</a>
                                    </li>
                                    <li class="menu-616 ${this.getAttribute('conditioner')}">
                                        <a href="conditioner.html">КОНДИЦИОНЕРЫ</a>
                                    </li>
                                    <li class="menu-617 ${this.getAttribute('cond_industrial')}">
                                        <a href="cond_industrial.html">ПРОМЫШЛЕННЫЕ КОНДИЦИОНЕРЫ</a>
                                    </li>
                                    <li class="menu-618 ${this.getAttribute('radiator')}">
                                        <a href="radiator.html">ВОЗДУШНОЕ ОТОПЛЕНИЕ
                                        </a>
                                    </li>
                                    <li class="menu-619 ${this.getAttribute('thermal_pump')}">
                                        <a href="thermal_pump.html">ТЕПЛОВЫЕ НАСОСЫ</a>
                                    </li>
                                    <li class="menu-620 ${this.getAttribute('coolers')}">
                                        <a href="coolers.html">УВЛАЖНИТЕЛИ ВОЗДУХА</a>
                                    </li>
                                    <li class="menu-621 last ${this.getAttribute('cold_panels')}">
                                        <a href="cold_panels.html">ХОЛОДНЫЕ ПАНЕЛИ</a>
                                    </li>
                                    <li class="menu-621 last ${this.getAttribute('vent_units')}">
                                        <a href="vent_units.html">ПРИТОЧНО-ВЫТЯЖНЫЕ ВЕНТИЛЯЦИОННЫЕ УСТАНОВКИ</a>
                                    </li>
                                    <li class="menu-621 last ${this.getAttribute('automation')}">
                                        <a href="automation.html">АВТОМАТИЗАЦИЯ УПРАВЛЕНИЯ
                                            ИНЖЕНЕРНЫМИ
                                            СИСТЕМАМИ ПАНЕЛИ</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="footer-contacts">
                                <div class="label extra-bold">Свяжитесь с нами</div>
                                <div class="main-contacts">
                                    <div class="phone end">
                                        <a href="tel:+77007798641">+7 700 779 86 41</a>
                                    </div>
                                    <div class="mail">
                                        <a href="mailto:info@ecosystem.kz">info@ecosystem.kz</a>
                                    </div>
                                </div>
                                <!-- <div class="socials flex space-between aic">
                                    <a href="https://www.facebook.com/Mycond.Int" target="_blank" rel="nofollow"
                                        class="fb"></a>
                                    <a href="https://www.instagram.com/mycond_international/" target="_blank"
                                        rel="nofollow" class="inst"></a>
                                    <a href="https://twitter.com/Int_Mycond" target="_blank" rel="nofollow"
                                        class="tw"></a>
                                    <a href="https://www.youtube.com/channel/UChrMwUAKYxRFuWE7EF4WUzg" target="_blank"
                                        rel="nofollow" class="yt"></a>
                                    <a href="https://www.tiktok.com/@mycondukraine?_t=8eiTmmK03wk&_r=1" target="_blank"
                                        rel="nofollow" class="tiktok"></a>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="bottom-footer flex">
                        <a href="/">Политика конфиденциальности</a>
                        <a href="/">Правила использования материалов</a>
                    </div>
                </div>
            </div>
        </footer>
        `
    }
    // Element functionality written in here
}

customElements.define("my-footer", Footer);
