var userInput = ""
var words = ["brood"]
var randomWord = words[Math.floor(Math.random() *words.length)];
var arrayNr1 = randomWord.split("")
var container = document.getElementById("container")
var rows = 0;
var goeieLetters = 0;

verzenden.onclick = controle1

resetButton=document.getElementById("reset");
resetButton.onclick=reset;

document.getElementById("box").value = randomWord

for (var c = 1; c<=5 ; c++) {
	for (var d = 1; d<=5 ; d++){
		var knop = document.createElement("div");
		knop.setAttribute("class" ,"letter");
		knop.setAttribute("id" ,"lijn" + d + "regel" + c);
		container.appendChild (knop);
	}	
}

function controle1() {
	userInput= document.getElementById("box2").value
	var arrayNr2 = userInput.split("")
	var lingowoord = randomWord.split("")
	if (arrayNr2.length!==5) {
		alert("Het woord moet minimaal 5 letters zijn")
	}
	else{
		rows = rows +1
		for (var a = 0; a<=4 ; a++) {
			document.getElementById("lijn" + (a+1) +"regel"+ rows).innerHTML= (arrayNr2[a])
			if (arrayNr1[a]==arrayNr2[a]) {
				document.getElementById("lijn" + (a+1) +"regel"+ rows).style.background="green";
				lingowoord[a] = null
				arrayNr2[a] = null
				goeieLetters = +1
			}	
		if(goeieLetters == 5){
			victory();
		}
		}		
		for (var r = 0; r<=4 ; r++) {
			if (arrayNr2[r] !== null){//als de letter niet null is voert hij de if uit
				var position = lingowoord.indexOf(arrayNr2[r]) //controler letter woord in lingo zit
					if(position >-1){
						document.getElementById("lijn" + (r+1) + "regel"+ rows).style.background="yellow"; //als de letter in het woord zit maar op een verkeerde plek word het geel
					}
			}
		}	
	}
	if(rows == 5){
		victory();
	}
}

function victory(){
	document.getElementById("verzenden").style.display= "none";
}

for (var k = 1; k<=5 ; k++){
	document.getElementById("lijn1regel" + k).innerHTML= (arrayNr1[0]);
}

function reset(){
	window.location.reload();
	document.getElementById("userInput").value = "";
}




	