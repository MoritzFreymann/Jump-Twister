'use strict';
// Variablen fuer die Eingabe
var dauer = 0;
var korrektedauer = 0;
var T = 0;
var Kommandotyp_Fuesse = 'leer';
var anzahl_haende = 'ohne';
var Kommandotyp_Haende = 'leer';
// Timer
var currenttime = 0;
var starttime = 0;
var lasttime = 0;
var time = 0;
// Zahlen
var linker_Fuss = 0;
var rechter_Fuss = 0;
var linke_Hand = 0;
var rechte_Hand = 0;
// Typ
var gemischt = false;
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

// --------------------------------------------------------------------------------
// EndInput
// ----------
// --------------------------------------------------------------------------------
function EndInput(){
	
	// verstecke Objekte
	document.getElementById('Input1').style.zIndex = 1;
	document.getElementById('Input2').style.zIndex = 1;
	document.getElementById('Input_anzahl_haende').style.zIndex = 1;
	document.getElementById('Input3').style.zIndex = 1;
	document.getElementById('fertig').style.zIndex = 1;

	document.getElementById('HintergrundUebung').style.zIndex = 10;
	
	// zeige Start Button
	document.getElementById('Start').style.zIndex = 20;


	//
	getvalues();
	
}
// --------------------------------------------------------------------------------
// Start
// ----------
// Wird aufgerufen, wenn der Start-Button gedrückt wird.
// Die Startzeit wird gespeichert, der Start-Button versteckt,
// die Objekte zur Anzeige während der Übung aufgerufen
// und die Funktion Do() wird zum ersten Mal aufgerufen
// --------------------------------------------------------------------------------
function Start(){

	// Startzeit in Sekunden
	var date = new Date();
	starttime = date.getHours() *3600 + date.getMinutes() *60 + date.getSeconds();
	
	// verstecke Start-Button
	document.getElementById('Start').style.zIndex = 1;
	
	// Aufrufen der Objekte
		document.getElementById('HintergrundUebung').style.zIndex = 10;
	document.getElementById('Timer').style.zIndex = 20;
	document.getElementById('Quadrat_linker_Fuss').style.zIndex = 20;
	document.getElementById('Quadrat_rechter_Fuss').style.zIndex = 20;
	
	if(anzahl_haende != 0){
	document.getElementById('Quadrat_linke_Hand').style.zIndex = 20;
	document.getElementById('Quadrat_rechte_Hand').style.zIndex = 20;
	}
	// los geht's
	Do();
}
// --------------------------------------------------------------------------------
// Do
// ----------
// Zentrale Function der App.
// Hier wird die aktuelle Zeit ermittelt, die verbleibende Zeit ermittelt
// und geprüft, ob das nächste Kommando fällig ist.
// Wenn das der Fall ist, wird entsprechend ausgwähltem Kommandotyp,
// das entsprechende Kommando ausgegeben.
// Zuletzt wird geprüft, ob die Übungszeit abgelaufen ist.
// Wenn nicht, dann wird Do() wieder aufgerufen,
// wenn ja, dann wird die End-Seite gezeigt und End() aufgerufen.
// --------------------------------------------------------------------------------
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
	
			// ---------------------------
			// Fuesse
			// ---------------------------
	
			// Wenn 'Gemischt', dann bestimme Typ
			if(Kommandotyp_Fuesse == 'Gemischt'){
				
				gemischt = true;
				
			}
			if(gemischt){
				Kommandotyp_Fuesse = getTyp();
			}
			
			switch(Kommandotyp_Fuesse){
				
			case 'Zahlen':
				// Setze Zahlen
				document.getElementById('Quadrat_linker_Fuss').style.color = 'black';
				document.getElementById('Quadrat_rechter_Fuss').style.color = 'black';
				document.getElementById('Quadrat_linker_Fuss').innerHTML = linker_Fuss;
				document.getElementById('Quadrat_rechter_Fuss').innerHTML = rechter_Fuss;
				// Setze Farben
				document.getElementById('Quadrat_linker_Fuss').style.backgroundColor = 'white';
				document.getElementById('Quadrat_rechter_Fuss').style.backgroundColor = 'white';
				// Setzte Rand
				document.getElementById('Quadrat_linker_Fuss').style.border = '1px solid black';
				document.getElementById('Quadrat_rechter_Fuss').style.border = '1px solid black';
				break;
				
			case 'Farben':
				// Erhalte neue Farben
				var color_left = getColor(linker_Fuss);
				var color_right = getColor(rechter_Fuss);
				// Setze Farben
				document.getElementById('Quadrat_linker_Fuss').style.backgroundColor = color_left;
				document.getElementById('Quadrat_rechter_Fuss').style.backgroundColor = color_right;
				// Setze Farben der Zahlen auf Farben der Quadrate
				document.getElementById('Quadrat_linker_Fuss').style.color = color_left;
				document.getElementById('Quadrat_rechter_Fuss').style.color = color_right;
				// Entferne Rand
				document.getElementById('Quadrat_linker_Fuss').style.border = '0px solid black';
				document.getElementById('Quadrat_rechter_Fuss').style.border = '0px solid black';
				break;
			default:
				alert('Unzulässige Eingabe!');
				break;
			}
			
			// ---------------------------
			// Haende
			// ---------------------------
			
			if(gemischt){
				Kommandotyp_Haende = getTyp();
			}
			switch(anzahl_haende){
				
			case 0:
				// mach nix
				break;
			case 1:
				break;
			case 2:
				
					switch(Kommandotyp_Haende){
				
					case 'Zahlen':
						// Setze Zahlen
						document.getElementById('Quadrat_linke_Hand').style.color = 'black';
						document.getElementById('Quadrat_rechte_Hand').style.color = 'black';
						document.getElementById('Quadrat_linke_Hand').innerHTML = linke_Hand;
						document.getElementById('Quadrat_rechte_Hand').innerHTML = rechte_Hand;
						// Setze Farben
						document.getElementById('Quadrat_linke_Hand').style.backgroundColor = 'white';
						document.getElementById('Quadrat_rechte_Hand').style.backgroundColor = 'white';
						// Setzte Rand
						document.getElementById('Quadrat_linke_Hand').style.border = '1px solid black';
						document.getElementById('Quadrat_rechte_Hand').style.border = '1px solid black';
						break;
						
					case 'Farben':
						// Erhalte neue Farben
						var color_left = getColor(linke_Hand);
						var color_right = getColor(rechte_Hand);
						// Setze Farben
						document.getElementById('Quadrat_linke_Hand').style.backgroundColor = color_left;
						document.getElementById('Quadrat_rechte_Hand').style.backgroundColor = color_right;
						// Setze Farben der Zahlen auf Farben der Quadrate
						document.getElementById('Quadrat_linke_Hand').style.color = color_left;
						document.getElementById('Quadrat_rechte_Hand').style.color = color_right;
						// Entferne Rand
						document.getElementById('Quadrat_linke_Hand').style.border = '0px solid black';
						document.getElementById('Quadrat_rechte_Hand').style.border = '0px solid black';
						break;
						
					default:
						alert('Unzulässige Eingabe!');
						break;
					}
					
				break;
			}

		}	

	// ---------------------------
	//	Prüfen, ob Übung vorbei
	// ---------------------------
	if(time > 0)
	{
		//	Naechstes Kommando
		var timeout = window.setTimeout('Do()', 1000);
	}
	else{
		// Uebung vorbei
		End();
	}
}
//
// --------------------------------------------------------------------------------
// End
// ----------
// Setzt alle Variablen zurück, versteckt alle Objekte und zeigt den Endbildschirm.
// --------------------------------------------------------------------------------
function End(){
	
	// Zuruecksetzten der Variablen
		// Variablen fuer die Eingabe
		dauer = 0;
		korrektedauer = 0;
		T = 0;
		Kommandotyp_Fuesse = 'leer';
		anzahl_haende = 'ohne';
		Kommandotyp_Haende = 'leer';
		// Timer
		currenttime = 0;
		starttime = 0;
		lasttime = 0;
		time = 0;
		// Zahlen
		linker_Fuss = 0;
		rechter_Fuss = 0;
		linke_Hand = 0;
		rechte_Hand = 0;
		// Typ
		gemischt = false;
		typ_fuesse = 1;
		typ_heande = 1;
	
	// Verstecken der Objekte
	document.getElementById('HintergrundUebung').style.zIndex = 1;
	document.getElementById('Timer').style.zIndex = 1;
	document.getElementById('Quadrat_linker_Fuss').style.zIndex = 1;
	document.getElementById('Quadrat_rechter_Fuss').style.zIndex = 1;
	document.getElementById('Quadrat_linke_Hand').style.zIndex = 1;
	document.getElementById('Quadrat_rechte_Hand').style.zIndex = 1;
	
	// Zeigen des Endbildschirms
	document.getElementById('Endbildschirm').style.zIndex = 10;
	
	// Zeigen der Buttons
	document.getElementById('Nochmal').style.zIndex = 20;	// Nochmal
	document.getElementById('Exit').style.zIndex = 20;		// Exit
}

