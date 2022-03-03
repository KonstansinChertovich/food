/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
    const calculating = document.querySelector('.calculating__field');
    const genderElements = calculating.querySelectorAll('#gender .calculating__choose-item');
    const activeElements = calculating.querySelectorAll('.calculating__choose_big .calculating__choose-item');
    const input = calculating.querySelectorAll('.calculating__choose_medium input');
    const result = calculating.querySelector('.calculating__result span');

    let female = true, factorActive = 1.375, height, weight, age;


    gettingSex();
    gettingFactorActive();
    inputWatch();
    bindingLocalStorage(activeElements, 'factorActive');
    bindingLocalStorage(genderElements, 'sex');
    calc();


    function gettingSex() {
        genderElements.forEach(item => {
            item.addEventListener('click', (e) => {
                genderElements.forEach(elem => {
                    elem.classList.remove('calculating__choose-item_active');
                });
                e.target.classList.add('calculating__choose-item_active');

                if(e.target.getAttribute('id') == "female") {
                    female = true;
                } else {
                    female = false;
                }

                inputWatch();
                calc();
                getLocalStorage(genderElements, 'sex', 'calculating__choose-item_active');
            });
        });
    }
    function gettingFactorActive() {
        activeElements.forEach(item => {
            item.addEventListener('click', (e) => {
                activeElements.forEach(item => {
                    item.classList.remove('calculating__choose-item_active');
                });
                e.target.classList.add('calculating__choose-item_active');

                if(e.target.getAttribute('id') == "low") {
                    factorActive = +item.getAttribute('data-ratio');
                } else if(e.target.getAttribute('id') == "small") {
                    factorActive = +item.getAttribute('data-ratio');
                } else if(e.target.getAttribute('id') == "medium") {
                    factorActive = +item.getAttribute('data-ratio');
                } else if(e.target.getAttribute('id') == "high") {
                    factorActive = +item.getAttribute('data-ratio');
                }

                inputWatch();
                calc();
                getLocalStorage(activeElements, 'factorActive', 'calculating__choose-item_active');
            });
            
        });
    }
    function inputWatch() {
        input.forEach(item => {
            item.addEventListener('input', (e) => {
                if(item.value.match(/\D/g)) {
                    item.style.cssText = 'border: 1px solid red; color: red;';

                } else {
                    item.style.cssText = 'border: none; color: black';
                }

                if(e.target.getAttribute('id') == 'height') {
                    height = +e.target.value;
                } else if(e.target.getAttribute('id') == 'weight') {
                    weight = +e.target.value;
                } else if(e.target.getAttribute('id') == 'age') {
                    age = +e.target.value;
                }

                calc();
            });
        });
    }
    function calc() {
        if(height && weight && age) {
            if(female) {
                result.textContent = Math.round((((447.6 + 9.2 * weight) + 3.1 * height) - 4.3 * age) * factorActive);
            } else {
                result.textContent = Math.round((((88.36 + 13.4 * weight) + 4.8 * height) - 5.7 * age) * factorActive);
            }
        } else {
            result.textContent = 0;
        }
    }
    function getLocalStorage(element, key, classs) {
        element.forEach(item => {
            if(item.classList.contains(`${classs}`)) {
                localStorage.setItem(`${key}`, item.getAttribute('id'));     
            }
        });
    }
    function bindingLocalStorage(element, key) {
        if(localStorage.getItem(key)) {
            element.forEach(item => {
                item.classList.remove('calculating__choose-item_active');
        
                if(item.getAttribute('id') == localStorage.getItem(`${key}`)) {
                    item.classList.add('calculating__choose-item_active');

                    if(localStorage.getItem('sex') != 'female') {
                        female = false;
                    }

                    if(item.getAttribute('id') == localStorage.getItem('factorActive')) {
                        factorActive = +item.getAttribute('data-ratio');
                    }
                }
            });
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./src/js/modules/card.js":
/*!********************************!*\
  !*** ./src/js/modules/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_gets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/gets */ "./src/js/services/gets.js");


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

    (0,_services_gets__WEBPACK_IMPORTED_MODULE_0__["default"])('http://localhost:3000/menu')
    .then(data => {
        return data.json();
    })
    .then(data => {
        data.forEach(({img, alt, subtitle, descr, coins}) => {
            new MenuCard(img, alt, subtitle, descr, coins).render();
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuCard);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "showModla": () => (/* binding */ showModla),
/* harmony export */   "hideModal": () => (/* binding */ hideModal)
/* harmony export */ });

function showModla(selector) {
    const modal = document.querySelector(selector);
    modal.classList.add('active');
}
function hideModal(selector) {
    const modal = document.querySelector(selector);
    modal.classList.remove('active');
}

function modal(trigerSelector, modalSelector) {
    const btns = document.querySelectorAll(trigerSelector),
          modal = document.querySelector(modalSelector);

    const timeOpenModal = setTimeout(() => {
        showModla(modalSelector);
    }, 15000);

    btns.forEach(item => {
        item.addEventListener('click', () => {
            showModla(modalSelector);
            clearTimeout(timeOpenModal);
        });
    });

    modal.addEventListener('click', (e) => {
        if(e.target && e.target.classList.contains(modalSelector.slice(1)) || e.target.classList.contains('modal__close')) {
            hideModal(modalSelector);
        }
    });


    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./src/js/modules/post.js":
/*!********************************!*\
  !*** ./src/js/modules/post.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/posts */ "./src/js/services/posts.js");


function post() {
    const forms = document.querySelectorAll('form');

    forms.forEach(item => {
        bindDataForm(item);
    });

    function bindDataForm(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formDat = new FormData(form);
            const json = {};
            
            formDat.forEach((val, key) => {
                json[key] = val;
            });

            (0,_services_posts__WEBPACK_IMPORTED_MODULE_0__["default"])('http://localhost:3000/requests', JSON.stringify(json))
            .then(data => {
                console.log(data);
            })
            .catch(() => {
                console.log('Ошибка');
            })
            .finally(() => {
                form.reset();
            });
        });
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (post);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({sliderSelector, trackSelector, itemSelector, arrowNextSelector, arrowPrevSelector, countItem, scrollItem}) {
    const slider = document.querySelector(sliderSelector),
        slidTrack =document.querySelector(trackSelector),
        item = document.querySelectorAll(itemSelector),
        arrowNext = document.querySelector(arrowNextSelector),
        arrowPrev  = document.querySelector(arrowPrevSelector);

    
    let count = 1; //счетчик слайдов 
    let positionTrack = 0;   
    const countItems = countItem; //сколько показывать слайдов в окне
    const scrollItems = scrollItem;//сколько прокручивать за раз
    const slidWidth = slider.clientWidth;
    const colItem = item.length;
    const widthItme = Math.floor(slidWidth / countItems);
    const generalWidthItem = widthItme * colItem;
    


    item.forEach(item => {
        item.style.width = `${widthItme}px`;
        item.style.height = `${slider.clientHeight}px`;
    });
    arrowNext.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        workNext();
    });
    arrowPrev.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        workPrev();
    });

    checkArrowPrev();
    changeContent('#current', count);
    changeContent('#total', colItem);

    function workPrev() {
        if(Math.abs(positionTrack) / widthItme == 1) {
            slidTrack.style.left = `${positionTrack += widthItme}px`;
            checkArrowPrev();
            checkArrowNext();
            changeContent('#current', --count);
        }else {
            slidTrack.style.left = `${positionTrack += scrollItems * widthItme}px`;
            checkArrowPrev();
            checkArrowNext();
            changeContent('#current', --count);
        }
    }
    function workNext() {
        if(((generalWidthItem - (widthItme * countItems)) - Math.abs(positionTrack)) / widthItme == 1) {
            slidTrack.style.left = `${positionTrack -= widthItme}px`;
            checkArrowPrev();
            checkArrowNext();
            changeContent('#current', ++count);
        }else {
            slidTrack.style.left = `${positionTrack -= widthItme * scrollItems}px`;
            checkArrowPrev();
            checkArrowNext();
            changeContent('#current', ++count);
        }
    }
    function checkArrowNext() {
        if(Math.abs(positionTrack) + widthItme * countItems == generalWidthItem) {
            arrowNext.disabled = true;
        }else {
            arrowNext.disabled = false;
        }
    }
    function checkArrowPrev() { 
        if(positionTrack == 0) {
            arrowPrev.disabled = true;
        }else {
            arrowPrev.disabled = false;
        }
    }
    function assayNumber(num) {
        if(num < 10) return '0' + num;
        else return num;
    }
    function changeContent(selector, content) {
        document.querySelector(selector).textContent = `${assayNumber(content)}`;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs({itemTabsSelector, itemSelector, tabContentImgSelector, activeClass}) {

    const itemTabs = document.querySelector(itemTabsSelector),
          item = itemTabs.querySelectorAll(itemSelector),
          tabContent = document.querySelectorAll(tabContentImgSelector);

    itemTabs.addEventListener('click', (e) => {
        item.forEach((item, i) => {
            if(e.target == item) {
                hideItemActive();
                e.target.classList.add(activeClass.slice(1));
                showContent(i);
            }
        });
    });

    showContent();

    function hideItemActive() {
        item.forEach(item => item.classList.remove(activeClass.slice(1)));
    }
    function showContent(i = 0) {
        tabContent.forEach(item => item.style.display = 'none');
        tabContent[i].style.display = 'block';
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);


/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(deadline) {

    setClock();

    function calcDate(data) {
        const t = Date.parse(data) - Date.parse(new Date),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minytes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

            return {
                'total': t,
                'hours': hours,
                'days': days,
                'min': minytes,
                'sec': seconds
            };
    }
    function setClock() {
        const t = calcDate(deadline).total;
        const timer = setTimeout(() => {
            setClock();
        }, 1000);

        if(t > 0) {

            const days = document.querySelector('.timer__block #days'),
                hours = document.querySelector('.timer__block #hours'),
                minutes = document.querySelector('.timer__block #minutes'),
                seconds = document.querySelector('.timer__block #seconds');

    
            days.textContent = checkNumbers(calcDate(deadline).days);
            hours.textContent = checkNumbers(calcDate(deadline).hours);
            minutes.textContent = checkNumbers(calcDate(deadline).min);
            seconds.textContent = checkNumbers(calcDate(deadline).sec);

        } else {
            clearTimeout(timer);
            document.querySelectorAll('.timer__block span').forEach(item => item.textContent = '00');
        }
    }
    function checkNumbers(num) {
        if(num < 10 || num == 0) {
            return '0' + num;
        } else {
            return num;
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./src/js/services/gets.js":
/*!*********************************!*\
  !*** ./src/js/services/gets.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getData = async url => {
    const requests = await fetch(url);

    return await requests;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

/***/ }),

/***/ "./src/js/services/posts.js":
/*!**********************************!*\
  !*** ./src/js/services/posts.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const postData = async (url, data) => {
    const require = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await require.json();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/card */ "./src/js/modules/card.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/post */ "./src/js/modules/post.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");








window.addEventListener('DOMContentLoaded', () => {

    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])({
        itemTabsSelector: '.tabheader__items',
        itemSelector: '.tabheader__item',
        tabContentImgSelector: '.tabcontent',
        activeClass: '.tabheader__item_active'
    });
    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_card__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_3__["default"])('2022-03-05');
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_4__["default"])('[data-modal="consultation"]', '.modal');
    (0,_modules_post__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__["default"])({
        sliderSelector: '.slider', 
        trackSelector: '.slider__track', 
        itemSelector: '.slider__item', 
        arrowNextSelector: '.offer__slider-next', 
        arrowPrevSelector: '.offer__slider-prev',
        countItem: 1,
        scrollItem: 1
    });

});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map