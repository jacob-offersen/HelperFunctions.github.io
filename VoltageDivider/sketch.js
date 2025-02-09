let vinInput, r1Input, r2Input, r1TolInput, r2TolInput;
let vout = 0;

const diagramX = 350;
const diagramY = 40;
const firstRowX = 50;
const secondRowX = firstRowX+150;
const textBoxWidth = 100;
const firstRowY = 125;
const secondRowY = firstRowY + 40;
const thirdRowY = secondRowY + 40;

function setup() {
  createCanvas(450, 250);
  textSize(16);
  
  // Create input fields
  vinInput = createInput("");
  vinInput.position(firstRowX, firstRowY);
  vinInput.size(textBoxWidth);
  vinInput.elt.type = "number"; // Set input type to 'number' for mobile numpad

  r1Input = createInput("");
  r1Input.position(firstRowX, secondRowY);
  r1Input.size(textBoxWidth);
  r1Input.elt.type = "number"; // Set input type to 'number' for mobile numpad
  
  r1TolInput = createInput("0");
  r1TolInput.position(secondRowX, secondRowY);
  r1TolInput.size(textBoxWidth);
  r1TolInput.elt.type = "number"; // Set input type to 'number' for mobile numpad
  
  r2Input = createInput("");
  r2Input.position(firstRowX, thirdRowY);
  r2Input.size(textBoxWidth);
  r2Input.elt.type = "number"; // Set input type to 'number' for mobile numpad
  
  r2TolInput = createInput("0");
  r2TolInput.position(secondRowX, thirdRowY);
  r2TolInput.size(textBoxWidth);
  r2TolInput.elt.type = "number"; // Set input type to 'number' for mobile numpad
}

function draw() {
  background(244);

  let vin = float(vinInput.value());
  let r1 = float(r1Input.value());
  let r2 = float(r2Input.value());
  let r1Tol = float(r1TolInput.value()) / 100;
  let r2Tol = float(r2TolInput.value()) / 100;

  let r1Min = r1 * (1 - r1Tol);
  let r1Max = r1 * (1 + r1Tol);
  let r2Min = r2 * (1 - r2Tol);
  let r2Max = r2 * (1 + r2Tol);

  let voutMin = vin * (r2Min / (r1Max + r2Min));
  let voutAvg = vin * (r2 / (r1 + r2));
  let voutMax = vin * (r2Max / (r1Min + r2Max));

  // Draw circuit representation
  fill(0);
  noStroke();
  const textDistToBox = 35;
  text("Vin:", firstRowX-textDistToBox, 55);
  text("R1:", firstRowX-textDistToBox, 95);
  text("Tol:", secondRowX-textDistToBox, 95);
  text("R2:", firstRowX-textDistToBox, 135);
  text("Tol:", secondRowX-textDistToBox, 135);

  text(`Vout Min: ${voutMin.toFixed(2)} V`, 20, 170);
  text(`Vout Avg: ${voutAvg.toFixed(2)} V`, 20, 190);
  text(`Vout Max: ${voutMax.toFixed(2)} V`, 20, 210);
  
  // Circuit diagram positioned with x and y constants
  stroke(0);
  line(diagramX, diagramY, diagramX, diagramY + 30); // Vin to R1
  rect(diagramX - 10, diagramY + 30, 20, 40); // R1 (tall, moved up)
  line(diagramX, diagramY + 70, diagramX, diagramY + 100); // R1 to R2
  rect(diagramX - 10, diagramY + 100, 20, 40); // R2 (tall)
  line(diagramX, diagramY + 140, diagramX, diagramY + 160); // R2 to ground
  line(diagramX - 10, diagramY + 160, diagramX + 10, diagramY + 160); // Ground
  line(diagramX - 20, diagramY + 160, diagramX + 20, diagramY + 160); // Ground symbol
  line(diagramX, diagramY + 80, diagramX + 40, diagramY + 80); // Output voltage
  
  // Labels for components
  noStroke();
  text("Vout", diagramX + 50, diagramY + 85);
  text("Vin", diagramX + 10, diagramY + 10);
  text("R1", diagramX + 20, diagramY + 50);
  text("R2", diagramX + 20, diagramY + 125);

}
