var abc = "AaBbCcDdEdFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789";
var options = abc.split("");
var random = document.getElementById("random");

function captcha(){
  var dig1 = options[Math.floor(Math.random()*options.length)];
  var dig2 = options[Math.floor(Math.random()*options.length)];
  var dig3 = options[Math.floor(Math.random()*options.length)];
  var dig4 = options[Math.floor(Math.random()*options.length)];
  var dig5 = options[Math.floor(Math.random()*options.length)];
  var dig6 = options[Math.floor(Math.random()*options.length)];
  var dig7 = options[Math.floor(Math.random()*options.length)];
  var dig8 = options[Math.floor(Math.random()*options.length)];

  var codigo= dig1+dig2+dig3+dig4+dig5+dig6+dig7+dig8;
  random.value = codigo;
}

window.addEventListener("load",function(){
  captcha();
});

document.getElementById("reload").addEventListener("click",function(e){
  captcha();
});

document.getElementById("envia").addEventListener("click",function(e){
  e.preventDefault();
  var copy = document.getElementById("onput-code");
  if(random.value !== copy.value){
    alert("Debe ingresar el captcha");
  }
  if(random.value === copy.value){
    copy.value = "";
    captcha();
  }
});
