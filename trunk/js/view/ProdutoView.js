var t2 = new T2();


var carrinho = [];
var p = new Produto();
p.codigo = 1;
p.nome = "Caixa";
p.preco = 10.00;
carrinho.push(p);

var p1 = new Produto();
p1.codigo = 2;
p1.nome = "sapato";
p1.preco = 10.00;
carrinho.push(p1);

var p2 = new Produto();
p2.codigo = 3;
p2.nome = "camisa";
p2.preco = 12.00;
carrinho.push(p2);

//console.log(carrinho);
console.log(JSON.stringify(carrinho));

var carrinhoString = JSON.stringify(carrinho);
carrinho = JSON.parse(carrinhoString);
console.log(JSON.parse(carrinhoString));

for (var i = 0; i < carrinho.length; i++) {
	console.log(carrinho[i].nome);

};