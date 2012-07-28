//js youtube/scripts/build.js

load("steal/rhino/rhino.js");
steal('steal/build').then('steal/build/scripts','steal/build/styles',function(){
	steal.build('youtube/scripts/build.html',{to: 'youtube'});
});
