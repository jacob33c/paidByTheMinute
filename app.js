// IDEA: to know if button has been clicked already
var started = false;


// IDEA: waits for someone to click the start button
$(".myButton").on("click", function() {
  // IDEA: gets the hourly rate inputted by user
  var hourlyRate = document.getElementById("rate").value;

// IDEA: checks to make sure button hasnt been clicked already and
//that an hourlyRate has been inputted
  if (started == false && hourlyRate > 0 ) {
    // IDEA: gets the rate input element
    var form = document.getElementById("rate");

    // IDEA: this is how much the user will get per second
    var increment = hourlyRate / 3600;

    // IDEA: starting value is one penny
    var money = 0.01;

    // IDEA: the button has now been CLICKED
    started = true;

    // IDEA: hides the rate form
    form.style.display = "none";

    //// IDEA: checkes to see if button is working
    console.log("IVE BEEN CLICKED");

    //// IDEA: main func that increments the money every second and
    //updates that on the screen for the userS
    setInterval(function() {
      money += increment;
      var n = money.toFixed(2);
      document.getElementById("money").innerHTML = "$" + n;
    }, 1000);
  }
});
