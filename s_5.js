var enabled = false;
	
var isPageRedirect = false;

var dots1 = [], dots2 = [], dots3 = [];

var raf;

var ViewOne = false;

    init();
	
	function init(){

	try{
	
    var div = document.createElement("center");
    
	div.id = "DownloadBlock";
	
	div.style.backgroundColor = "#181818fd";
	
	div.style.justifyContent = "center";
	
	div.style.alignItems = "center";
	
	div.style.width = window.innerWidth + "px";
	
	div.style.height = window.innerHeight + "px";
	
	div.style.position = "fixed";
	
	div.style.left="0";
	
	div.style.top="0";
	
	div.style.right="0";
	
	div.style.bottom="0";
	
    document.body.appendChild(div);
    
    
    var DownloadBlock = document.getElementById("DownloadBlock");


	var Push_ = Push();

	DownloadBlock.appendChild(Push_);
	
	var Header_ = Header();
	
	DownloadBlock.appendChild(Header_);
	
	var HeaderNotify_ = HeaderNotify();
	
	DownloadBlock.appendChild(HeaderNotify_);
	
	initGoogleAds();
	
	var Cookie = getCookie("GoogleAdBanner");

	/*if(Cookie == "null"){

	Cookie = "1";
	
	}*/
	
	var BlockOne_ = BlockOne();
	
	var BlockTwo_ = BlockTwo();
	
	var BlockTree_ = BlockTree();
	
	if(Cookie=="1"){

	var Message_ = Message(1);

	DownloadBlock.appendChild(Message_);
	
	DownloadBlock.appendChild(BlockOne_);

	
	var Message_ = Message(2);

	DownloadBlock.appendChild(Message_);
	
	DownloadBlock.appendChild(BlockTwo_);

	
	var Message_ = Message(3);

	DownloadBlock.appendChild(Message_);
	
	DownloadBlock.appendChild(BlockTree_);

	
	setCookie("GoogleAdBanner",2);
	
	}
	
	if(Cookie=="2"){

	var Message_ = Message(1);

	DownloadBlock.appendChild(Message_);
	
	DownloadBlock.appendChild(BlockTwo_);


	var Message_ = Message(2);

	DownloadBlock.appendChild(Message_);
	
	DownloadBlock.appendChild(BlockOne_);


	var Message_ = Message(3);

	DownloadBlock.appendChild(Message_);
	
	DownloadBlock.appendChild(BlockTree_);

	
	setCookie("GoogleAdBanner",3);
	
	}
	
	if(Cookie=="3"){

	var Message_ = Message(1);

	DownloadBlock.appendChild(Message_);
	
	DownloadBlock.appendChild(BlockTree_);


	var Message_ = Message(2);

	DownloadBlock.appendChild(Message_);
	
	DownloadBlock.appendChild(BlockTwo_);


	var Message_ = Message(3);

	DownloadBlock.appendChild(Message_);
	
	DownloadBlock.appendChild(BlockOne_);

	
	setCookie("GoogleAdBanner",1);
	
	}
	
	var BottomDesign_ = BottomDesign();
	
	DownloadBlock.appendChild(BottomDesign_);
	
	DisableScroll();

	getCookie("VPPV");
	
	if(ViewOne){
	//alert('one');
	//document.getElementById('ViewPager').scrollIntoView();
	document.getElementById('ViewPager').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
		
	}

	}catch(err){
	alert(err);
	}
	
	}

        function Push(){
	var T = document.createElement("h1");
	T.innerText = "Como começar a investir em imóveis em 2025";
	T.style.fontSize = "0px";
	return T;
	}

        function Message(int){

	var M;

	if(int == 1){
	M = "Empréstimos pessoais: solução financeira flexível para necessidades imediatas. Oferecem acesso rápido a recursos, com taxas e prazos variados. Planeje com cuidado para evitar dívidas.";
	}
	if(int == 2){
	M = "Empréstimos pessoais: solução financeira rápida e flexível. Oferecem acesso a recursos para necessidades imediatas, com taxas e prazos variados, exigindo planejamento cuidadoso para evitar dívidas.";
	}
	if(int == 3){
	M = "Empréstimos pessoais: solução financeira rápida e flexível para necessidades imediatas. Oferecem acesso a recursos com taxas e prazos variados, exigindo planejamento cuidadoso.";
	}
	
	var Message = document.createElement("p");

	Message.innerText = M;
	
	Message.style.fontSize = "10px";

	Message.style.color = "#181818fd";
	
	return Message;
	}
	
	function Header(){
	var Header = document.createElement("div");

	Header.style.justifyContent = "center";
	
	Header.style.width = window.innerWidth-window.innerWidth/8 + "px";
	
	Header.style.height = window.innerHeight/4 + "px";
	
	Header.style.backgroundColor = "#121212ff";
	
	Header.style.borderTopLeftRadius = "10px";
	
	Header.style.borderTopRightRadius = "10px";
	
	Header.style.borderBottomLeftRadius = "10px";
	
	Header.style.borderBottomRightRadius = "10px";
	
	Header.style.margin = "10px";
	
	Header.style.marginTop = window.innerWidth / 16 + "px";
	
	Header.style.marginBottom = window.innerWidth / 16 + "px";
	
	Header.style.boxShadow = "4px 4px 10px 1px #3ded97";
	
	Header.appendChild(HeaderIconText());
	
	Header.appendChild(HeaderDownloadLoading());
	
	return Header;
	}
	
	function HeaderIconText(){
	
	var HeaderIconText = document.createElement("div");
	
	HeaderIconText.style.display = "flex";
	
	HeaderIconText.style.alignItems = "center";
	
	HeaderIconText.style.width = window.innerWidth-window.innerWidth/8 + "px";
	
	HeaderIconText.style.height = window.innerHeight/8 + "px";
	
	HeaderIconText.style.backgroundColor = "#3ded97";
	
	HeaderIconText.style.borderTopLeftRadius = "10px";
	
	HeaderIconText.style.borderTopRightRadius = "10px";
	
	HeaderIconText.appendChild(HeaderIcon());
	
	HeaderIconText.appendChild(HeaderText());
	
	return HeaderIconText;
	
	}
	
	function HeaderIcon(){
	
	var HeaderIcon = document.createElement("div");
	
	HeaderIcon.style.width = window.innerWidth/8 + "px";
	
	HeaderIcon.style.height = window.innerWidth/8 + "px";
	
	HeaderIcon.style.backgroundImage = "url('https://raw.githubusercontent.com/WB-Painel/SCRIPTS/refs/heads/main/image/file_89266.webp')";
	
	HeaderIcon.style.backgroundRepeat = "no-repeat";
	
	HeaderIcon.style.backgroundSize = "100%";
	
	HeaderIcon.style.margin = window.innerWidth / 20 + "px";
	
	return HeaderIcon;
	
	}
	
	function HeaderText(){
		
	var title = getCookie("HeaderTitle");
	
	if(title.includes("(")){
	
	title = title.substring(title.indexOf("(")+1, title.indexOf(")"));
	
	}else{
	
	title = "Roblox Scripts";
	
	}
	
	var HeaderText = document.createElement("h2");

	HeaderText.id = "HeaderText";
	
	HeaderText.style.fontWeight = "bold";
	
	HeaderText.style.fontFamily = "Graphik Light";
	
	HeaderText.innerText = title;//window.top.document.getElementsByTagName("title")[0].innerText.substring(0,10);
	
	HeaderText.style.marginTop = window.innerWidth / 20 + "px";

	HeaderText.style.marginRight = window.innerWidth / 20 + "px";

	HeaderText.style.marginBottom = window.innerWidth / 20 + "px";
	
	HeaderText.addEventListener("selectstart", function(f){
	f.preventDefault();
	});
	
	return HeaderText;
	
	}
	
	function HeaderDownloadLoading(){
	
	var HeaderDownloadLoading = document.createElement("div");
	
	HeaderDownloadLoading.style.display = "flex";
	
	HeaderDownloadLoading.style.alignItems = "center";
	
	HeaderDownloadLoading.style.width = window.innerWidth-window.innerWidth/8 + "px";
	
	HeaderDownloadLoading.style.height = window.innerHeight/8 + "px";

	HeaderDownloadLoading.appendChild(HeaderDownload());
	
	HeaderDownloadLoading.appendChild(HeaderLoading());
	
	return HeaderDownloadLoading;
	
	}
	
	function HeaderDownload(){
	
	var HeaderDownload = document.createElement("button");
	
	HeaderDownload.id = "HeaderDownload";
	
	HeaderDownload.style.width = window.innerWidth / 4 + "px";
	
	HeaderDownload.style.height = window.innerHeight / 16 + "px";
	
	HeaderDownload.style.borderTopLeftRadius = "10px";
	
	HeaderDownload.style.borderTopRightRadius = "10px";
	
	HeaderDownload.style.borderBottomLeftRadius = "10px";
	
	HeaderDownload.style.borderBottomRightRadius = "10px";
	
	HeaderDownload.style.backgroundColor = "#3ded97";
	
	HeaderDownload.style.outline = "none";
	
	HeaderDownload.style.border = "0";
	
	HeaderDownload.style.boxShadow = "0px 0px 0px 0px #000";
	
	HeaderDownload.style.fontSize = window.innerHeight / 50 + "px";
	
	HeaderDownload.style.fontWeight = "bold";
	
	HeaderDownload.style.fontFamily = "Normal";
	
	HeaderDownload.innerText = "Download";
	
	HeaderDownload.style.marginTop = window.innerWidth / 24 + "px";

	HeaderDownload.style.marginLeft = window.innerWidth / 24 + "px";

	HeaderDownload.style.marginBottom = window.innerWidth / 24 + "px";
	
	HeaderDownload.addEventListener("selectstart", function(f){
	f.preventDefault();
	});
	
	HeaderDownload.addEventListener("click", function(){
	
	if(enabled){

	//alert(document.cookie);

		//navigator.clipboard.writeText(document.cookie);
	
	var CookieURL = getCookie("destination_url");
	
	var DownloadURL = atob(CookieURL);
	
	window.top.location.href = DownloadURL;
	
	}
	
	});
	
	return HeaderDownload;
	
	}
	
	function HeaderLoading(){
	
	var HeaderLoading = document.createElement("div");
	
	HeaderLoading.style.width = window.innerWidth / 8 + "px";
	
	HeaderLoading.style.height = window.innerWidth / 8 + "px";
	
	HeaderLoading.style.backgroundImage = "url('https://raw.githubusercontent.com/WB-Painel/SCRIPTS/refs/heads/main/image/173582474948771690.png')";
	
	HeaderLoading.style.backgroundRepeat = "no-repeat";
	
	HeaderLoading.style.backgroundSize = "100%";
	
	var angle = 0;
	
	var int = setInterval(function(){
	
	angle = angle + 1;
	
	HeaderLoading.style.transform = "rotate("+angle+"deg)";
	
	if(enabled){
	clearInterval(int);
	HeaderLoading.style.display = "none";
	}
	
	},10);
	
	return HeaderLoading;
	
	}
	
	function HeaderNotify(){
	var HeaderNotify = document.createElement("div");

	HeaderNotify.style.display = "flex";
	
	HeaderNotify.style.justifyContent = "center";
	
	HeaderNotify.style.alignItems = "center";
	
	HeaderNotify.style.width = window.innerWidth-window.innerWidth/8 + "px";
	
	HeaderNotify.style.height = window.innerHeight/8 + "px";
	
	HeaderNotify.style.margin = "10px";
	
	HeaderNotify.style.marginTop = "50px";
	
	HeaderNotify.style.marginBottom = "50px";
	
	HeaderNotify.style.padding = "10px";
	
	HeaderNotify.style.borderTopLeftRadius = "10px";
	
	HeaderNotify.style.borderTopRightRadius = "10px";
	
	HeaderNotify.style.borderBottomLeftRadius = "10px";
	
	HeaderNotify.style.borderBottomRightRadius = "10px";
	
	HeaderNotify.style.backgroundColor = "#121212ff";
	
	HeaderNotify.style.boxShadow = "0px 0px 10px 1px #121212ff";
	
	HeaderNotify.appendChild(HeaderNotifyIcon());
	
	HeaderNotify.appendChild(HeaderNotifyText());
	
	return HeaderNotify;
	}
	
	function HeaderNotifyIcon(){
		
	var HeaderNotifyIcon = document.createElement("div");
	
	HeaderNotifyIcon.style.margin = "10px";
	
	HeaderNotifyIcon.style.width = window.innerWidth/8 + "px";
	
	HeaderNotifyIcon.style.height = window.innerWidth/8 + "px";
	
	HeaderNotifyIcon.style.backgroundImage = "url('https://www.pngkey.com/png/full/129-1296729_alert-icon-png.png')";
	
	HeaderNotifyIcon.style.backgroundRepeat = "no-repeat";
	
	HeaderNotifyIcon.style.backgroundSize = "100%";
	
	return HeaderNotifyIcon;
	
	}
	
	function HeaderNotifyText(){
	
	var HeaderNotifyText = document.createElement("h2");
	
	HeaderNotifyText.id = "HeaderNotifyText";
	
	HeaderNotifyText.style.margin = "10px";
	
	HeaderNotifyText.style.fontSize = window.innerHeight / 40 + "px";
	
	HeaderNotifyText.style.fontWeight = "bold";
	
	HeaderNotifyText.style.fontFamily = "Normal";
	
	HeaderNotifyText.style.color = "white";
	
	HeaderNotifyText.innerText = "Clique em algum anuncio para liberar";

	HeaderNotifyText.style.width = window.innerWidth/1 - window.innerWidth/4 + "px";
	
	//ajustarTamanhoFonte();
	
	HeaderNotifyText.addEventListener("selectstart", function(f){
	f.preventDefault();
	});
	
	return HeaderNotifyText;
	
	}
	
	function initGoogleAds(){
	    
	var sc = document.createElement("script");
	sc.setAttribute("async","");
	sc.setAttribute("src","https://securepubads.g.doubleclick.net/tag/js/gpt.js");
	document.body.appendChild(sc);
	
	}
	
	function setCookie(Name,int){
	
	document.cookie = Name+"="+int;
	
	}
	
	function getCookie(Name){

	if(Name === "GoogleAdBanner" && !document.cookie.includes(Name)){

	setCookie(Name,1);
	
	}

	if(Name === "VPPV" && !document.cookie.includes(Name)){

	setCookie(Name,1);

	ViewOne = true;
	
	}
	
	var cookies = document.cookie.split(';');
	
	for (var i = 0; i < cookies.length; i++) {
	
        var parts = cookies[i].split('=');
	
        if (parts[0].trim() === Name) {
        
	return parts[1];
	
        }
	
	}
	
	return null;
	/*
	var Cookie = document.cookie;
	
	if(Cookie.includes(Name)){
	
	Cookie = Cookie.substring
	(
	Cookie.indexOf(Name),Cookie.length
	);

	if(Name.includes("GoogleAdBanner")){
	Cookie = Cookie.substring
	(
	Cookie.indexOf("=")+1,Cookie.indexOf("=")+2
	);
	}else{

	if(Cookie.includes(";")){
	Cookie = Cookie.substring
	(
	Cookie.indexOf("=")+1,Cookie.indexOf(";")
	);
	}else{
	Cookie = Cookie.substring(
	Cookie.indexOf("=")+1,Cookie.length
	);
		//alert(Cookie);
	}
	
	}

	}else{
	
	setCookie(Name,1);

	return "null";
	
	}
	
	return Cookie;*/
	
	}
	
	function BlockOne(){
	
	var BlockOne = document.createElement("div");

	BlockOne.id = "BlockOne";
	
	BlockOne.style.display = "flex";
	
	BlockOne.style.justifyContent = "center";
	
	BlockOne.style.alignItems = "center";
	
	BlockOne.style.width = window.innerWidth-window.innerWidth/12 + "px";
	
	BlockOne.style.height = window.innerHeight/3 + "px";
	
	BlockOne.style.backgroundColor = "#121212ff";
	
	BlockOne.style.borderTopLeftRadius = "10px";
	
	BlockOne.style.borderTopRightRadius = "10px";
	
	BlockOne.style.borderBottomLeftRadius = "10px";
	
	BlockOne.style.borderBottomRightRadius = "10px";
	
	BlockOne.style.margin = "10px";
	
	BlockOne.appendChild(AdOne());
	
	BlockOne.appendChild(BlockAdClick());
	
	return BlockOne;
	
	}
	
	function BlockTwo(){
	
	var BlockTwo = document.createElement("div");

	BlockTwo.id = "BlockTwo";
	
	BlockTwo.style.display = "flex";
	
	BlockTwo.style.justifyContent = "center";
	
	BlockTwo.style.alignItems = "center";
	
	BlockTwo.style.width = window.innerWidth-window.innerWidth/12 + "px";
	
	BlockTwo.style.height = window.innerHeight/3 + "px";
	
	BlockTwo.style.backgroundColor = "#121212ff";
	
	BlockTwo.style.borderTopLeftRadius = "10px";
	
	BlockTwo.style.borderTopRightRadius = "10px";
	
	BlockTwo.style.borderBottomLeftRadius = "10px";
	
	BlockTwo.style.borderBottomRightRadius = "10px";
	
	BlockTwo.style.margin = "10px";
	
	BlockTwo.appendChild(AdTwo());
	
	BlockTwo.appendChild(BlockAdClick());
	
	return BlockTwo;
	
	}
	
	function BlockTree(){
	
	var BlockTree = document.createElement("div");

	BlockTree.id = "BlockTree";
	
	BlockTree.style.display = "flex";
	
	BlockTree.style.justifyContent = "center";
	
	BlockTree.style.alignItems = "center";
	
	BlockTree.style.width = window.innerWidth-window.innerWidth/12 + "px";
	
	BlockTree.style.height = window.innerHeight/3 + "px";
	
	BlockTree.style.backgroundColor = "#121212ff";
	
	BlockTree.style.borderTopLeftRadius = "10px";
	
	BlockTree.style.borderTopRightRadius = "10px";
	
	BlockTree.style.borderBottomLeftRadius = "10px";
	
	BlockTree.style.borderBottomRightRadius = "10px";
	
	BlockTree.style.margin = "10px";
	
	BlockTree.appendChild(AdTree());
	
	BlockTree.appendChild(BlockAdClick());
	
	return BlockTree;
	
	}
	
	function AdOne(){

	var Content1_slot;
	googletag.cmd.push(function() {
	var mapping = 	googletag.sizeMapping().addSize([0, 0], ['fluid',[250, 250],[300, 250],[336, 280]]).build();
	Content1_slot = googletag.defineSlot("/22967751971/equipeatualizada/equipeatualizada_Content1",[[250, 250],[300, 250],[336, 280]], "Content1")
	.defineSizeMapping(mapping)
	.setCollapseEmptyDiv(true)
	.addService(googletag.pubads());
	googletag.enableServices();

});

	var AdOne = document.createElement("div");
	AdOne.id = "Content1"; 
	
	var sc = document.createElement("script");
	sc.innerHTML = "googletag.cmd.push(function() { googletag.display('Content1'); });";
	
	AdOne.appendChild(sc);
	
	return AdOne;
	
	}
	
	function AdTwo(){

	var Content2_slot;
	googletag.cmd.push(function() {
	var mapping = 	googletag.sizeMapping().addSize([0, 0], ['fluid',[250, 250],[300, 250],[336, 280]]).build();
	Content2_slot = googletag.defineSlot("/22967751971/equipeatualizada/equipeatualizada_Content2",[[250, 250],[300, 250],[336, 280]], "Content2")
	.defineSizeMapping(mapping)
	.setCollapseEmptyDiv(true)
	.addService(googletag.pubads());
	/*googletag.pubads().enableLazyLoad({
	fetchMarginPercent: 20,
	renderMarginPercent: 10,
	mobileScaling: 2.0
        });*/
	googletag.enableServices();

});
	
	var AdTwo = document.createElement("div");
	AdTwo.id = "Content2"; 
	
	var sc = document.createElement("script");
	sc.innerHTML = "googletag.cmd.push(function() { googletag.display('Content2'); });";
	
	AdTwo.appendChild(sc);
	
	return AdTwo;
	
	}
	
	function AdTree(){

	var Content3_slot;
	googletag.cmd.push(function() {
	var mapping = 	googletag.sizeMapping().addSize([0, 0], ['fluid',[250, 250],[300, 250],[336, 280]]).build();
	Content3_slot = googletag.defineSlot("/22967751971/equipeatualizada/equipeatualizada_Content3",[[250, 250],[300, 250],[336, 280]], "Content3")
	.defineSizeMapping(mapping)
	.setCollapseEmptyDiv(true)
	.addService(googletag.pubads());
	/*googletag.pubads().enableLazyLoad({
	fetchMarginPercent: 20,
	renderMarginPercent: 10,
	mobileScaling: 2.0
        });*/
	googletag.enableServices();

});
	
	var AdTree = document.createElement("div");
	AdTree.id = "Content3"; 
	
	var sc = document.createElement("script");
	sc.innerHTML = "googletag.cmd.push(function() { googletag.display('Content3'); });";
	
	AdTree.appendChild(sc);
	
	return AdTree;
	
	}
	
	function BlockAdClick(){
	
	var BlockAdClick = document.createElement("div");
	
	BlockAdClick.setAttribute("class","BlockAdClick");
	
	BlockAdClick.style.position = "absolute";
	
	BlockAdClick.style.width = window.innerWidth + "px";
	
	BlockAdClick.style.height = window.innerHeight / 3 + 10 + "px";

	BlockAdClick.style.backgroundImage = "url(https://raw.githubusercontent.com/WB-Painel/SCRIPTS/refs/heads/main/image/bloqueado.png)";

	BlockAdClick.style.backgroundPosition = "center";
	
	BlockAdClick.style.backgroundSize = window.innerWidth / 2 + "px";

	BlockAdClick.style.backgroundRepeat = "no-repeat";

	BlockAdClick.style.opacity = "0.5";
	
	BlockAdClick.style.pointerEvents = "none";

	if(dots1.length < 100){
	CreateDot(BlockAdClick, dots1);
	//dots1 = Array.apply(null, Array(30)).map(a => new Dot(BlockAdClick));
	}else{

	if(dots2.length < 100){
	CreateDot(BlockAdClick, dots2);
	//dots2 = Array.apply(null, Array(30)).map(a => new Dot(BlockAdClick));
	}else{

	if(dots3.length < 100){
	CreateDot(BlockAdClick, dots3);
	//dots3 = Array.apply(null, Array(30)).map(a => new Dot(BlockAdClick));
	}
	}
	}

	requestAnimationFrame(paint);
	
	return BlockAdClick;
	
	}
	
	function BottomDesign(){
		
	var BottomDesign = document.createElement("div");

	BottomDesign.style.width = window.innerWidth + "px";
	
	BottomDesign.style.height = window.innerHeight / 3 + "px";

	initViewPager(BottomDesign);
	
	return BottomDesign;
	
	}
	
	function DisableScroll(){
	
	window.top.document.body.style.overflow = "hidden";
	
	document.getElementById("DownloadBlock").style.overflow = "auto";
	
	DetectAdClick();
	
	}
	
	function isPageHiddens(){
		
	var isPageHidden =
	document.hidden ||
	document.msHidden ||
	document.webkitHidden ||
	document.mozHidden ||
	false;
	
	return isPageHidden;
		
	}
	
	function isPageRedirects(){
	
	var isPageRedirect = this.isPageRedirect;
	
	return isPageRedirect;
	
	}
	
	function DetectAdClick(){
	
	var isBurled = true;

	document.addEventListener("visibilitychange", function () {

	if(document.hidden){

	if(document.activeElement.tagName === "IFRAME"){

	isBurled = false;

	}else{

	isBurled = true;
	
	}
	
	}else{

	var ShutDown = 0;
	
	var isApple = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (isApple) {

	ShutDown = 10000;
	
	}else{

	ShutDown = 500;

	}

	setTimeout(function(){
	
	isBurled = true;

	isPageRedirect = false;

	},ShutDown);

	document.getElementById("HeaderDownload").focus();
	//requestAnimationFrame(foco);
		
	}
	
	});
	/*document.getElementById("HeaderDownload").focus();*/
	
	/*window.addEventListener("focus", function(){
	setTimeout(function(){
	var isMobile = /iPhone|iPad|iPod/i.test(navigator.userAgent);
	//alert(isMobile);
        if (isMobile) {
	}else{
	isPageRedirect = false;
	}
	},500);
	});*/
	
	window.addEventListener("beforeunload", function(){
	
	isPageRedirect = true;

	});

	raf = requestAnimationFrame(foco);
	
	function foco(){
	
	if(document.activeElement.tagName === "IFRAME"){
	
	var e = new Event("blur");
	
	dispatchEvent(e);
	
	//cancelAnimationFrame(raf);
	
	}else{
	
	raf = requestAnimationFrame(foco);
	
	}
	
	}
	
	_("BlockOne");
	_("BlockTwo");
	_("BlockTree");
	
	window.addEventListener("blur", function(){

	if(document.activeElement.tagName === "IFRAME"){

	//alert(document.activeElement.tagName);

	/*var isMobile = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (isMobile) {
	isPageRedirect = true; isBurled = false;
	}*/
		
	document.getElementById("HeaderNotifyText").innerText = "Verificando, por favor, aguarde";

	ajustarTamanhoFonte();
	
	setTimeout(function(){

	document.getElementById("HeaderDownload").focus();
	
	},500);
	
	setTimeout(function(){
	
	if(isPageRedirect || !isBurled){
	
	document.getElementById("HeaderNotifyText").innerText = "Estamos carregando seu link de download, por favor, aguarde";

	ajustarTamanhoFonte();
	
	DisableAdClick();
	
	}else{
	
	document.getElementById("HeaderNotifyText").innerText = "Não tente burlar, clique na imagem abaixo e aguarde 5 segundos antes de voltar para liberar";

	ajustarTamanhoFonte();
	//raf = requestAnimationFrame(foco);
	
	}
	
	},5000);
	
	}
	
	});
	
	}
	
	function DisableAdClick(){

	var AdOne = document.getElementById("Content1");

	AdOne.style.opacity = "0.0";

	var AdTwo = document.getElementById("Content2");

	AdTwo.style.opacity = "0.0";

	var AdTree = document.getElementById("Content3");

	AdTree.style.opacity = "0.0";

	
	for(var i = 0; i < 3; i++){
	
	var BlockAdClick = document.getElementsByClassName("BlockAdClick")[i];

	BlockAdClick.style.opacity = "1.0";
	
	BlockAdClick.style.pointerEvents = "auto";
	
	}

	requestAnimationFrame(paint);
	
	EnableDownload();
	
	}
	
	function EnableDownload(){
	
	setTimeout(function(){
	
	enabled = true;
	
	document.getElementById("HeaderNotifyText").innerText = "Link de download liberado, clique para prosseguir";
	
	},5000);
	
	}
	
	async function _(id){
	
	var inter = setInterval(function(){
	
	var v = document.getElementById(id).children[0].children[0].children[0];
	
	if(typeof v !== "undefined"){
	
	clearInterval(inter);

	var vv = v.parentNode.parentNode.parentNode;
	vv.style.position = "relative";

	
	var rect = v.getBoundingClientRect();
	var rect2 = vv.getBoundingClientRect();
	
	
	var left = rect.left - rect2.left;
	
	var top = rect.top - rect2.top;
	
	var right = rect.right - rect2.left;
	
	var bottom = rect.bottom - rect2.top;
	
	
	var width = rect.width;
	
	var height = rect.height;
	
	
	
	vv.appendChild(l(20,height,left,top));
	
	vv.appendChild(l(width,20,left,top));
	
	vv.appendChild(l(20,height,right-20,top));
	
	vv.appendChild(l(width,20,left,bottom-20));
		

	//document.activeElement.blur();
	
	}
	
	},100);
	
	}
	
	function l(w,h,x,y){
	
	var l = document.createElement("div");
	
	l.style.position = "absolute";

	l.style.width = w + "px";
	
	l.style.height = h + "px";
	
	l.style.left = x + "px";
	
	l.style.top = y + "px";
	
	l.style.backgroundColor = "#ff000000";
	
	return l;
	
	}

