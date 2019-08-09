const title = document.querySelector("#title");
console.log(title);
title.innerHTML="ya ya ya ya";

const CLICKED_CLASS = "clicked"

function handleClick(){
  title.classList.toggle(CLICKED_CLASS);
}
function init(){
  title.addEventListener("click", handleClick);
}


//offline 인터넷 꺼질시 동
init();
