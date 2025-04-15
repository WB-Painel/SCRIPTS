      function initViewPager(root){
	  
	  root.append(ViewPager());
	  
	  }
  
      var array = [
	  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvoSwX6R5EvtQM3qXv8o7ENnrTwhnapkHlCyztbgsiORwrZ0SzUO3FBE&s=10",
	  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNX7jac-ek49MHGbPfy-vpAQ-lHsQifCCpzHxOvmY8XHaZsErSk733fulu&s=10",
	  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcCaIqq9kHcFUSPNCjJgHqf8JEyWaRtefBiqgzsNxZLrZPyLSpv-shA&s=10",
	  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvoSwX6R5EvtQM3qXv8o7ENnrTwhnapkHlCyztbgsiORwrZ0SzUO3FBE&s=10",
	  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNX7jac-ek49MHGbPfy-vpAQ-lHsQifCCpzHxOvmY8XHaZsErSk733fulu&s=10",
	  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcCaIqq9kHcFUSPNCjJgHqf8JEyWaRtefBiqgzsNxZLrZPyLSpv-shA&s=10",
	  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvoSwX6R5EvtQM3qXv8o7ENnrTwhnapkHlCyztbgsiORwrZ0SzUO3FBE&s=10",
	  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNX7jac-ek49MHGbPfy-vpAQ-lHsQifCCpzHxOvmY8XHaZsErSk733fulu&s=10",
	  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcCaIqq9kHcFUSPNCjJgHqf8JEyWaRtefBiqgzsNxZLrZPyLSpv-shA&s=10",
	  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvoSwX6R5EvtQM3qXv8o7ENnrTwhnapkHlCyztbgsiORwrZ0SzUO3FBE&s=10",
	  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNX7jac-ek49MHGbPfy-vpAQ-lHsQifCCpzHxOvmY8XHaZsErSk733fulu&s=10",
	  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcCaIqq9kHcFUSPNCjJgHqf8JEyWaRtefBiqgzsNxZLrZPyLSpv-shA&s=10"
	  
	  ];
	  
	  
	  
	  var passos = 10;
	  
	  
	  
	  
	  var SlidePage;
	  
	  
	  var sw = window.innerWidth;
	  
	  var sh = window.innerHeight;
	  
	  
	  var largura_extra_do_item_selecionado = 20;
	  
	  var altura_extra_do_item_selecionado = 40;
	  
	  
	  var expandedItemWidth = /*320*/ parseInt(sw/3) + largura_extra_do_item_selecionado;
	  
	  var expandedItemHeight = /*640*/ parseInt(sh/3) + altura_extra_do_item_selecionado;
	  
	  
	  var defaultItemWidth = /*300*/ parseInt(sw/3);
	  
	  var defaultItemHeight = /*600*/ parseInt(sh/3);
	  
	  alert(defaultItemWidth);
	  //var itemWidth = /*300*/ parseInt(sw/3);
	  
	  //var itemHeight = /*600*/ parseInt(sh/3);
	  
	  
	  var itemMargin = 10;
	  
	  
	  //var maxItemWidth = itemWidth + 2 * itemMargin;
	  
	  //var maxItemHeight = itemHeight + 2 * itemMargin;
	  var pp = 0;
	  
	  var int = 0;
	  
	  var int1 = - expandedItemWidth;
	  
	  var int2 = 0;
	  
	  var int3 = - expandedItemWidth;
	  
	  var Screen = window;
	  
	  function ViewPager(){
	  
	  var ViewPager = document.createElement("div");
	  
	  ViewPager.style.position = "fixed";
	  
	  ViewPager.style.left = "0px";
	  
	  ViewPager.style.top = "0px";
	  
	  ViewPager.style.right = "0px";
	  
	  ViewPager.style.bottom = "0px";
	  
	  ViewPager.style.width = "100%";
	  
	  ViewPager.style.height = "50%";
	  
	  //ViewPager.style.backgroundColor = "red";
	  
	  ViewPager.append(Wave());
	  
	  ViewPager.append(SlidePage());
	  
	  ViewPager.append(Information());
	  
	  return ViewPager;
	  
	  }
	  
	  function Wave(){
	  
	  var keyframes = document.createElement("style");
	  keyframes.type = "text/css";
	  keyframes.innerHTML = `@keyframes waveAnim {
	  0% {
	  d: path( "M0,192   C220,100,440,100,660,192 C880,290,1100,290,1320,192 L1320 500 L0 500");
	  }
	  25% {
	  d: path( "M0,100   C220,100,440,292,660,292 C880,292,1100,100,1320,100 L1320 500 L0 500");
	  }
	  50% {
	  d: path( "M0,192   C220,290,440,290,660,192 C880,100,1100,100,1320,192 L1320 500 L0 500");
	  }
	  75% {
	  d: path( "M0,292   C220,292,440,100,660,100 C880,100,1100,292,1320,292 L1320 500 L0 500");
	  }
	  100% {
	  d: path( "M0,192   C220,100,440,100,660,192 C880,290,1100,290,1320,192 L1320 500 L0 500");
	  }
	  }`;
	  document.head.append(keyframes);

	  var wave = document.createElement("style");
	  wave.type = "text/css";
	  wave.innerHTML = ".wave {display:flex;margin-left:0px;margin-top:0px;margin-right:0px;margin-bottom:-1px;width:100%;height:400px} path{ animation: waveAnim 7s; animation-timing-function: linear; animation-iteration-count: infinite; }";
	  document.head.append(wave);
	  
	  var wp = document.createElementNS("http://www.w3.org/2000/svg","path");
	  wp.setAttribute("fill","#3DED97");
	  wp.setAttribute("d","M0,192   C220,100,440,100,660,192 C880,290,1100,290,1320,192 L1320 500 L0 500");
	  
	  var w = document.createElementNS("http://www.w3.org/2000/svg","svg");
	  w.setAttribute("class","wave");
	  w.setAttribute("viewbox","0 0 0 0");
	  
	  w.append(wp);
	  
	  return w;
	  
	  }
	  
	  function SlidePage(){
	  
	  SlidePage = document.createElement("div");
	  
	  SlidePage.id = "SlidePage";
	 
	  SlidePage.style.width = "auto";
	  
	  SlidePage.style.height = Screen.innerWidth + "px";
	  
	  SlidePage.style.position = "fixed";
	  
	  SlidePage.style.left = "0";
	  
	  SlidePage.style.top = "auto";
	  
	  SlidePage.style.right = "auto";
	  
	  SlidePage.style.bottom = "auto";
	  
	  SlidePage.style.display = "flex";
	  
	  SlidePage.style.justifyContent = "center";
	  
	  SlidePage.style.alignItems = "center";
	  
	  SlidePage.style.overflowX = "scroll";
	  
	  SlidePage.style.backgroundColor = "#3DED97";
	  
	  SlidePage.style.paddingLeft = "5.4px";
	  
	  var i = 0;
	  
	  while(i < array.length){
	  
	  var View = addView(i,array[i]);
	  
	  SlidePage.append(View);
	  
	  i++;
	  
	  }
	  
	  return SlidePage;
	 
	  }
	  
	  
	  
	  
	  function addView(id,background){
	  
	  var View = document.createElement("div");
	  
	  View.id = "View" + id;
	  
	  if(id == 0){
	  
	  View.style.width = defaultItemWidth + "px";
	  
	  View.style.height = expandedItemHeight + "px";
	  
	  View.style.zIndex = "100";
	  
	  View.style.boxShadow = "5px 5px 10px 5px #eeeeee";
	  
	  }else{
	  
	  View.style.width = defaultItemWidth + "px";
	  
	  View.style.height = defaultItemHeight + "px";
	  
	  }
	  
	  
	  
	  
	  
	  View.style.margin = itemMargin + "px";
	  
	  View.style.borderTopLeftRadius = "10px";
	  
	  View.style.borderTopRightRadius = "10px";
	  
	  View.style.borderBottomLeftRadius = "10px";
	  
	  View.style.borderBottomRightRadius = "10px";
	  
	  View.style.backgroundImage = "url("+background+")";
	  
	  View.style.backgroundRepeat = "no-repeat";
	  
	  View.style.backgroundSize = "cover";
	  
	  View.style.backgroundPosition = "center";
	  
	  parseTouch(View);
	  
	  return View;
	  
	  }
	  
	  function Information(){
	  
	  var View = document.createElement("center");
	  
	  View.style.position = "absolute";
	  
	  View.style.width = window.innerWidth - expandedItemWidth + "px";
	  
	  View.style.height = "100%";
	  
	  View.style.left = expandedItemWidth + itemMargin + "px";
	  
	  View.style.backgroundColor = "red";
	  
	  View.append(InformationTitle());
	  
	  View.append(InformationDescription());
	  
	  return View;
	  
	  }
	  
	  function InformationTitle(){
	  
	  var Title = document.createElement("h1");
	  
	  Title.style.width = "100%";
	  
	  Title.style.height = "20%";
	  
	  Title.style.display = "flex";
	  
	  Title.style.margin = "0px";
	  
	  Title.style.justifyContent = "left";
	  
	  Title.style.alignItems = "center";
	  
	  Title.style.paddingLeft = "20px";
	  
	  Title.style.fontWeight = "bold";
	  
	  Title.style.fontFamily = "normal";
	  
	  Title.style.fontSize = "50px";
	  
	  Title.style.color = "white";
	  
	  Title.innerText = "Deslize";
	  
	  return Title;
	  
	  }
	  
	  function InformationDescription(){
	  
	  var Description = document.createElement("p");
	  
	  Description.style.width = "100%";
	  
	  Description.style.height = "70%";
	  
	  Description.style.display = "flex";
	  
	  Description.style.margin = "0px";
	  
	  Description.style.justifyContent = "left";
	  
	  Description.style.alignItems = "center";
	  
	  Description.style.paddingLeft = "0px";
	  
	  Description.style.fontWeight = "normal";
	  
	  Description.style.fontFamily = "monospace";
	  
	  Description.style.fontSize = "80px";
	  
	  Description.style.color = "white";
	  
	  Description.innerText = "Deslize para esquerda para aprender a passar pelo encurtador.";
	  
	  return Description;
	  
	  }
	  
	  function parseTouch(View){
	  
	  var beforeX = 0;
	  
	  View.addEventListener("touchstart", function(touch){
	  
	  pp = 0;
	  
	  });
	  
	  View.addEventListener("touchmove", function(touch){
	  
	  var X = parseInt(touch.touches[0].pageX) - parseInt(View.style.width);
	  
	  pp = pp +1;
	  
	  if(beforeX == 0){
	  
	  beforeX = X;
	  
	  }
	  
	  if(X > beforeX){
	  
	  for(ie = 0; ie <= 10; ie++){
	  
	  if(int < int2 && int !== 0){
	  
	  int = int + /*20*/1;
	  
	  for(i = 0; i < SlidePage.children.length; i++){
	  
	  SlidePage.children[i].style.transform = "translateX(" + int + "px)";
	 
	  }
	  
	  beforeX = X;
	  
	  }
	  
	  document.getElementById("k").innerText = "<==:"+int+","+int2;
	
	  }
	  
	  }else{
	  
	  for(ie = 0; ie <= 10; ie++){
	  
	  if(int > int3 && int !== SlidePage.children.length * - expandedItemWidth + expandedItemWidth){
	  
	  int = int - /*20*/1;
	  
	  for(i = 0; i < SlidePage.children.length; i++){
	  
	  SlidePage.children[i].style.transform = "translateX(" + int + "px)";
	 
	  }
	  
	  beforeX = X;
	  
	  }
	  
	  document.getElementById("k").innerText = "==>:"+int+","+int3;
	
	  }
	  
	  }
	  
	  });
	  
	  View.addEventListener("touchend", function(touch){
	  
	  beforeX = 0;
	  
	  var left = false;
	  
	  var right = false;
	  
	  //Função é chamada sempre que é deslizado e soltado após chegar no final
	  
	  if(int == int1){
	  
	  left = true;
	  
	  right = false;
	  
	  int2 = int1 + expandedItemWidth;
	  
	  int1 = int1 - expandedItemWidth;
	  
	  int3 = int1;
	  
	  }
	  
	  if(int == int2){
	  
	  left = false;
	  
	  right = true;
	  
	  int1 = int2 - expandedItemWidth;
	  
	  int2 = int2 + expandedItemWidth;
	  
	  int3 = int1;
	  
	  }
	  
	  if(int == 0){
	  
	  int3 = int - expandedItemWidth;
	  
	  }
	  
	  if(int == SlidePage.children.length * - expandedItemWidth + expandedItemWidth){
	  
	  int2 = int + expandedItemWidth;
	  
	  }
	  
	  //Função é chamada sempre que é deslizado e soltado antes de chegar no final
	  
	  if(int < int1 + defaultItemWidth){
	  
	  left = true;
	  
	  right = false;
	  
	  var inter = setInterval(function(){
	  
	  for(ie = 0; ie <= 10; ie++){
	  
	  for(i = 0; i < SlidePage.children.length; i++){
	  
	  var x = SlidePage.children[i].style.transform;
	 
	  x = x.replace("translateX(","");
	  
	  x = x.replace("px)","");
	  
	  x = parseInt(x) - /*20*/1;
	  
	  SlidePage.children[i].style.transform = "translateX(" + x + "px)";
	 
	  if(x == int + 0){
	  
	  clearInterval(inter);
	  
	  document.getElementById("k").innerText = ">:"+x+","+int+","+int1;
	  
	  //Reorder(x, left);
	  
	  }
	  
	  }
	  
	  }
	  
	  },/*15*/10);
	  
	  int = int1;
	  
	  int2 = int1 + expandedItemWidth;
	  
	  int1 = int1 - expandedItemWidth;
	  
	  int3 = int1;
	  
	  }
	  
	  if(int > int2 - defaultItemWidth){
	  
	  left = false;
	  
	  right = true;
	  
	  var inter = setInterval(function(){
	  
	  for(ie = 0; ie <= 10; ie++){
	  
	  for(var i = 0; i < SlidePage.children.length; i++){
	  
	  var x = SlidePage.children[i].style.transform;
	 
	  x = x.replace("translateX(","");
	  
	  x = x.replace("px)","");
	  
	  x = parseInt(x) + /*20*/1;
	  
	  SlidePage.children[i].style.transform = "translateX(" + x + "px)";
	  
	  if(x == int - 0){
	  
	  clearInterval(inter);
	  
	  document.getElementById("k").innerText = "<:"+x+","+int+","+int2;
	  
	  //Reorder(x, left);
	  
	  }
	  
	  }
	  
	  }
	  
	  },/*15*/10);
	  
	  int = int2;
	  
	  int1 = int2 - expandedItemWidth;
	  
	  int2 = int2 + expandedItemWidth;
	  
	  int3 = int1;
	  
	  }
	  
	  document.getElementById("k").innerText = int+","+int2;
	
	  animate(View,left,right);
	  
	  });
	  
	  }
	  
	  function animate(View,left,right){
	  
	  for(var i = 0; i < SlidePage.children.length; i++){
	  
	  if(SlidePage.children[i].clientHeight == expandedItemHeight){
	  
	  SlidePage.children[i].style.height = defaultItemHeight + "px";
	  
	  SlidePage.children[i].style.zIndex = 0;
	  
	  SlidePage.children[i].style.boxShadow = "none";
	  
	  if(left && !right){
	  //SlidePage.children[i].style.transform = "translateX(" + int2 + "px)";
	  i = i + 1;
	  }
	  if(!left && right){
	  //SlidePage.children[i].style.transform = "translateX(" + int3 + "px)";
	  i = i - 1;
	  }
	  
	  SlidePage.children[i].style.height = expandedItemHeight + "px";
	  
	  SlidePage.children[i].style.zIndex = 100;
	  
	  SlidePage.children[i].style.boxShadow = "5px 5px 10px 5px #eeeeee";
	  
	  }
	  
	  }
	  
	  }
	  
	  function Reorder(int, left){
	  
	  if(left){
	  int = int + 1 * pp;
	  }else{
	  int = int - 1 * pp;
	  }
	  
	  for(ien = 0; ien < SlidePage.children.length; ien++){
	
	  SlidePage.children[ien].style.transform = "translateX(" + int + "px)";
	
	  }
	  
	  }
