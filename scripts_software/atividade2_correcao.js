var flag = 1;
var flagdoc = 0;
Event.observe(document, 'flash:SalvaLocal', function(ev){
	flag = 1;
	exec_init();
});

Event.observe(window, 'load', function(){
	flagdoc = 1;
	exec_init();
});

function exec_init(){

	if (flag==1 && flagdoc==1)
	{

		var erro = false;
		if (getResp('atividade_1'))
		{
			if (getResp('atividade_1') != 3)
			{
				alert('Você precisa concluir a primeira atividade antes de iniciar a segunda.');
				setResp('atividade_2',0);
				erro = true;
				location.href = 'mapa.html';
			}
		}
		if (!erro)
		{
			if (PosicaoAtual.Parte == 0){
				if (flag){
					if (getResp('atividade_2') != 3){
						setResp('atividade_2',2);
					}

					if(getResp('a2_parte1_q1_a') != 'undefined'){
							if ($('parte1_q1_a')){
								$('parte1_q1_a').value = getResp('a2_parte1_q1_a');
							}
						}
					var total = getResp('valor_total');
					$('a2p1t1').update(Number(7000-total).toFixed(2));
					$('a2p1t3').update(Number(7000-total).toFixed(2));

				}
				Event.observe('parte1_q1_a', 'change', function(evento){
					if ($('parte1_q1_a').value != ""){
						setResp('a2_parte1_q1_a',$('parte1_q1_a').value);
					}
				});

				var prestacao_mensal = getResp('a2_meses');
				if ((prestacao_mensal == 200)||(prestacao_mensal == 250)||(prestacao_mensal == 300)||
					(prestacao_mensal == 350)||(prestacao_mensal == 400)){

					$('valor_inicial').addClassName('desabilitada');
					$('link_valor_inicial').hide();
					$('unset_inicial').show();
					$('meu_select_2').setValue(prestacao_mensal);
					$('meu_select_2').trava();

					removeEsperando({Parte: 0, Questao:'parte1_q1', Item: 0}, 'Valor da parcela definido: '+$('meu_select_2').value+',00 reais');
				}

			}else if (PosicaoAtual.Parte == 1){
				if (flag){

					if(getResp('a2_parte2_q2_a') != 'undefined'){
						if ($('parte2_q2_a')){
							$('parte2_q2_a').value = getResp('a2_parte2_q2_a');
						}
					}

					if(getResp('a2_parte2_q3_a') != 'undefined'){
						if ($('parte2_q3_a')){
							$('parte2_q3_a').value = getResp('a2_parte2_q3_a');
						}
					}

					if(getResp('a2_parte2_q3_b') != 'undefined'){
						if ($('parte2_q3_b')){
							$('parte2_q3_b').value = getResp('a2_parte2_q3_b');
						}
					}

					if(getResp('a2_parte2_q4_a') != 'undefined'){
						if ($('parte2_q4_a')){
							$('parte2_q4_a').value = getResp('a2_parte2_q4_a');
						}
					}

					if(getResp('a2_parte2_q4_b') != 'undefined'){
						if ($('parte2_q4_b')){
							$('parte2_q4_b').value = getResp('a2_parte2_q4_b');
						}
					}

					Event.observe('parte2_q3_a', 'change', function(evento){

						if ($('parte2_q3_a').value != ""){
							setResp('a2_parte2_q3_a',$('parte2_q3_a').value);
						}
					});

					Event.observe('parte2_q3_b', 'change', function(evento){

						if ($('parte2_q3_b').value != ""){
							setResp('a2_parte2_q3_b',$('parte2_q3_b').value);
						}
					});

					Event.observe('parte2_q2_a', 'change', function(evento){

						if ($('parte2_q2_a').value != ""){
							setResp('a2_parte2_q2_a',$('parte2_q2_a').value);
						}
					});

					Event.observe('parte2_q4_a', 'change', function(evento){

						if ($('parte2_q4_a').value != ""){
							setResp('a2_parte2_q4_a',$('parte2_q4_a').value);
						}
					});

					Event.observe('parte2_q4_b', 'change', function(evento){

						if ($('parte2_q4_b').value != ""){
							setResp('a2_parte2_q4_b',$('parte2_q4_b').value);
						}
					});

					var esperada = getResp('a2_parte1_q1_a');

					var total = getResp('valor_total');
					$('a2_R2').update(Number(7000-total).toFixed(2));

					$('a2_R3').update(getResp('a2_meses'));

					var aux = Number(esperada) + Number(esperada*0.02);
					var aux2 = Number(aux).toFixed(2);

					var D = getResp('a2_parte1_q1_a');
					setResp('valor_a1', D);
					var aux = 1.02;

				}
			}else if (PosicaoAtual.Parte == 2){
				if (flag){
					if(getResp('a2_parte3_q5_a') != 'undefined'){
						if ($('parte3_q5_a')){
							$('parte3_q5_a').value = getResp('a2_parte3_q5_a');
						}
					}
					if(getResp('a2_parte3_q5_b') != 'undefined'){
						if ($('parte3_q5_b')){
							$('parte3_q5_b').value = getResp('a2_parte3_q5_b');
						}
					}
					if(getResp('a2_parte3_q6_a') != 'undefined'){
						if ($('parte3_q6_a')){
							$('parte3_q6_a').value = getResp('a2_parte3_q6_a');
						}
					}

					Event.observe('parte3_q5_a', 'change', function(evento){

						if ($('parte3_q5_a').value != ""){
							setResp('a2_parte3_q5_a',$('parte3_q5_a').value);
						}
					});
					Event.observe('parte3_q5_b', 'change', function(evento){

						if ($('parte3_q5_b').value != ""){
							setResp('a2_parte3_q5_b',$('parte3_q5_b').value);
						}
					});
					Event.observe('parte3_q6_a', 'change', function(evento){

						if ($('parte3_q6_a').value != ""){
							setResp('a2_parte3_q6_a',$('parte3_q6_a').value);
						}
					});


				}
			}else if (PosicaoAtual.Parte == 3){
				if (flag){
					var total1 = getResp('valor_total');
					var total_pago = getResp('total_pago');
					total_pago = Number(total_pago).toFixed(2);
					var M = getResp('a2_meses');
					var a1 = Number(7000-Number(total1).toFixed(2)).toFixed(2)/getResp('a2_meses');
					var total = a1*(1-Math.pow(1.02,M))/-0.02;
					total = Number(total).toFixed(2);
					$('trans_1').update(getResp('a1_valor'));
					$('trans_2').update(getResp('a1_meses'));
					$('trans_3').update(getResp('a1_valor')*getResp('a1_meses'));
					$('trans_4').update(Number(total1).toFixed(2));
					$('trans_5').update(Number(7000-Number(total1).toFixed(2)).toFixed(2));
					$('trans_6').update(getResp('a2_meses'));
					var total = (7000 - getResp('valor_total'));
					var aux = Number(getResp('a1_valor')*getResp('a1_meses'));
					aux += Number(total_pago);
					aux = Number(aux).toFixed(2);

					$('trans_8').update(aux);
					permiteContinuar(true);
				}
			}
			atualiza_Bloco();
		}
	}
};


