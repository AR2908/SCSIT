// Vertical ticker: Latest Updates
function startLatestTicker() {
    const list = document.getElementById("latest-ticker");
    if (!list) return;
  
    const items = list.querySelectorAll("li");
    if (items.length <= 1) return;
  
    let currentIndex = 0;
    const itemHeight = items[0].offsetHeight;
  
    setInterval(() => {
      currentIndex++;
      list.style.transition = "transform 0.5s ease-out";
      list.style.transform = `translateY(-${itemHeight * currentIndex}px)`;
  
      if (currentIndex >= items.length) {
        setTimeout(() => {
          list.style.transition = "none";
          list.style.transform = "translateY(0)";
          currentIndex = 0;
        }, 500);
      }
    }, 1500);
  }
  
  // Admit card countdown
  function startAdmitCountdown() {
    const targetDate = new Date("2025-12-12T19:00:00").getTime();
  
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
  
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
  
    function updateTimer() {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      if (distance <= 0) {
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        return;
      }
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      daysEl.textContent = String(days).padStart(2, "0");
      hoursEl.textContent = String(hours).padStart(2, "0");
      minutesEl.textContent = String(minutes).padStart(2, "0");
      secondsEl.textContent = String(seconds).padStart(2, "0");
    }
  
    updateTimer();
    setInterval(updateTimer, 1000);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    startLatestTicker();
    startAdmitCountdown();
  });
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

  

