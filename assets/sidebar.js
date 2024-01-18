
class Sidebar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="sidebar">
                <div class="menu-logotype">
                    <a href="/"></a>
                </div>
                <div class="close-filter"></div>
                <div class="sidebar-categories">
                    <div class="title">Каталог</div>
                    <ul class="categories-block">
                        <li class="main-category extra-bold">
                            <a href="vent.html" class="${this.getAttribute('vent')}">ВЕНТИЛЯЦИЯ</a>
                        </li>
                    </ul>
                    <ul class="categories-block">
                        <li class="main-category extra-bold">
                            <a href="conditioner.html" class="${this.getAttribute('conditioner')}">КОНДИЦИОНЕРЫ</a>
                        </li>
                    </ul>
                    <ul class="categories-block">
                        <li class="main-category extra-bold">
                            <a href="cond_industrial.html" class="${this.getAttribute('cond_industrial')}">ПРОМЫШЛЕННЫЕ
                                КОНДИЦИОНЕРЫ</a>
                        </li>
                    </ul>
                    <ul class="categories-block">
                        <li class="main-category extra-bold">
                            <a href="/radiator.html" class="${this.getAttribute('radiator')}">ВОЗДУШНОЕ ОТОПЛЕНИЕ</a>
                            <span class="arrow"></span>
                            <!-- — тепловые агрегаты и
                                                        тепловентиляторы -->
                        </li>
                    </ul>
                    <ul class="categories-block">
                        <li class="main-category extra-bold">
                            <a href="thermal_pump.html" class="${this.getAttribute('thermal_pump')}">ТЕПЛОВЫЕ НАСОСЫ</a>
                        </li>
                    </ul>
                    <ul class="categories-block">
                        <li class="main-category extra-bold">
                            <a href="coolers.html" class="${this.getAttribute('coolers')}">УВЛАЖНИТЕЛИ ВОЗДУХА</a>
                        </li>
                    </ul>
                    <ul class="categories-block">
                        <li class="main-category extra-bold">
                            <a href="cold_panels.html" class="${this.getAttribute('cold_panels')}">ХОЛОДНЫЕ ПАНЕЛИ СИСТЕМАМИ</a>
                        </li>
                    </ul>
                    <ul class="categories-block">
                        <li class="main-category extra-bold">
                            <a href="vent_units.html" class="${this.getAttribute('vent_units')}">ПРИТОЧНО-ВЫТЯЖНЫЕ ВЕНТИЛЯЦИОННЫЕ УСТАНОВКИ</a>
                        </li>
                    </ul>
                    <ul class="categories-block">
                        <li class="main-category extra-bold">
                            <a href="automation.html" class="${this.getAttribute('automation')}">АВТОМАТИЗАЦИЯ УПРАВЛЕНИЯ
                                ИНЖЕНЕРНЫМИ СИСТЕМАМИ</a>
                        </li>
                    </ul>
                </div>
            </div>
        `

        // this.attachShadow({ mode: 'open' });
        // this.shadowRoot.appendChild(header.content.cloneNode(true));
        // this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        // this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
    }

    // Element functionality written in here
}

customElements.define("my-sidebar", Sidebar);



