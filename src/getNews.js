

const news = "http://content.guardianapis.com/sport?show-fields=all&api-key=6cefe839-68bb-4814-8884-53cedf5c4231";
const xhr = new XMLHttpRequest();
const method = "GET";


(function(exports){
  function getNews() {
    xhr.open(method, news, true);
    xhr.onreadystatechange = function(){
      console.log(JSON.parse(xhr.responseText))
        return headlines = new Headlines(JSON.parse(xhr.responseText));
    };
    xhr.send();
  };
  exports.getNews = getNews;
})(this);
