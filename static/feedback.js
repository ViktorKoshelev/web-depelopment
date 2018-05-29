var form = document.body.querySelector('FORM');

form.onsubmit = function() {
	var xhr = new XMLHttpRequest();

	var body = 
		"email=" + encodeURIComponent(form["email"].value) +
		"&name=" + encodeURIComponent(form["name"].value) +
		"&wishes=" + encodeURIComponent(form["wishes"].value);

	xhr.open('POST', '/feedback');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.send(body);
	return false;
}