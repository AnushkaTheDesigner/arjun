// 🌐 Cursor Movement
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// 🖱️ Cursor Grow on Hover
const hoverables = document.querySelectorAll("a, button");
hoverables.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-grow");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-grow");
  });
});

// ⏰ Live Clock (India Standard Time)
function updateClock() {
  const now = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC + 5:30
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const ist = new Date(utc + istOffset);

  const hours = ist.getHours().toString().padStart(2, '0');
  const minutes = ist.getMinutes().toString().padStart(2, '0');

  document.getElementById('clock').textContent = `India / ${hours} : ${minutes}`;
}
setInterval(updateClock, 1000);
updateClock();


setInterval(() => {
  index = (index + 1) % words.length;
  rotatingText.innerHTML = words[index];
}, 3000);
