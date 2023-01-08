
//Module 27-5, 27-6, 27-7, 27-8


function inputValue(inputId) {
    const input = document.getElementById(inputId);
    const value = input.value;
    const num = parseFloat(value);
    input.value = '';
    return num;
}

function textValue(num, inputId) {
    const ammount = document.getElementById(inputId);
    const amountValue = ammount.innerText;
    const amouNum = parseFloat(amountValue);
    ammount.innerText = amouNum + num;
}

function updateBalance(num, isAdd) {

    const balance = document.getElementById('balance-total');
    const bal = getCurrentBalance()

    if(isAdd == true){
        balance.innerText = bal + num;
    }
    else{
        balance.innerText = bal - num;
    }
}


function getCurrentBalance(){
    const balance = document.getElementById('balance-total');
    const balanceTotal = balance.innerText;
    const bal = parseFloat(balanceTotal)
    return bal;
}

document.getElementById('deposite-btn').addEventListener('click', function () {

    const depoNum = inputValue('deposite-input');
    if(depoNum > 0){

        textValue(depoNum, 'deposite-total')

        updateBalance(depoNum, true)
    
    }

})

// Module 27-4

document.getElementById('withdraw-btn').addEventListener('click', function () {

    const inpNum = inputValue('withdraw-input')
    const currentBalance = getCurrentBalance();
    if(inpNum > 0 && inpNum < currentBalance){

        textValue(inpNum, 'withdraw-total',)

        updateBalance(inpNum)
    
    }
    if(inpNum > currentBalance){
       alert("sorry you can't het more than available money")
    }
})

