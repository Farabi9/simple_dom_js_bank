document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositeInput = document.getElementById('deposite-input').value;
    document.getElementById('deposite-total').innerText = depositeInput;
})