// --------------------------------------------------------------------------------
// getValues
// ----------
// Auslesen der Input-Variablen
// --------------------------------------------------------------------------------
function getvalues(){
	
	// Auslesen Dauer
	dauer = document.getElementById("dauer").value;
	// Auslesen Zeit zwischen Kommandos
	T = document.getElementById("T").value;
	
	// Auslesen Kommandotyp_Fuesse
	if(document.getElementById("zahlen1").checked){
		Kommandotyp_Fuesse = document.getElementById("zahlen1").value;
	}
	if(document.getElementById("zahlen2").checked){
		Kommandotyp_Fuesse = document.getElementById("zahlen2").value;
	}
	if(document.getElementById("zahlen3").checked){
		Kommandotyp_Fuesse = document.getElementById("zahlen3").value;
	}
	
	// Auslesen Anzahl_Haende
	if(document.getElementById("anzahlhaende1").checked){
		var anzahl = document.getElementById("anzahlhaende1").value;
	}
	if(document.getElementById("anzahlhaende2").checked){
		var anzahl = document.getElementById("anzahlhaende2").value;
	}
	if(document.getElementById("anzahlhaende3").checked){
		var anzahl = document.getElementById("anzahlhaende3").value;
	}
		// string to number
		anzahl_haende = Number(anzahl);
	
	// Auslesen Kommandotyp_Haende
	if(document.getElementById("haende1").checked){
		Kommandotyp_Haende = document.getElementById("haende1").value;
	}
	if(document.getElementById("haende2").checked){
		Kommandotyp_Haende = document.getElementById("haende2").value;
	}
	if(document.getElementById("haende3").checked){
		Kommandotyp_Haende = document.getElementById("haende3").value;
	}	
}
// --------------------------------------------------------------------------------
// getrandomNumbers
// ----------
// Berechnet mithilfe der Funktion Math.random() Zufallszahlen
// zwischen 1 und 4 und speichert bei den entsprechenden 
// globalen Variablen, welche das Komando angeben ab.
// --------------------------------------------------------------------------------
function getrandomNumbers(){
	
	// linker Fuss
	var random = Math.random() * 4;
	linker_Fuss = Math.ceil(random);
	// rechter_Fuss
	var random = Math.random() * 4;
	rechter_Fuss = Math.ceil(random);
	// linke Hand
	var random = Math.random() * 4;
	linke_Hand = Math.ceil(random);
	// rechte_Hand
	var random = Math.random() * 4;
	rechte_Hand = Math.ceil(random);
}
// --------------------------------------------------------------------------------
// getColor
// ----------
// Ermittel aus der Zufallszahl die entsprechende Farbe.
// --------------------------------------------------------------------------------
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
// --------------------------------------------------------------------------------
// getTyp
// ----------
// Berechnet und gibt den aktuellen Kommandotyp zurück,
// wenn Kommandotyp 'Gemischt' eingegeben wurde.
// --------------------------------------------------------------------------------
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
// --------------------------------------------------------------------------------
// nochmal
// ----------
// Berechnet und gibt den aktuellen Kommandotyp zurück,
// wenn Kommandotyp 'Gemischt' eingegeben wurde.
// --------------------------------------------------------------------------------
function nochmal(){
	
	console.log('cookie');
	// Verstecke Endbildschirm und Buttons
	document.getElementById('Endbildschirm').style.zIndex = 1;
	document.getElementById('Nochmal').style.zIndex = 1;
	document.getElementById('Exit').style.zIndex = 1;
	
	// Zeige Objekte für Input
	document.getElementById('Input1').style.zIndex = 20;
	document.getElementById('Input2').style.zIndex = 20;
	document.getElementById('Input_anzahl_haende').style.zIndex = 20;
	document.getElementById('Input3').style.zIndex = 20;
	document.getElementById('fertig').style.zIndex = 20;
}
// --------------------------------------------------------------------------------
// exit
// ----------
// Schließt den Tab, in dem die App geöffnet wurde
// --------------------------------------------------------------------------------
function exit(){
	window.close();
}