$(document).ready(function() {
	// alert("this works!");
	var apiResponse = [{
		title: "hackers",
		image: "http://2.bp.blogspot.com/-UipYo56XNVg/UKacGPARKwI/AAAAAAAADPI/NcjBXoFm7sQ/s1600/221148.1020.A.jpg"
	}, {
		title: "Arsenal",
		image: "http://www.livesportsreviews.com/wp-content/uploads/2015/07/arsenal-the-gunners.gif"
	},{
		title: "Barca",
		image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_(crest).svg/1010px-FC_Barcelona_(crest).svg.png"
	}]

	// console.log(apiResponse.length);

	// ---Create three parent div's with class 'another-picture' and concatenate an img with class 'image-this'

	var imageElement = $("<img>").addClass("image-this");

	for (var i = 0; i < apiResponse.length; i++) {
		$(".pictures").append(function(index) {
			$(this).append("<div class='another-picture'>" + "<h3 class='picture-title'>");
		});
	};

	// ---Use jQuery to access all the elements with class 'another-picture' and append an image element.
	$(".another-picture").append(imageElement);

	// ---Use jQuery to access all the elements with class 'picture-title' and add the title property from each object in the apiResponse.
	$(".picture-title").append(function(index) {
		$(this).text(apiResponse[index].title);
	});

	// ---Use jQuery to access all the element with class 'image-this' and inject the src for each img with the .attr() method
	$(".image-this").each(function(index, html) {
		// console.log($(this));
		$(this).attr("src", apiResponse[index].image);
	});


});