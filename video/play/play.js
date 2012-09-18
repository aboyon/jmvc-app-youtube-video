steal( 'jquery/controller','jquery/view/ejs' )
	.then( './views/init.ejs', function($){

/**
 * @class Youtube.Video.Play
 */
$.Controller('Youtube.Video.Play',
/** @Static */
{
	defaults : {},
        render: function(el) {
            var model = el.closest('.video').model();
            $('.player_holder').html('').hide();
            el.parent().css({
               overflow: 'visible'
            });
            var img = el.parent().find('img');
            var leftPos = parseInt(img.position().left - img.width()/2);
            if (parseInt(leftPos+560) > $(document).width()) {
                leftPos = parseInt($(document).width() - 580);
            }
            $('.player_holder').toggle().css({
               width: '560px',
               height: 'auto !important',
               left: leftPos + 'px',
               top: parseInt(img.position().top - img.height()/2) + 'px',
               position: 'absolute'
            }).html($.View('//youtube/video/play/views/player.ejs', model));
        }
},
/** @Prototype */
{
	init : function(){
            return this;
	},
        
        '.closePlayer click': function() {
            $('.player_holder').html('').hide();
        }
})

});