function ggbOnInit(){
	if ((PosicaoAtual.Parte == 1)||(PosicaoAtual.Parte == 2))
	{
		var applet = document.ggbApplet;
		if (flag)
		{
			var total = (7000 - getResp('valor_total'));
			applet.setValue('m',total);
			applet.setValue('p',getResp('a2_meses'));
			var esperada = applet.getValue('m')/applet.getValue('p');
			esperada = Math.ceil(esperada);
			esperada++;
			applet.setValue('n', esperada);
			applet.setVisible('poligono1',true);
		}
	}
	if (PosicaoAtual.Parte == 2){
		var applet = document.ggbApplet;
		if (flag){
			var total = (7000 - getResp('valor_total'));
			$('valor_emprestado').update(total);
			applet.setValue('m', total);
			applet.setValue('p',getResp('a2_meses'));
			var esperada = applet.getXcoord('A');

			var valor_span = getResp('a2_meses');
			valor_span = Number(valor_span).toFixed(2);
			$('valor_parcelas').update(valor_span);
			esperada = Math.floor(esperada);
			applet.setValue('n', esperada);

			zoomX = applet.getValue('zoomX')
			applet.setCoordSystem('-3', zoomX, '-500', '7000');

			var span1 = Number(total/getResp('a2_meses')).toFixed(2);
			span1 = Math.ceil(span1);
			if ($('span1')){
				$('span1').update(span1);
			}

			$('numero_parcelas').update(esperada);

			applet.setVisible('texto1',true);
		}
	}
}

