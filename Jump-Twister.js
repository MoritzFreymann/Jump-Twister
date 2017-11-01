'use strict';
//Variablen fuer die Eingabe
var dauer = 0;
var korrektedauer = 0;
var T = 0;
var Kommandotyp_Fuesse = 'leer';
// Timer
var currenttime = 0;
var starttime = 0;
var lasttime = 0;
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
	positions[i] = Math.random() * 47;
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
	var d = document.getElementById('Quadrat_linker_Fuss');
	d.style.zIndex = 20;
	
	//
	getvalues();
	
	// Startzeit in Sekunden
	var date = new Date();
	starttime = date.getHours() *3600 + date.getMinutes() *60 + date.getSeconds();
	
	if (Kommandotyp_Fuesse == 'Zahlen'){
		var d = document.getElementById('Quadrat_linker_Fuss');
		d.style.backgroundColor = 'green';
	}
	
	
}
//
// Do
function Do(){
		
	while( currenttime - starttime < dauer ){	// pruefen, ob Dauer noch nicht überschritten
		
	// get current time
	var date = new Date();
	currenttime = date.getHours() *3600 + date.getMinutes() *60 + date.getSeconds();
	
		if( currenttime - lasttime > T ){
			lasttime = currenttime;	// letzte Ausfuehrungszeitpunkt ist aktueller Ausfuehrungszeitpunkt
		}
	}
}
//

//
function getvalues(){
	dauer = document.getElementById("dauer").value;
	T = document.getElementById("T").value;
	Kommandotyp_Fuesse = document.getElementById("zahlen").value;
}
//