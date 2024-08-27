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