function registerListeners_a1_p1(){
	var applet = document.ggbApplet;
	applet.registerUpdateListener("updateListener_a1_p1");
	applet.registerAddListener("addListener_a1_p1");
}

function addListener_a1_p1(objName) {
}

function updateListener_a1_p1(objName) {
}

function atualiza_Bloco(){
	if((getResp('a2_valor') != 'undefined')&&(getResp('a2_meses') != 'undefined')){
		MeuBloco[0]='Você escolheu financiar os <em>R$' + getResp('a2_valor') + '</em> restantes em parcelas no valor de <em>R$' +  getResp('a2_meses') + '.00</em>.';
	}
}

function seleciona_q_2_a(){
	var applet = document.ggbApplet;
	applet.setVisible('texto8',true);
	applet.setVisible('texto9',false);
	applet.setVisible('texto10',false);
}

function seleciona_q_3_a(){
	var applet = document.ggbApplet;
	applet.setVisible('poligono2',true);
	applet.setVisible('texto8',false);
	applet.setVisible('texto9',true);
	applet.setVisible('texto10',false);
}


function seleciona_q_3_b(){
	var applet = document.ggbApplet;
	applet.setVisible('texto8',false);
	applet.setVisible('texto9',true);
	applet.setVisible('texto10',false);
}


function seleciona_q_4_a(){
	var applet = document.ggbApplet;
	applet.setVisible('poligono3',true);
	applet.setVisible('texto8',false);
	applet.setVisible('texto9',false);
	applet.setVisible('texto10',true);

}

function seleciona_q_4_b(){
	var applet = document.ggbApplet;
	applet.setVisible('texto8',false);
	applet.setVisible('texto9',false);
	applet.setVisible('texto10',true);
}



//Um input de texto cuja resposta correta é 'qwe'
function corrige_q_1_a(valor)
{
	var valor01 = valor[0];
	for (var i = 0; i <= valor01.length/2; i++){
		valor01 = valor01.replace(",",".");
	}
	valor[0] = valor01;
	valor[0] = remover_espacos(valor[0]);
	//valor01 = processaExpressao(valor[0]);
	var applet = document.ggbApplet;
	var total = getResp('valor_total');
	var esperada = Number(Number(7000-total).toFixed(2)/getResp('a2_meses')).toFixed(2);
	esperada = Math.ceil(esperada);
	eval("resposta = Math.pow((" + valor[0] + "-" + esperada+"),2)");
	var resp = false;
	if (resposta <= 0.1){
		resp = true;
	}
	if (resp == true){
		setResp('a2_parte1_q1_a',esperada);
		return [true];
	}else{
		return [false];
	}
}
function corrige_q_2_a(valor)
{
	var valor01 = valor[0];
	for (var i = 0; i <= valor01.length/2; i++){
		valor01 = valor01.replace(",",".");
	}
	valor[0] = valor01;
	valor[0] = remover_espacos(valor[0]);
	//valor01 = processaExpressao(valor[0]);

	var applet = document.ggbApplet;

	applet.evalCommand('valor = f(1)');
	var esperada = applet.getValue('valor');

	var esperada = (7000 - getResp('valor_total') - getResp('a2_meses'));
	eval("resposta = Math.pow((" + valor[0] + "-" + esperada+"),2)");
	var resp = false;
	if (resposta <= 0.1){
		resp = true;
	}
	if (resp == true){
		//alert('merda');
		//alert(applet.getValue('p'));
		//alert(applet.getValue('m'))
		setResp('a2_parte2_q2_a',esperada);
		applet.setValue('valor1', esperada);
		applet.setVisible('texto1',true);
		applet.setVisible('poligono11',true);
		applet.evalCommand('meu_aux = f(1)');
		var meu_aux = applet.getValue('meu_aux');
		//alert(meu_aux);
		applet.setCoords('Apoligono1', 2,meu_aux);

		return [true];
	}else{
		return [false];
	}
}

