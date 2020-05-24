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

		if (PosicaoAtual.Parte == 0){
			if (flag){
				if (getResp('atividade_1') != 3){
					setResp('atividade_1',2);
				}
			}
			meses = getResp('a1_meses');
			valor = getResp('a1_valor');
			if (meses > 0 )
			{
				$('valor_inicial').addClassName('desabilitada');
				$('meu_select').setValue(valor);
				$('meu_select').trava();
				$('meu_select_2').setValue(meses);
				$('meu_select_2').trava();
				$('link_valor_inicial').hide();
				$('unset_inicial').show();
			}
			else
			{
				$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_1_parte_0', '0');
				$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_1_parte_1', '0');
				gerencia_partes();
				permiteContinuar(false);
			}
		}
		else if (PosicaoAtual.Parte == 1){
			if (flag){
				$('D_dias').update(getResp('a1_valor'));
				$('valor_deposito_mensal').update(getResp('a1_valor'));
				$('valor_deposito_mensal2').update(getResp('a1_valor'));
				$('valor_deposito_mensal3').update(getResp('a1_valor'));
				$('M_meses').update(getResp('a1_meses'));

				if(getResp('parte2_q1_a') != 'undefined'){
					if ($('parte2_q1_a')){
						$('parte2_q1_a').value = getResp('parte2_q1_a');
					}
				}
				Event.observe('parte2_q1_a', 'change', function(evento){

					if ($('parte2_q1_a').value != ""){
						setResp('parte2_q1_a',$('parte2_q1_a').value);
					}
				});

				if(getResp('parte2_q2_a') != 'undefined'){
					if ($('parte2_q2_a')){
						$('parte2_q2_a').value = getResp('parte2_q2_a');
					}
				}
				Event.observe('parte2_q2_a', 'change', function(evento){

					if ($('parte2_q2_a').value != ""){
						setResp('parte2_q2_a',$('parte2_q2_a').value);
					}
				});
			}
		}else if (PosicaoAtual.Parte == 2){
			if (flag){
				$('a1_p2_1mes').update(getResp('a1_valor') + ' reais');
				$('a1_p2_2mes').update(getResp('a1_valor') + " + 1.01*" + getResp('a1_valor')+ ' reais');
				$('a1_p2_3mes').update(getResp('a1_valor') + " + 1.01*" + getResp('a1_valor') + " + 1.01²*" + getResp('a1_valor')+ ' reais');

				var aux = 1.01;
				var D = Number(getResp('a1_valor'));

				$('a1p3q3a').update(Number(4*D).toFixed(2));
				$('a1p3q3b').update(Number(aux*aux*aux*D).toFixed(2));
				$('a1p3q3c').update(Number(aux*aux*aux*aux*D).toFixed(2));
				$('a1p3q3d').update(Number(D + aux*D + aux*aux*D + aux*aux*aux*D).toFixed(2));
				$('a1p3q3e').update(Number(D + aux*D + aux*aux*D + aux*aux*aux*D + aux*aux*aux*aux*D).toFixed(2));


				if (getResp('parte3_q3_a') == 1)
					$('parte3_q3_a_1').checked = 1;
				if (getResp('parte3_q3_a') == 2)
					$('parte3_q3_a_2').checked = 1;
				if (getResp('parte3_q3_a') == 3)
					$('parte3_q3_a_3').checked = 1;
				if (getResp('parte3_q3_a') == 4)
					$('parte3_q3_a_4').checked = 1;
				if (getResp('parte3_q3_a') == 5)
					$('parte3_q3_a_5').checked = 1;

				if(getResp('parte3_q4_a') != 'undefined'){
					if ($('parte3_q4_a')){
						$('parte3_q4_a').value = getResp('parte3_q4_a');
					}
				}
				if(getResp('parte3_q4_b') != 'undefined'){
					if ($('parte3_q4_b')){
						$('parte3_q4_b').value = getResp('parte3_q4_b');
					}
				}

				Event.observe('parte3_q3_a_1', 'change', function(evento){
					if ($('parte3_q3_a_1').value != ""){
						setResp('parte3_q3_a',1);
					}
				});
				Event.observe('parte3_q3_a_2', 'change', function(evento){
					if ($('parte3_q3_a_2').value != ""){
						setResp('parte3_q3_a',2);
					}
				});
				Event.observe('parte3_q3_a_3', 'change', function(evento){
					if ($('parte3_q3_a_3').value != ""){
						setResp('parte3_q3_a',3);
					}
				});
				Event.observe('parte3_q3_a_4', 'change', function(evento){
					if ($('parte3_q3_a_4').value != ""){
						setResp('parte3_q3_a',4);
					}
				});
				Event.observe('parte3_q3_a_5', 'change', function(evento){
					if ($('parte3_q3_a_5').value != ""){
						setResp('parte3_q3_a',5);
					}
				});

				Event.observe('parte3_q4_a', 'change', function(evento){
					if ($('parte3_q4_a').value != ""){
						setResp('parte3_q4_a',$('parte3_q4_a').value);
					}
				});

				Event.observe('parte3_q4_b', 'change', function(evento){

					if ($('parte3_q4_b').value != ""){
						setResp('parte3_q4_b',$('parte3_q4_b').value);
					}
				});
			}
		}else if (PosicaoAtual.Parte == 3){
			if (flag){
				var M = Number(getResp('a1_meses'));
				$('a1p4q5a').update(M/3);
				$('a1p4q5b').update(M/2);
				$('a1p4q5c').update(M);
				$('a1p4_Nmeses').update(M);

				if(getResp('parte4_q5_a') != 'undefined'){
					if ($('parte4_q5_a')){
						$('parte4_q5_a').value = getResp('parte4_q5_a');
					}
				}
				if(getResp('parte4_q5_b') != 'undefined'){
					if ($('parte4_q5_b')){
						$('parte4_q5_b').value = getResp('parte4_q5_b');
					}
				}
				if(getResp('parte4_q5_c') != 'undefined'){
					if ($('parte4_q5_c')){
						$('parte4_q5_c').value = getResp('parte4_q5_c');
					}
				}
				Event.observe('parte4_q5_a', 'change', function(evento){
					if ($('parte4_q5_a').value != ""){
						setResp('parte4_q5_a',$('parte4_q5_a').value);
					}
				});
				Event.observe('parte4_q5_b', 'change', function(evento){
					if ($('parte4_q5_b').value != ""){
						setResp('parte4_q5_b',$('parte4_q5_b').value);
					}
				});
				Event.observe('parte4_q5_c', 'change', function(evento){
					if ($('parte4_q5_c').value != ""){
						setResp('parte4_q5_c',$('parte4_q5_c').value);
					}
				});

			}
		}else if (PosicaoAtual.Parte == 4){
			if (flag){
				var D = getResp('a1_valor');
				D = Number(D);
				var total = getResp('valor_total');
				total = Number(total).toFixed(2);
				$('a1p5text_4').update(total);
				if(getResp('parte5_q6_a') != 'undefined'){
					if ($('parte5_q6_a')){
						$('parte5_q6_a').value = getResp('parte5_q6_a');
					}
				}
				if(getResp('parte5_q6_b') != 'undefined'){
					if ($('parte5_q6_b')){
						$('parte5_q6_b').value = getResp('parte5_q6_b');
					}
				}

				Event.observe('parte5_q6_a', 'change', function(evento){
					if ($('parte5_q6_a').value != ""){
						setResp('parte5_q6_a',$('parte5_q6_a').value);
					}
				});
				Event.observe('parte5_q6_b', 'change', function(evento){
					if ($('parte5_q6_b').value != ""){
						setResp('parte5_q6_b',$('parte5_q6_b').value);
					}
				});
				if(getResp('parte1_q7_a_resp') != 'undefined'){
					if ($('parte1_q7_a_resp')){
						$('parte1_q7_a_resp').update(getResp('parte1_q7_a_resp'));
					}
				}
				if(getResp('parte1_q7_b_resp') != 'undefined'){
					if ($('parte1_q7_b_resp')){
						$('parte1_q7_b_resp').update(getResp('parte1_q7_b_resp'));
					}
				}

				Event.observe('parte5_q6_a', 'change', function(evento){
					$('parte1_q7_a_resp').update("");
				});
				Event.observe('parte5_q6_b', 'change', function(evento){
					$('parte1_q7_b_resp').update("");
				});

			}
			Event.observe('link_continuar', 'focus', function(evento){
			if (flag){
				if(($('link_continuar').className) == 'ativado'){
					setResp('atividade_1',3);
				}
			}
			});
		}
	}
}


