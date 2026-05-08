function calcularCambio (){
    let valorReal = parseFloat(document.getElementById("valorReal").value);

    if (isNaN(valorReal) || valorReal <=0){
    document.getElementById("resConversor").innerHTML = "DIGITE UM VALOR VALIDO";
    return;
    }
    let cotacao = 5.75;
    let taxaServico = 0.03;

    let valorDolar = valorReal / cotacao;
    let taxa = valorDolar * taxaServico;
    let totalfinal = valorDolar + taxa;

    document.getElementById("resConversor").innerHTML =
    "Conversão: $" + valorDolar.toFixed(2) + "<br>" +
    "Taxa (3%): $" + taxa.toFixed(2) + "<br>" + 
    "Total: $" + totalfinal.toFixed(2);
 }

 function finalizarVenda () {
    let precoProduto = parseFloat(document.getElementById("precoProduto").value);

    if(isNaN(precoProduto) || precoProduto <=0){
        document.getElementById("resVenda").innerHTML = "DiGITE UM VALOR VALIDO";
        return;
    }
       let desconto = parseFloat(document.getElementById("cupom").value);
       let valordesconto = precoProduto * desconto;
       let precofinal = precoProduto - valordesconto;

       document.getElementById("resVenda").innerHTML =
       "preço Produto: $" + precoProduto.toFixed(2) + "<br>" +
       "valor com desconto: $ " + valordesconto.toFixed(2) + "<br>" +
       "preço final: $ " + precofinal.toFixed(2);
 }

 function simularRendimento () {
    let capital = parseFloat(document.getElementById("capital").value);

    if(isNaN(capital) || capital <=0){
        document.getElementById("resInvestimento").innerHTML = "Digite Um valor Valido";
        return;
    }
        let taxa = parseFloat(document.getElementById("taxa").value);
        let rendimento = capital * (taxa/100)
        let valorRendido = capital + rendimento;

        document.getElementById("resInvestimento").innerHTML =
        "valor inicial $" + capital.toFixed(2) + "<br>" +
        "valor com a taxa $" + rendimento.toFixed(2) + "<br>" + 
        "Valor Rendido $" + valorRendido.toFixed(2);

 }

 window.onload = function() {
    setTimeout(function() {
        document.getElementById("loading").style.opacity = "0";
        
        setTimeout(function() {
            document.getElementById("loading").style.display = "none";
        }, 800);

    }, 3000);
}