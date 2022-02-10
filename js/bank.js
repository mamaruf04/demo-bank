document.getElementById('primary-deposite').addEventListener('click',function() {
    let inputFieldText = document.getElementById('deposite-amount').value;
    let inputField = parseFloat(inputFieldText);
    // total deposite
    let Deposite = document.getElementById('diposite');
    let DepositeText = Deposite.innerText;
    let DepositeFloat = parseFloat(DepositeText);
    Deposite.innerText = DepositeFloat + inputField;
    document.getElementById('deposite-amount').value = '';
    // total balance
    let totalBalance = document.getElementById('total-bal');
    let balanceText = totalBalance.innerText;
    let Balancefloat = parseFloat(balanceText);
    totalBalance.innerText = Balancefloat + inputField;
});