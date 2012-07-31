steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'youtube/models' )
	.then('./views/init.ejs', function($){

/**
 * @class Youtube.Video.Create
 * @parent index
 * @inherits jQuery.Controller
 * Creates videos
 */
$.Controller('Youtube.Video.Create',
/** @Prototype */
{
	video: {},
        
        init : function(){
		this.element.html(this.view());
	},
	submit : function(el, ev){
		ev.preventDefault();
		this.element.find('[type=submit]').val('Creating...');
                try {
                    this.persist(el.formParams().video);
                    this.saved();
                } catch(err) {
                    this.element[0].reset();
                    $('#errorMsg').html(err).css({color: '#B94A48'}).show('fast',function(){
                       $(this).fadeOut(3000); 
                    });
                    this.element.find('[type=submit]').val('Create');
                }
	},
	saved : function(){
		this.element.find('[type=submit]').val('Create');
		this.element[0].reset();
	},
        persist: function(url) {
            if (!url) {
                throw "You must enter a valid URL";
            } else if(url.toLowerCase().match(/youtube.com\/watch\?v=/gi) == null) {
                throw "Please enter a youtube URL";
            } else {
                var query_string = $.parseParams( url.split('?')[1] || '' );
                this.video_code = query_string.v;
                Youtube.Models.Video.findOne({code: this.video_code },$.proxy(function(rec){
                    if (!rec) {
                        $.get('http://gdata.youtube.com/feeds/api/videos/'+this.video_code,{
                            alt: 'json'
                        },$.proxy(function(data){
                            this.video = {
                                    title       : data.entry.title.$t,
                                    code        : this.video_code,
                                    created_at  : data.entry.published.$t,
                                    youtube_link: data.entry.link[0].href
                            };
                            new Youtube.Models.Video(this.video).save();
                        }, this),'json');
                    } else {
                        alert('You already have this');
                    }
                }, this));
            }
        }
})

});