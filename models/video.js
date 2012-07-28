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
            var name = this.shortName,
            data = $.evalJSON(window.localStorage[name] || (window.localStorage[name] = "{}")),
            res = cb.call(this, data);
            if(res !== false){
                window.localStorage[name] = $.toJSON(data);
            }
        },
	findAll: function(params, success){
            this.localStore(function(videos){
                var instances = [];
                for(var id in videos){
                    instances.push(new this(videos[id]));
                }
                success && success(instances)
            })
        },
  	findOne : "/videos/{id}.json", 
  	create : function(attrs , success){
            this.localStore(function(videos){
                attrs.id = attrs.code || parseInt(100000 * Math.random());
                videos[attrs.id] = attrs;
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
  	destroy : "/videos/{id}.json"
},
/* @Prototype */
{});

$.Model.List('Youtube.Models.Video.List',
{
    
},
{
    
});


})