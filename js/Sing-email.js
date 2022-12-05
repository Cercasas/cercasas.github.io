

function SiginIn(){
        var emails = document.getElementById("email").value;
        var senhas = document.getElementById("psw").value;
firebase.auth().signInWithEmailAndPassword(emails,senhas).then(response =>{
        location.href="pgs/home.html"; 
}).catch(error =>{
        console.log('error',error)
})

}

        function Recsen(){
            var emails = document.getElementById("email").value;    
            firebase.auth().sendPasswordResetEmail(emails).then(() => {    
                
        }).catch(error =>{
            alert('Email Não encontrado');
        });
         }

        function Confirmpassandemail(){
                const user = firebase.auth().currentUser;
                const username = document.getElementById("username").value;
                const psw = document.getElementById("pswup").value;
                const mail = document.getElementById("emailup").value;
                const conpsw = document.getElementById("conpsw").value;
                const conmail = document.getElementById("conemail").value;
                
                if (mail != conmail){
                        alert('Emails não coincidem');
                }else{
                        if (psw != conpsw){
                                alert('Senhas não coincidem');   
                        }else{
                        firebase.auth().createUserWithEmailAndPassword(mail,psw).then(response =>{ 
                                alert('Email criado com sucesso!');
                        }).catch(error =>{
                        alert('Email invalido ou ja utilizado');
                        })
                        }
                } 
        }


