let pre = document.querySelector(".card");

document.addEventListener("mousemove", (e) => {
  rotateElement(e, pre);
});

function rotateElement(event, elememt) {
  let x = event.clientX;
  let y = event.clientY;
  let middleX = window.innerWidth / 2;
  let middleY = window.innerHeight / 2;

  let offsetX = ((x - middleX) / middleX) * 20;
  let offsetY = ((y - middleY) / middleY) * 20;

  elememt.style.setProperty("--rotateY", offsetX + "deg");
  elememt.style.setProperty("--rotateX", -1 * offsetY + "deg");
}