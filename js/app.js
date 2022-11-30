let slide = document.querySelector(".offbulb");

setInterval(() => {
  let src = slide.getAttribute("src");
  if (src === "images/OFFbulb.jpg") {
    slide.setAttribute("src", "images/ONbulb.jpg");
  } else if (src === "images/ONbulb.jpg") {
    slide.setAttribute("src", "images/OFFbulb.jpg");
  } else {
    slide.setAttribute("src", "images/OFFbulb.jpg");
  }
}, 1000);

let background = document.querySelector("body");

setInterval(() => {
  let red = Math.floor(Math.random() * 255) + 1;
  let green = Math.floor(Math.random() * 255) + 1;
  let blue = Math.floor(Math.random() * 255) + 1;

  background.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}, 200);
