// CGPA to Percentage
function cgpaToPercentage() {
  let cgpa = document.getElementById("cgpa").value;
  if (cgpa === "") return;
  document.getElementById("result").innerText =
    "Percentage: " + (cgpa * 9.5).toFixed(2) + "%";
}

// Percentage to CGPA
function percentageToCgpa() {
  let p = document.getElementById("perc").value;
  if (p === "") return;
  document.getElementById("res").innerText =
    "CGPA: " + (p / 9.5).toFixed(2);
}

// EMI Calculator
function calculateEMI() {
  let P = +document.getElementById("p").value;
  let R = (+document.getElementById("r").value / 12) / 100;
  let N = +document.getElementById("n").value;

  if (!P || !R || !N) return;

  let EMI = (P * R * Math.pow(1 + R, N)) /
            (Math.pow(1 + R, N) - 1);

  document.getElementById("res").innerText =
    "Monthly EMI: ₹" + EMI.toFixed(2);
}

// SIP Calculator
function calculateSIP() {
  let m = +document.getElementById("amt").value;
  let r = (+document.getElementById("rate").value / 12) / 100;
  let n = +document.getElementById("yrs").value * 12;

  if (!m || !r || !n) return;

  let fv = m * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  document.getElementById("res").innerText =
    "Future Value: ₹" + fv.toFixed(0);
}

// Age Calculator
function calculateAge() {
  let dob = new Date(document.getElementById("dob").value);
  if (!dob) return;

  let diff = Date.now() - dob.getTime();
  let ageDate = new Date(diff);
  document.getElementById("res").innerText =
    "Age: " + (ageDate.getUTCFullYear() - 1970) + " years";
}

// BMI Calculator
function calculateBMI() {
  let w = +document.getElementById("w").value;
  let h = +document.getElementById("h").value / 100;

  if (!w || !h) return;

  let bmi = w / (h * h);
  document.getElementById("res").innerText =
    "BMI: " + bmi.toFixed(2);
}

// Study Hours
function calculateStudyHours() {
  let h = document.getElementById("h").value;
  if (h === "") return;
  document.getElementById("res").innerText =
    "Total Study Time: " + h + " hours";
}
