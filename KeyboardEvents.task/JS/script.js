let object1Size = {
    width: 20,
    height: 20
  };
  let position = {
    x: 10,
    y: 10
  };
  let moveRate = 10;
  let object1 = document.getElementById("object1");
  

  function updateYPosition(distance) {
    position.y -= distance;
      if (position.y < 0) {
      position.y = 499;
    } else if (position.y > 499) {
      position.y = 0;
    }
  }

  function updateXPosition(distance) {
    position.x += distance;
  
    if (position.x < 0) {
      position.x = 499;
    } else if (position.x > 499) {
      position.x = 0;
    }
  }

  function refresh() {
    let x = position.x - (object1Size.width/2);
    let y = position.y - (object1Size.height/2);
    let transform = "translate(" + x + " " + y + ")";

    object1.setAttribute("transform", transform);
  }

  window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
      return;
    }
    if (event.code === "ArrowDown"){
        updateYPosition(-moveRate);
    } else if (event.code === "ArrowUp"){
        updateYPosition(moveRate);
    } else if (event.code === "ArrowLeft"){
       updateXPosition(-moveRate);
    } else if (event.code === "ArrowRight"){
       updateXPosition(moveRate);
    }
    refresh();
    event.preventDefault();
  }, true);