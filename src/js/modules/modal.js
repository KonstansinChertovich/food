
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

export default modal;
export {showModla, hideModal};