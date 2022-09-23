// Deposite features
document.getElementById('primary-deposite').addEventListener('click',function() {
    let inputFieldText = document.getElementById('deposite-amount').value;
    let inputField = parseFloat(inputFieldText);
    // total deposite
    const Deposite = document.getElementById('diposite');
    const DepositeText = Deposite.innerText;
    let DepositeFloat = parseFloat(DepositeText);
    document.getElementById('deposite-amount').value = '';
    // total balance after deposite
    const totalBalance = document.getElementById('total-bal');
    const balanceText = totalBalance.innerText;
    let Balancefloat = parseFloat(balanceText);

    if(inputField > 0){
        Deposite.innerText = DepositeFloat + inputField;
        totalBalance.innerText = Balancefloat + inputField;
    } 
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You can not input minus figure or empty field!',
          })
    }
    
});
// withdraw featers
document.getElementById('withdraw-amount').addEventListener('click',function () {
    let inputFieldText = document.getElementById('input-field').value;
    let inputField = parseFloat(inputFieldText);
    // total withdraw
    let totalWithdraw = document.getElementById('total-withdraw')
    let totalWithdrawText = totalWithdraw.innerText;
    let totalWithdrawFloat = parseFloat(totalWithdrawText);
    
    document.getElementById('input-field').value = '';
    // total balance after withdraw
    let totalBalance = document.getElementById('total-bal');
    let balanceText = totalBalance.innerText;
    let Balancefloat = parseFloat(balanceText);

    if(totalBalance.innerText >= inputField  && inputField > 0){
    totalWithdraw.innerText = totalWithdrawFloat + inputField;
    totalBalance.innerText = Balancefloat - inputField;
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You can not withdraw more then your Balance or empty!',
          })
    }
})