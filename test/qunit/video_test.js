steal("funcunit/qunit", "youtube/fixtures", "youtube/models/video.js", function(){
	module("Model: Youtube.Models.Video")
	
	test("findAll", function(){
		expect(4);
		stop();
		Youtube.Models.Video.findAll({}, function(videos){
			ok(videos)
	        ok(videos.length)
	        ok(videos[0].name)
	        ok(videos[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Youtube.Models.Video({name: "dry cleaning", description: "take to street corner"}).save(function(video){
			ok(video);
	        ok(video.id);
	        equals(video.name,"dry cleaning")
	        video.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Youtube.Models.Video({name: "cook dinner", description: "chicken"}).
	            save(function(video){
	            	equals(video.description,"chicken");
	        		video.update({description: "steak"},function(video){
	        			equals(video.description,"steak");
	        			video.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Youtube.Models.Video({name: "mow grass", description: "use riding mower"}).
	            destroy(function(video){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})