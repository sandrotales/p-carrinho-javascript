var Carrinho = function() {
	
	this.itemCompraList = null;
}

Carrinho.prototype = {

	dao: new CarrinhoDAO(),
	
	incluir: function(){
		console.log(this.dao);
		
	},

	excluir: function(){
		var dao = new CarrinhoDAO();
		
	},

	listar: function(){
		var dao = new CarrinhoDAO();
		
	},

	limpar: function(){
		var dao = new CarrinhoDAO();
		
	},

	qtdProdutos: function(){
		var dao = new CarrinhoDAO();
		
	},

	alterar: function(){
		var dao = new CarrinhoDAO();
	}

};