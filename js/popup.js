var clickFlag = "off";

// function to open the change clone tab
function openChange() {
		
	// open the change url in a new tab
	if (clickFlag === "off") {
	
		// set the click flag
		clickFlag = "on";
	
		chrome.runtime.sendMessage({"message": "openChange"});				
	
	}
	
	// close the window
	window.close();
		
}

// function to pause the clone
function pauseClone() {
	
	// change the icon		
	chrome.runtime.sendMessage({"message": "pause"});										
			
	// close the window
	window.close();
		
}

// function to resume the clone
function resumeClone() {
	
	// change the icon		
	chrome.runtime.sendMessage({"message": "resume"});										
			
	// close the window
	window.close();
		
}


// update the blacklist storage based on click
function click(e) {
  
  // if change clone
  if (e.target.id == "blue") {
	
		// open the change clone tab
		openChange();    
  
  // if pause
  } else if (e.target.id == "red") {
	
		// pause the clone
		pauseClone();
  
  // if resume
  } else if (e.target.id == "orange") {  

		// resume the clone
		resumeClone();
  		
  } else {  
					
		// close the popup window
		window.close();
  }
       
}

// set a listener for popup.html div clicks
document.addEventListener('DOMContentLoaded', function () {
	var divs = document.querySelectorAll('div');
	for (var i = 0; i < divs.length; i++) {
		divs[i].addEventListener('click', click);
	}
});
