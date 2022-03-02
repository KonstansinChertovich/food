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

export default timer;