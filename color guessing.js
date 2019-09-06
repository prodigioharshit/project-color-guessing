var numberofsquare = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var resetbutton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")

init();

function init(){
	
	for(var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("blue");
		modeButtons[0].classList.remove("textbutton");
		modeButtons[1].classList.remove("textbutton");
		modeButtons[1].classList.remove("blue");
		this.classList.add("blue");
		this.classList.add("textbutton")
		if(this.textContent === "Easy"){
			numberofsquare = 3;
		}
		else{
			numberofsquare = 6;
		}
		reset();
	})
}
   
   setUpSquares();
  reset();
}


function setUpSquares(){
	for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor = colors[i];//initial colors in square
     
     //add click listeners
    squares[i].addEventListener("click",function(){
    	//grab color of clicked square
    	var clickedColor = this.style.backgroundColor;
    	if(clickedColor === pickedColor){
    		message.textContent = "correct";
    		changeColors(clickedColor);
    		(document.querySelector("h1")).style.backgroundColor = clickedColor;
    		resetbutton.textContent = "Play Again";
    	}
    	else{
    		this.style.backgroundColor = "#232323";
    		message.textContent = "try again";
    	}
    }); 	
}
}

function reset(){
	(document.querySelector("h1")).style.backgroundColor = "steelblue";
	resetbutton.textContent = "New Colors";
	message.textContent= "";
	colors = generatecolors(numberofsquare);
	pickedColor = pickcolors();
	colorDisplay.textContent = pickedColor;
    
    for(var i=0;i<squares.length;i++){
    	if(colors[i]){
    	squares[i].style.display = "block";	
    	squares[i].style.backgroundColor = colors[i];
    }
    else{
    	squares[i].style.display = "none";
    }

    }
}


resetbutton.addEventListener("click",function(){
  reset();
})



function changeColors(color){

	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickcolors(){
   var random = Math.floor(Math.random()*colors.length);
   return colors[random];
}

function generatecolors(num){
	var arr = [];

	for(var i=0;i<num;i++){
         arr[i] = randomcolors();

	}

	return arr;
}

function randomcolors(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	var rgb = "rgb("+red+", "+green+", "+blue+")";
	return rgb;
}