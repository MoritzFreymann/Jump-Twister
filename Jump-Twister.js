'use strict';
// Variablen fuer die Eingabe
var dauer = 0;
var korrektedauer = 0;
var T = 0;
var Kommandotyp_Fuesse = 'leer';
var Anzahl_Haende = 'ohne';
var Kommandotyp_Haende = 'leer';
// Timer
var currenttime = 0;
var starttime = 0;
var lasttime = 0;
var time = 0;
// Zahlen
var linker_Fuss = 0;
var rechter_Fuss = 0;
var Hand = 0;
// Typ
var typ_fuesse = 1;
var typ_heande = 1;
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
	
	//  verstecke Objekte
	document.getElementById('Input1').style.zIndex = 1;
	document.getElementById('Input2').style.zIndex = 1;
	//document.getElementById('Input3').style.zIndex = 1;
	document.getElementById('fertig').style.zIndex = 1;

	document.getElementById('HintergrundUebung').style.zIndex = 10;
	
	// zeige Start Button
	document.getElementById('Start').style.zIndex = 20;


	//
	getvalues();
	
}
// ----------------
// Start
function Start(){

	// Startzeit in Sekunden
	var date = new Date();
	starttime = date.getHours() *3600 + date.getMinutes() *60 + date.getSeconds();
	
	// verstecke Start-Button
	document.getElementById('Start').style.zIndex = 1;
	
	// Aufrufen der Objekte
	document.getElementById('Timer').style.zIndex = 20;
	document.getElementById('Quadrat_linker_Fuss').style.zIndex = 20;
	document.getElementById('Quadrat_rechter_Fuss').style.zIndex = 20;
	document.getElementById('Quadrat_Hand').style.zIndex = 20;
	
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
	
		if( currenttime - lasttime >= T ){
			
			lasttime = currenttime;	// letzter Ausfuehrungszeitpunkt ist aktueller Ausfuehrungszeitpunkt

			// Berechne Zufallszahlen
			getrandomNumbers();
		
			console.log(Kommandotyp_Fuesse);
			switch(Kommandotyp_Fuesse){
			case 'Zahlen':
				document.getElementById('Quadrat_linker_Fuss').innerHTML = linker_Fuss;
				document.getElementById('Quadrat_rechter_Fuss').innerHTML = rechter_Fuss;
				break;
			case 'Farben':
				document.getElementById('Quadrat_linker_Fuss').style.backgroundColor = getColor(linker_Fuss);
				document.getElementById('Quadrat_rechter_Fuss').style.backgroundColor = getColor(rechter_Fuss);
				break;
			case 'Gemischt':
			console.log('cookie');
				if( getTyp() == 'Zahlen' ){
					document.getElementById('Quadrat_linker_Fuss').innerHTML = linker_Fuss;
					document.getElementById('Quadrat_rechter_Fuss').innerHTML = rechter_Fuss;
				}
				else{
					document.getElementById('Quadrat_linker_Fuss').style.backgroundColor = getColor(linker_Fuss);
					document.getElementById('Quadrat_rechter_Fuss').style.backgroundColor = getColor(rechter_Fuss);					
				}

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
	
	if(document.getElementById("zahlen1").checked){
		Kommandotyp_Fuesse = document.getElementById("zahlen1").value;
	}
	if(document.getElementById("zahlen2").checked){
		Kommandotyp_Fuesse = document.getElementById("zahlen2").value;
	}
	if(document.getElementById("zahlen3").checked){
		Kommandotyp_Fuesse = document.getElementById("zahlen3").value;
	}
	
	
}
//
function getrandomNumbers(){
	
	var random = Math.random() * 4;
	linker_Fuss = Math.ceil(random);
	
	var random = Math.random() * 4;
	rechter_Fuss = Math.ceil(random);
	
	var random = Math.random() * 4;
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
//
function getTyp(){
	
	var random = Math.random();
	var typ = Math.round(random);

	if(typ==0){
		var newTyp = 'Zahlen';
	}
	else{
		var newTyp = 'Farben';
	}
	return newTyp;
}