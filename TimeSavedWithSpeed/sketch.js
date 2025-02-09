// Set the x-position for all input boxes as a constant
const inputX = 30;
const offsetY = 85;

let distanceInput, speedInput1, speedInput2;
let distance = 0;
let speed1 = 0;
let speed2 = 0;
let time1 = 0;
let time2 = 0;
let timeDiffHours = 0;
let timeDiffMinutes = 0;
let timeDiffSeconds = 0;

function setup() {
  createCanvas(400, 350);
  
  // Create input elements for distance and speeds with x-position as a constant
  distanceInput = createInput('');
  distanceInput.position(inputX, offsetY+20);
  distanceInput.size(100);
  distanceInput.input(updateDistance);  // Call when user changes the input

  speedInput1 = createInput('');
  speedInput1.position(inputX, offsetY+60);
  speedInput1.size(100);
  speedInput1.input(updateSpeeds);  // Call when user changes the input

  speedInput2 = createInput('');
  speedInput2.position(inputX, offsetY+100);
  speedInput2.size(100);
  speedInput2.input(updateSpeeds);  // Call when user changes the input
}

function draw() {
  background(244);
  
  // Draw text showing the calculated times for both speeds
  textSize(18);
  fill(0);
  text("Time for Speed 1 (" + speed1 + " km/h): " + nf(time1, 1, 2) + " hours", 20, 160);
  text("Time for Speed 2 (" + speed2 + " km/h): " + nf(time2, 1, 2) + " hours", 20, 200);
  
  // Display the difference in time in hours, minutes, and seconds
  textSize(18);
  text("Difference in Time (hours): " + nf(timeDiffHours, 1, 2), 20, 240);
  text("Difference in Time (minutes): " + nf(timeDiffMinutes, 1, 2), 20, 280);
  text("Difference in Time (seconds): " + nf(timeDiffSeconds, 1, 2), 20, 320);
  
  // Draw the labels for the inputs
  textSize(16);
  fill(0);
  text("Distance (km):", 140, 40);
  text("Speed 1 (km/h):", 140, 80);
  text("Speed 2 (km/h):", 140, 120);
}

function updateDistance() {
  distance = float(distanceInput.value());
  calculateTimes();
}

function updateSpeeds() {
  speed1 = float(speedInput1.value());
  speed2 = float(speedInput2.value());
  calculateTimes();
}

function calculateTimes() {
  // Calculate time for both speeds
  if (distance > 0 && speed1 > 0) {
    time1 = distance / speed1;
  }
  if (distance > 0 && speed2 > 0) {
    time2 = distance / speed2;
  }

  // Calculate the difference in time
  timeDiffHours = abs(time1 - time2);
  timeDiffMinutes = abs(timeDiffHours * 60);  // Convert the difference from hours to minutes
  timeDiffSeconds = abs(timeDiffHours * 3600);  // Convert the difference from hours to seconds
}
