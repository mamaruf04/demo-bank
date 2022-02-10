// Deposite features
document.getElementById('primary-deposite').addEventListener('click',function() {
    let inputFieldText = document.getElementById('deposite-amount').value;
    let inputField = parseFloat(inputFieldText);
    // total deposite
    let Deposite = document.getElementById('diposite');
    let DepositeText = Deposite.innerText;
    let DepositeFloat = parseFloat(DepositeText);
    Deposite.innerText = DepositeFloat + inputField;
    document.getElementById('deposite-amount').value = '';
    // total balance after deposite
    let totalBalance = document.getElementById('total-bal');
    let balanceText = totalBalance.innerText;
    let Balancefloat = parseFloat(balanceText);
    totalBalance.innerText = Balancefloat + inputField;
});
// withdraw featers
document.getElementById('withdraw-amount').addEventListener('click',function () {
    let inputFieldText = document.getElementById('input-field').value;
    let inputField = parseFloat(inputFieldText);
    // total withdraw
    let totalWithdraw = document.getElementById('total-withdraw')
    let totalWithdrawText = totalWithdraw.innerText;
    let totalWithdrawFloat = parseFloat(totalWithdrawText);
    totalWithdraw.innerText = totalWithdrawFloat + inputField;
    document.getElementById('input-field').value = '';
    // total balance after withdraw
    let totalBalance = document.getElementById('total-bal');
    let balanceText = totalBalance.innerText;
    let Balancefloat = parseFloat(balanceText);
    totalBalance.innerText = Balancefloat - inputField;
})