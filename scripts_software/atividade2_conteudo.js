/*
	Padronização do ID: 
		- [['p/parte','q/questao','/item'],'_'] vai gerar um id do tipo p1_q2_1
		- [['p/parte','q/questao','/itemletra'],'_'] vai gerar um id do tipo p1_q2_a
	Palavras-chave: questao, parte, item, itemletra, subitem
	Devem ser precedidas de uma barra '/'.
	A palavra-chave subitem será usada somente em questões com mais de um campo
*/
var Partes = ['1','2','3','4'];
var nomeSoft = 'mat_fin';
var IdPadrao = [['parte/parte','q/questao','/itemletra','/subitem'],'_'];

/*
	Questoes
	
	Aqui ficam concentrados todos os conteudos das questões da atividade!
	Veja que está separado por Parte/Questão/Item
	
	ATENÇÃO: Cada tipo possui um formato de entrada característico.
*/

var Questoes = 
[
	{		
		parte1_q1: //Questão 1
		{
			enunciadoGeral: 'Com base no valor de parcela escolhido e no montante da sua dívida inicial com a sua avó (R$ <span id="a2p1t1"></span> reais), responda:',		
			itens: 
			[
				{//A
					enunciado: 'Se sua vó não lhe cobrasse juros, quantas parcelas você teria que pagar para zerar sua dívida para com ela?',
					tipo: 'input',
					corrigir: corrige_q_1_a,
					msgErro: 'Divida o valor da dívida pelo valor de cada parcela. No caso de a divisão não ser exata, a última parcela será um valor menor, mas deve ser levada em conta na resposta.',
					esperando: true
				}
			]
		}
	},
	{
		parte2_q2: //Questão 2
		{
			itens: 
			[
				{//A
					enunciado: 'Qual é o valor da sua dívida no final do primeiro mês?',			
					tipo: 'input',
					corrigir: corrige_q_2_a,
					selecionada: seleciona_q_2_a,
					msgErro: 'No primeiro mês, como sua avó ainda não lhe cobrou juros, sua dívida é igual ao valor inicial da dívida menos a primeira parcela paga.'
				}
			]
		},
		parte2_q3: //Questão 3
		{
			itens: 
			[
				{//A
					enunciado: 'Qual é o montante da dívida antes de você pagar a segunda parcela?',			
					tipo: 'input',
					corrigir: corrige_q_3_a,
					selecionada: seleciona_q_3_a,
					msgErro: 'Aplique o juros de 1% sobre a dívida restante, como se ela estivesse rendendo os juros da poupança.'
				},
				{
					enunciado: ' E depois de pagá-la?',			
					tipo: 'input',
					selecionada: seleciona_q_3_b,
					corrigir: corrige_q_3_b,
					msgErro: 'Subtraia o valor da parcela do valor atual da dívida calculado no item anterior.'
				}
			]
		},
		parte2_q4: //Questão 4
		{
			itens: 
			[
				{//A
					enunciado: 'Qual é o montante da dívida antes de você pagar a terceira parcela?',			
					tipo: 'input',
					corrigir: corrige_q_4_a,
					selecionada: seleciona_q_4_a,
					msgErro: 'Aplique mais uma vez os juros de 1% sobre a dívida restante.'
				},
				{//B
					enunciado: 'E depois de pagá-la?',			
					tipo: 'input',
					corrigir: corrige_q_4_b,
					selecionada: seleciona_q_4_b,
					msgErro: 'Subtraia o valor da parcela do valor atual da dívida, calculado no item anterior.'
				}
			]
		}
	},
	{
		parte3_q5: //Questão 5
		{
			enunciadoGeral: 'Analisando o gráfico, responda:',
			itens: 
			[
				{//A
					enunciado: 'Qual é o último mês em que a dívida ainda é positiva?',			
					tipo: 'input',
					corrigir: corrige_q_5_a,
					msgErro: 'Movimente o ponto azul e verifique qual é o último mês antes da dívida ser zerada, ou seja, antes dos pontos verdes ficarem abaixo do eixo X.'
				},
				{//B
					enunciado: 'Qual deve ser o valor pago na última parcela para zerar a dívida para com a sua avó?',			
					tipo: 'input',
					corrigir: corrige_q_5_b,
					msgErro: 'Cheque o valor da dívida no último mês em que ela é positiva.'
				}
			]
		},
		parte3_q6: //Questão 6
		{
			itens: 
			[
				{//A
					enunciado: 'Qual é a diferença entre o total que você pagou e o montante emprestado?',
					tipo: 'input',
					corrigir: corrige_q_6_a,
					msgErro: 'Lembre-se de que você pagou <span id="numero_parcelas"></span> parcelas com o valor de R$ <span id="valor_parcelas"></span>, e uma última com valor menor.',
					msgAjuda: 'Lembre-se de que o valor que sua avó financiou foi de R$ <span id="valor_emprestado"></span>.'
				}
			]
		}
	},
	{
	}
]

var MeuBloco = new Array(
);

Event.observe(window, 'load', function(){
	BlocoNotas = new Blocao();
});