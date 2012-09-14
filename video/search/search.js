steal( 'jquery/controller','jquery/view/ejs' )
	.then( './views/init.ejs', function($){

/**
 * @class Youtube.Video.Search
 */
$.Controller('Youtube.Video.Search',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
            this.element.html(this.view());
            this.element.css({
               position:  'absolute',
               left: parseInt($(document).width()-400) + 'px',
               top: '100px'
            });
            this.element.find('#clear_btn').hide();
	},
        
        '.add_video_btn click': function(el){
            $('#create').find('input[type="url"]').val(el.data('video-link'));
            $('#create').submit();
        },
        
        submit : function(el, ev){
            ev.preventDefault();
            var criteria = this.element.find('input[type="text"]').val();
            if (typeof criteria == 'undefined' || criteria == '') {
                this.element.find('.error_search_results')
                    .html('please enter a search criteria')
                    .fadeOut(3000);
            } else {
                this.element.css({
                    height: parseInt(this.element.height() + 80) + 'px'
                });
                var resultsList = this.element.find('.search_results');
                resultsList.html('searching...');
                $.get('https://gdata.youtube.com/feeds/api/videos',{
                    q: criteria,
                    alt: 'json',
                    'max-results': 5
                },function(data){
                    if (data.feed.openSearch$totalResults.$t > 0) {
                        resultsList.html('');
                        for(var i = 0; i<data.feed.entry.length; i++) {
                            var video = {
                              thumbnail: data.feed.entry[i].media$group.media$thumbnail[1].url,
                              link: data.feed.entry[i].link[0].href,
                              title: data.feed.entry[i].media$group.media$title.$t.toString(),
                              description: data.feed.entry[i].media$group.media$description.$t.toString()
                            };
                            resultsList.append($.View('//youtube/video/search/views/search_result_item.ejs', video));
                        }
                    } else {
                        resultsList.html('Ups! we cannot find any video matching with that criteria.');
                    }
                    
                },'json');
            }
        }
})

});