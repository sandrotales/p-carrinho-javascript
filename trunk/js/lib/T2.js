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
/*
** para chamar eventos crossBrowser
** exemplo: T2.eventCross.addHandler(botaoId, "click", function(){} )
*/

T2.prototype.eventCross = {
	addHandler: function(element, type, handler){
		if(element.addEventListener){
			element.addEventListener(type, handler, false);
		} else if(element.attachEvent){
			element.attachEvent("on"+type, handler);
		} else{
			element["on"+type] = handler;
		}
	},

	removeHandler: function(){
		if(element.removeEventListener){
			element.removeEventListener(type, handler, false);
		} else if(element.detachEvent){
			element.detachEvent("on"+type, handler);
		} else{
			element["on"+type] = null;
		}
	}
};


/*
** criado dois metodos para o Storage para incluir objetos no lugar de string
** exemplo: localStorage.setObject(key, obj);
*/

Storage.prototype.setObject = function(key, value){
	this.setItem(key, JSON.stringify(value));
}
Storage.prototype.getObject = function(key){
	return this.getItem(key) && JSON.parse(this.getItem(key));
}