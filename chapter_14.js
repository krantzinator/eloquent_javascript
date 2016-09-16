// Exercise 1: block specific letters from being entered in a text field //
// (Do not worry about copy and paste and other such loopholes.) //

<input type="text">
<script>
  var field = document.querySelector("input");
  // My code below
  // Q = 81, W = 87, X = 88
  addEventListener("keydown", function(input) {
    if (input.keyCode == 81 || input.keyCode == 87 || input.keyCode == 88)
      input.preventDefault();
  });
  // My code above
</script>

// Exercise 2: Implement a mouse trail //

<style>
  .trail { /* className for the trail elements */
    position: absolute;
    height: 6px;
    width: 6px;
    border-radius: 3px;
    background: orange;
  }
  body {
    height: 300px;
  }
</style>

<script>
  // My code below
  var dots = [];
  var dots_in_trail = 10;
  for (var i = 0; i <= dots_in_trail; i++) {
   		var trail = document.createElement("div");
   	 	trail.className = "trail";
		dots.push(trail);
    }

  	var counter = 0;
    addEventListener("mousemove", function(event) {
   		dots[counter % 10].style.left = (event.pageX + 10) + "px";
   		dots[counter % 10].style.top = (event.pageY + 10) + "px";
      	document.body.appendChild(dots[counter % 10]);
      	counter += 1;
  	});
  // My code above
</script>

// Exercise 3: Tabs //

<!doctype html>

<div id="wrapper">
  <div data-tabname="one">Tab one</div>
  <div data-tabname="two">Tab two</div>
  <div data-tabname="three">Tab three</div>
</div>
<script>
  function asTabs(node) {
    // my code below
    var tabNodes = [];
    for (var i = 0; i < node.childNodes.length; i++) {
      if (node.childNodes[i].nodeType == document.ELEMENT_NODE) {
        tabNodes.push(node.childNodes[i]);
      }
    }

    var tabButtons = document.createElement("div");
    tabNodes.forEach(function(tab, i) {
      var button = document.createElement("button");
      attribute = tab.getAttribute("data-tabname");
      text = document.createTextNode(attribute);
      button.appendChild(text);
      tabButtons.appendChild(button);
      button.addEventListener("click", function() { selectTab(i) } );
    });
    node.insertBefore(tabButtons, node.firstChild);

    function selectTab(selectedTab) {
      tabNodes.forEach(function(tab, i) {
        // for this, I originally changed the 'visibility' CSS attribute, but that left the individual
        // div elements on their respectives lines. I had to use the 'display' option, as the author does,
        // to get the div elements to display at the top of the page for each button.
        // I learned that the 'visibility' attribute affects page layout, while 'display' does not
        if (i == selectedTab) {
          tab.style.display = "";
        } else {
          tab.style.display = "none";
        };
      });
    };
    selectTab(0);
  }
    // my code above
  }
  asTabs(document.querySelector("#wrapper"));
</script>
