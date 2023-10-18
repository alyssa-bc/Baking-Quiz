//Baking Quiz

//Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  console.log("hi");
  let ques1 = document.getElementById("ques1").value.toLowerCase();
  let ques2 = document.getElementById("ques2").value.toLowerCase();
  let ques3 = document.getElementById("ques3").value.toLowerCase();
  let ques4 = document.getElementById("ques4").value.toLowerCase();
  let ques5 = document.getElementById("ques5").value.toLowerCase();

  let numCorrect = 0;
  // let numCorrectSpan = document.getElementById("score-out");

  if (ques1 === "baking soda") {
    document.getElementById("ques1-out").innerHTML = `Correct`;
    numCorrect++;
  } else {
    document.getElementById("ques1-out").innerHTML = `Incorrect`;
  }

  if (ques2 === "baking powder") {
    document.getElementById("ques2-out").innerHTML = `Correct`;
    numCorrect++;
  } else {
    document.getElementById("ques2-out").innerHTML = `Incorrect`;
  }

  if (ques3 === "3") {
    document.getElementById("ques3-out").innerHTML = `Correct`;
    numCorrect++;
  } else {
    document.getElementById("ques3-out").innerHTML = `Incorrect`;
  }

  if (ques4 === "flour") {
    document.getElementById("ques4-out").innerHTML = `Correct`;
    numCorrect++;
  } else {
    document.getElementById("ques4-out").innerHTML = `Incorrect`;
  }

  if (ques5 === "temperature" || ques5 === "time") {
    document.getElementById("ques5-out").innerHTML = `Correct`;
    numCorrect++;
  } else {
    document.getElementById("ques5-out").innerHTML = `Incorrect`;
  }

  if (numCorrect < 3 && numCorrect >= 0) {
    document.getElementById("response-out").innerHTML = `Try Again`;
  } else if (numCorrect === 3) {
    document.getElementById("response-out").innerHTML = `Nice Try!`;
  } else if (numCorrect > 3) {
    document.getElementById("response-out").innerHTML = `Good Job!`;
  } else {
    document.getElementById(
      "response-out"
    ).innerHTML = `Please answer all the questions`;
  }

  if (numCorrect === 0) {
    document.getElementById("score-out").innerHTML = `0/5 (00.0 %)`;
  } else if (numCorrect === 1) {
    document.getElementById("score-out").innerHTML = `1/5 (20.0 %)`;
  } else if (numCorrect === 2) {
    document.getElementById("score-out").innerHTML = `2/5 (40.0 %)`;
  } else if (numCorrect === 3) {
    document.getElementById("score-out").innerHTML = `3/5 (60.0 %)`;
  } else if (numCorrect === 4) {
    document.getElementById("score-out").innerHTML = `4/5 (80.0 %)`;
  } else if (numCorrect === 5) {
    document.getElementById("score-out").innerHTML = `5/5 (100.0 %)`;
  } else {
    document.getElementById("score-out").innerHTML = `Answer the questions`;
  }

  console.log("hey");
}
