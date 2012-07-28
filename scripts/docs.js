//js youtube/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('youtube/youtube.html', {
		markdown : ['youtube']
	});
});