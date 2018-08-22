	
	function resetFloat(){
		document.getElementById('floated').style.float='none';
		document.getElementById('floatCode').innerHTML='none';
		document.getElementById('floated').style.clear='none';
		document.getElementById('clearCode').innerHTML='none';
	}
	
	function editFloat(){
	
		var floats=document.getElementById('float').value;
		document.getElementById('floated').style.float=floats;
		document.getElementById('floatCode').innerHTML=floats;
		
		var clear=document.getElementById('clear').value;
		document.getElementById('floated').style.clear=clear;
		document.getElementById('clearCode').innerHTML=clear;
		
	}
	
	
	function correctFloat()
	{
		var q1=document.getElementById('leftFloatQ').value;
		var q2=document.getElementById('bothQ').value;
		var q3=document.getElementById('leftQ').value;
	
		if(q1==="left"){
			document.getElementById('leftFloatQ').style.backgroundColor='#28ff8f';
		}else{
			document.getElementById('leftFloatQ').style.backgroundColor='#f45041';
		}
		if(q2==="neither"){
			document.getElementById('bothQ').style.backgroundColor='#28ff8f';
		}else{
			document.getElementById('bothQ').style.backgroundColor='#f45041';
		}
		if(q3==="right"){
			document.getElementById('leftQ').style.backgroundColor='#28ff8f';
		}else{
			document.getElementById('leftQ').style.backgroundColor='#f45041';
		}
		if(q1==="left"&&q2==="neither"&&q3==="right")
		{
			document.getElementById('position').style.display="block";
			
			}
	
	}
	
	function correctPositionProperty()
	{
		var q1=document.getElementById('fixedQ').value;
		var q2=document.getElementById('staticQ').value;
		
	
		if(q1==="fixed"){
			document.getElementById('fixedQ').style.backgroundColor='#28ff8f';
		}else{
			document.getElementById('fixedQ').style.backgroundColor='#f45041';
		}
		if(q2==="static"){
			document.getElementById('staticQ').style.backgroundColor='#28ff8f';
		}else{
			document.getElementById('staticQ').style.backgroundColor='#f45041';
		}
	}
	
	
	
	
	
	
	

	