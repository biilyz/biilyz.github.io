// Cài đặt thời gian đếm ngược (YYYY, MM (0-11), DD, HH, MM, SS)
const targetDate = new Date(2025, 2, 9, 0, 0, 0).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerText = "Đã đến lúc!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText = 
        `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;

    setTimeout(updateCountdown, 1000);
}

updateCountdown();
