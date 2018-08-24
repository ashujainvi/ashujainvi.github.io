// website color scheme
var mainBlue = "#04aedf";
var green = "green";
var red = "red";

// css variable
var primarySiteColor = "--primary-site-color";
// script for landing switch toggle bulb

$( '.switch' ).toggle(function() {
	$('#switch-on').animate({'opacity': '0'});
	$('#light-bulb2').animate({'opacity': '0'},500);
}, function() {
	$('#switch-on').animate({'opacity': '1'});
	$('#light-bulb2').animate({'opacity': '1'},300);
});

// display nav settings
var navSettingsWrapper = document.querySelector(".nav_settings--wrapper");
function displayNavSettings() {
	navSettingsWrapper.classList.toggle("nav--expanded");
}

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
var typed;
function initializeTyped(){
	var stringArray = [
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
var usernameBox = document.querySelector("#usernameInputBox");
var userSentencePunctuation = document.querySelector(".hero_content--punctuation");
var usernameDisplay = document.querySelector(".usernameDisplayField");
var usernameInformator = document.querySelector(".hero_usernameInformator");
var usernameEditButton = document.querySelector(".hero_username--edit");
var userName;

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
			initializeTyped();
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
