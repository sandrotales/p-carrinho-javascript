

var ProdutoView = function(produtos){
	
}

var ProdutoView = {
	dipatcher: function(){
		var ul = document.CreateElement("ul");
	}
};




var t2 = new T2();



var p = new Produto();
p.codigo = 1;
p.nome = "Caixa";
p.preco = 10.00;


var p1 = new Produto();
p1.codigo = 2;
p1.nome = "sapato";
p1.preco = 10.00;


var p2 = new Produto();
p2.codigo = 3;
p2.nome = "camisa";
p2.preco = 12.00;



var item1 = new ItemCompra(p,4);
var item2 = new ItemCompra(p1,2);
var item3 = new ItemCompra(p2,5);
//console.log(item1.produto.codigo)

var carrinhoDao = new CarrinhoDAO();
//carrinhoDao.incluir(item1);
//carrinhoDao.limpar();
//carrinhoDao.incluir(item2);
//carrinhoDao.incluir(item3);

var carrinho = new Carrinho();
//carrinho.incluir(item2);
//console.log(carrinho.incluir(item3));
//console.log(carrinho.qtdProdutos());

//var carrinhoString = JSON.stringify(carrinho);
//carrinho = JSON.parse(carrinhoString);
//console.log(JSON.parse(carrinhoString));

//for (var i = 0; i < carrinho.length; i++) {
//	console.log(carrinho[i].nome);

//};

var produtos = [
	{
		codigo: 1,
		nome: "Caixa",
		preco: 5.00
	},
	{
		codigo: 2,
		nome: "Sapato",
		preco: 15.00
	},
	{
		codigo: 3,
		nome: "Camisa",
		preco: 20.00
	},
	{
		codigo: 4,
		nome: "Televisão",
		preco: 500.00
	}
];

