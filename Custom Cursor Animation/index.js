const cursor = document.querySelector(".cursor");       //Select the div with the class name cursor
var timeOut;        //Create a variable for handle the cursor time out whenever the cursor is not moving


document.addEventListener("mousemove", (e)=>{       //Add a event listener with the entire document for getting the cursor x and y axis location
    let x = e.pageX;        //Store the mouse x and y axis value in variables
    let y = e.pageY;
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";       //Access the cursor div stylesheet and make the position top and left according to the cursour movement position and set the display to block
    cursor.style.display = "block";

    const mouseStopped = ()=>{
        cursor.style.display = "none";      //Create a function for hide the cursor if the mouse is not move for a certain period of time
    }

   setTimeout(timeOut);
   timeOut = setTimeout(mouseStopped, 5000);        //Create the timeout function for controlling the  mouse time out

   
    
});

document.addEventListener("mouseout", ()=>{         // This event listener will hide the cursor if our host cursor goes out of the browser window
    cursor.style.display = "none";
})