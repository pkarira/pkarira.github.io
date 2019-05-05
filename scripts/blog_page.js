date = ["12th Jan","12th Jan"];
title = ["Journey so far","12th Jan"];
subtitle = ["h","12th Jan"];
blogs= ["asdsadad"];
total_blogs = date.length;
var urlParams = new URLSearchParams(window.location.search);
blog_number = urlParams.get("blog")
document.getElementById("heading").innerHTML=title[blog_number-1];
document.getElementById("date").innerHTML=date[blog_number-1];
document.getElementById("blog_content").innerHTML=blogs[blog_number-1];
console.log(urlParams.get("blog"))