import getData from "../services/gets";

function menuCard() {
//Menu
    class MenuCard {
        constructor(img, alt, subtitle, descr, coins) {
            this.img = img,
            this.alt = alt,
            this.subtitle = subtitle,
            this.descr = descr,
            this.coins = coins
        }

        render() {
            const div = document.createElement('div');

            div.classList.add('menu__item');
            div.innerHTML = `
                <img src=${this.img} alt=${this.alt}>
                <h3 class="menu__item-subtitle">Меню ${this.subtitle}</h3>
                <div class="menu__item-descr">Меню ${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.coins}</span> грн/день</div>
                </div>
            `;

            document.querySelector('.menu .container').append(div);
        }
    }

    getData('db.json')
    .then(data => {
        return data.json();
    })
    .then(data => {
        data.menu.forEach(({img, alt, subtitle, descr, coins}) => {
            new MenuCard(img, alt, subtitle, descr, coins).render();
        });
    });
}

export default menuCard;