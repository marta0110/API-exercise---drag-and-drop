
console.log("hello");
//const ball = document.getElementById('ball');
const ball2 = document.getElementById('ball2');
const tree = document.querySelector('.tree');






function dragstart_handler(ev) {
    
    
 console.log("dragStart");
    console.log(ev.target)
 // Add the target element's id to the data transfer object
 ev.dataTransfer.setData("image/png", ev.target.id);
 
    const ball = ev.target;
    
     ev.dropEffect = "move";
     ball.style.position = 'absolute';
  ball.style.zIndex = 1000;
    document.body.append(ball);
    
  
  moveAt(event.pageX, event.pageY);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
    ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
      
      
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (3) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (4) drop the ball, remove unneeded handlers
  ball.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
  };

}


function dragover_handler(ev) {
 ev.preventDefault();
     // Set the drag effect to copy
  ev.dataTransfer.dropEffect = "move";
    console.log("dragMove");
}
function drop_handler(ev) {
 ev.preventDefault();
 // Get the id of the target and add the moved element to the target's DOM
 var data = ev.dataTransfer.getData("image/png");
    console.log(ev);
 
 const img = ev.target;
    const div = img.parentElement;
    
 div.appendChild(document.querySelector("#ball"));
       console.log("drop");
      
}

function dragend_handler(ev) {
 console.log("dragEnd");
 // Change the target element's background color to visually indicate 
 // the drag ended.
  tree.src="tree2.png";
    var audio = document.querySelector("audio");
audio.play();
}
