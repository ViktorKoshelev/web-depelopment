var xhr = new XMLHttpRequest();

xhr.open('GET', window.location.pathname.slice(0, window.location.pathname.indexOf('.')));

xhr.send();

xhr.onreadystatechange = function() { // (3)
  if (xhr.readyState != 4) return;

  var article = JSON.parse(xhr.responseText);

  console.log(article);

  var tape = document.querySelector('.tape');

  
	var post = document.createElement('div');
	var title = document.createElement('h1');
  var subtitle = document.createElement('h2');
	var img = document.createElement('img');
  var content = document.createElement('p');
  var additional = document.createElement('p');
  var additionalImg = document.createElement('img');
	
	post.appendChild(title);
  post.appendChild(subtitle);
	post.appendChild(img);
  post.appendChild(content);
  post.appendChild(additionalImg);
  post.appendChild(additional);

	post.classList.add('post');
	title.innerHTML = article.articleTitle;
  subtitle.innerHTML = article.articleSubtitle ? article.articleSubtitle : '';
	img.src = article.mainImg;
  additionalImg.src = article.additionalImg;
  additional.innerHTML = article.additionalContent.replace(/\D\./g, '$&</p><p>');
  content.innerHTML = article.content.replace(/\D\./g, '$&</p><p>');
  
	tape.appendChild(post);

}