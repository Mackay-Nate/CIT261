
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
  document.getElementById("forloop2").innerHTML = text;
};

function whileloop() { 
  var whilecars = ["2019 Bugatti", "2018 Dodge Charllenger SRT Demon", "2020 McLaren", "2019 Lamborghini"];
  var whiletext = "";
  var i=0;

  while (whilecars[i]) {
    whiletext += whilecars[i] + "<br>";
    i++;
  }

  document.getElementById("whileloop2").innerHTML = whiletext;
}