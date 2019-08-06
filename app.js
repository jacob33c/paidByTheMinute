// IDEA: to know if button has been clicked already
var started = false;
var hourlyRate = 0;
var myVar = 0;
// IDEA: starting value is one penny
var money = 0.01;
var form = document.getElementById("rate");
// IDEA: waits for someone to click the start button
$(".myButton").on("click", function() {
  // IDEA: gets the hourly rate inputted by user
  hourlyRate = document.getElementById("rate").value;
  //// IDEA: checkes to see if button is working
  console.log("IVE BEEN CLICKED");
// IDEA: checks to make sure button hasnt been clicked already and
//that an hourlyRate has been inputted
  if (started == false && hourlyRate > 0 ) {
    // IDEA: gets the rate input element
    start();
  }
  else stop();

});




function stop(){
  console.log("stop function");
  started = false;
  $(".myButton").html("Start");
  myVar = clearInterval(myVar);
  form.classList.remove("hidden");
  $(".myButton").removeClass("btn-danger");
  $(".myButton").addClass("btn-success");

}


function start(){
  console.log("start function");

  // IDEA: this is how much the user will get per second
  var increment = hourlyRate / 3600;

  // IDEA: the button has now been CLICKED
  started = true;
  // IDEA: hides the rate form
  form.classList.add("hidden");
  //// IDEA: main func that increments the money every second and
  //updates that on the screen for the userS
  myVar  = setInterval(function() {
      $(".myButton").html("Stop");

      $(".myButton").addClass("btn-danger");
      $(".myButton").removeClass("btn-success");
      money += increment;
      var n = money.toFixed(2);
      document.getElementById("money").innerHTML = "$" + n;
    }, 1000);
}
