// website color scheme
var mainBlue = "#4a97ff";
var green = "green";
var red = "red";

var screenSize = (window.innerWidth);
// css variable
var primarySiteColor = "--primary-site-color";

// script for landing switch toggle bulb
$('.switch').toggle(function() {
	$('#switch-on').animate({'opacity': '1'});
	$('#light-bulb2').animate({'opacity': '1'},500);
}, function() {
	$('#switch-on').animate({'opacity': '0'});
	$('#light-bulb2').animate({'opacity': '0'},300);
});

// display nav settings
var navSettingsWrapper = document.querySelector(".nav_settings--wrapper");
function displayNavSettings(event) {
	event.preventDefault();
	navSettingsWrapper.classList.toggle("nav--expanded");
}

// close nav setting wrapper if clicked outside. 
document.addEventListener("click", function(event) {
	if(!event.target.matches('.nav_settings--button')) {
		if(event.target.matches('.nav_settings--wrapper')) {
			return;
		} else {
			navSettingsWrapper.classList.remove("nav--expanded");
		}
	}
});

// hero_message button toggle
var confirmClass = "hero_message--confirm";
var spanText = document.getElementById("hero-text");
var projectsButton = document.getElementById("projectsButton");

var guy = document.querySelector(".guy");
var html = document.getElementsByTagName('html')[0];

projectsButton.onclick = function () {
	if (this.classList.contains(confirmClass)) {
    	location.href = "http://projects.ashutoshjainvi.com";
	} else {
		this.classList.add(confirmClass);
		spanText.innerHTML = "Go to separate site?"
    	guy.classList.add("guy-angry");
    	html.style.setProperty(primarySiteColor, red);
	}
};

// to reset heroMsg after a while.
function resetHeroMsg() {
	if(projectsButton.classList.contains(confirmClass)) {
		setTimeout(function() {
			projectsButton.classList.remove(confirmClass);
    		guy.classList.remove("guy-angry");
			spanText.innerHTML = "View Technical Projects"
    		html.style.setProperty(primarySiteColor, mainBlue)
		}, 2500)
	}
}

// typed initiator
// add typed js only if width > 768px
if (screenSize > 768) {
        var head = document.getElementsByTagName('body')[0];
        var scriptTag = document.createElement("script");
        scriptTag.type = "text/javascript";
        scriptTag.src = "https://cdn.jsdelivr.net/npm/typed.js@2.0.9";
        head.appendChild(scriptTag);
}

var typed;
function initializeTyped(){
	const stringArray = [
	"~ ashutoshjainvi.com$: Hey " +userName+ "! Nice to meet you.", 
	"~ ashutoshjainvi.com$: Here are few secrets about this room...", 
	"~ ashutoshjainvi.com$: So, let me help you in waking this guy up.", 
	"~ ashutoshjainvi.com$: There's a switch on top left corner.", 
	"~ ashutoshjainvi.com$: Click on it and turn the lights on.", 
	"~ ashutoshjainvi.com$: Be careful, it might break his concentration and make him mad."]; 
	var options = {
	  strings: stringArray,
	  typeSpeed: 40,
	  backDelay: 700,
	  attr: 'placeholder',
	  loop: true,
	  onStop: function(){typed.reset()}
	}
	typed = new Typed(".hero_usernameInformator", options);
}

// to save user name
const usernameBox = document.querySelector("#usernameInputBox");
const userSentencePunctuation = document.querySelector(".hero_content--punctuation");
const usernameDisplay = document.querySelector(".usernameDisplayField");
const usernameInformator = document.querySelector(".hero_usernameInformator");
const usernameEditButton = document.querySelector(".hero_username--edit");
const userName;

function saveUsername(event) {
	if(event.keyCode == 13) {
		userName = usernameBox.value;
		if (userName) {
			usernameBox.classList.add("display-none");
			userSentencePunctuation.innerHTML = ", "
			usernameEditButton.classList.remove("display-none");
			usernameDisplay.classList.remove("display-none");
			usernameDisplay.innerHTML = userName.toLowerCase();
			usernameInformator.classList.remove("display-none");
			if(screenSize > 768) {
				initializeTyped();
			}
		}
	}
}

function editUsername() {
	usernameBox.classList.remove("display-none");
	usernameBox.focus();
	userSentencePunctuation.innerHTML = "!"
	usernameEditButton.classList.add("display-none");
	usernameDisplay.classList.add("display-none");
	usernameInformator.classList.add("display-none");
	typed.stop();
}


// draggable icons
var iconSlider = document.querySelector(".feature_zone-icons");
var mouseIsDown = false;
var startX, scrollLeft;

iconSlider.addEventListener('mousedown', function(event) {
	mouseIsDown = true;
	$(".feature_zone-icons").stop(true);
	startX = event.pageX - iconSlider.offsetLeft;
	scrollLeft = iconSlider.scrollLeft;
});

iconSlider.addEventListener('mouseleave', function() {
	mouseIsDown = false;
});

iconSlider.addEventListener('mouseup', function() {
	mouseIsDown = false;

	var currScrollX = iconSlider.scrollLeft;
	var scrollDiff = (scrollLeft - currScrollX) * -1;
	var newScrollX = currScrollX + (scrollDiff * 0.4);

	$(".feature_zone-icons").stop(true).animate({'scrollLeft':newScrollX}, 400, 'linear');
});

iconSlider.addEventListener('mousemove', function(event) {
	if(!mouseIsDown) { return };
	var mousePosX =  event.pageX - iconSlider.offsetLeft;
	var slideValue = (mousePosX - startX) * 1.5;
	iconSlider.scrollLeft = scrollLeft - slideValue;

});

// Register Service Worker

if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('./service-worker.js')
		.then(function(registration) {
			// console.log("success", registration);
		})
		.catch(function(err) {
			// console.log("Service wroker not registered", err);
		})
}
