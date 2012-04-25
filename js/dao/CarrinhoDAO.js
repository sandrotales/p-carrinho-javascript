var CarrinhoDAO = function() {
	
	this.itemCompraList = [];
	this.t2 = new T2();
	this.key = "arrayItens";
}


CarrinhoDAO.prototype = {

	verificar: function(itemCompra){
		var storage = localStorage.getObject(this.key),
		flag = false,
		objProduto = itemCompra.produto || {};
		for (var i = 0; i < storage.length; i++) {
			if(storage[i].produto.codigo == objProduto.codigo){
				flag = true;
			}
		}
		return flag;
	},

	incluir: function(itemCompra){
		
		if ( typeof itemCompra != "object") {
			return false;
		}
		try{

			var storage = localStorage.getObject(this.key);
			if(storage!=null){
				this.itemCompraList = storage;
				if(!this.verificar(itemCompra)){
					this.itemCompraList.push(itemCompra);
				}else{
					alert("Produto ja inserido. Aumente a quantidade no carrinho de compras.");
				}
			}else{
				this.itemCompraList.push(itemCompra);
			}
			localStorage.setObject(this.key, this.itemCompraList);
			return itemCompra;	
		}catch(e){
			console.log(e.toString());
		}
	},

	excluir: function(itemCompra){
		var storage = localStorage.getObject(this.key);
		var flag = false;
		for (var i = 0; i < storage.length; i++) {
			if(storage[i].produto.codigo == itemCompra.produto.codigo){
				storage.splice(i,1);
				flag = true;
			}
		}
		localStorage.setObject(this.key, storage);	
		return flag;
	},

	listar: function(){
		var storage = localStorage.getObject(this.key);
		return storage;
	},

	limpar: function(){
		localStorage.clear();
	},

	qtdProdutos: function(){
		var storage = localStorage.getObject(this.key);
		return storage.length;
	},

	alterar: function(itemCompra){
		var storage = localStorage.getObject(this.key);
		if(storage!=null){
			this.itemCompraList = storage;
			var flag = true;
			for (var i = 0; i < this.itemCompraList.length; i++) {
				if(this.itemCompraList[i].produto.codigo == itemCompra.produto.codigo){
					this.itemCompraList[i].quantidade = itemCompra.quantidade;
				}
			}
			
			localStorage.setObject(this.key, this.itemCompraList);
			return itemCompra;		
		}
	}
	
};