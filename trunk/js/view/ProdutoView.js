

var ProdutoView = function(produtos){
	
}

ProdutoView.prototype = {
	dipatcher: function(arrayProdutos){
		$.each(arrayProdutos,function(k,produto){
			var lista = "<li><h4>Codigo:"+produto.codigo+"</h4><h2>"+produto.nome+"</h2><h3>preço: R$ "+produto.preco+"</h3>";
			lista += "<button type='button'>Comprar</button>";
			lista += "<input type='hidden' id='codigo' value='"+produto.codigo+"'>";
			lista += "<input type='hidden' id='nome' value='"+produto.nome+"'>";
			lista += "<input type='hidden' id='preco' value='"+produto.preco+"'></li>";
			$(lista).appendTo("#listaProdutos");
		});
		
	}
};




var t2 = new T2();

var arrayProdutos = new Array();

var p = new Produto();
p.codigo = 1;
p.nome = "Caixa Super Box";
p.preco = 10.50;
arrayProdutos.push(p);

var p1 = new Produto();
p1.codigo = 2;
p1.nome = "Sapato Bico Fino";
p1.preco = 25.00;
arrayProdutos.push(p1);

var p2 = new Produto();
p2.codigo = 3;
p2.nome = "Camisa Polo";
p2.preco = 12.00;
arrayProdutos.push(p2);

var pView = new ProdutoView();
pView.dipatcher(arrayProdutos);


