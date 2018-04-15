
// window.location.reload(true);

var image_tracker='Snuggles';

function switcheroo(){
	var image=document.getElementById('Mr.Snuggles')
	if(image_tracker=='Snuggles'){
		image.src="text 3.png" 
		image_tracker='Intro'
	}
	else if(image_tracker=='Intro'){
		image.src="Building.png"
		image_tracker='Snuggles'
	}
}

var image_tracker1='Coconut'

function change(){
	var image=document.getElementById('Kittypic')
	if(image_tracker1=='Coconut'){
		image.src="text 2.png" 
		image_tracker1='Banana'
	}
	else if(image_tracker1=='Banana'){
		image.src="Kitty.png"
		image_tracker1='Coconut'
	}
}

var image_tracker2='strawberry'

function flip(){
	var image=document.getElementById('suicase')
	if(image_tracker2=='strawberry'){
		image.src="text 1.png" 
		image_tracker2='cheese'
	}
	else if(image_tracker2=='cheese'){
		image.src="suitcase.png"
		image_tracker2='strawberry'
	}
}

var image_tracker3='lemonade'

function turnaround(){
	var image=document.getElementById('shock')
	if(image_tracker3=='lemonade'){
		image.src="shocktxt.png" 
		image_tracker3='slugs'
	}
	else if(image_tracker3=='slugs'){
		image.src="shock.png"
		image_tracker3='lemonade'
	}
}


var image_tracker4='lemon'

function turn(){
	var image=document.getElementById('explain')
	if(image_tracker4=='lemon'){
		image.src="explaintxt.png" 
		image_tracker4='slug'
	}
	else if(image_tracker4=='slug'){
		image.src="explain.png"
		image_tracker4='lemon'
	}
}


var image_tracker5='lemons'

function bam(){
	var image=document.getElementById('egyptview')
	if(image_tracker5=='lemons'){
		image.src="egyptviewtxt.png" 
		image_tracker5='snails'
	}
	else if(image_tracker5=='snails'){
		image.src="egyptview.png"
		image_tracker5='lemons'
	}
}

var myIndex=0;
carousel();

function carousel(){
	var i;
	var x =document.getElementsByClassName("mySlides");

	myIndex++;
	if(myIndex> x.length) {myIndex=1}
		x[myIndex-1].style.display="block";
	setTimeout(carousel, 2000);
}


