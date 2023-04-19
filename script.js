setInterval(changeSlide,2000);

function showMore(){
	let showDiv=document.getElementById('more');
	
	if(document.getElementById('ShowMore').innerHTML=='Show Less'){
		showDiv.classList.add('hidden');	
		document.getElementById('ShowMore').innerHTML='Show More';
	}
	else{
		showDiv.classList.remove('hidden');
		document.getElementById('ShowMore').innerHTML='Show Less';
	}
}
function More(){
	let showDiv=document.getElementById('more1');
	
	if(document.getElementById('SMore').innerHTML=='Show Less'){
		showDiv.classList.add('hidden');	
		document.getElementById('SMore').innerHTML='Show More';
	}
	else{
		showDiv.classList.remove('hidden');
		document.getElementById('SMore').innerHTML='Show Less';
	}
}

function showResults(){
	let sectionResults=document.getElementById("result");
	sectionResults.classList.remove("hidden");
	let Q1=document.getElementById("txt-Q1").value;
	let Q2=document.getElementById("txt-Q2").value;
	let Q3=document.getElementById("txt-Q3").value;
	let Q4=document.getElementById("txt-Q4").value;
	let correct=0;
	
	if(document.getElementById("txt-Q1").value=="CSS"){
		document.getElementById("para-1").innerHTML="Question 1- Correct";
		correct=correct+1;
	} else{	
		document.getElementById("para-1").innerHTML="Question 1- Incorrect";

	}

	if(document.getElementById("txt-Q2").value=="links"){
		document.getElementById("para-2").innerHTML="Question 1- Correct";
		correct=correct+1;
	} else{	
		document.getElementById("para-2").innerHTML="Question 1- Incorrect";

	}
	
	if(document.getElementById("txt-Q3").value=="!doctype html"){
		document.getElementById("para-3").innerHTML="Question 1- Correct";
		correct=correct+1;
	} else{	
		document.getElementById("para-3").innerHTML="Question 1- Incorrect";

	}
	
	if(document.getElementById("txt-Q4").value=="h1"){
		document.getElementById("para-4").innerHTML="Question 1- Correct";
		correct=correct+1;
	} else{	
		document.getElementById("para-4").innerHTML="Question 1- Incorrect";

	}
	
	var score="score: " + correct+ "/4";
	document.getElementById("score").innerHTML=score;
}

function changeSlide(){
	if(!document.getElementById("me1").classList.contains("hidden")){
		me1.classList.add("hidden");
		me2.classList.remove("hidden");
	}

	else if(!document.getElementById("me2").classList.contains("hidden")){
		me2.classList.add("hidden");
		me3.classList.remove("hidden");
	}

	else if(!document.getElementById("me3").classList.contains("hidden")){
		me3.classList.add("hidden");
		me4.classList.remove("hidden");
	}
	
	else{
		me4.classList.add("hidden");
		me1.classList.remove("hidden");
	}
}
	
	
	

