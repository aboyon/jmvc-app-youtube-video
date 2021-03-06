steal(
	'./youtube.css',
	'./models/models.js',
	'./fixtures/fixtures.js',
	'youtube/video/create',
	'youtube/video/list',
        'youtube/video/search',
        'youtube/video/play',
        'youtube/URL',
        'jquery/lang/json',
	function(){
		$('#videos').youtube_video_list({
                    list: new Youtube.Models.Video.List()
                });
                $('#create').youtube_video_create();
                $('#search_box').youtube_video_search();
                $('#loader').fadeOut('slow',function(){
                   $('#body_container').fadeIn('slow'); 
                });
});

/**
 * @author Dragable window for search videos in youtube
 */
steal('jquery/event/drag',
        'jquery/event/drag/scroll',
        'jquery/event/drag/limit').then(function($){
         $('#search_box, .player_holder').bind("draginit",function(ev, drag){
             if(ev.target.nodeName.toLowerCase() == 'input'){
		drag.cancel();
              }
         });
})