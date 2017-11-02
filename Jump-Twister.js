'use strict';
// Variablen fuer die Eingabe
var dauer = 0;
var korrektedauer = 0;
var T = 0;
var Kommandotyp_Fuesse = 'leer';
// Timer
var currenttime = 0;
var starttime = 0;
var lasttime = 0;
var time = 0;
// Zahlen
var random = 0;
var linker_Fuss = 0;
var rechter_Fuss = 0;
var Hand = 0;
// Typ
var typ = 1;
// Screen
var screenheight = 0;
var screenwidth = 0;

// Ausslesen der Bildschirmgroesse
Screen();

// Funktionen

// Bildschirmgroesse bestimmen
function Screen(){
	screenwidth = screen.width;
	screenheight = screen.height;
}
//
/*
//Positionen der rechten Kreise berechnen
function GetRightPosition(){
	
	while(i < (2*anzahl + 2)){
	
	//Bestimmen der Position

	positions[i+1] = Math.random() * 95;
	
	
		//Pruefen, ob Position zulaessig
		for(j=0; j < i; j+=2){
			
			if((Math.sqrt(Math.pow((positions[i] - positions[j]),2) + Math.pow((positions[i+1] - positions[j+1]),2))) > (5)){
				
			}
			
			else{
				i-=2;
				break;
			}
		}
		i+=2;
	}
	//zuruecksaetzen von i
	i = 0;
}
//
*/
// EndInput
function EndInput(){
	var d = document.getElementById('Input');
	d.style.zIndex = 1;
	var d = document.getElementById('HintergrundUebung');
	d.style.zIndex = 10;
	
	// zeige losgehts Button
	var d = document.getElementById('losgehts');
	d.style.zIndex = 20;

	//
	getvalues();
	
}
// ----------------
// Start
function Start(){

	// Startzeit in Sekunden
	var date = new Date();
	starttime = date.getHours() *3600 + date.getMinutes() *60 + date.getSeconds();
	
	// verstecke losgehts-Button
	var d = document.getElementById('losgehts');
	d.style.zIndex = 1;
	
	// Aufrufen der Objekte
	document.getElementById('Timer').style.zIndex = 20;
	
	switch(typ){
	case 1:
		var d = document.getElementById('Quadrat_linker_Fuss');
		d.style.zIndex = 20;
		var d = document.getElementById('Quadrat_rechter_Fuss');
		d.style.zIndex = 20;
		var d = document.getElementById('Quadrat_Hand');
		d.style.zIndex = 20;
		break;
	case 2:
		break;
	default:
		break;
	}
	
	// los geht's
	Do();
}
// ----------------
// Do
function Do(){
			
	// get current time
	var date = new Date();
	currenttime = date.getHours() *3600 + date.getMinutes() *60 + date.getSeconds();
	
	// verbleibende Zeit berechnen
	time = dauer - (currenttime - starttime);

	// zeige Zeit
	document.getElementById('Timer').innerHTML = time;
	
	console.log(currenttime - lasttime - T);
		if( currenttime - lasttime >= T ){
			
			lasttime = currenttime;	// letzter Ausfuehrungszeitpunkt ist aktueller Ausfuehrungszeitpunkt
			console.log(lasttime);
			// get random Numbers
			getrandomNumbers();
		
			switch(typ){
			case 1:
				document.getElementById('Quadrat_linker_Fuss').style.backgroundColor = getColor(linker_Fuss);
				document.getElementById('Quadrat_rechter_Fuss').style.backgroundColor = 'green';
				document.getElementById('Quadrat_Hand').style.backgroundColor = 'green';
				break;
			case 2:
				document.getElementById('Quadrat_linker_Fuss').style.backgroundColor = 'red';
				document.getElementById('Quadrat_rechter_Fuss').style.backgroundColor = 'red';
				document.getElementById('Quadrat_Hand').style.backgroundColor = 'red';
				typ = 3;
				break;
			case 3:
				document.getElementById('Quadrat_linker_Fuss').innerHTML = linker_Fuss;
				document.getElementById('Quadrat_rechter_Fuss').innerHTML = rechter_Fuss;
				document.getElementById('Quadrat_Hand').innerHTML = Hand;		
				break;
			default:
				break;
			}
		}	
	//
	if(time > 0)
	{
		var timeout = window.setTimeout('Do()', 1000);
	}
	else{
		End();
	}
}
//
// End
function End(){
	
}

//
function getvalues(){
	dauer = document.getElementById("dauer").value;
	T = document.getElementById("T").value;
	Kommandotyp_Fuesse = document.getElementById("zahlen").value;
}
//
function getrandomNumbers(){
	
	random = Math.random() * 4;
	linker_Fuss = Math.ceil(random);
	
	random = Math.random() * 4;
	rechter_Fuss = Math.ceil(random);
	
	random = Math.random() * 4;
	Hand = Math.ceil(random);
}
// 
function getColor(i){
	var color = 'white';
	switch(i){
		case 1:
			color= 'red';			
			break;
		case 2:
			color = 'green';
			break;
		case 3:
			color = 'blue';
			break;
		case 4:
			color = 'yellow';
			break;
		default:
			color = 'white';
			break;		
	}	
	return color;
}