function ggbOnInit(){
	if ((PosicaoAtual.Parte == 1)||(PosicaoAtual.Parte == 2)){
		var applet = document.ggbApplet;
		applet.setValue('o', '1');
		applet.setVisible('texto4', true);
		applet.setVisible('texto5', false);
		applet.setVisible('texto6', false);
		applet.setValue('valor', getResp('a1_valor'));
		applet.setValue('n', getResp('a1_meses'));
	}else if (PosicaoAtual.Parte == 3){
		var applet = document.ggbApplet;
		var aux = 'lista' + getResp('a1_meses');
		applet.setValue('valor', getResp('a1_valor'));
		applet.setValue('n', getResp('a1_meses'));
		applet.setVisible(aux, true);
		var M = Number(getResp('a1_meses'));
		var aux = M;
		var N = aux + 1;
		if (applet.isDefined('G')){
			applet.deleteObject('G');
		}
		applet.evalCommand("G = ("+aux+", y(Elemento[lista"+M+","+N+"]))");
		applet.setVisible('G',false);
		$('a1p4_Xreais').update(Number(applet.getYcoord("G").toFixed(2)));
		setResp('valor_total', Number(applet.getYcoord("G").toFixed(2)));
		$('a1p4_Yreais').update(M*getResp('a1_valor'));
		aux = aux + 2;
		var total = getResp('a1_meses')*1.5*getResp('a1_valor');
		if (getResp('a1_meses') > 24){
			applet.setCoords('ptexto', 4, (total - total/10));

		}else{
			applet.setCoords('ptexto', 2, (total - total/10));
		}
		if (total < 1000){
			mudarEscala(-2.5,aux,-200,getResp('a1_meses')*1.4*getResp('a1_valor'));
		}else{
			mudarEscala(-2.5,aux,-1000,getResp('a1_meses')*1.4*getResp('a1_valor'));
		}
		applet.setFixed('ptexto',true);
		applet.setFixed('text1', true);
		applet.setCoords('C', 2,2);

	}else if (PosicaoAtual.Parte == 4){
		var applet = document.ggbApplet;
		applet.setValue('valor', getResp('a1_valor'));
		applet.setValue('n', getResp('a1_meses'));
		var aux = 'lista' + getResp('a1_meses');
		applet.setVisible(aux, true);
		aux += 'casa';
		applet.setVisible(aux,true);

		aux = getResp('a1_meses') + 2;
		var total = getResp('a1_meses')*1.1*getResp('a1_valor');
		aux = Number(Number(getResp('a1_meses')) + Number(0.2*getResp('a1_meses')));
		applet.setCoords('ptexto', 5, (total - total/10));

		mudarEscala(-4,aux,-total*0.4,getResp('a1_meses')*1.4*getResp('a1_valor'));
		applet.setFixed('ptexto',true);
		applet.setFixed('texto3', true);
		applet.setValue('n', getResp('a1_meses'));

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

function set_inicial(){
	meses = getResp('a1_meses');

	setResp('a1_meses', $('meu_select_2').value);
	setResp('a1_valor', $('meu_select').value );
	$('valor_inicial').addClassName('desabilitada');
	$('meu_select').trava();
	$('meu_select_2').trava();
	$('link_valor_inicial').hide();
	$('unset_inicial').show();
	permiteContinuar(true);
	if (meses > 0)
	{
		$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_1_parte_0', '2');
		$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_1_parte_1', '1');
		$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_1_parte_2', '0');
		$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_1_parte_3', '0');
		$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_1_parte_4', '0');
		$('SalvaLocal').Salva(nomeSoft, 'atividade_1', '2');
		location.reload();
	}
}

function unset_inicial()
{
	if (this.resultado == 'sim')
	{
		$('valor_inicial').removeClassName('desabilitada');
		$('link_valor_inicial').show();
		$('unset_inicial').hide();
		$('meu_select').destrava();
		$('meu_select_2').destrava();

		$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_1_parte_0', '0');
		$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_1_parte_1', '0');
		$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_1_parte_2', '0');
		$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_1_parte_3', '0');
		$('SalvaLocal').Salva(nomeSoft, 'automacao_atividade_1_parte_4', '0');
		gerencia_partes();
		permiteContinuar(false);
	}
}

Event.observe(window, 'load', function(){

});

// função que é chamada sempre que todas as questões de uma determinada parte são acertadas
function tudoCerto()
{
	if (PosicaoAtual.Parte == 4)
	{
		$('SalvaLocal').Salva(nomeSoft, 'atividade_1', '3');
		$('SalvaLocal').Salva(nomeSoft, 'atividade_2', '1');
	}
}

function seleciona_q_1_a(){
var applet = document.ggbApplet;
applet.setValue('w', '1');
applet.setVisible('texto4', false);
applet.setVisible('texto5', true);
applet.setVisible('texto6', false);
}
function seleciona_q_2_a(){
var applet = document.ggbApplet;
applet.setValue('n_1', '1');
applet.setVisible('texto4', false);
applet.setVisible('texto5', false);
applet.setVisible('texto6', true);
}
function seleciona_q_3_a(){
var applet = document.ggbApplet;
applet.setValue('aux_1', '1');
}
function seleciona_q_4_a(){
var applet = document.ggbApplet;
applet.setVisible('texto3', true);

}
function seleciona_q_5_a(){
var applet = document.ggbApplet;
var M = Number(getResp('a1_meses'));
var aux = M/3;
var N = aux + 1;

if (applet.isDefined('E')){
	applet.deleteObject('E');
}

//applet.evalCommand("E = ("+aux+", y(Elemento[lista"+M+","+N+"]))");
applet.setLabelVisible('E',false);
applet.setColor('E', 255, 0, 0);

if (applet.isDefined('F')){
	applet.setVisible('F',false);
}

if (applet.isDefined('G')){
	applet.setVisible('G',false);
}
}

function seleciona_q_5_b(){
var applet = document.ggbApplet;
var M = Number(getResp('a1_meses'));
var aux = M/2;
var N = aux + 1;
if (applet.isDefined('F')){
	applet.deleteObject('F');
}
applet.evalCommand("F = ("+aux+", y(Elemento[lista"+M+","+N+"]))");
applet.setLabelVisible('F',false);
applet.setColor('F', 255, 0, 0);

if (applet.isDefined('E')){
	applet.setVisible('E',false);
}

if (applet.isDefined('G')){
	applet.setVisible('G',false);
}
}

function seleciona_q_5_c(){
var applet = document.ggbApplet;
var M = Number(getResp('a1_meses'));
var aux = M;
var N = aux + 1;
if (applet.isDefined('G')){
	applet.deleteObject('G');
}
applet.evalCommand("G = ("+aux+", y(Elemento[lista"+M+","+N+"]))");
applet.setLabelVisible('G',false);
applet.setColor('G', 255, 0, 0);

if (applet.isDefined('F')){
	applet.setVisible('F',false);
}

if (applet.isDefined('E')){
	applet.setVisible('E',false);
}
}


//Um input de texto cuja resposta correta é 'qwe'
function corrige_q_1_a(valor)
{
	valor[0] = remover_espacos(valor[0]);
	var valor01 = processaExpressao(valor[0]);
	if (!isNaN(valor01)){
		valor[0] = valor01;
		var D = Number(getResp('a1_valor'));
		D = D + 1.01*D;
		eval("evals = Math.pow((" + valor[0] + "-" + D +"),2)");
		var resp = false;
		if (evals <= 0.1){
			resp = true;
		}
		if (resp == true){
			var applet = document.ggbApplet;
			applet.setValue('i_1', '1');
			return [true];
		}else{
			return [false];
		}
	}else{
		return [false];
	}
}
function corrige_q_2_a(valor)
{
	valor[0] = remover_espacos(valor[0]);
	var valor01 = processaExpressao(valor[0]);
	if (!isNaN(valor01)){
		valor[0] = valor01;
		var D = Number(getResp('a1_valor'));
		D = D + 1.01*D + 1.01*1.01*D;

		eval("resposta = Math.pow((" + valor[0] + "-" + D+"),2)");
		var resp = false;
		if (resposta <= 0.1){
			resp = true;
		}
		if (resp == true){
			var applet = document.ggbApplet;
			applet.setValue('o_1', '1');
			return [true];
		}else{
			return [false];
		}
	}else{
		return [false];
	}
}



function corrige_q_3_a(valor)
{
	if ((!valor[0])&&(!valor[1])&&(!valor[2])&&(valor[3])){
		var applet = document.ggbApplet;
		if ((valor[0] == false)&&(valor[1] == false)&&(valor[2] == false)&&(valor[3] == true)&&(valor[0] == false)){
			applet.setVisible('text6', true);applet.setVisible('text4', true);
		}

		return [(valor[0]?false:null),(valor[1]?false:null),(valor[2]?false:null),(valor[3]?true:null)];
	}else{
		var applet = document.ggbApplet;
		if ((valor[0] == false)&&(valor[1] == false)&&(valor[2] == false)&&(valor[3] == true)&&(valor[0] == false)){
			applet.setVisible('text6', true);applet.setVisible('text4', true);
		}
		return [(valor[0]?false:null),(valor[1]?false:null),(valor[2]?false:null),(valor[3]?true:null)];
	}
}

function corrige_q_4_a(valor)
{
	var valor01 = processaExpressao(valor[0]);
	if (!isNaN(valor01)){
		valor[0] = valor01;
		eval("Resp1 = " + valor[0] + " - 1.01");
		if ((Resp1 == 0)){
			var applet = document.ggbApplet;
			applet.setVisible("texto3", false);
			applet.setVisible("texto4", true);
			return[true];
		}else{
			return[false];
		}
	}else{
		return [false];
	}
}


function corrige_q_4_b(valor)
{
	var valor01 = processaExpressao(valor[0]);
	if (!isNaN(valor01)){
		valor[1] = valor01;
		eval("Resp2 = " + valor[1] + " - " + getResp('a1_valor'));
		if ((Resp2 == 0)){
			var applet = document.ggbApplet;
			applet.setVisible("texto3", false);
			applet.setVisible("texto4", true);
			return[true];
		}else{
			return[false];
		}
	}else{
		return[false];
	}
}

function corrige_q_5_a(valor)
{
	var valor01 = processaExpressao(valor[0]);
	if (!isNaN(valor01)){
		valor[0] = valor01;
		var applet = document.ggbApplet;
		var M = Number(getResp('a1_meses'));
		var aux = M/3;
		var N = aux + 1;

		if (!applet.isDefined("H")){
			applet.evalCommand("H = ("+aux+", y(Elemento[lista"+M+","+N+"]))");
			applet.setVisible('H',false);
		}
		var resp_esperada = applet.getYcoord("H");

		eval("resposta = Math.pow((" + valor[0] + "-" + resp_esperada+"),2)");
		var resp = false;
		if (resposta <= 0.1){
			resp = true;
		}

		if (resp == true){
			var applet = document.ggbApplet;
			return [true];
		}else{
			return [false];
		}
	}else{
		return [false];
	}
}

function corrige_q_5_b(valor)
{
	var valor01 = processaExpressao(valor[0]);
	if (!isNaN(valor01)){
		valor[0] = valor01;
		var applet = document.ggbApplet;
		var M = Number(getResp('a1_meses'));
		var aux = M/2;
		var N = aux + 1;

		if (!applet.isDefined("I")){
			applet.evalCommand("I = ("+aux+", y(Elemento[lista"+M+","+N+"]))");
			applet.setVisible('I',false);
		}
		var resp_esperada = applet.getYcoord("I");

		eval("resposta = Math.pow((" + valor[0] + "-" + resp_esperada+"),2)");
		var resp = false;
		if (resposta <= 0.1){
			resp = true;
		}
		if (resp == true){
			var applet = document.ggbApplet;
			return [true];
		}else{
			return [false];
		}
	}else{
		return [false];
	}
}

function corrige_q_5_c(valor)
{
	var valor01 = processaExpressao(valor[0]);
	if (!isNaN(valor01)){
		valor[0] = valor01;
		var applet = document.ggbApplet;
		var M = Number(getResp('a1_meses'));
		var aux = M;
		var N = aux + 1;

		if (!applet.isDefined("J")){
			applet.evalCommand("J = ("+aux+", y(Elemento[lista"+M+","+N+"]))");
			applet.setVisible('J',false);
		}
		var resp_esperada = applet.getYcoord("J");
		eval("resposta = Math.pow((" + valor[0] + "-" + resp_esperada+"),2)");
		var resp = false;
		if (resposta <= 0.1){
			resp = true;
		}
		if (resp == true){
			return [true];
		}else{
			return [false];
		}
	}else{
		return [false];
	}
}
function corrige_q_6_a(valor)
{
	var valor01 = valor[0];
	valor01 = valor01.replace(",",".");
	valor[0] = valor01;
	var resp = valor[0].toUpperCase();
	valor[0] = resp;

	if ((valor[0] == ('N*'+ getResp('a1_valor')))||(valor[0] == ('N'+ getResp('a1_valor')))||
	(valor[0] == ('N.'+ getResp('a1_valor')))||(valor[0] == (getResp('a1_valor') + '*N'))||
	(valor[0] == (getResp('a1_valor') + '.N'))||(valor[0] == (getResp('a1_valor') + 'N'))){
		var applet = document.ggbApplet;
		var M = Number(getResp('a1_meses'));
		applet.setVisible('lista'+M+'casa', true);
		return [true];
	}else{
		return [false];
	}
}

function corrige_q_6_a(valor)
{
	var valor01 = valor[0];
	valor01 = valor01.replace(",",".");
	valor[0] = valor01;
	var valor01 = processaExpressao(valor[0]);
	$('parte1_q7_a_resp').update(Number(valor01).toFixed(2));
	if (!isNaN(valor01)){
		valor[1] = valor01;
		var applet = document.ggbApplet;
		var M = Number(getResp('a1_meses'));
		var aux = M;
		var N = aux + 1;
		if (!applet.isDefined("K")){
			applet.evalCommand("K = ("+aux+", y(Elemento[lista"+M+","+N+"]))");
			applet.setVisible('K',false);
		}
		var resp_esperada = (Number(applet.getYcoord("K")) - Number(getResp('a1_valor')*M));

		eval("resposta = Math.pow((" + valor[0] + "-" + resp_esperada+"),2)");
		var resp = false;
		if (resposta <= 0.1){
			resp = true;
		}

		if (resp == true){
			var applet = document.ggbApplet;
			return [true];
		}else{
			return [false];
		}
	}else{
		return [false];
	}

}

function corrige_q_6_b(valor)
{
	var valor01 = valor[0];
	valor01 = valor01.replace(",",".");
	valor[0] = valor01;
	var valor01 = processaExpressao(valor[0]);
	$('parte1_q7_b_resp').update(Number(valor01).toFixed(2));
	var applet = document.ggbApplet;
	var M = Number(getResp('a1_meses'));
	var aux = M;
	var N = aux + 1;
	if (!applet.isDefined("K")){
		applet.evalCommand("K = ("+aux+", y(Elemento[lista"+M+","+N+"]))");
		applet.setVisible('K',false);
	}
	var resp_esperada = (Number(applet.getYcoord("K"))/Number(getResp('a1_valor')*M));
	eval("resposta = Math.pow((" + valor[0] + "-" + resp_esperada+"),2)");
	var resp = false;
	if (resposta <= 0.1){
		resp = true;
	}
	if (resp == true){
		var applet = document.ggbApplet;
		return [true];
	}else{
		return [false];
	}
}