function corrige_q_3_a(valor)
{
	var valor01 = valor[0];
	for (var i = 0; i <= valor01.length/2; i++){
		valor01 = valor01.replace(",",".");
	}
	valor[0] = valor01;
	valor[0] = remover_espacos(valor[0]);
	//valor01 = processaExpressao(valor[0]);

	var applet = document.ggbApplet;
	applet.evalCommand('valor = f(1)*1.01');
	var esperada = applet.getValue('valor');
	eval("resposta = Math.pow((" + valor[0] + "-" + esperada+"),2)");
	var resp = false;
	if (resposta <= 0.1){
		resp = true;
	}
	if (resp == true){
		setResp('a2_parte2_q3_a',esperada);
		applet.setVisible('texto3',true);
		applet.setVisible('poligono22',true);
		return [true];
	}else{
		return [false];
	}
}

function corrige_q_3_b(valor)
{
	var valor01 = valor[0];
	for (var i = 0; i <= valor01.length/2; i++){
		valor01 = valor01.replace(",",".");
	}
	valor[0] = valor01;
	valor[0] = remover_espacos(valor[0]);
	//valor01 = processaExpressao(valor[0]);

	var applet = document.ggbApplet;
	applet.evalCommand('valor = f(2)');
	var esperada = applet.getValue('valor');
	eval("resposta = Math.pow((" + valor[0] + "-" + esperada+"),2)");
	var resp = false;
	if (resposta <= 0.1){
		resp = true;
	}
	if (resp == true){
		var aux = esperada-300;
		applet.setValue('valor2', aux);
		//applet.setValue('valor3');
		applet.setValue('valor4',esperada);
		setResp('a2_parte2_q3_b',esperada);
		applet.setVisible('texto4',true);
		applet.setVisible('texto3',false);
		applet.setVisible('poligono222',true);
		applet.evalCommand('meu_aux = 0.99 * f(2)');
		var meu_aux = applet.getValue('meu_aux');
		//alert(meu_aux);
		applet.setCoords('Apoligono2', 12,meu_aux);
		return [true];
	}else{
		return [false];
	}
}

function corrige_q_4_a(valor)
{
	var valor01 = valor[0];
	for (var i = 0; i <= valor01.length/2; i++){
		valor01 = valor01.replace(",",".");
	}
	valor[0] = valor01;
	valor[0] = remover_espacos(valor[0]);
	//valor01 = processaExpressao(valor[0]);

	var applet = document.ggbApplet;
	applet.evalCommand('valor = f(2)*1.01');
	var esperada = applet.getValue('valor');
	eval("resposta = Math.pow((" + valor[0] + "-" + esperada+"),2)");
	var resp = false;
	if (resposta <= 0.1){
		resp = true;
	}
	if (resp == true){
		setResp('a2_parte2_q4_a',esperada);
		applet.setVisible('texto6',true);
		applet.setVisible('poligono33',true);
		return [true];
	}else{
		return [false];
	}
}

function corrige_q_4_b(valor)
{
	var valor01 = valor[0];
	for (var i = 0; i <= valor01.length/2; i++){
		valor01 = valor01.replace(",",".");
	}
	valor[0] = valor01;
	valor[0] = remover_espacos(valor[0]);
	//valor01 = processaExpressao(valor[0]);

	var applet = document.ggbApplet;
	applet.evalCommand('valor = f(3)');
	var esperada = applet.getValue('valor');
	var resp = false;
	if (esperada < 0 )
	{
		eval("resposta = Math.pow((" + valor[0]+"),2)");
		if (resposta <= 0.1){
			resp = true;
		}
	}
	else
	{
		eval("resposta = Math.pow((" + valor[0] + "-" + esperada+"),2)");
		if (resposta <= 0.1){
			resp = true;
		}
	}
	if (resp == true){
		setResp('a2_parte2_q4_b',esperada);
		var aux = esperada-300;
		applet.evalCommand('meu_aux = 0.99*f(3)');
		var meu_aux = applet.getValue('meu_aux');
		applet.setCoords('Apoligono3', 22,meu_aux);
		applet.setVisible('poligono333',true);
		applet.setVisible('texto7',true);
		applet.setVisible('texto6',false);
		return [true];
	}else{
		return [false];
	}
}

