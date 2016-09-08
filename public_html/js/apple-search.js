$(document).ready(function(){
	//Listen for the form to be submited
	$('#apple-search').submit(function(event){

		// Stop the form from default submit
		event.preventDefault();

		// Get the value of the search query
		var searchQuery = $('#apple-search [type=search]').val();

		// Get our media type
		var mediaType = $('#apple-search select').val();

		// Make suer there is something to search
		if($.trim(searchQuery) == ''){

			// You would normally put an error message here
			// Return out of the function
			return;
		}

		// Send the search query to the server

		$.ajax({
			url:'api/apple-search.php',
			data: {
				searchQuery: searchQuery,
				mediaType: mediaType
			},
			success:function(dataFromServer){
				console.log(dataFromServer);

				// Clear old results
				$('#results').html('');

				// if there are no results
				if(dataFromServer.resultCount == 0){
					//Display no result message
					$('#results').html('Sorry we could not find'+$('#apple-search select option:selected').html()+'s for '+searchQuery);
					return;
				}

				// Loop over the results
				for(var i = 0; i<dataFromServer.results.length; i++){

					// Put row into a variable
					var product = dataFromServer.results[i];

					// Prepare a variable to hold all html
					var div = $('<div class="search-result">');

					// Inject the heading and icon into the result div
					$(div).append('<h2><a target="blank" href="'+product.artistViewUrl+'">'+product.artistName+'</a></h2>');
					$(div).append('<img src="'+product.artworkUrl100+'"alt="">');
					$(div).append('<p>$'+(product.collectionPrice || product.price)+' '+product.currency+'</p>');


					// If this product has a description
					if(product.shortDescription){
						$(div).append('<p>'+product.shortDescription+'...</p>');
					}

					// If this product has an audio preview
					switch( product.kind ){
						//Audio
						case 'song':
						case 'audiobook':
						case 'mix':
						// Append an audio element to play the preview
						$(div).append('<audio preload="none" controls src="'+product.previewUrl+'">');
						break;

						//Video
						case 'musicVideo':
						case 'tv-episode':
							$(div).append('<video preload="none" controls src="'+product.previewUrl+'">');
					}
					// Close the div
					$('#results').append(div);
				}















			},
			error:function(){

			}
		});
	});
});