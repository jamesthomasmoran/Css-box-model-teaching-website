	function resetBorderWidth(){
		document.getElementById('pixel').style.borderWidth='5px';
		document.getElementById('pixelWidthCode').innerHTML='5px';
		document.getElementById('size').style.borderWidth='thin';
		document.getElementById('sizeWidthCode').innerHTML='thin';
		document.getElementById('mixed').style.borderWidth='1px 10px 5px 7px';
		document.getElementById('mixedWidthCode').innerHTML='1px 10px 5px 7px';
	}
	
	function editBorderWidth(){
	
		var pixel=document.getElementById('pixelWidth').value;
		document.getElementById('pixel').style.borderWidth=pixel;
		document.getElementById('pixelWidthCode').innerHTML=pixel;
		
		var size=document.getElementById('sizeWidth').value;
		document.getElementById('size').style.borderWidth=size;
		document.getElementById('sizeWidthCode').innerHTML=size;
		
		var mixed=document.getElementById('mixedWidth').value;
		document.getElementById('mixed').style.borderWidth=mixed;
		document.getElementById('mixedWidthCode').innerHTML=mixed;
	}
	
	function resetBorderColor(){
		document.getElementById('name').style.borderColor='blue';
		document.getElementById('nameColorCode').innerHTML='blue';
		document.getElementById('hex').style.borderColor='#000000';
		document.getElementById('hexColorCode').innerHTML='#000000';
		document.getElementById('rgb').style.borderColor='rgb(0,255,0)';
		document.getElementById('rgbColorCode').innerHTML='rgb(0,255,0)';
	}
	
	function editBorderColor(){
	
		var name=document.getElementById('nameColor').value;
		document.getElementById('name').style.borderColor=name;
		document.getElementById('nameColorCode').innerHTML=name;
		
		var hex=document.getElementById('hexColor').value;
		document.getElementById('hex').style.borderColor=hex;
		document.getElementById('hexColorCode').innerHTML=hex;
		
		var rgb=document.getElementById('rgbColor').value;
		document.getElementById('rgb').style.borderColor=rgb;
		document.getElementById('rgbColorCode').innerHTML=rgb;
	    window.alert(window.innerWidth);
	}
	
	function resetBorderRadius(){
		document.getElementById('rounded').style.borderRadius='15px';
		document.getElementById('radiusCode').innerHTML='15px';
		
	}
	
	function editBorderRadius(){
	
		var radius=document.getElementById('radiusBorder').value;
		window.alert(radius);
		document.getElementById('rounded').style.borderRadius=radius;
		document.getElementById('radiusCode').innerHTML=radius;
		
	}
	
	function correctBorderStyle()
	{
		var bottomBorder=document.getElementById('topBorderStyleQ').value;
		var mixedBorder=document.getElementById('borderStyleMixedQ').value;
		var validBorder=document.getElementById('validStyleBorderQ').value;
	
		if(bottomBorder==="border-bottom-style"){
			document.getElementById('topBorderStyleQ').style.backgroundColor='#28ff8f';
		}else{
			document.getElementById('topBorderStyleQ').style.backgroundColor='#f45041';
		}
		if(mixedBorder==="dashed,solid,ridge,inset"){
			document.getElementById('borderStyleMixedQ').style.backgroundColor='#28ff8f';
		}else{
			document.getElementById('borderStyleMixedQ').style.backgroundColor='#f45041';
		}
		if(validBorder==="No"){
			document.getElementById('validStyleBorderQ').style.backgroundColor='#28ff8f';
		}else{
			document.getElementById('validStyleBorderQ').style.backgroundColor='#f45041';
		}
		if(bottomBorder==="border-bottom-style"&&mixedBorder==="dashed,solid,ridge,inset"&&validBorder==="No")
		{
			document.getElementById('borderWidth').style.display="block";
			
			}
	
	}
	
	function correctBorderWidth()
	{
		var topBorder=document.getElementById('topBorderWidthQ').value;
		var mixedBorder=document.getElementById('borderWidthMixedQ').value;
		var validBorder=document.getElementById('sizeBorderQ').value;
		if(topBorder==="border-top-width"){
			document.getElementById('topBorderWidthQ').style.backgroundColor='#28ff8f';
		}else{
			document.getElementById('topBorderWidthQ').style.backgroundColor='#f45041';
		}
		if(mixedBorder==="5px,15px,10px,1px"){
			document.getElementById('borderWidthMixedQ').style.backgroundColor='#28ff8f';
		}else{
			document.getElementById('borderWidthMixedQ').style.backgroundColor='#f45041';
		}
		if(validBorder==="thin,medium,thick"){
			document.getElementById('sizeBorderQ').style.backgroundColor='#28ff8f';
		}else{
			document.getElementById('sizeBorderQ').style.backgroundColor='#f45041';
		}
		if(topBorder==="border-top-width"&&mixedBorder==="5px,15px,10px,1px"&&validBorder==="thin,medium,thick")
		{
			document.getElementById('borderColor').style.display="block";
			}
	
	}
	
	function correctBorderColor()
	{
		var topBorderColor=document.getElementById('topBorderColorQ').value;
		var hexBorder=document.getElementById('hexBorderQ').value;
		var rgbBorder=document.getElementById('rgbBorderQ').value;
		if(topBorderColor==="border-left-color"){
			document.getElementById('topBorderColorQ').style.backgroundColor='#28ff8f';
		}else{
			document.getElementById('topBorderColorQ').style.backgroundColor='#f45041';
		}
		if(mixedBorder==="5px,15px,10px,1px"){
			document.getElementById('hexBorderQ').style.backgroundColor='#28ff8f';
		}else{
			document.getElementById('hexBorderQ').style.backgroundColor='#f45041';
		}
		if(validBorder==="thin,medium,thick"){
			document.getElementById('rgbBorderQ').style.backgroundColor='#28ff8f';
		}else{
			document.getElementById('rgbBorderQ').style.backgroundColor='#f45041';
		}
		if(topBorderColor==="border-top-style"&&mixedBorder==="5px,15px,10px,1px"&&validBorder==="thin,medium,thick")
		{
			document.getElementById('borderRadius').style.display="block";
			}
	
	}
