var CarrinhoView = function(){}

CarrinhoView.prototype.listar = function() {
	console.log("listar");
}; 

CarrinhoView.prototype.incluir = function(codigo, nome, preco) {
	var produto = new Produto();
	var itemCompra = new ItemCompra(produto, 1);

	produto.codigo = codigo;
	produto.nome = nome;
	produto.preco = preco;
	
	var c = new Carrinho();
	itemCompra = c.incluir(itemCompra);
	
}; 
	

$(function(){

	var c = new CarrinhoView();
	c.listar();

	$("#produtos ul li button").click(function(){
		c.incluir(
			$(this).parents().find("#codigo").val(),
			$(this).parents().find("#nome").val(),
			$(this).parents().find("#preco").val()
			);
	});

});