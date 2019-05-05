date = ["12th Jan","12th Jan"];
title = ["Journey so far","12th Jan"];
subtitle = ["h","12th Jan"];
total_blogs = date.length;
blog_list = document.getElementById('blogs');

for (var i = 0; i < total_blogs; i++) {

	var item = document.createElement('li');
	var date_div = document.createElement('div');
	var subtitle_div = document.createElement('div');
	date_div.innerHTML = date[i];
	subtitle_div.innerHTML = subtitle[i];
	date_div.className = "subheadings";
	subtitle_div.className = "subheadings";
	item.appendChild(date_div);
	item.appendChild(document.createTextNode(title[i]));
	item.appendChild(subtitle_div);
	item.onclick = function()
	{
		window.location.href = "/blogs?blog=1"
	}
	blog_list.appendChild(item);
}