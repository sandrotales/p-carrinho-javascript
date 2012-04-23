var T2 = function(){};

T2.prototype.include = function(array){

	var path = "";
	
	try{

		var uri = decodeURI(window.location);
        var uriSplit = uri.split("/");
        uriSplit = "http://"+uriSplit[2]+"/"+uriSplit[3]+"/"+uriSplit[4]+"/";

		for (var i = 0; i<array.length ; i++) {

			var script = document.createElement("script");
			var newChar = array[i].split(".");
			newChar = newChar.join("/");  
			script.src = "js/"+newChar+".js";
			script.type = "text/javascript";
			var headId = document.getElementsByTagName('head')[0];
			headId.appendChild( script );
			//headId.insertBefore( script, headId.firstChild );
				
		};

		
	}catch(e){
		console.log(e.toString());
	}

	

}