document.getElementById("ppfForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  //   calculate();
});

function calculate() {
  let yearlyInvestment = Number(document.getElementById("yearInvest").value);
  let timePeriod = Number(document.getElementById("timePeriod").value);
  let investAmountElement = document.getElementById("investAmount");
  let totalInterestElement = document.getElementById("totalInterest");
  let maturityAmountElement = document.getElementById("maturityAmount");

  let invalid1 = document.getElementById("invalid1");
  let invalid2 = document.getElementById("invalid2");

  let roi = 7.1 / 100;
  let openBal = 0;
  let interest = 0;
  let closeBal = 0;
  let totalInterest = 0;

  if (yearlyInvestment >= 500 && timePeriod >= 15) {
    for (let year = 1; year <= timePeriod; year++) {
      openBal = openBal + yearlyInvestment;
      interest = openBal * roi;
      totalInterest += interest;
      closeBal = openBal + interest;
      openBal = closeBal;
    }
    invalid1.style.display = "none";
    invalid2.style.display = "none";
  } else if (yearlyInvestment < 500 && timePeriod < 15) {
    invalid1.style.display = "block";
    invalid2.style.display = "block";
  } else if (yearlyInvestment < 500) {
    invalid1.style.display = "block";
    invalid2.style.display = "none";
  } else if (timePeriod < 15) {
    invalid2.style.display = "block";
    invalid1.style.display = "none";
  }

  investAmountElement.innerHTML = (
    yearlyInvestment * timePeriod
  ).toLocaleString("en-IN");
  totalInterestElement.innerHTML = totalInterest.toLocaleString("en-IN", {
    maximumFractionDigits: 0,
  });
  maturityAmountElement.innerHTML = closeBal.toLocaleString("en-IN", {
    maximumFractionDigits: 0,
  });

  investAmountElement.style.fontWeight = "bolder";
  totalInterestElement.style.fontWeight = "bolder";
  maturityAmountElement.style.fontWeight = "bolder";
}

function clearValues() {
  document.getElementById("yearInvest").value = "";
  document.getElementById("timePeriod").value = "";
  document.getElementById("investAmount").innerHTML = "";
  document.getElementById("totalInterest").innerHTML = "";
  document.getElementById("maturityAmount").innerHTML = "";
  document.getElementById("invalid1").style.display = "none";
  document.getElementById("invalid2").style.display = "none";
}
