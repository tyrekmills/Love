function getqueryparams(name) {
    const urlparams =new URLSearchParams(window.location.search);
    return urlparams.get(name);
}

function createheart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);
    setTimeout( () => {
        heart.remove();
    }, 5000);
}

function sendLove() {
    const name = getqueryparams("name") || "very much";
  let message = document.getElementById("message");
  message.innerHTML =`I love you ${name}!`;
 setTimeout( () => {
    message.style.opacity = 1;
 },100);

 for (let i = 0; i < 50; i++) {
    setTimeout(createheart, i * 100);
 }
        
    
}



sendLove();