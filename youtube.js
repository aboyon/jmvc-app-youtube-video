steal(
	'./youtube.css', 			// application CSS file
	'./models/models.js',		// steals all your models
	'./fixtures/fixtures.js',	// sets up fixtures for your models
	'youtube/video/create',
	'youtube/video/list',
        'jquery/lang/json',
	function(){					// configure your application
		
		$('#videos').youtube_video_list({
                    list: new Youtube.Models.Video.List()
                });
		$('#create').youtube_video_create();
})