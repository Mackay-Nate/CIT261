

function moreRoom(list) { 
  document.getElementById(list).style.lineHeight = "40px";
}

function lessRoom(list) { 
  document.getElementById(list).style.lineHeight = "19px";

  var hide = document.getElementsByClassName('hideMe');
  for (var i = 0; i < hide.length; i++) { 
    hide[i].style.display = "none";
  }
  document.getElementById(list).style.background = "white";
}

function showMe(item) { 
  if (document.getElementById(item).style.display != "initial") {
    document.getElementById(item).style.display = "initial";
  } else {
    document.getElementById(item).style.display = "none";
    document.getElementById(item).style.background = "white";
  }
}


function mouse(item) { 
  if (item.style.background != 'lightblue') { 
    item.style.background = 'lightblue'; 
    item.style.fontSize = '200%';
  } else { 
    item.style.fontSize = '100%';
    item.style.background = 'white'
  }
}

