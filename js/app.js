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
}, 2000);
