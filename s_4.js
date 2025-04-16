var enabled = false;
	
var isPageRedirect = false;

var isBurled = true;

    init();
	
	function init(){
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

	if(Cookie == "null"){

	Cookie = "1";
	
	}
	
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
	
	return Cookie;
	
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
					googletag.pubads().enableLazyLoad({
										fetchMarginPercent: 20,
										renderMarginPercent: 10,
										mobileScaling: 2.0
          			});
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
					googletag.pubads().enableLazyLoad({
										fetchMarginPercent: 20,
										renderMarginPercent: 10,
										mobileScaling: 2.0
          			});
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
	
	BlockAdClick.style.pointerEvents = "none";
	
	return BlockAdClick;
	
	}
	
	function BottomDesign(){
		
	var BottomDesign = document.createElement("div");
	
	BottomDesign.style.width = window.innerWidth + "px";
	
	BottomDesign.style.height = window.innerHeight / 64 + "px";
	
	BottomDesign.style.marginTop = "50px";
	
	BottomDesign.style.backgroundRepeat = "no-repeat";
	
	BottomDesign.style.backgroundSize = "100% 100%";
	
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

	window.onbeforeunload = function () {

	isBurled = false;
	
	};

	document.addEventListener("visibilitychange", function () {

	if(document.hidden){

	if(document.activeElement.tagName === "IFRAME"){

	isBurled = false;

	document.getElementById("HeaderDownload").innerText = isBurled;
	
	}else{

	isBurled = true;

	//document.getElementById("HeaderDownload").innerText = isBurled;

	}
	
	}else{

	//setTimeout(function(){

	isBurled = true;

	//document.getElementById("HeaderDownload").innerText = isBurled;
	
	//},5000);

	}
	
	});
	/*document.getElementById("HeaderDownload").focus();
	
	window.addEventListener("focus", function(){
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
	isBurled = false;
	});
	
	_("BlockOne");
	_("BlockTwo");
	_("BlockTree");
	
	window.addEventListener("blur", function(){
	
	if(document.activeElement.tagName === "IFRAME"){

	document.getElementById("HeaderNotifyText").innerText = "Verificando, por favor, aguarde";
	
	setTimeout(function(){
	
	document.getElementById("HeaderDownload").focus();
	
	},1000);
	
	setTimeout(function(){
	
	if(!isBurled/*isPageHiddens() || isPageRedirects()*/){
	
	document.getElementById("HeaderNotifyText").innerText = "Estamos carregando seu link de download, por favor, aguarde";
	
	DisableAdClick();
	
	}else{
	
	document.getElementById("HeaderNotifyText").innerText = "Não tente burlar, clique na imagem abaixo e aguarde 5 segundos antes de voltar para liberar";
	
	}
	
	},5000);
	
	}
	
	});
	
	}
	
	function DisableAdClick(){
	
	for(var i = 0; i < 3; i++){
	
	var BlockAdClick = document.getElementsByClassName("BlockAdClick")[i];
	
	BlockAdClick.style.pointerEvents = "auto";
	
	BlockAdClick.style.backgroundColor = "#ffffff00";
	
	}
	
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
	
	
	var rect = v.getBoundingClientRect();
	
	
	var left = parseInt(rect.left);
	
	var top = parseInt(rect.top);
	
	var right = parseInt(rect.right);
	
	var bottom = parseInt(rect.bottom);
	
	
	var width = parseInt(rect.width);
	
	var height = parseInt(rect.height);
	
	
	var vv = v.parentNode.parentNode.parentNode;
	
	
	vv.appendChild(l(20,height,left,top));
	
	vv.appendChild(l(width,20,left,top));
	
	vv.appendChild(l(20,height,right-20,top));
	
	vv.appendChild(l(width,20,left,bottom-20));


	document.getElementById("HeaderDownload").focus();
	
	}
	
	},100);
	
	}
	
	function l(w,h,x,y){
	
	var l = document.createElement("div");
	
	l.style.position = "absolute";
	
	l.style.left = x + "px";
	
	l.style.top = y + "px";
	
	l.style.width = w + "px";
	
	l.style.height = h + "px";
	
	l.style.backgroundColor = "#ff000000";
	
	return l;
	
	}
