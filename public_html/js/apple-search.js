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
			},
			error:function(){

			}
		});
	});
});