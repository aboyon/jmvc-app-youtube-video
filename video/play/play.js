steal( 'jquery/controller','jquery/view/ejs' )
	.then( './views/init.ejs', function($){

/**
 * @class Youtube.Video.Play
 */
$.Controller('Youtube.Video.Play',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(el){
		
	},
        
        render: function() {
            alert('aca');
        }
})

});