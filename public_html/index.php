<!DOCTYPE html>
<html>
<head>
	<title>Apple API</title>
</head>
<body>

	<h1>Apple Search API</h1>

	<form id="apple-search">
		<label for="search">Search Store:</label>
		<input type="search" placeholder="search">

		<select>
			<option value="all">All</option>
			<option value="movie">Movie</option>
			<option value="podcast">Podcast</option>
			<option value="music">Music</option>
			<option value="musicVideo">Music Video</option>
			<option value="audiobook">Audiobook</option>
			<option value="shortFilm">Short Film</option>
			<option value="tvShow">TV Show</option>
			<option value="software">Software (Apps)</option>
			<option value="ebook">Ebook</option>

		</select>

			<input type="submit" value="Search">
	</form>

	<div id="results"></div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="js/apple-search.js"></script>
</body>
</html>