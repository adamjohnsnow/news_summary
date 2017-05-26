
(function(exports){

  function getTopic(topic) {
    topicUrl = "http://content.guardianapis.com/"+ topic +"?show-fields=all&api-key=6cefe839-68bb-4814-8884-53cedf5c4231";
    xhr.open("GET", topicUrl, true);
    xhr.onreadystatechange = function(){
      apiResponse = JSON.parse(xhr.responseText)
      return headlines = new Headlines(apiResponse);
    };
    xhr.send();
  };
  exports.getTopic = getTopic;
})(this);
