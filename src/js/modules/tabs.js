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

export default tabs;
