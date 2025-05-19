const rates = {
    USD: { INR: 83.2, EUR: 0.92 },
    INR: { USD: 0.012, EUR: 0.011 },
    EUR: { USD: 1.08, INR: 89.5 }
  };
  
  function showConverter() {
    document.getElementById("open-btn").style.display = "none";
    document.getElementById("converter").style.display = "block";
  }
  
  function convert() {
    const amount = parseFloat(document.getElementById("amount").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
  
    if (isNaN(amount)) {
      document.getElementById("result").innerText = "Please enter a valid amount.";
      return;
    }
  
    if (from === to) {
      document.getElementById("result").innerText = `Converted amount: ${amount.toFixed(2)} ${to}`;
      return;
    }
  
    const rate = rates[from][to];
    const converted = amount * rate;
    document.getElementById("result").innerText = `Converted amount: ${converted.toFixed(2)} ${to}`;
  }
  