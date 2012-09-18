steal(
    'jquery/model', 
    'jquery/model/list',
    function(){


/**
 * @class Youtube.Models.Video
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend video services.  
 */
$.Model('Youtube.Models.Video',
/* @Static */
{
        localStore: function(cb){
            var name = 'youtube-vids-jsmvc',
            data = $.evalJSON(window.localStorage[name] || (window.localStorage[name] = "[]")),
            res = cb.call(this, data);
            if(res !== false){
                window.localStorage[name] = $.toJSON(data);
            }
        },
	findAll: function(params, success){
            this.localStore(function(videos){
                var instances = [];
                for(var i = 0; i<videos.length; i++){
                    instances.push(new this(videos[i]));
                }
                success && success(instances)
            })
        },
  	findOne : "/videos/{id}.json", 
  	create : function(attrs , success){
            this.localStore(function(videos){
                attrs.id = attrs.code || parseInt(100000 * Math.random());
                videos.push(attrs);
            });
            success({id: attrs.id})
        },
 	update : function(id, attrs, success){
            this.localStore(function(videos){
                var video = videos.id;
                $.extend(video, attrs);
            });
            success({});
        },
        
  	destroy : function(id, success){
            this.localStore(function(videos){
               for(var i = 0; i<videos.length; i++) {
                   if (videos[i].id === id) {
                       videos.splice(i,1);
                       break;
                   }
               }
            });
            success({});
        }
},
/* @Prototype */
{});

$.Model.List('Youtube.Models.Video.List',
{
    
},
{
    
});


})