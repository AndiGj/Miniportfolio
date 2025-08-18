function darkMode() {
    var element = document.body;
    element.classList.toggle("darkMode");
  }

let lightMode = true;
function darkModeLink() {
    
    const links = document.querySelectorAll('.link a');
    
    
    links.forEach(link => {
      if(lightMode){
        link.style.color = 'white'; 
      } else {
        link.style.color = "black";
      }
    });
  lightMode = !lightMode;
}


const label = document.getElementById('cursorText');

let targetX = innerWidth / 2;
let targetY = innerHeight / 2;
let x = targetX, y = targetY;

function lerp(a, b, t) { return a + (b - a) * t; }

const t = 0.05; 

function onMove(clientX, clientY) {
    targetX = clientX;
    targetY = clientY;
    label.dataset.hidden = 'false';
}

window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));
window.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    if (touch) onMove(touch.clientX, touch.clientY);
}, { passive: true });

function tick() {
    x = lerp(x, targetX, t);
    y = lerp(y, targetY, t);

    label.style.left = x + 'px';
    label.style.top = y + 'px';
    requestAnimationFrame(tick);
}
tick();

window.addEventListener('mouseleave', () => { label.dataset.hidden = 'true'; });
window.addEventListener('mouseenter', () => { label.dataset.hidden = 'false'; });
