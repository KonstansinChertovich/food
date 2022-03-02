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

export default calc;