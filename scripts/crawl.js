// load('youtube/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("youtube/youtube.html","youtube/out")
});
