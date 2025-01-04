    var Download;
	var Visible;
	var URL;
	var enabled;
	
	if(!document.referrer.includes("youtube.com"))
	
	window.addEventListener("load", function(){
	
	Download = document.getElementById("download");
	
	Visible = false;
	
	URL = Download.children[0].href;
	
	enabled = false;
	
	window.addEventListener("scroll", function(){
	
	var Download_CoordinateY = Download.getBoundingClientRect().y;
	
	var ScreenHeight = window.innerHeight;
	
	if(Download_CoordinateY<ScreenHeight)
	
	if(!Visible){
	
	Visible=true;
	
	DownloadBlock();
	
	}
	
	});
	
	});
	
	function DownloadBlock(){
	
	var div = document.createElement("center");
	
	div.id = "DownloadBlock";
	
	div.style.backgroundColor = "#181818ff";
	
	div.style.justifyContent="center";
	
	div.style.alignItems="center";
	
	div.style.width=window.innerWidth + "px";
	
	div.style.height=window.innerHeight + "px";
	
	div.style.position="fixed";
	
	div.style.left="0";
	
	div.style.top="0";
	
	div.style.right="0";
	
	div.style.bottom="0";
	
	document.body.appendChild(div);
	
	
	var DownloadBlock = document.getElementById("DownloadBlock");
	
	
	var Header_ = Header();
	
	
	DownloadBlock.appendChild(Header_);
	
	
	var HeaderNotify_ = HeaderNotify();
	
	
	DownloadBlock.appendChild(HeaderNotify_);
	
	
	var BlockOne_ = BlockOne();
	
	var BlockTwo_ = BlockTwo();
	
	var BlockTree_ = BlockTree();
	
	
	DownloadBlock.appendChild(BlockOne_);
	
	DownloadBlock.appendChild(BlockTwo_);
	
	DownloadBlock.appendChild(BlockTree_);
	
	
	var BottomDesign_ = BottomDesign();
	
	
	DownloadBlock.appendChild(BottomDesign_);
	
	
	DisableScroll();
	
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
	
	HeaderIcon.style.backgroundImage = "url('https://cdn.icon-icons.com/icons2/1365/PNG/512/file_89266.png')";
	
	HeaderIcon.style.backgroundRepeat = "no-repeat";
	
	HeaderIcon.style.backgroundSize = "100%";
	
	HeaderIcon.style.margin = window.innerWidth / 20 + "px";
	
	return HeaderIcon;
	
	}
	
	function HeaderText(){
	
	var HeaderText = document.createElement("h1");
	
	HeaderText.style.fontWeight = "bold";
	
	HeaderText.style.fontFamily="Graphik Light";
	
	HeaderText.innerText = window.document.getElementsByTagName("title")[0].innerText.substring(0,10);
	
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
	
	HeaderDownload.id="HeaderDownload";
	
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
	
	HeaderDownload.style.fontFamily="Normal";
	
	HeaderDownload.innerText = "Download";
	
	HeaderDownload.style.marginTop = window.innerWidth / 24 + "px";

	HeaderDownload.style.marginLeft = window.innerWidth / 24 + "px";

	HeaderDownload.style.marginBottom = window.innerWidth / 24 + "px";
	
	HeaderDownload.addEventListener("selectstart", function(f){
	f.preventDefault();
	});
	
	HeaderDownload.addEventListener("click", function(){
	if(enabled)
	window.location.href=URL;
	});
	
	return HeaderDownload;
	
	}
	
	function HeaderLoading(){
	
	var HeaderLoading = document.createElement("div");
	
	//HeaderLoading.style.padding = "20px";
	
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
	
	var HeaderNotifyText = document.createElement("h1");
	
	HeaderNotifyText.id = "HeaderNotifyText";
	
	HeaderNotifyText.style.margin = "10px";
	
	HeaderNotifyText.style.fontSize = window.innerHeight / 30 + "px";
	
	HeaderNotifyText.style.fontWeight = "bold";
	
	HeaderNotifyText.style.fontFamily="Normal";
	
	HeaderNotifyText.style.color = "white";
	
	HeaderNotifyText.innerText = "Clique em algum anuncio para liberar";
	
	HeaderNotifyText.addEventListener("selectstart", function(f){
	f.preventDefault();
	});
	
	return HeaderNotifyText;
	
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
	
	//BlockOne.appendChild(BlockAdClick());
	
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
	
	//BlockTwo.appendChild(AdTwo());
	
	//BlockTwo.appendChild(BlockAdClick());
	
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
	
	//BlockTree.appendChild(AdTree());
	
	//BlockTree.appendChild(BlockAdClick());
	
	return BlockTree;
	
	}
	
	
	function AdOne(){
	
	var AdOne = document.getElementById("div-gpt-ad-3088428-1");
	
	var aa = AdOne.children[0];

	alert(AdOne.innerHTML+","+aa.innerHTML);

	return AdOne;
	}
	
	function AdTwo(){
	
	var AdOne = document.getElementById("code-block code-block-2");
	
	return AdOne.children[0].children[0];
	
	}
	
	function AdTree(){
	
	var AdOne = document.getElementById("code-block code-block-3");
	
	return AdOne.children[0].children[0];
	
	}
	
	
	function BlockAdClick(){
	
	var BlockAdClick = document.createElement("div");
	
	BlockAdClick.setAttribute("class","BlockAdClick");
	
	BlockAdClick.style.position = "absolute";
	
	BlockAdClick.style.width = window.innerWidth + "px";
	
	BlockAdClick.style.height = window.innerHeight / 3 + "px";
	
	//BlockAdClick.style.backgroundColor="#ffffffaa";
	
	BlockAdClick.style.pointerEvents="none";
	
	return BlockAdClick;
	
	}
	
	
	function BottomDesign(){
		
	var BottomDesign = document.createElement("div");
	
	BottomDesign.style.width = window.innerWidth + "px";
	
	BottomDesign.style.height = window.innerHeight / 64 + "px";
	
	BottomDesign.style.marginTop = "50px";
	
	//BottomDesign.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUq3TZCNIMFoX9ItfSNzf1I3HKByYtylSBopXqZ8jCsJGPpcsxPi1iW7gG&s=10')";
	
	BottomDesign.style.backgroundRepeat = "no-repeat";
	
	BottomDesign.style.backgroundSize = "100% 100%";
	
	return BottomDesign;
	
	}
	
	function DisableScroll(){
	
	document.body.style.overflow="hidden";
	
	document.getElementById("DownloadBlock").style.overflow="auto";
	
	DisableAdButtons();
	
	}
	
	function DisableAdButtons(){
	
	setTimeout(function(){
	
	var AdOne = document.getElementById("BlockOne").children[0];

	AdOne.id;
	
	AdOne.contentWindow.document.getElementById("cbb").parentNode.parentNode.style.pointerEvents = "none";
	
	var AdTwo = document.getElementById("BlockTwo").children[0];
	
	AdTwo.contentWindow.document.getElementById("cbb").parentNode.parentNode.style.pointerEvents = "none";
	
	var AdTree = document.getElementById("BlockTree").children[0];
	
	AdTree.contentWindow.document.getElementById("cbb").parentNode.parentNode.style.pointerEvents = "none";
	
	},100);
	
	DetectAdClick();
	
	}
	
	function DetectAdClick(){
	
	var clicked = false;
	
	window.addEventListener("mouseover", function(){
	
	clicked = true;
	
	setTimeout(function(){
	
	clicked = false;
	
	},500);
	
	});
	
	/*
	setTimeout(function(){
	var AdOne = document.getElementById("a3");
	
	AdOne.contentWindow.document.getElementById("cbb").addEventListener("mousedown", function(){
	
	alert("$");
	
	});
	},2000);*/
	
	
	window.addEventListener("blur", function(){
	
	if(clicked){
	
	if(document.activeElement.tagName == "IFRAME"){
	
	
	//document.activeElement.style.opacity="50%";
	
	//document.getElementById("HeaderDownload").innerHTML = "<a href='https://google.com/'>Download</a>";
	
	DisableAdClick();
	
	}
	
	}else{
	
	if(document.activeElement.tagName == "IFRAME"){
		
	document.getElementById("HeaderNotifyText").innerText = "Para de tentar burlar e clica logo no anúncio";
	
	}
	
	}
	
	setTimeout(function(){
	document.getElementById("HeaderDownload").focus();
	},500);
	
	});
	
	}
	
	
	function DisableAdClick(){
	
	for(var i = 0; i < 3; i++){
	
	var BlockAdClick = document.getElementsByClassName("BlockAdClick")[i];
	
	BlockAdClick.style.pointerEvents="auto";
	
	}
	
	EnableDownload();
	
	}
	
	function EnableDownload(){
	
	setTimeout(function(){
	
	enabled = true;
	
	},10000);
	
	}
