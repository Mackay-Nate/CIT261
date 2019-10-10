
function showHideMe(item) { 
  if (item.style.display == "none") { 
    item.style.display = "initial";
  } else { 
    item.style.display = "none";
  }
};


function forloop() { 
  var ourcars = ["Toyota Prius", "Honda Civic", "VW Jetta"]; 
  var text = ""; 
  var i;

  for (i = 0; i < ourcars.length; i++) {
    text += ourcars[i] + "<br>";
  }
  document.getElementById("forloop").innerHTML = text;
};


function whileloop() { 
  var whilecars = ["2019 Bugatti", "2018 Dodge Charllenger SRT Demon", "2020 McLaren", "2019 Lamborghini"];
  var whiletext = "";
  var i=0;

  while (whilecars[i]) {
    whiletext += whilecars[i] + "<br>";
    i++;
  }

  document.getElementById("whileloop").innerHTML = whiletext;
};


function conditions() { 
  var message;
  var hour = new Date().getHours();
  var minutes = new Date().getMinutes();
  
  if (hour < 10) {
    message = "   Good morning";
  } else if (hour < 20) {
    message = "   Good day";
  } else {
    message = "   Good evening";
  }

  message += ". Your time is " + hour + ":" + minutes;
  document.getElementById("condition").innerHTML = message;
};


function switches() { 
  var message;
  var day = new Date().getDay();
  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  switch (days[day]) { 
    case "Monday":
    case "Tuesday": 
      message = "It is the beginning of the week.";
      break;
    case "Wednesday":
      message = "It is the middle of the week.";
      break;
    case "Thursday":
    case "Friday":
      message = "It is the end of the week.";
      break;
    default:
      message = "It is the weekend."
  }
  message += " The day is " + days[day] + ".";

  document.getElementById("switch").innerHTML = message;  
}


function functions() { 

  document.getElementById("functions").innerHTML = "Some text";
};


function variables() { 

  document.getElementById("variable").innerHTML = "Some text";
};


function parameters() { 

  document.getElementById("parameter").innerHTML = "Some text";
};


function arrays() { 

  document.getElementById("array").innerHTML = "Some text";
};


