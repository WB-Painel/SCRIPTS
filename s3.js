
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
	
	return HeaderIconText;
	
	}

        function HeaderIcon(){
	
	var HeaderIcon = document.createElement("div");
	
	HeaderIcon.style.width = window.innerWidth/8 + "px";
	
	HeaderIcon.style.height = window.innerWidth/8 + "px";
	
	HeaderIcon.style.backgroundImage = "url(`https://cdn.icon-icons.com/icons2/1365/PNG/512/file_89266.png`)";
	
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
