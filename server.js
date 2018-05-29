const mongoose = require('mongoose');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const bodyParser = require('body-parser');

const app = express();
let db = null;

app.use(bodyParser.urlencoded({ extended: false }));
const artists = [
	{
		id: 1,
		name: 'Metallica'
	}, {
		id: 2,
		name: 'Iron Maiden'
	}, {
		id: 3,
		name: 'Deep Purple'
	}
]
app.use(express.static('css'));
app.use(express.static('static'));

app.get('/articles', function(req, res) {
	db.collection('articles').find().toArray(function(err, docs) {
		if (err) {
			console.error(err);
			return res.sendStatus(500);
		}
		res.send(docs);
	})
})

/*app.post('/articles/:id', function(req, res) {
	let artist = {
		name: req.body.name
	};
	db.collection('artsits').insert(artist, function(err, res) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.sendStatus(artist);
	})

})*/

app.get('/articles/:id.html', function(req, res) {
	res.sendFile(__dirname + '/static/article.html');
	/*db.collection('articles').findOne({ _id: ObjectId(req.params.id) }, function(err, doc) {
		if (err) {
			console.error(err);
			return res.sendStatus(500)
		}
		res.send(doc);
	})*/
	// console.log(req.params);
	// let artist = artists.filter(function(artist) {
	// 	return artist.id === Number(req.params.id);
	// })

	// res.send(artist);

})

app.get('/feedbacks.html', function(req, res) {
	console.log(db.collection('feedbacks').find().toArray());
	db.collection('feedbacks').find().toArray().then((arr) => {
		res.send(arr);
	})
})

app.post('/feedback', function(req, res) {
	console.log(req.body);
	db.collection('feedbacks').insert(req.body, function(err, result) {
		if (err) {
			return console.error(err);
		}
		res.sendStatus(200);
	})
})

app.get('/articles/:id', function(req, res) {
	db.collection('articles').findOne({ _id: ObjectId(req.params.id) }, function(err, doc) {
		if (err) {
			console.error(err);
			return res.sendStatus(500)
		}
		res.send(doc);
	})
})

MongoClient.connect('mongodb://localhost:27017/web', function(err, database) {
	if (err) {
		return console.error(err);
	}

	db = database.db('web');

	app.listen(8080, function() {
		console.log('API app started');
	})
});
