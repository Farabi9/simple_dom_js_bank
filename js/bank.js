document.getElementById('submit').addEventListener('click', function(){
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;

    if(email == 'rifat@gmail.com' && password == 'rifat'){
        window.location.href='banking.html'
    }
    else{
       window.alert('wrong password')
    }
})