function corrige_q_5_a(valor)
{
	var valor01 = valor[0];
	for (var i = 0; i <= valor01.length/2; i++){
		valor01 = valor01.replace(",",".");
	}
	valor[0] = valor01;
	valor[0] = remover_espacos(valor[0]);
	//valor01 = processaExpressao(valor[0]);
	var applet = document.ggbApplet;
	var total = getResp('valor_total');
	var esperada = applet.getXcoord('A');
	esperada = Math.floor(esperada);
	resposta = Math.abs(valor[0] - esperada);
	var resp = false;
	if (resposta <= 0.01){
		resp = true;
	}
	if (resp == true){
		//setResp('a2_parte1_q1_a',esperada);
		return [true];
	}else{
		return [false];
	}
}

function corrige_q_5_b(valor)
{
	var valor01 = valor[0];
	for (var i = 0; i <= valor01.length/2; i++){
		valor01 = valor01.replace(",",".");
	}
	valor[0] = valor01;
	valor[0] = remover_espacos(valor[0]);
	valor01 = processaExpressao(valor[0]);

	var applet = document.ggbApplet;
	var coord = applet.getXcoord('A');
	coord = Math.floor(coord);
	applet.evalCommand("valor = f(" + coord + ")");
	var esperada = applet.getValue('valor');
	resposta = Math.abs(valor[0] - esperada);
	var resp = false;
	if (resposta <= 0.01){
		resp = true;
	}
	if (resp == true){
		//setResp('a2_parte2_q2_a',esperada);
		return [true];
	}else{
		return [false];
	}
}


function corrige_q_6_a(valor)
{
	var valor01 = valor[0];
	for (var i = 0; i <= valor01.length/2; i++){
		valor01 = valor01.replace(",",".");
	}
	valor[0] = valor01;
	valor[0] = remover_espacos(valor[0]);
	valor01 = processaExpressao(valor[0]);

	var applet = document.ggbApplet;
	var total = getResp('valor_total');
	total = Number(7000-total).toFixed(2);

	var parcelas_inteiras = Number(Math.floor(applet.getXcoord('A')));
	//parcelas_inteiras = parcelas_inteiras - 1;
	var pago = parcelas_inteiras*(applet.getValue('p'));

	var coord = applet.getXcoord('A');
	coord = Math.floor(coord);
	applet.evalCommand("restinho = f(" + coord + ")");
	var restinho = applet.getValue('restinho');

	pago = pago + restinho;

	setResp('total_pago', pago);

	diferenca = Math.abs(total-pago);

	if (Math.abs(Number(Math.abs(diferenca)-Math.abs(valor01))) <= 0.01)
	  return [true];
	else
	  return [false];
}

function muda_ponto(){
var applet = document.ggbApplet;

}

function set_inicial(){
	meses = getResp('a2_meses');
	setResp('a2_meses', $('meu_select_2').value);
	$('valor_inicial').addClassName('desabilitada');
	$('link_valor_inicial').hide();
	$('unset_inicial').show();
	removeEsperando({Parte: 0, Questao:'parte1_q1', Item: 0}, 'Valor da parcela definido: '+$('meu_select_2').value+',00 reais');
	setResp('a2_meses', $('meu_select_2').value);
	var total = getResp('valor_total');

	if (meses > 0)
	{
		$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_2_parte_0', '2');
		$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_2_parte_1', '1');
		$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_2_parte_2', '0');
		$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_2_parte_3', '0');
		$('SalvaLocal').Salva(nomeSoft, 'atividade_2', '2');
		location.reload();
	}

	setResp('a2_valor', Number(7000-total).toFixed(2));
	atualiza_Bloco();
	$('meu_select_2').trava();
}

function unset_inicial()
{
	if (this.resultado == 'sim')
	{
		$('valor_inicial').removeClassName('desabilitada');
		adicionaEsperando({Parte:0, Questao:'parte1_q1', Item: 0});
		$('link_valor_inicial').show();
		$('unset_inicial').hide();
		$('meu_select_2').destrava();

		$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_2_parte_0', '0');
		$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_2_parte_1', '0');
		$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_2_parte_2', '0');
		$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_2_parte_3', '0');
		gerencia_partes();
		permiteContinuar(false);
	}
}


// função que é chamada sempre que todas as questões de uma determinada parte são acertadas
function tudoCerto()
{
	if (PosicaoAtual.Parte == 2)
		$('SalvaLocal').Salva(nomeSoft, 'atividade_2', '3');
}
