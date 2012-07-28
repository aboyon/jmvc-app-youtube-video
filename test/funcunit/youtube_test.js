steal("funcunit", function(){
	module("youtube test", { 
		setup: function(){
			S.open("//youtube/youtube.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})