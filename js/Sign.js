
//inicio inscrição por gmail 
function goglog(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    exports = {user};
    location.href="pgs/home.html";
    }).catch((error) => {
    console.log('error',error)
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    });
    };

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.location.href="pgs/home.html";
        }
    })
   
 //finalização inscrição por gmail