var userInput = ""
var words = ["appel","aldus","afwas","aftel","aarde","armen","actie","apart","adres","avond","aders","alarm","boten","balen","beter","bomen","boren","boven","boxen",
	"brood","broek","brand","breed","benen","beeld","brief","beten","basis","blauw","beren","buren","banen","bloed","broer","blond","boter","beleg","breng",
	"baken","beker","blind","bezig","baden","bedel","bazen","bazin","baren","beden","beken","bezem","baard","bidet","breuk","conus","cello","creme","cloud",
 	"cacao","cadet","cavia","ceder","combi","china","clown","draai","deden","dalen","derde","delen","dwaas","daden","dader","dames","diner"	,"datum","dozen",
	"dreun","duits","dagen","deren","dwerg","dwaal","dwing","druil","droog","draad","dweil","drank","duren","dwars","drugs","daten","daler","doorn","disco",
	"elven","eigen","enger","engel","elder","enkel","effen","email","egaal","fiets","friet","files","forel","films","feest","fruit","falen","flora","fauna",
	"gebak","graag","genre","glans","geluk","geeuw","horen","heren","halen","hagel","haren","helen","harde","hemel","hoofd","huren","hamer","haken","heden",
	"inlog","inzet","innig","jeans","jemig","jeugd","joint","jonas","joule","koken","kreet","leeuw","maand","malen","maken","leeuw","maand","malen","maken",
	"koker","lezen","lucht","lenen","laser","lente","licht","lader","leder","lunch","lijst","leger","leden","legen","lagen","lezer","lever","lingo","loper","luier","lager"]
var randomWord = words[Math.floor(Math.random() *words.length)];
var arrayNr1 = randomWord.split("")
var container = document.getElementById("container")
var rows = 0;

for (var c = 1; c<=5 ; c++) {
	for (var d = 1; d<=5 ; d++){
		var knop = document.createElement("div");
		knop.setAttribute("class" ,"letter");
		knop.setAttribute("id" ,"lijn" + d + "regel" + c);
		container.appendChild (knop);
	}	
}

	
	



verzenden.onclick = controle1

document.getElementById("box").value = randomWord

function controle1() {
	userInput= document.getElementById("box2").value
	var arrayNr2 = userInput.split("")
	var lingowoord = randomWord.split("")
	rows = rows+1
	for (var a = 0; a<=4 ; a++) {
		document.getElementById("lijn" + (a+1) +"regel"+ rows).innerHTML= (arrayNr2[a])
		if (arrayNr1[a]==arrayNr2[a]) {
			document.getElementById("lijn" + (a+1) +"regel"+ rows).style.background="green";
			lingowoord[a] = null
			arrayNr2[a] = null
		}			
	}
	// for (var r = 0; r<=4 ; r++) {
	// 	if (arrayNr2[r] !== null){//als de letter niet null is voert hij de if uit
	// 		var position = lingowoord.indexof(arrayNr2[r]) //controler letter woord in lingo zit
	// 			if(position >-1){
	// 				document.getElementById("lijn" + (r+1) +"regel1").style.background="yellow"; //als de letter in het woord zit maar op een verkeerde plek word het geel
	// 			}
	// 	}

}

for (var k = 1; k<=1 ; k++){
	document.getElementById("lijn1regel" + k).innerHTML= (arrayNr1[0]);
}


	