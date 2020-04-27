/*
	Padronização do ID: 
		- [['p/parte','q/questao','/item'],'_'] vai gerar um id do tipo p1_q2_1
		- [['p/parte','q/questao','/itemletra'],'_'] vai gerar um id do tipo p1_q2_a
	Palavras-chave: questao, parte, item, itemletra, subitem
	Devem ser precedidas de uma barra '/'.
	A palavra-chave subitem será usada somente em questões com mais de um campo
*/
var Partes = ['1','2','3','4','5'];
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
	},
	{
		parte2_q1: //Questão 1
		{
			itens: 
			[
				{//A
					enunciado: 'Uma vez que os juros são de 1% ao mês, quanto terá sido acumulado na poupança no início do segundo mês?',
					selecionada: seleciona_q_1_a,
					tipo: 'input',
					corrigir: corrige_q_1_a,
					msgAjuda: 'Veja no gráfico que, para obter esse valor, basta calcular os juros do período e somá-los ao valor acumulado no primeiro mês e ao novo valor depositado.',
					msgErro: 'Para auxiliar esse cálculo, utilize a calculadora. Lembre-se sempre de que, ao fim de cada mês, são aplicados os juros ao saldo final do mês anterior'
				}
			]
		},
		parte2_q2: //Questão 2
		{
			itens: 
			[
				{//A
					enunciado: 'Qual é o valor total acumulado no início do terceiro mês?',			
					tipo: 'input',
					selecionada: seleciona_q_2_a,
					corrigir: corrige_q_2_a,
					msgAjuda: 'Veja no gráfico que, para obter esse valor, basta calcular os juros do período e somá-los ao valor acumulado no segundo mês e ao novo valor depositado.',
					msgErro: 'Para auxiliar esse cálculo, utilize a calculadora. Lembre-se sempre de que, ao fim de cada mês, são aplicados os juros ao saldo final do mês anterior'
				}
			]
		}
	},
	{
		parte3_q3: //Questão 3
		{
			itens: 
			[
				{//A
					enunciado: 'Seguindo o padrão dos casos acima, qual seria o valor acumulado no início do 4º mês?',			
					tipo: 'multipla_escolha',
					corrigir: corrige_q_3_a,
					selecionada: seleciona_q_3_a,
					dados:	[
						{value: '0', label: 'R$<span id="a1p3q3a"></span>'},
						{value: '0', label: 'R$<span id="a1p3q3b"></span>'},
						{value: '0', label: 'R$<span id="a1p3q3c"></span>'},
						{value: '1', label: 'R$<span id="a1p3q3d"></span>'},
						{value: '0', label: 'R$<span id="a1p3q3e"></span>'}
					],
					msgErro: 'Perceba que o valor obtido em cada mês é a soma daquilo que havia no mês anterior com a nova parcela, depositada no mês corrente.'
				}
			]
		},
		parte3_q4: //Questão 4
		{
			enunciadoGeral: 'Perceba que, para saber o total acumulado em cada mês, basta saber o primeiro termo e a razão dessa P. G.. Com base nisso, responda:',			
			itens: 
			[
				{//A
					tipo: 'input',
					enunciado:'Qual é a razão (q) dessa P. G.?',
					corrigir: corrige_q_4_a,
					dependente: true,
					selecionada: seleciona_q_4_a,
					msgErro: 'Consulte a tabela do início desta parte para identificar o primeiro termo e a razão da sequência.',
					msgAjuda: 'Lembre-se de que a razão é a constante pela qual se multiplica cada termo da P. G..'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_4_b,
					dependente: true,
					selecionada: seleciona_q_4_a,
					enunciado: 'Qual é o seu primeiro termo (a<sub>1</sub>)?',
					msgErro: 'Consulte a tabela do início desta parte para identificar o primeiro termo e a razão da sequência.',
					msgAjuda: 'Lembre-se de que a razão é a constante pela qual se multiplica cada termo da P.G..'
				}
			]
		}
	},
	{
		parte4_q5: //Questão 5
		{
			enunciadoGeral: 'Verifique qual será o total acumulado no banco em cada um dos seguintes meses:',
			itens: 
			[
				{//A
					enunciado: '<span id="a1p4q5a"></span>º mês',			
					tipo: 'input',
					corrigir: corrige_q_5_a,
					selecionada: seleciona_q_5_a,
					msgErro: 'Para saber o total acumulado no início de cada mês, basta posicionar, sobre o mês correspondente, o ponto que está no eixo das abscissas.'
				},
				{//B
					enunciado: '<span id="a1p4q5b"></span>º mês',			
					tipo: 'input',
					corrigir: corrige_q_5_b,
					selecionada: seleciona_q_5_b,
					msgErro: 'Para saber o total acumulado no início de cada mês, basta posicionar, sobre o mês correspondente, o ponto que está no eixo das abscissas.'
				},
				{//C
					enunciado: '<span id="a1p4q5c"></span>º mês',			
					tipo: 'input',
					corrigir: corrige_q_5_c,
					selecionada: seleciona_q_5_c,
					msgErro: 'Para saber o total acumulado no início de cada mês, basta posicionar, sobre o mês correspondente, o ponto que está no eixo das abscissas.'
				}
			]
		}
	},
	{
		parte5_q6: //Questão 6
		{
			itens: 
			[
				{//A
					enunciado: 'Qual é a diferença, em dinheiro, entre o total acumulado na poupança e o total acumulado em casa no último mês?',			
					tipo: 'input',
					corrigir: corrige_q_6_a,
					depois: '&nbsp; = <span id="parte1_q7_a_resp"></span>',
					msgErro: 'Movimente o ponto azul do gráfico para observar os valores acumulados nos respectivos meses.'
				},
				{//B
					enunciado: 'Qual é a razão entre o valor acumulado no último mês na poupança e o acumulado no último mês em casa?',			
					tipo: 'input',
					corrigir: corrige_q_6_b,
					msgAjuda: 'A razão entre a e b é o mesmo que a divisão a/b.',
					depois: '&nbsp; = <span id="parte1_q7_b_resp"></span>',
					msgErro: 'Movimente o ponto azul do gráfico para observar os valores acumulados nos respectivos meses.'
				}
			]
		}
	}
]

var MeuBloco = new Array(
);

Event.observe(window, 'load', function(){
	BlocoNotas = new Blocao();
});