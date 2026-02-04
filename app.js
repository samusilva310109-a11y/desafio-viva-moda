/******************************************************************************
 * Objetivo: Software simples com o objetivo de calcular os juros compostos envolvidos
 * em uma compra parcelada de um produto.
 * 
 * Solicitante: empresa Viva Moda
 * Autor: Samuel Silva Moreira Dos Santos
 * 
 * Data inicial do projeto: 04/02/2026
 * Versão: 1.0
 * 
*******************************************************************************/

function calcularMontante(capitalInicial, periodo, taxaJuros){
    let montante = capitalInicial * Math.pow((1 + (taxaJuros / 100)), periodo);
    return montante;
}

const { stdin, stdout } = require('process');
const readLine = require('readline');

const entradaDeDados = readLine.createInterface({
    input: stdin,
    output: stdout
});

entradaDeDados.question('Nome do cliente: ', function(nome){
    let nomeCliente = nome

    entradaDeDados.question('Nome do produto: ', function(produto){
            let nomeProduto = produto

            entradaDeDados.question('Valor da Compra: ', function(valor){
                    let valorProduto = valor

                    entradaDeDados.question('Insira a quantidade de parcelas: ',function(parcelas){
                            let qtdParcelas = parcelas

                            entradaDeDados.question('Insira a taxa de juros das parcelas: ', function(taxa){
                                let taxaJuros = taxa

                                entradaDeDados.question('Qual o período? Anos(a) ou meses(m):', function(periodo){
                                    let tipoPeriodo = periodo

                                    //validação
                                    if(isNaN(valorProduto) || isNaN(qtdParcelas) || isNaN(taxaJuros)){
                                        console.log('ERRO: OS VALORES: VALOR DA COMPRA, QUANTIDADE DE PARCELAS, TAXA DE JUROS DEVEM SEREM NUMÉRICOS')
                                    }else if(tipoPeriodo == "a" || tipoPeriodo == "m"){
                                        if(tipoPeriodo == 'a'){
                                            let parcelaAnualForMensal = Number(qtdParcelas) * 12
                                            let montante = calcularMontante(valorProduto, parcelaAnualForMensal, taxaJuros).toFixed(2)
                                            console.log(montante)
                                        }else{
                                            console.log('algo')
                                        }
                            
                                    }else{
                                        console.log('ERRO: SÃO APENAS VÁLIDOS OS VALORES "a" OU "m" PARA O TIPO DE PERIODO')
                                    }                                  
                                })
                            })
                    })
           })
    })
})