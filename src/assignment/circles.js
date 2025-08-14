console.log("connected");


// create circles,

function createCircles(count) {
  const elements = new Array(count).fill(null).map((ele, index) => {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.id = index;
    return circle;
  });
  return elements;
}

function main() {
const container = document.getElementById("container");
const totalCircles = 9
  const circles = createCircles(totalCircles);
  const convertedCircles = [];
  const mainDiv = document.getElementById("main");
  const resetButton = document.createElement("button");
  resetButton.textContent = "Reset"
//   resetButton.disabled = convertedCircles.length === 0;
  resetButton.addEventListener("click", () => {
    // const containerCircles = container.childNodes;

    // convertedCircles.forEach((circleId, index) => {.  
    // const indexRequired = totalCircles - parseInt(circleId);
    // console.log(indexRequired)
    //  const element = document.getElementById(indexRequired.toString());
    //  element.style.backgroundColor = "red"
    // })
    const intervalId = setInterval(function(){
      for(let i )
    }, 1000)
  })



  // add event lit // will change the color as well as enter it in the array by index on id;

  circles.forEach((circle) => {
    circle.addEventListener("click", () => {
      const id = circle.id;
      if (convertedCircles.includes(id)) {
        return;
      } else {
        convertedCircles.push(id);
        circle.style.backgroundColor = "green";
        console.log(convertedCircles);
      }
    });
  });
  console.log(circles);
  container.append(...circles);
  mainDiv.append(resetButton)
}

main();
