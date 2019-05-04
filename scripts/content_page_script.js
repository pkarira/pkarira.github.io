var coll = document.getElementsByClassName("collapsible");
var container = document.getElementById("list-container");
var i,j,k;
a=["Git","Javascript","Internet"];
var links = {
  "Git":[["how hash works","https://youtu.be/P6jD966jzlk"],
  		["cherry-pick problems(no merge conflict)","https://devblogs.microsoft.com/oldnewthing/?p=98225 "],
  		["how git merge works","https://stackoverflow.com/questions/14961255/how-does-git-merge-work-in-details"],
  		["how git merge works"," https://www.quora.com/How-does-Git-merge-work"],
  		["merge recursive strategy","http://blog.plasticscm.com/2011/09/merge-recursive-strategy.html"],
  		["git internals","https://github.com/pluralsight/git-internals-pdf"],
  		["git-scm","https://git-scm.com/book/en/v2"],
  		["git insights","http://ftp.newartisans.com/pub/git.from.bottom.up.pdf"]],
  "Javascript":[["hoisting","https://scotch.io/tutorials/understanding-hoisting-in-javascript"],
  				["dom","https://javascript.info/dom-nodes"],
  				["Javascript the definition guide","http://www.ldos.si/slo/03_Lectures/65_TP/Gradiva/[Java%20Script]%20O'Reilly-%20JavaScript%20The%20Definitive%20Guide.pdf"],
  				["Javascriptissexy blogs","http://javascriptissexy.com/16-javascript-concepts-you-must-know-well/"]
],
  "Internet":[["How Web Browser works","https://blog.logrocket.com/how-browser-rendering-works-behind-the-scenes-6782b0e8fb10"],
  			["How Internet Works","https://medium.com/@adamzerner/overview-of-computer-networking-70848bd62710"],
  			["Routing bascis(Think like a computer)","https://www.think-like-a-computer.com/2011/08/24/the-routing-table/"],
  			["Port Forwarding","https://learn.g2crowd.com/port-forwarding"]],
  "Computer Networking":[["Computer Networking Top Down Approach","http://ce.sharif.edu/courses/94-95/2/ce443-3/resources/root/Book/fqo47.Computer.Networking.A.TopDown.Approach.6th.Edition.pdf"]]
};



for (i=0;i<a.length;i++)
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
	for(k=0;k<links[a[i]].length;k++){
		link_button = document.createElement("button");
		link_button.classList= "link_button";
		let outer_key = a[i];
		let innner_index = k;
		link_button.addEventListener("click", function() {
			console.log(outer_key);
			console.log(innner_index);
			window.open(links[outer_key][innner_index][1]);
		});
		var t = document.createTextNode(links[outer_key][innner_index][0]);
		link_button.appendChild(t);
		button_div.appendChild(link_button);
	}
	container.appendChild(button_div);
}