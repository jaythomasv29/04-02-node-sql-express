
$.ajax({
	url: '/cats.json',
	method: 'GET'
}).then(function(cats){
	for (var catIndex in cats){
		// console.log(catIndex);
		// console.log(cats[catIndex]);
		// console.log(cats);

		var p = $('<p>'); // <p></p>

		//one way
			// p.text(JSON.stringify(cats[catIndex]))

		//another way
			// p.text("id: " + cats[catIndex].id + ", cat name: " + cats[catIndex].cat_name)

		//another way
			p.text(`id: ${cats[catIndex].id}, cat name: ${cats[catIndex].name}`)


		$('div').append(p);
	}
})