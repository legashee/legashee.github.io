// Установите дату окончания отсчета
const countDownDate = new Date("2025-08-07T23:59:59").getTime();

// Обновляем отсчет каждую секунду
const x = setInterval(function() {
    // Текущая дата и время
    const now = new Date().getTime();

    // Разница между текущим временем и датой окончания
    const distance = countDownDate - now;

    // Расчет дней, часов, минут и секунд
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Вывод результата в элементы с id="days", "hours", "minutes", "seconds"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Если отсчет завершен, выводим сообщение
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Время истекло!";
    }
}, 1000);