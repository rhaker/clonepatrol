// get the url to check if start/change
let currentUrl = window.location.toString();
let currentFlag = "start";

if (currentUrl.indexOf("change") >= 0) {
	currentFlag = "change";
}

// capture the clone selection
let cloneID = 1;
let countTimer = "";

$("#grandpaGeorge").on( "click", function() {		
	
	// set the cloneID
	cloneID = 1;
		
	// update the chosen text
	$("#chosenClone").html('<img class="img-responsive" src="./img/grandpaGeorge.jpg" alt=""><h4>Grandpa George</h4>');            

	// hide, show, start timer
	finish();

	return false;

}); 

$("#soccerMomSally").on( "click", function() {		
	
	// set the cloneID
	cloneID = 2;
		
	// update the chosen text
	$("#chosenClone").html('<img class="img-responsive" src="./img/soccerMomSally.jpg" alt=""><h4>Soccer Mom Sally</h4>');            

	// hide, show, start timer
	finish();

	return false;

}); 

$("#couchPotatoBob").on( "click", function() {		
	
	// set the cloneID
	cloneID = 3;
		
	// update the chosen text
	$("#chosenClone").html('<img class="img-responsive" src="./img/couchPotatoBob.jpg" alt=""><h4>Couch Potato Bob</h4>');            

	// hide, show, start timer
	finish();

	return false;

}); 

$("#videoGameEd").on( "click", function() {		
	
	// set the cloneID
	cloneID = 4;
		
	// update the chosen text
	$("#chosenClone").html('<img class="img-responsive" src="./img/videoGameEd.jpg" alt=""><h4>Video Game Ed</h4>');            

	// hide, show, start timer
	finish();

	return false;

}); 

$("#hipsterIrene").on( "click", function() {		
	
	// set the cloneID
	cloneID = 5;
		
	// update the chosen text
	$("#chosenClone").html('<img class="img-responsive" src="./img/hipsterIrene.png" alt=""><h4>Hipster Irene</h4>');            

	// hide, show, start timer
	finish();

	return false;

}); 

$("#fidoTheDog").on( "click", function() {		
	
	// set the cloneID
	cloneID = 6;
		
	// update the chosen text
	$("#chosenClone").html('<img class="img-responsive" src="./img/fidoTheDog.png" alt=""><h4>Fido The Dog</h4>');            

	// hide, show, start timer
	finish();

	return false;

}); 

// hide the selections and show finish instructions
function finish() {
	
	// hide choices, show finished
	$(".selection").hide();            
	$(".finish").show();            

	// start the 10 second countdown timer
	let counter = 10;
	
	countTimer = setInterval(function() {		

		counter = counter - 1;
		// clear timer after 10 seconds
		if (counter <=1 ) {
			clearInterval(countTimer);
			// send the selection to background.js
			if (currentFlag === "start") {
				// change start message
				chrome.runtime.sendMessage({"message": "newClone", "clone": cloneID});			
			} else {
				// send change message
				chrome.runtime.sendMessage({"message": "changeClone", "clone": cloneID});			
			}
		}
		
		// update the counter for start only
		if (currentFlag === "start") {
			$("#counter").text(counter);            
		}

	}, 1000);

	return false;
	
}		

$("#startNow").on( "click", function() {		
	
	// stop counter
	clearInterval(countTimer);
	
	// send the selection to background.js
	if (currentFlag === "start") {
		// change start message
		chrome.runtime.sendMessage({"message": "newClone", "clone": cloneID});			
	} else {
		// send change message
		chrome.runtime.sendMessage({"message": "changeClone", "clone": cloneID});			
	}

	return false;

}); 
