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

export default slider;