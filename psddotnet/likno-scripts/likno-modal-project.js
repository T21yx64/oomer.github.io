//---- Created using Likno Web Modal Windows Builder ver. 2.1.232.3 -----

// Copyright (c) Likno Software 2008-2011
// This code is property of Likno Software and licensed for use in *websites* only. It is *not* licensed for use in distributable implementations (applications or CD-based webs), unless the related license is provided by Likno Software.
// Any unauthorized use, reverse-engineering, alteration, transmission, transformation, or copying of any means (electronic or not) is strictly prohibited and will be prosecuted.
// *Removal of the present copyright notice is strictly prohibited*
// This project has been compiled for (and will work under): Unlimited Domains

var $u = 'undefined';
var lwmwjQ = 'jquery.js';
var lwmwLib = 'likno-modal-lib.js';
var lwmwName = 'likno-modal-project';

var nua=navigator.userAgent,scriptNo=(nua.indexOf('Chrome')>-1)?2:((nua.indexOf('Safari')>-1)?7:(nua.indexOf('Gecko')>-1)?2:((document.layers)?3:((nua.indexOf('Opera')>-1)?4:((nua.indexOf('Mac')>-1)?5:1))));var lwmwmpi=document.location,xt="";
var mpa=lwmwmpi.protocol+"//"+lwmwmpi.host;
var lwmwmpi=lwmwmpi.protocol+"//"+lwmwmpi.host+lwmwmpi.pathname;
if(scriptNo==1){oBC=document.all.tags("BASE");if(oBC && oBC.length) if(oBC[0].href) lwmwmpi=oBC[0].href;}
while (lwmwmpi.search(/\\/)>-1) lwmwmpi=lwmwmpi.replace("\\","/");
lwmwmpi=lwmwmpi.substring(0,lwmwmpi.lastIndexOf("/")+1);
var e=document.getElementsByTagName("SCRIPT");
for (var i=0;i<e.length;i++){if (e[i].src){if (e[i].src.indexOf(lwmwName+".js")!=-1){xt=e[i].src.split("/");if (xt[xt.length-1]==lwmwName+".js"){xt=e[i].src.substring(0,e[i].src.length-lwmwName.length-3);if (e[i].src.indexOf("://")!=-1){lwmwmpi=xt;}else{if(xt.substring(0,1)=="/")lwmwmpi=mpa+xt; else lwmwmpi+=xt;}}}}}
while (lwmwmpi.search(/\/\.\//)>-1) {lwmwmpi=lwmwmpi.replace("/./","/");}

var likno_modal_project,Modal_Window_1,likno_modal_project_Modal_Window_1_options;
var LWMWloaded_likno_modal_project = false;
var likno_modal_project_lwmwmpi = lwmwmpi;
var headID = document.getElementsByTagName("head")[0];

if (typeof(lQuery) == $u && (typeof(jQuery) == $u || jQuery.fn.jquery<"1.4.1")){
	if (typeof(jQuery) != $u) jQuery.noConflict();
	var newScript_jQ = document.createElement('script');
	newScript_jQ.type = 'text/javascript';
	newScript_jQ.onload = lwmwjQloaded_likno_modal_project;
	newScript_jQ.onreadystatechange = lwmwjQloaded_likno_modal_project;
	newScript_jQ.src = lwmwmpi+lwmwjQ;
	headID.appendChild(newScript_jQ);
} else lwmwjQloaded_next_likno_modal_project();

function lwmwjQloaded_likno_modal_project(){
	if (typeof(lQuery) == $u && typeof(jQuery) == $u) return;
	jQuery.noConflict();
	lwmwjQloaded_next_likno_modal_project();
}

function lwmwjQloaded_next_likno_modal_project(){
	if (typeof(lQuery) == $u) lQuery = jQuery;
	if (typeof(lQuery.liknoModal) != $u) load_likno_modal_project();
	else {
		var newScript_lib = document.createElement('script');
		newScript_lib.type = 'text/javascript';
		newScript_lib.src = lwmwmpi+lwmwLib;
		newScript_lib.onload = load_likno_modal_project;
		newScript_lib.onreadystatechange = load_likno_modal_project;
		headID.appendChild(newScript_lib);
	}
}function load_likno_modal_project() {if (typeof(lQuery) != 'undefined' && typeof(lQuery.liknoModal) != 'undefined'){if (!LWMWloaded_likno_modal_project) {LWMWloaded_likno_modal_project = true;lQuery.likno_modal_project = lQuery.extend(true, {}, lQuery.liknoModal);lQuery.likno_modal_project.impl.defaults = lQuery.extend(true, {}, lQuery.likno_modal_project.impl.defaults, {modalClass: 'likno_modal_project',overlayId: 'likno_modal_project-overlay',containerId: 'likno_modal_project-container',zIndex:2000,overlayCss:{backgroundColor:'#425873'},opacity:50,close:{closeClass: 'likno-modal-project-close',overlayClose:true,escClose:true,show:true,text:"<div name='myLiknoModalCloseName'><img src='"+likno_modal_project_lwmwmpi+"../style/likno images/image_014_close.png' /></div>", textCss:nRTC("top: -6px; right: 4px;")},position:[0,0],positionType:0,containerCss:nRTC("width:400px;height:365px;font-family: Verdana,Arial,Helvetica,sans-serif; font-size: 11px; border: 10px solid #597394;"),domainCode:'246C373D5B223638373437343730222C22334132463246222C223233373536453643363936443639373436353634333132333246225D2C246C352C246C363D5B223636363936433635222C223643364636333631364336383646373337343246222C223233373536453643363936443639373436353634333132333246225D3B',ajaxLoadImage:""+likno_modal_project_lwmwmpi+"../style/likno images/ajax-loader-clock.gif", ajaxLoadDiv:"<div id='modalAjax' style='background-image:url("+likno_modal_project_lwmwmpi+"../style/likno images/ajax-loader-clock.gif);background-position: center center; background-repeat: no-repeat;'></div>",header:{show:true,text:"Header Content",textCss:nRTC("font-family: Georgia,Arial,Helvetica,sans-serif; font-size: 11px; background-color: #597394; padding: 5px 30px 0px 30px; color: #FFFFFF; font-weight: bold; font-style: italic;")},footer:{show:true,text:"Footer Content  - Click on the overlay or press \"ESC\" to close",textCss:nRTC("font-family: Georgia,Arial,Helvetica,sans-serif; font-size: 11px; background-color: #597394; padding: 5px 30px 10px 30px; color: #FFFFFF; font-style: italic;")},wrapCss:nRTC("font-family: Georgia, Arial, Helvetica, sans-serif; font-size: 11px; background-color: #455d7b; padding: 10px 20px; color: #cfdef1; line-height: 18px; font-style: italic; text-align: justify;"),isMultiSheet:false, currentSheet:0,loop:true,play:{autoStart:false,pauseByMouse:false,direction:0,delay:1500},navigationBar:{maxSheets:9,show:true,showFirst:true,showPrev:true,showPlayPause:true,showNext:true,showLast:true,showSheets:true,cssClasses:".likno_modal_project{border-width:0px;margin:0px;padding:0px;} .likno_modal_project.navigationBarArea {     text-align: center;     background-color: #CFDEF1;     background-position: center;     background-image: url('"+likno_modal_project_lwmwmpi+"../style/likno images/image_064_bg.png');     height: 19px; }  .likno_modal_project.navigationBarCenterSection {     font-family: Verdana, Arial, Helvetica, sans-serif;     font-size: 11px;     text-align: center; }  .likno_modal_project.navigationBarSheetSection { }  .likno_modal_project.navigationBarFirst {      padding-right: 1px; }  .likno_modal_project.navigationBarPrev { }  .likno_modal_project.navigationBarNext { }  .likno_modal_project.navigationBarLast {     padding-left: 1px; }  .likno_modal_project.navigationBarPlayPause {     margin-right: 5px; }  .likno_modal_project.navigationBarText {     font-family: Verdana, Arial, Helvetica, sans-serif;     font-size: 11px;     color: #425080;     margin-right: 5px; }  .likno_modal_project.navigationBarSheetLink {     color: #425080;     text-decoration: underline;     cursor: pointer; }  .likno_modal_project .likno_modal_project.navigationBarSheetLinkHover {     color: #6475b0; }  .likno_modal_project.navigationBarSheetSelected {     color: #425080;     font-weight: bold; }  .likno_modal_project.navigationBarSheetDots {     color: #6475b0; }",text:"Sheets:",images:{butFirst:likno_modal_project_lwmwmpi+'../style/likno images/image_064_first.png',butFirstOver:likno_modal_project_lwmwmpi+'../style/likno images/image_064_first_over.png',butPrev:likno_modal_project_lwmwmpi+'../style/likno images/image_064_previous.png',butPrevOver:likno_modal_project_lwmwmpi+'../style/likno images/image_064_previous_over.png',butPlay:likno_modal_project_lwmwmpi+'../style/likno images/image_064_play.png',butPlayOver:likno_modal_project_lwmwmpi+'../style/likno images/image_064_play_over.png',butPause:likno_modal_project_lwmwmpi+'../style/likno images/image_064_pause.png',butPauseOver:likno_modal_project_lwmwmpi+'../style/likno images/image_064_pause_over.png',butNext:likno_modal_project_lwmwmpi+'../style/likno images/image_064_next.png',butNextOver:likno_modal_project_lwmwmpi+'../style/likno images/image_064_next_over.png',butLast:likno_modal_project_lwmwmpi+'../style/likno images/image_064_last.png',butLastOver:likno_modal_project_lwmwmpi+'../style/likno images/image_064_last_over.png'}},keyboardNavigation:true,transition:{openWhat:{height:'show'}, openHow: {easing: 'linear', duration: 0}, closeWhat:{height:'hide'}, closeHow: {easing: 'linear', duration: 0}},animation:{window:{openWhat:{height:'show'}, openHow: {easing: 'linear', duration: 500},closeWhat:{height:'hide'}, closeHow: {easing: 'linear', duration: 500}},overlay:{openWhat:{opacity:'show'}, openHow: {easing: 'linear', duration: 500},closeWhat:{opacity:'hide'}, closeHow: {easing: 'linear', duration: 500}}},dataId: "likno_modal_project-data"});lwmw_preloadImages(lQuery.likno_modal_project.impl.defaults);lQuery(function () {lQuery("#Modal_Window_1, a[target=Modal_Window_1], area[target=Modal_Window_1]").live("click",function(){Modal_Window_1(); return false;});});likno_modal_project = function (data, options) {return lQuery.likno_modal_project.impl.init(data, options);};likno_modal_project.close = function (doNext) {return lQuery.likno_modal_project.impl.close(doNext);};var likno_modal_project_Modal_Window_1_options = lQuery.extend(true,{ }, lQuery.likno_modal_project.impl.defaults, {modalFullId: "likno_modal_project_Modal_Window_1"});lwmw_preloadImages(likno_modal_project_Modal_Window_1_options);likno_modal_project.Modal_Window_1=Modal_Window_1=function(options){lQuery.likno_modal_project.impl.init("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel nulla nulla, ac mollis lacus. Cras vestibulum ornare turpis at pellentesque. Sed nisi leo, iaculis id rhoncus ut, hendrerit at arcu. Vivamus feugiat diam eget velit scelerisque et aliquet diam porttitor. Sed aliquam est sed mi pretium quis ultricies metus facilisis.</p><p>Praesent facilisis quam turpis. Morbi feugiat varius dapibus. Etiam mi ante, commodo nec luctus vel, ullamcorper et leo. Proin rhoncus egestas tortor, sit amet pulvinar arcu pulvinar eget. Vestibulum ac nunc in ipsum ultricies tincidunt vel semper neque.</p>",lQuery.extend(true, {}, likno_modal_project_Modal_Window_1_options,options));};lwmw_checkVarUrl('likno-modal-project', 'Modal_Window_1');}}}
/*232.3*/