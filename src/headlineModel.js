function Headlines(api) {

  var contentArray = api.response.results;
  var htmlString = '';
  var idMap = [];

  for (var i = 0; i < contentArray.length; ++i) {
    htmlString = htmlString + '<li class="animated bounceInLeft" id="headline"><a href="#' + i + '">' + contentArray[i].webTitle + '</a></li><br>';
    idMap.push(contentArray[i].id);
  }
    contentArray.idMap = idMap;
    htmlString = '<ul>' + htmlString + '</ul>';
    return document.getElementById("app").innerHTML = htmlString;

}
