'use strict';
//Variablen fuer die Eingabe
var dauer = '000';
var korrektedauer = 0;
var T = '0';

//GoOnbutton
var weiter = true;
var showGoOn =true;
//Screen
var screenheight = 0;
var screenwidth = 0;

//Ausslesen der Bildschirmgroesse
Screen();

//Funktionen

//Bildschirmgroesse bestimmen
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
//EndInput
function EndInput(){
	var d = document.getElementById('Input');
	d.style.zIndex = 1;
	var d = document.getElementById('HintergrundUebung');
	d.style.zIndex = 10;
	var d = document.getElementById('rotesQuadrat');
	d.style.zIndex = 20;
	
}
//
//Setze Playmode
function SetPlaymode(){

}
//

//
function NextGame(){
	
}
//