var xhr = new XMLHttpRequest();

xhr.open('GET', '/articles');

xhr.send();

xhr.onreadystatechange = function() { // (3)
  if (xhr.readyState != 4) return;

  var articles = JSON.parse(xhr.responseText);

  console.log(articles);

  var tape = document.querySelector('.tape');

  articles.forEach(function(article){
  	var link = document.createElement('a');
  	var post = document.createElement('div');
  	var title = document.createElement('div');
  	var img = document.createElement('img')
  	
  	link.appendChild(post);
  	post.appendChild(title);
  	post.appendChild(img);

  	link.href = '/articles/' + article._id + '.html';
  	post.classList.add('post');
  	title.innerHTML = article.title;
  	img.src = article.imgTape;
  	tape.appendChild(link);
  })

}