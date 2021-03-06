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
        
        '.destroy click': function(el){
            if(confirm("Are you sure you want to destroy?")){
                el.closest('.video').model().destroy();
            }
        },

        '.play_video click': function(el) {
            Youtube.Video.Play.render(el);
        },
        
	"{Youtube.Models.Video} destroyed" : function(Video, ev, video) {
            video.elements(this.element).remove();
            $('#video_count').html(this.options.list.length);
            console.log(this);
	},
	"{Youtube.Models.Video} created" : function(Video, ev, video){
            this.element.append(this.view('video_append', { video: video }));
            $('.player_holder').bind("draginit",function(ev, drag){
             if(ev.target.nodeName.toLowerCase() == 'input'){
		drag.cancel();
              }
            });
            this.options.list.length++;
            $('#video_count').html(this.options.list.length);
	},
	"{Youtube.Models.Video} updated" : function(Video, ev, video){
		video.elements(this.element)
		      .html(this.view('video', video) );
	}
});

});