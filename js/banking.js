document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositeAmmount = document.getElementById('deposite-total');
    const amountValue = depositeAmmount.innerText;

    const depositeInput = document.getElementById('deposite-input');
    const depositeValue = depositeInput.value;
    
   depositeAmmount.innerText = parseFloat(amountValue) + parseFloat(depositeValue)

   const balance = document.getElementById('balance-total');
   const balanceTotal = balance.innerText;

    balance.innerText = parseFloat(balanceTotal) + parseFloat(amountValue) + parseFloat(depositeValue);


    depositeInput.value ='';
})