// Your code here
let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left < 575) {
        dodger.style.left = `${left + 1}px`;
    }
}

// first parameter is an event, and then the second parameter is the function
document.addEventListener("keydown", function(e) {
    console.log(e)
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });

//   document.addEventListener("click", function(e) {
//       console.log(e)
//   })