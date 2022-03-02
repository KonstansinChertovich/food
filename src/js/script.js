import tabs from './modules/tabs';
import menuCard from './modules/card';
import calc from './modules/calc';
import timer from './modules/timer';
import modal from './modules/modal';
import post from './modules/post';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {

    tabs({
        itemTabsSelector: '.tabheader__items',
        itemSelector: '.tabheader__item',
        tabContentImgSelector: '.tabcontent',
        activeClass: '.tabheader__item_active'
    });
    calc();
    menuCard();
    timer('2022-03-05');
    modal('[data-modal="consultation"]', '.modal');
    post();
    slider({
        sliderSelector: '.slider', 
        trackSelector: '.slider__track', 
        itemSelector: '.slider__item', 
        arrowNextSelector: '.offer__slider-next', 
        arrowPrevSelector: '.offer__slider-prev',
        countItem: 1,
        scrollItem: 1
    });

});