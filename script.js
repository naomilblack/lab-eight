

function area() {

var radius = document.getElementById("calculate").value;

var txt;

  if (radius > 0) {

   var area = Math.PI * radius * radius;

   txt= "The area of a circle with a radius of " + radius + " is " + area.toFixed(4)+".";

}
else {

   txt = "Invalid radius";
 }

  document.getElementById("message").innerHTML = txt;
  document.getElementById("circle").style.width=(radius*2)+"px";
  document.getElementById("circle").style.height=(radius*2)+"px";

}
