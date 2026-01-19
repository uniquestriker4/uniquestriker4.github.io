function cgpaToPercentage() {
  const cgpa = document.getElementById("cgpa").value;
  if (!cgpa) return;
  document.getElementById("result").innerText =
    "Percentage: " + (cgpa * 9.5).toFixed(2) + "%";
}

function percentageToCgpa() {
  const perc = document.getElementById("perc").value;
  if (!perc) return;
  document.getElementById("result").innerText =
    "CGPA: " + (perc / 9.5).toFixed(2);
}

function calculateEMI() {
  const P = Number(document.getElementById("loan").value);
  const R = Number(document.getElementById("rate").value) / 12 / 100;
  const N = Number(document.getElementById("months").value);
  if (!P || !R || !N) return;

  const emi = (P * R * Math.pow(1 + R, N)) /
              (Math.pow(1 + R, N) - 1);

  document.getElementById("result").innerText =
    "Monthly EMI: ₹" + emi.toFixed(2);
}

function calculateSIP() {
  const amt = Number(document.getElementById("amount").value);
  const rate = Number(document.getElementById("rate").value) / 12 / 100;
  const years = Number(document.getElementById("years").value) * 12;
  if (!amt || !rate || !years) return;

  const fv = amt * ((Math.pow(1 + rate, years) - 1) / rate) * (1 + rate);
  document.getElementById("result").innerText =
    "Future Value: ₹" + Math.round(fv);
}

function calculateAge() {
  const dob = document.getElementById("dob").value;
  if (!dob) return;
  const diff = Date.now() - new Date(dob).getTime();
  const age = new Date(diff).getUTCFullYear() - 1970;
  document.getElementById("result").innerText =
    "Age: " + age + " years";
}

function calculateBMI() {
  const w = Number(document.getElementById("weight").value);
  const h = Number(document.getElementById("height").value) / 100;
  if (!w || !h) return;
  const bmi = w / (h * h);
  document.getElementById("result").innerText =
    "BMI: " + bmi.toFixed(2);
}

function simpleMessage(msg) {
  document.getElementById("result").innerText = msg;
}