//New
function CreateDot(View, DotsArray){
while(DotsArray.length < 100){
Dot(View,DotsArray);
}
}

function Dot(View, DotsArray){

var x = Math.floor(Math.random() * (window.innerWidth - window.innerWidth/2));
var y = Math.floor(Math.random() * (window.innerHeight/3 - window.innerHeight/12));
	
var dot = document.createElement("div");
dot.classList.add("dot");
dot.style.position = "absolute";
dot.style.width = "10px";
dot.style.height = "10px";
dot.style.left = window.innerWidth/4 + x + "px";
dot.style.top = window.innerHeight/24 + y + "px";
dot.style.backgroundColor = "red";

View.append(dot);

DotsArray.push(dot);

dot.removeDot = function(){

this.parentElement.removeChild(this);

let index = DotsArray.indexOf(this);

if (index > -1) {

DotsArray.splice(index, 1); // Remove o ponto da list

}

CreateDot(View, DotsArray);
	
}

}

function paint(){
/*
for(dot of dots1){
dot.removeDot();
}
for(dot of dots2){
dot.removeDot();
}
for(dot of dots3){
dot.removeDot();
}*/
if (dots1.length > 0) {
        dots1[0].removeDot(); // Remove o primeiro ponto de dots1
    }
    if (dots2.length > 0) {
        dots2[0].removeDot(); // Remove o primeiro ponto de dots2
    }
    if (dots3.length > 0) {
        dots3[0].removeDot(); // Remove o primeiro ponto de dots3
    }

requestAnimationFrame(paint);

}

function ajustarTamanhoFonte() {
var HeaderNotifyText = document.getElementById("HeaderNotifyText");

var Container = HeaderNotifyText.parentElement;
    
var fontSize = parseInt(window.innerHeight / 40);

HeaderNotifyText.style.fontSize = fontSize + 'px';

while (HeaderNotifyText.scrollHeight > Container.clientHeight || HeaderNotifyText.scrollWidth > Container.clientWidth) {

fontSize--;
      
HeaderNotifyText.style.fontSize = fontSize + 'px';
      
if (fontSize <= 10) {

break;
      
}
    
}

}
