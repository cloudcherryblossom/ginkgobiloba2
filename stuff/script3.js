type="text/javascript">
	document.getElementById('search').addEventListener('submit', function(event){
		event.preventDefault();
		var searchBox = document.getElementById('search-box');
		var searchEngine = document.getElementsByName('search-engine')[0].value;
		window.location.href = searchEngine + searchBox.value;
	})
