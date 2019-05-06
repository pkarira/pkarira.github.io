const express = require('express')
const app = express()
const port = 3000
const path = require('path');
app.use(express.static(__dirname + '/scripts/'));
app.use(express.static(__dirname + '/styles/'));
app.use(express.static(__dirname + '/assets/'));
app.use(express.static(__dirname + '/html/'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/html/main_page.html')))
app.get('/reading-material', (req, res) => res.sendFile(path.join(__dirname+'/reading-material')))
app.get('/blogs', (req, res) => res.sendFile(path.join(__dirname+'/html/blogs.html')))
app.get('/blogs/blog_pages', (req, res) => res.sendFile(path.join(__dirname+'/html/blog_page.html')))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))