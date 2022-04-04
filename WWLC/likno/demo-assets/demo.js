//---- Created using Likno Web Accordion Builder ver. 2.0.202.2 -----

// Copyright (c) Likno Software 2008-2011
// This code is property of Likno Software and licensed for use in *websites* only. It is *not* licensed for use in distributable implementations (applications or CD-based webs), unless the related license is provided by Likno Software.
// Any unauthorized use, reverse-engineering, alteration, transmission, transformation, or copying of any means (electronic or not) is strictly prohibited and will be prosecuted.
// *Removal of the present copyright notice is strictly prohibited*
// This project has been compiled for (and will work under): Unlimited Domains

var $u = 'undefined';var lwacjQ = 'jquery.js';var lwacLib = 'likno_accordion_lib.js';var lwacName = 'demo'; var demo, demo_options;var nua=navigator.userAgent,scriptNo=(nua.indexOf('Chrome')>-1)?2:((nua.indexOf('Safari')>-1)?7:(nua.indexOf('Gecko')>-1)?2:((document.layers)?3:((nua.indexOf('Opera')>-1)?4:((nua.indexOf('Mac')>-1)?5:1))));var lwacmpi=document.location,xt="";var mpa=lwacmpi.protocol+"//"+lwacmpi.host;var lwacmpi=lwacmpi.protocol+"//"+lwacmpi.host+lwacmpi.pathname;if(scriptNo==1){oBC=document.all.tags("BASE");if(oBC && oBC.length) if(oBC[0].href) lwacmpi=oBC[0].href;}while (lwacmpi.search(/\\/)>-1) lwacmpi=lwacmpi.replace("\\","/");lwacmpi=lwacmpi.substring(0,lwacmpi.lastIndexOf("/")+1);var e=document.getElementsByTagName("SCRIPT");for (var i=0;i<e.length;i++){if (e[i].src){if (e[i].src.indexOf(lwacName+".js")!=-1){xt=e[i].src.split("/");if (xt[xt.length-1]==lwacName+".js"){xt=e[i].src.substring(0,e[i].src.length-lwacName.length-3);if (e[i].src.indexOf("://")!=-1){lwacmpi=xt;}else{if(xt.substring(0,1)=="/")lwacmpi=mpa+xt; else lwacmpi+=xt;}}}}}while (lwacmpi.search(/\/\.\//)>-1) {lwacmpi=lwacmpi.replace("/./","/");}var $a7=$a3(),$a5=$a3(),$a6=$a3(),$a8=$a3(),$a9="2461373D5B223638373437343730222C22334132463246222C223233373536453643363936443639373436353634333532333246225D2C2461363D5B223636363936433635222C223643364636333631364336383646373337343246222C223233373536453643363936443639373436353634333532333246225D2C2461353B";var LWACloaded_demo = false;var demo_lwacmpi = lwacmpi;var headID = document.getElementsByTagName("head")[0];         if (typeof(lQuery) == $u && (typeof(jQuery) == $u || jQuery.fn.jquery<"1.4.1")){if (typeof(jQuery) != $u) jQuery.noConflict();var nSlwac_jQ = document.createElement('script');nSlwac_jQ.type = 'text/javascript';nSlwac_jQ.onload = lwacjQloaded_demo;nSlwac_jQ.onreadystatechange = lwacjQloaded_demo;nSlwac_jQ.src = lwacmpi+lwacjQ;headID.appendChild(nSlwac_jQ);} else lwacjQloaded_next_demo();function lwacjQloaded_demo() {if (typeof(lQuery) == $u && typeof(jQuery) == $u) return;jQuery.noConflict();lwacjQloaded_next_demo();}function lwacjQloaded_next_demo() {if (typeof(lQuery) == $u) lQuery = jQuery;if (typeof(lQuery.fn.liknoAccordion) != $u) LWACload_demo();else {var nSlwac_lib = document.createElement('script');nSlwac_lib.type = 'text/javascript';nSlwac_lib.src = lwacmpi+lwacLib;nSlwac_lib.onload = LWACload_demo;nSlwac_lib.onreadystatechange = LWACload_demo;headID.appendChild(nSlwac_lib);}}function LWACload_demo() {if (typeof(lQuery.fn.liknoAccordion) != $u) {eval($a1($a9));$a2();    if($a6.length<3) $a6[2]="";if($a7[0]==$a1($a6[0]) || $a4($a7[$a7.length-1]) || $a7[$a7.length-1]==$a1($a6[1])) {if (!LWACloaded_demo) {LWACloaded_demo = true;lQuery(function () {demo_options = {positioning:{
type:0}
,accordionName:"demo"
,accordionNameNormal:"demo"
,currentSheet:-1
,direction:"top"
,dependentPanes:true
,allowAllClosed:true
,fixedHeight:false
,singleContainer:true
,bodyCss:nRTC("font-family: Segoe UI, Tahoma, Verdana, Arial, Helvetica, sans-serif; line-height: 17px; font-size: 11px; text-align: justify; padding: 15px; color: #3f3f3f; background-color: #E6EAF3;")
,paneCss:nRTC("margin: 0px 0px 2px 0px; border: 1px solid #515255; width: 750px;")
,containerCss:nRTC(" width: 775px;")
,indicator:{
show:true,
hasImage:true,
imageWidth: 23,
imageHeight: 23,
positioning: "middle-right",
commonCss:nRTC("top:0px; left:-5px;"),
normalImage:demo_lwacmpi+escape("ExamplePack01-09_indicatorset_closed.png"),
normalOverImage:demo_lwacmpi+escape("ExamplePack01-09_indicatorset_closed_over.png"),
selectedImage:demo_lwacmpi+escape("ExamplePack01-09_indicatorset_open.png"),
selectedOverImage:demo_lwacmpi+escape("ExamplePack01-09_indicatorset_open_over.png"),
trigger:"click"
}
,header:{
commonCss:nRTC("font-family: Segoe UI, Tahoma, Verdana, Arial, Helvetica, sans-serif; line-height: 17px; font-size: 11px; text-align: left; padding: 9px 12px 7px 12px; height: 35px; font-weight: normal; cursor: pointer; color: #000000; border: 3px solid #A4A7AE;"),
normalCss:{},
normalOverCss:nRTC("font-weight: bold; color: #FFFFFF; border: 3px solid #626468;"),
selectedCss:nRTC("font-weight: bold; border: 3px solid #C7CDDE;"),
selectedOverCss:nRTC("font-weight: bold; color: #FFFFFF; border: 3px solid #626468;"),
separatorCss:nRTC("font-family: Segoe UI, Tahoma, Verdana, Arial, Helvetica, sans-serif; font-size: 11px; text-align: left; height: 7px; margin: 0px 0px 2px 0px; border: 1px solid #515255;"),
headerCommonCss:nRTC("font-family: Segoe UI, Tahoma, Verdana, Arial, Helvetica, sans-serif; line-height: 17px; font-size: 11px; text-align: left; padding: 9px 12px 7px 12px; height: 35px; font-weight: normal; cursor: pointer; color: #000000; border: 3px solid #A4A7AE;")
,customHeaders:false,styleHeaders:true,trigger:"click"
,backgroundImages:{show:true,
closedLeft:"",
closedTile:demo_lwacmpi+escape("ExamplePack01-09_backgroundset_closed_tile.jpg"),
closedRight:"",
closedOverLeft:"",
closedOverTile:demo_lwacmpi+escape("ExamplePack01-09_backgroundset_closed_over_tile.jpg"),
closedOverRight:"",
openLeft:"",
openTile:demo_lwacmpi+escape("ExamplePack01-09_backgroundset_open_tile.jpg"),
openRight:"",
openOverLeft:"",
openOverTile:demo_lwacmpi+escape("ExamplePack01-09_backgroundset_open_over_tile.jpg"),
openOverRight:"",
separatorLeft:"",
separatorTile:demo_lwacmpi+escape("ExamplePack01-09_backgroundset_separator_tile.jpg"),
separatorRight:"",
closedLeftWidth:0,
closedRightWidth:0,
openLeftWidth:0,
openRightWidth:0,
closedOverLeftWidth:0,
closedOverRightWidth:0,
openOverLeftWidth:0,
openOverRightWidth:0,
separatorLeftWidth:0,
separatorRightWidth:0
}}
,transition:{transWhat:{'height':'show','marginTop':'show','marginBottom':'show','borderTopWidth':'show','borderBottomWidth':'show'},
transDuration:200
}
};
lwac_preloadImages(demo_options);
demo = lQuery('#demo-id').liknoAccordion(demo_options);});}}}}function $a1(s){s2=s.split("");s1="";for(var i=0;i<s.length;i++) {s1+="%"+s2[i]+s2[i+1];i++;}return unescape(s1);};function $a2() {$a5="";$a8[0]="";for(var i=2;i<$a7.length;i++){$a5+="."+$a1($a7[i]);if ($a1($a7[i])==$a1("7C")){$a8[$a8.length]="";$a8[$a8.length-2]=$a8[$a8.length-2].substring(1);} else {$a8[$a8.length-1]+="."+$a1($a7[i]);}}$a8[$a8.length-1]=$a8[$a8.length-1].substring(1);$a5=$a5.substring(1);$a7[0]=(lwacmpi.substring(0,lwacmpi.search($a1($a7[1]))));$a7[$a7.length]=lwacmpi.substring(lwacmpi.search($a1($a7[1]))+3);if($a7[$a7.length-1].substring(0,3)==$a1("777777")) if (!isNaN($a7[$a7.length-1].substring(3,4)) && $a7[$a7.length-1].substring(4,5)==$a1("2E")) $a7[$a7.length-1]=$a7[$a7.length-1].substring(5);if($a7[$a7.length-1].substring(0,4)==$a1("7777772E")) $a7[$a7.length-1]=$a7[$a7.length-1].substring(4);$a7[$a7.length-1]=$a7[$a7.length-1].substring(0,$a7[$a7.length-1].search("/"));if($a7[$a7.length-1].search(":")>-1) $a7[$a7.length-1]=$a7[$a7.length-1].substring(0,$a7[$a7.length-1].search(":"))+"/"; else $a7[$a7.length-1]+="/";};function $a3(){return new Array()};function $a4($s) {for (d=0;d<$a8.length;d++) {if ($s==$a8[d] || $a8[d]==$a1($a6[2])){return true;}else {var dD=$s.length-$a8[d].length;if (dD>0) if ($s.substring(dD)==$a8[d] && $s.substring(0,dD-1).search(/\./)==-1) return true;}}$s=$s.substring(0,$s.length-1);if ($s.length) {while($s.search(/\./)>-1) $s=$s.replace(".","");return !isNaN($s);} return false;};
/*202.2*/