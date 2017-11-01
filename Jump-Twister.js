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
	
	// Startzeit in Sekunden
	var date = new Date();
	starttime = date.getHours() *3600 + date.getMinutes() *60 + date.getSeconds();
	
}
//
// Do
function Do(){
	
	// verstecke losgehts Button
	var d = document.getElementById('losgehts');
	d.style.zIndex = 1;
	
	// Aufrufen der Objekte
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
	
	while( currenttime - starttime < dauer ){	// pruefen, ob Dauer noch nicht überschritten
		
	// get current time
	var date = new Date();
	currenttime = date.getHours() *3600 + date.getMinutes() *60 + date.getSeconds();
	
		if( currenttime - lasttime > T ){
			lasttime = currenttime;	// letzte Ausfuehrungszeitpunkt ist aktueller Ausfuehrungszeitpunkt
		
			// get random Numbers
			getrandomNumbers();
		
			switch(typ){
			case 1:
				var d = document.getElementById('Quadrat_linker_Fuss');
				d.style.backgroundColor = 'green';
				var d = document.getElementById('Quadrat_rechter_Fuss');
				d.style.backgroundColor = 'green';
				var d = document.getElementById('Quadrat_Hand');
				d.style.backgroundColor = 'green';
				break;
			case 2:
				break;
			default:
				break;
			}
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
function getrandomNumbers(){
	
	random = Math.random() * 4;
	linker_Fuss = Math.ceil(radnom);
	
	random = Math.random() * 4;
	rechter_Fuss = Math.ceil(random);
	
	random = Math.random() * 4;
	Hand = Math.ceil(random);
}