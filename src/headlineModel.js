function Headlines(api) {

  var contentArray = api.response.results;
  var htmlString = '';
  var idMap = [];

  for (var i = 0; i < contentArray.length; ++i) {
    htmlString = htmlString + '<li><a href="#' + i + '">' + contentArray[i].webTitle + '</a></li>';
    idMap.push(contentArray[i].id);
  }
    contentArray.idMap = idMap;
    htmlString = '<ul>' + htmlString + '</ul>';
    return document.getElementById("app").innerHTML = htmlString;

}
