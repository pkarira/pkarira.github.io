var coll = document.getElementsByClassName("collapsible");
var container = document.getElementById("list-container");
var i,j,k;
var a= ["a","b","c"];
var b= [[["title1","link1"],["title2","link2"]],[["title3","link3"]],[["title3","link3"]]];
for (i=0;i<3;i++)
{
	var btn = document.createElement("button");
	btn.classList="collapsible";
	btn.addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight){
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		} 
	});
	var t = document.createTextNode(a[i]);
	btn.appendChild(t);
	container.appendChild(btn);
	var button_div = document.createElement("div");
	button_div.classList="content";
	for(k=0;k<b[i].length;k++){
		var link_button = document.createElement("button");
		link_button.classList= "link_button";
		link_button.addEventListener("click", function() {
		});
		var t = document.createTextNode(b[i][k][0]);
		link_button.appendChild(t);
		button_div.appendChild(link_button);
	}
	container.appendChild(button_div);
}

/*for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.maxHeight){
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
		} 
	});
}*/