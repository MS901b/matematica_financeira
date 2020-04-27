/******************************************************************************************************************************************************
 ****    Flash                         *******
 ******************************************************************************************************************************************************/
// Retorna o elemento do video Flash com o nome movieName
function getFlashMovie(movieName) {
 var isIE = navigator.appName.indexOf("Microsoft") != -1;
 return (isIE) ? window[movieName] : document[movieName];
}

function getResp(id) {
 return $('SalvaLocal').Pega(nomeSoft,id);
}

function setResp(id,valor) {
 $('SalvaLocal').Salva(nomeSoft,id,valor);
}

function apagaTodasResp() {
 return ($('SalvaLocal').ApagaTudo(nomeSoft));
}

function init() {
 return ($('SalvaLocal').ApagaTudo(nomeSoft));
}


function roundNumber(num, dec) {
	var result = Math.round( Math.round( num * Math.pow( 10, dec + 1 ) ) / Math.pow( 10, 1 ) ) / Math.pow(10,dec);
	return result;
}

function processaNumero(respStr)
{
	var respStrSplited = respStr.split('/');

	var respostaValida = true;
	if (respStrSplited.length>1)
	{

		for (var i=0;i<respStrSplited.length;i++)
		{
			respStrSplited[i]=processaNumero(respStrSplited[i]);
			if (respStrSplited[i]==null) respostaValida=false;
			if (respostaValida)
			{
				if (i==0)
				{
					var resp=respStrSplited[i];
				}
				else
				{
					resp=resp/respStrSplited[i];
				}

			}
		}
		if (respostaValida) return resp;
		else return null;
	}
	else
	{
		if (respStr.indexOf('%')>-1)
		{
			respStr=respStr.replace(/%/,'');
			var porcento=true;
		} else var procento=false;

		respStr=respStr.replace(/,/g,'.');
		if ( !isNaN(respStr) && (respStr.length>0) )
		{
			if (porcento) respStr=respStr/100;
		} else respStr=null;
		return respStr;
	}

}

function muda_cor(objeto, cor){
	var applet = document.ggbApplet;
	if (cor == "preto") applet.setColor(objeto, 0, 0, 0);
	if (cor == "branco") applet.setColor(objeto, 255,255, 255);
}

function validar_numeros(id){
	if(isNaN($(id).value)){
		$(id).value = "";
	}
}

function validar_numeros_limites(id, min, max){
	if((isNaN($(id).value))||(($(id).value)<min)||(($(id).value)>max)){
		$(id).value = "";
	}
}

function xml2Str(xmlNode) {
   try {
      // Gecko-based browsers, Safari, Opera.
      return (new XMLSerializer()).serializeToString(xmlNode);
  }
  catch (e) {
     try {
        // Internet Explorer.
        return xmlNode.xml;
     }
     catch (e) {
        //Other browsers without XML Serializer
        alert('Xmlserializer not supported');
     }
   }
   return false;
}

function mudarEscala(xMin,xMax,yMin,yMax){
    var applet = document.ggbApplet;


    stringXML = applet.getXML();

    // Converte a string para um documento XML
    try //Internet Explorer
      {
      xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
      xmlDoc.async="false";
      xmlDoc.loadXML(stringXML);
      }
    catch(e)
      {
      try //Firefox, Mozilla, Opera, etc.
        {
        parser=new DOMParser();
        xmlDoc=parser.parseFromString(stringXML,"text/xml");
        }
      catch(e) {alert(e.message)}
      }



    x=xmlDoc.getElementsByTagName("euclidianView")[0];

    if (x.getElementsByTagName("size")[0]!=undefined) {
        var sizeX = x.getElementsByTagName("size")[0].getAttribute('width');
        var sizeY = x.getElementsByTagName("size")[0].getAttribute('height');
//        console.log('size do ggb',sizeX,sizeY);
    }
    else
    {
        var sizeX = Number(applet.width)-2;
        var sizeY = Number(applet.height)-2;
//        console.log('size do applet',sizeX,sizeY);
    }


    var escalaX = sizeX/(xMax-xMin);
    var escalaY = sizeY/(yMax-yMin);
    var zeroX = -1*xMin*escalaX;
    var zeroY = Number(sizeY) + Number(yMin*escalaY);


    x.getElementsByTagName("coordSystem")[0].setAttribute('scale',escalaX);
    x.getElementsByTagName("coordSystem")[0].setAttribute('yscale',escalaY);
    x.getElementsByTagName("coordSystem")[0].setAttribute('xZero',zeroX);
    x.getElementsByTagName("coordSystem")[0].setAttribute('yZero',zeroY);


     applet.setXML(xml2Str(xmlDoc)) ;
     applet.refreshViews();

}

function remover_espacos(str){
    r = "";
    for(i = 0; i < str.length; i++){
      if(str.charAt(i) != ' ')
        r += str.charAt(i);
   }
  return r;
}
