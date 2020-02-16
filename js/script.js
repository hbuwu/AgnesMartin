let element = document.querySelectorAll("#box");
let elementHeight = element.clientHeight;

document.addEventListener("scroll", animate);

function inView() {
  let windowHeight = window.innerHeight;
  let scrollVertical = window.scrollY;
  
  let scrollPosition = scrollVertical + windowHeight;

  let elementPosition = element.getBoundingClientRect().top + scrollVertical + elementHeight;
  
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}

function animate() {
  if (inView()) {
      element.classList.add("animate");
  }
}