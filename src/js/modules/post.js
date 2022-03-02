import postData from "../services/posts";

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

            postData('http://localhost:3000/requests', JSON.stringify(json))
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

export default post;