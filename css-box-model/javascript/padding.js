	function resetIndividualSides(){
		
		document.getElementById('padding').style.padding='5px';
		document.getElementById('margins').style.margin='5px auto';
		document.getElementById('paddingTopCode').innerHTML="5px";
		document.getElementById('paddingRightCode').innerHTML="5px";
		document.getElementById('paddingBottomCode').innerHTML="5px";
		document.getElementById('paddingLeftCode').innerHTML="5px";
		document.getElementById('marginTopCode').innerHTML="5px";
		document.getElementById('marginRightCode').innerHTML="auto";
		document.getElementById('marginBottomCode').innerHTML="5px";
		document.getElementById('marginLeftCode').innerHTML="auto";
		
	}
	
	function editIndividualSides(){
	
		var top=document.getElementById('paddingTop').value;
		document.getElementById('padding').style.paddingTop=top;
		document.getElementById('paddingTopCode').innerHTML=top;
		document.getElementById('margins').style.marginTop=top;
		document.getElementById('marginTopCode').innerHTML=top;
		
		var right=document.getElementById('paddingRight').value;
		document.getElementById('padding').style.paddingRight=right;
		document.getElementById('paddingRightCode').innerHTML=right;
		document.getElementById('margins').style.marginRight=right;
		document.getElementById('marginRightCode').innerHTML=right;
		
		var bottom=document.getElementById('paddingBottom').value;
		document.getElementById('padding').style.paddingBottom=bottom;
		document.getElementById('paddingBottomCode').innerHTML=bottom;
		document.getElementById('margins').style.marginBottom=bottom;
		document.getElementById('marginBottomCode').innerHTML=bottom;
	
		var left=document.getElementById('paddingLeft').value;
		document.getElementById('padding').style.paddingLeft=left;
		document.getElementById('paddingLeftCode').innerHTML=left;
		document.getElementById('margins').style.marginLeft=left;
		document.getElementById('marginLeftCode').innerHTML=left;
	}
	
	function resetShorthandProperty(){
		document.getElementById('shorthand').style.padding='5px 10px 15px 20px';
		document.getElementById('shorthand').style.margin='5px 10px 15px 20px';
		document.getElementById('shorthandPaddingCode').innerHTML='5px 10px 15px 20px';
		document.getElementById('shorthandMarginCode').innerHTML='5px 10px 15px 20px';
	}
	
	function editShorthandProperty(){
	
		var padding=document.getElementById('shorthandPadding').value;
		document.getElementById('shorthand').style.padding=padding;
		document.getElementById('shorthandPaddingCode').innerHTML=padding;
		var margin=document.getElementById('shorthandMargin').value;
		document.getElementById('shorthand').style.margin=margin;
		document.getElementById('shorthandMarginCode').innerHTML=margin;
	}
	
	function resetpaddingWidth(){
		document.getElementById('boxSize').style.width='350px';
		document.getElementById('boxWidthCode').innerHTML='350px';
		document.getElementById('boxSize').style.boxSizing='border-box';
		document.getElementById('boxSizingCode').innerHTML='border-box';
		
	}
	
	function editpaddingWidth(){
	
		var width=document.getElementById('boxWidth').value;
		document.getElementById('boxSize').style.width=width;
		document.getElementById('boxWidthCode').innerHTML=width;
		var box=document.getElementById('boxSizing').value;
		document.getElementById('boxSize').style.boxSizing=box;
		document.getElementById('boxSizingCode').innerHTML=box;
		
	}
	
	function correctIndividualSides()
	{
		var q1=document.getElementById('topPaddingQ').value;
		var q2=document.getElementById('extraMarginQ').value;
		var q3=document.getElementById('negativeMarginQ').value;
	
		if(q1==="padding-top"){
			document.getElementById('topPaddingQ').style.backgroundColor='#28ff8f';
		}else{
			document.getElementById('topPaddingQ').style.backgroundColor='#f45041';
		}
		if(q2==="auto"){
			document.getElementById('extraMarginQ').style.backgroundColor='#28ff8f';
		}else{
			document.getElementById('extraMarginQ').style.backgroundColor='#f45041';
		}
		if(q3==="margin"){
			document.getElementById('negativeMarginQ').style.backgroundColor='#28ff8f';
		}else{
			document.getElementById('negativeMarginQ').style.backgroundColor='#f45041';
		}
		if(q1==="padding-top"&&q2==="auto"&&q3==="margin")
		{
			document.getElementById('shorthandProperty').style.display="block";
			
			}
	
	}
	
	function correctShorthandProperty()
	{
		var q1=document.getElementById('shortFirstQ').value;
		var q2=document.getElementById('validShortQ').value;
		var q3=document.getElementById('efficientMarginQ').value;
	
		if(q1==="margin-top"){
			document.getElementById('shortFirstQ').style.backgroundColor='#28ff8f';
		}else{
			document.getElementById('shortFirstQ').style.backgroundColor='#f45041';
		}
		if(q2==="15px 1px 10px 5px"){
			document.getElementById('validShortQ').style.backgroundColor='#28ff8f';
		}else{
			document.getElementById('validShortQ').style.backgroundColor='#f45041';
		}
		if(q3==="10px"){
			document.getElementById('efficientMarginQ').style.backgroundColor='#28ff8f';
		}else{
			document.getElementById('efficientMarginQ').style.backgroundColor='#f45041';
		}
		if(q1==="margin-top"&&q2==="15px 1px 10px 5px"&&q3==="10px")
		{
			document.getElementById('paddingWidth').style.display="block";
			
			}
	
	}
	
	function correctPaddingWidth()
	{
		var q1=document.getElementById('borderSizingQ').value;
		var q2=document.getElementById('valueWidthQ').value;
		
	
		if(q1==="box-sizing"){
			document.getElementById('borderSizingQ').style.backgroundColor='#28ff8f';
		}else{
			document.getElementById('borderSizingQ').style.backgroundColor='#f45041';
		}
		if(q2==="border-box"){
			document.getElementById('valueWidthQ').style.backgroundColor='#28ff8f';
		}else{
			document.getElementById('valueWIdthQ').style.backgroundColor='#f45041';
		}
		
	}
