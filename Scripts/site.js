"use strict";

document.addEventListener ( "DOMContentLoaded", Initialize );


function Initialize()
{

    document.getElementById ( "index"		) . onclick = ActionIndex;
    document.getElementById ( "Services"	) . onclick = ActionServices;
    document.getElementById ( "Privacy"		) . onclick = ActionPrivacy;
    document.getElementById ( "Imprint"		) . onclick = ActionImprint;

	ActionIndex();

}


function ActionIndex()
{

	document.title = 'Miranda Schöneberger - Index';

	document.getElementById ( "headerArticle" ) . innerHTML = "Design for the Web";

	let txt =
		
		'<p>'															+
		'With enthusiasm and passion we develop your solution. '		+
		'Design and programming goes Hand in Hand.'						+
		'</p>'
		
	;

	document.getElementById ( "paragraphContent" ) . innerHTML = txt;

}


function ActionServices()
{

	document.title = 'Miranda Schöneberger - Services';

	document.getElementById ( "headerArticle" ) . innerHTML = "Services";

	let txt =
		
		'<p>'												+
		'Professional Websites – for your success! '		+
		'Design, Website, Webdesign, Mobile'				+
		'</p>'
		
	;

	document.getElementById ( "paragraphContent" ) . innerHTML = txt;

}


function ActionPrivacy()
{

	document.title = 'Miranda Schöneberger - Privacy';

	document.getElementById ( "headerArticle" ) . innerHTML = "Privacy";

	let txt =

	'<p>'																						+
		'Every time you access Miranda Schöneberger data will be collected and stored in the '		+
		'Server-Log-Files. Those data are transmitted by your browser. '							+
		'The data will not be merged with other datasources for any evaluation purposes.'			+
		'</p>'

	;

	document.getElementById ( "paragraphContent" ) . innerHTML = txt;

}


function ActionImprint()
{

	document.title = 'Miranda Schöneberger - Imprint';

	document.getElementById ( "headerArticle" ) . innerHTML = "Imprint";

	let txt =
		
		'<p class="absatz">Miranda Schöneberger</p><br>'			+
		'<p class="absatz">Obergasse 3a</p><br>'					+
		'<p class="absatz">D 37633 Klosterdorf</p><br>'				+
		'<p class="absatz">+49 7023 88738</p><br>'					+
		'<p class="absatz">postmaster@MirandaSBerger.de</p>'

	;

	document.getElementById ( "paragraphContent" ) . innerHTML = txt;

}
