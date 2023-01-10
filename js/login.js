
        

const signup=document.getElementById("signup");
signup.addEventListener("click",()=>{
    let pass1val = document.getElementById('password').value;
    let pass2val = document.getElementById('c-password').value;
    if (pass1val != pass2val) {
     alert("**Password doesn't match**!") ;
        return false;
    }

})
        const showpass = document.getElementById('showpass');
        const pass = document.getElementById('password');
        const C_pass = document.getElementById('c-password');


        showpass.addEventListener('click', () => {
            if (pass.type === 'password' && C_pass.type === 'password') {
                pass.type = 'text';
                C_pass.type = 'text';
            } else {
                pass.type = 'password';
                C_pass.type = 'password';
            }
        })
