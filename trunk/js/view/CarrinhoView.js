var CarrinhoView = function(){
	
}

CarrinhoView.prototype.listar = function() {
	var c = new Carrinho();
	arrayItemCompra = c.listar();
	$.each(arrayItemCompra, function(k,itemCompra){
		var tr = "<tr id='"+itemCompra.produto.codigo+"'><td>"+itemCompra.produto.codigo+"</td><td>"+itemCompra.produto.nome+"</td><td>R$ "+itemCompra.produto.preco+"</td>";
		tr += "<td><input type='text' id='quantidade' value='"+itemCompra.quantidade+"' size='3' /></td>";
		tr += "<td><button id='atualizar'>Atualizar</button><button id='excluir'>Excluir</button></td></tr>";
		$(tr).appendTo("#carrinho tbody");
	});
}; 

CarrinhoView.prototype.incluir = function(codigo, nome, preco) {
	var produto = new Produto();
	var itemCompra = new ItemCompra(produto, 1);

	produto.codigo = codigo;
	produto.nome = nome;
	produto.preco = preco;
	
	var c = new Carrinho();
	itemCompra = c.incluir(itemCompra);
	if(itemCompra != null){
		var tr = "<tr id='"+itemCompra.produto.codigo+"'><td>"+itemCompra.produto.codigo+"</td><td>"+itemCompra.produto.nome+"</td><td>R$ "+itemCompra.produto.preco+"</td>";
		tr += "<td><input type='text' id='quantidade' value='1' size='3' /></td>";
		tr += "<td><button id='atualizar'>Atualizar</button><button id='excluir'>Excluir</button></td></tr>";
		$(tr).appendTo("#carrinho tbody");
	}
};

CarrinhoView.prototype.excluir = function(itemCompra) {
	var c = new Carrinho();
	ok = c.excluir(itemCompra);
	if(ok){
		$("#carrinho #"+itemCompra.produto.codigo).remove();
	}
};

CarrinhoView.prototype.alterar = function(itemCompra) {
	var c = new Carrinho();
	ok = c.alterar(itemCompra);
	return ok;
};   
	

$(function(){

	var c = new CarrinhoView();
	c.listar();

	$("#produtos ul li button").live('click',function(){
		c.incluir(
			$(this).parents().find("#codigo").val(),
			$(this).parents().find("#nome").val(),
			$(this).parents().find("#preco").val()
			);
	});

	$("#carrinho tr td #excluir").live('click', function(){
		var produto = new Produto();
		produto.codigo = $(this).parents("tr").attr("id");
		var qtd =  $(this).parents().find("#quantidade").val();
		var itemCompra = new ItemCompra(produto, qtd);
		c.excluir(itemCompra);
	});

	$("#carrinho tr td #atualizar").live('click', function(){
		var produto = new Produto();
		produto.codigo = $(this).parents("tr").attr("id");
		var qtd = $(this).parents().find("#quantidade").val();
		var itemCompra = new ItemCompra(produto, qtd);
		ok = c.alterar(itemCompra);
		if(ok){
			alert("Quantidade Alterada!");
		}else{
			alert("Não foi Possivel Alterar tente mais tarde");
		}
	});

});