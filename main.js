import {GETrequest,POSTrequest} from './requests.js'
import {blockSite,errRequest} from './resultController.js'
import {extractHost} from './extractController.js'

function showHTML(){
	document.getElementsByTagName('html')[0].innerHTML = `
			<!DOCTYPE HTMLPUBLIC"-//W3C//DTDHTML4.01Transitional//EN">
			<html>
			<head>
			<metahttp-equiv="Content-Type"content="text/html;charset=utf-8">
			<style>
			body{font-family:Helvetica,sans-serif;font-weight:400;font-size:18px;line-height:200%;color:#d4cec3;background-color:#421;}
			#main-wrapper{text-align:center;}
			#main{display:inline-block;padding:100px 20%;text-align:center;max-width:30em;}h2{font-size:3em;color:white;line-height:1.3em;}h3{color:white;}a{color:#ddd;text-decoration:none;}a:hover{color:#0cc;}a:active{color:#ccc;}
			#main{padding:50px 5%;}
			</style>
			</head>
			<body style="color:#ebe3e3;background-color:#4b0009">
			<div id=main-wrapper>
			<div id=main>
			<div id=icon><img style="display:inline-block;width:150px;height:150px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Simple_Prohibited.svg/1024px-Simple_Prohibited.svg.png"></div>
			<h2 id=title>Site Blocked</h2>
			<h3 id=gets-domain></h3>
			<p id=categoroid><span id=categorizeLine>This site has been categorized as Pornography.</span><br>
				<span id=discontinueLine>You are not permitted to be here.</span>
			</p>
			</div>
			</div>
			</body>
			</html>`;
}


/********************************************* site blocking **********************************************/
let opts = {
	q:extractHost()
};
window.onpaint = GETrequest("https://innovationlab.appspot.com/",opts,errRequest,blockSite);

/********************************************** image blocking ****************************************************/
var tabIMG = document.getElementsByTagName("img");
for (let i=0;i<tabIMG.length;i++){tabIMG[i] = tabIMG[i].src}
console.log(tabIMG);
