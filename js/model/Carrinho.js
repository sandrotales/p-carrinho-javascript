var Carrinho = function() {
	
	this.itemCompraList = null;
}

Carrinho.prototype = {

	dao: new CarrinhoDAO(),
	
	incluir: function(itemCompra){
		itemCompra = this.dao.incluir(itemCompra) || {};
		return itemCompra;
	},

	excluir: function(itemCompra){
		return this.dao.excluir(itemCompra);
	},

	listar: function(){
		return this.dao.listar();
	},

	limpar: function(){
		this.dao.limpar();
	},

	qtdProdutos: function(){
		return this.dao.qtdProdutos();
	},

	alterar: function(itemCompra){
		itemCompra = this.dao.alterar(itemCompra) || {};
		return itemCompra;
	}

};