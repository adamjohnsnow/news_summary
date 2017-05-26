function Headlines(api) {

  var contentArray = api.response.results;
  var htmlString = '';
  var idMap = [];

  for (var i = 0; i < contentArray.length; ++i) {
    htmlString = htmlString + '<li id="headline"><a href="#' + i + '">' + contentArray[i].webTitle + '</a></li><br>';
    idMap.push(contentArray[i].id);
  }
    contentArray.idMap = idMap;
    htmlString = '<ul class="animated bounceInUp" style="list-style: none;>\n' + htmlString + '\n</ul>';
    return document.getElementById("app").innerHTML = htmlString;

}
