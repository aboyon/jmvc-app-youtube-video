// map fixtures for this application

steal("jquery/dom/fixture", function(){
	
	$.fixture.make("video", 5, function(i, video){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "video "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
})