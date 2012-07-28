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
	},

	'.destroy click': function( el ){
		if(confirm("Are you sure you want to destroy?")){
			el.closest('.video').model().destroy();
		}
	},
	"{Youtube.Models.Video} destroyed" : function(Video, ev, video) {
		video.elements(this.element).remove();
	},
	"{Youtube.Models.Video} created" : function(Video, ev, video){
                this.element.append(this.view('video', video))
	},
	"{Youtube.Models.Video} updated" : function(Video, ev, video){
		video.elements(this.element)
		      .html(this.view('video', video) );
	}
});

});