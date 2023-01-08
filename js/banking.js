
//Module 27-5, 27-6


function inputValue (inputId){
    const input = document.getElementById(inputId);
    const value = input.value;
    const num = parseFloat(value);
    input.value ='';
    return num;
}


document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositeAmmount = document.getElementById('deposite-total');
    const amountValue = depositeAmmount.innerText;
    const amouNum = parseFloat(amountValue);

    // const depositeInput = document.getElementById('deposite-input');
    // const depositeValue = depositeInput.value;
    // const depoNum = parseFloat(depositeValue);
    const depoNum = inputValue('deposite-input');
    
  const totalDepo= amouNum + depoNum;
  depositeAmmount.innerText =totalDepo;

   const balance = document.getElementById('balance-total');
   const balanceTotal = parseFloat(balance.innerText);
//    const balaNum = parseFloat(balanceTotal);

    balance.innerText = balanceTotal + depoNum;


    // depositeInput.value ='';
})

// Module 27-4

document.getElementById('withdraw-btn').addEventListener('click', function(){
   const withdrawAmmount = document.getElementById('withdraw-total');
   const withdrawValue = withdrawAmmount.innerText;
   const withNum = parseFloat(withdrawValue)

//    const withdrawInput = document.getElementById('withdraw-input')
//    const inputValue = withdrawInput.value;
//    const inpNum = parseFloat(inputValue)

   const inpNum = inputValue('withdraw-input')

   withdrawAmmount.innerText = withNum + inpNum;

   const balanceTotal = document.getElementById('balance-total');
   const totalNum = balanceTotal.innerText;
  
   const value = parseFloat(totalNum);
   balanceTotal.innerText = value - inpNum;

//    withdrawInput.value ='';
    })

// Module 27-5    