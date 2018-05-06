//For Night and Light theme changes
function toggleNightLight() {
	var body = document.getElementById("body");
	var texte = document.getElementById("screen-mode");
	var CurrentClass = body.className;
	body.className = CurrentClass == "light-mode" ? "night-mode" : "light-mode";

	if(texte.innerHTML == "Night Mode") {
		texte.innerHTML = "Light Mode";
	} else {
		texte.innerHTML = "Night Mode";
	}

}

//Open side navigation bar (sensors-list)
function openNav() {
    document.getElementById("sensor-list").style.width = "250px";
    document.getElementById("body").style.marginLeft = "250px";
}
//Close side navigation bar (sensors-list)
function closeNav() {
    document.getElementById("sensor-list").style.width = "0";
    document.getElementById("body").style.marginLeft= "0";
}