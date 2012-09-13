steal(
	'./youtube.css',
	'./models/models.js',
	'./fixtures/fixtures.js',
	'youtube/video/create',
	'youtube/video/list',
        'youtube/URL',
        'jquery/lang/json',
	function(){
		$('#videos').youtube_video_list({
                    list: new Youtube.Models.Video.List()
                });
		$('#create').youtube_video_create();
                $('#loader').fadeOut('slow',function(){
                   $('#body_container').fadeIn('slow'); 
                });
});