steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'youtube/models' )
.then( './views/init.ejs', 
       './views/video.ejs', 
       function($){

/**
 * @class Youtube.Video.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists videos and lets you destroy them.
 */
$.Controller('Youtube.Video.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
            this.options.list.findAll();
	},

	"{list} add" : function(list, ev, items){
            this.element.html(this.view('init', items));
            $('#video_count').html(items.length);
	},

        '.destroy click': function( el ){
            if(confirm("Are you sure you want to destroy?")){
                el.closest('.video').model().destroy();
            }
        },

        '.closePlayer click': function() {
            $('.player_holder').html('').hide();
        },

	'.play_video click': function(el) {
            $('.player_holder').html('').hide();
            el.parent().css({
               overflow: 'visible'
            });
            var img = el.parent().find('img');
            var leftPos = parseInt(img.position().left - img.width()/2);
            if (parseInt(leftPos+560) > $(document).width()) {
                leftPos = parseInt($(document).width() - 580);
            }
            el.parent().find('.player_holder').toggle().css({
               width: '560px',
               height: 'auto !important',
               left: leftPos + 'px',
               top: parseInt(img.position().top - img.height()/2) + 'px',
               position: 'absolute'
            }).html($.View('//youtube/video/play/views/player.ejs', el.closest('.video').model()));
        },
        
	"{Youtube.Models.Video} destroyed" : function(Video, ev, video) {
            video.elements(this.element).remove();
	},
	"{Youtube.Models.Video} created" : function(Video, ev, video){
            this.element.append(this.view('video_append', { video: video }));
            var count = parseInt($('#video_count').html())+1;
            $('#video_count').html(count);
            $('.player_holder').bind("draginit",function(ev, drag){
             if(ev.target.nodeName.toLowerCase() == 'input'){
		drag.cancel();
              }
            });
	},
	"{Youtube.Models.Video} updated" : function(Video, ev, video){
		video.elements(this.element)
		      .html(this.view('video', video) );
	}
});

});