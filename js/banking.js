
//Module 27-5, 27-6


function inputValue (inputId){
    const input = document.getElementById(inputId);
    const value = input.value;
    const num = parseFloat(value);
    input.value ='';
    return num;
}

function textValue(num, inputId){
    const ammount = document.getElementById(inputId);
    const amountValue = ammount.innerText;
    const amouNum = parseFloat(amountValue);
    ammount.innerText= amouNum + num;
}

function updateBalance(num, inputId){
    
   const balance = document.getElementById(inputId);
   const balanceTotal = balance.innerText;
   const bal = parseFloat(balanceTotal)

    balance.innerText = bal + num;
}


document.getElementById('deposite-btn').addEventListener('click', function(){

    const depoNum = inputValue('deposite-input');
   
    textValue(depoNum, 'deposite-total')

//    const balance = document.getElementById('balance-total');
//    const balanceTotal = balance.innerText;
//    const bal = parseFloat(balanceTotal)

//     balance.innerText = bal + depoNum;
updateBalance(depoNum, 'balance-total')

})

// Module 27-4

document.getElementById('withdraw-btn').addEventListener('click', function(){

   const inpNum = inputValue('withdraw-input')

   textValue(inpNum, 'withdraw-total')

//    const balanceTotal = document.getElementById('balance-total');
//    const totalNum = balanceTotal.innerText;
  
//    const value = parseFloat(totalNum);
//    balanceTotal.innerText = value - inpNum;
updateBalance(inpNum, 'balance-total')
    })

   