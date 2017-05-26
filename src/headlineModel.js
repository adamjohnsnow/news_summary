function Headlines(api) {

  var contentArray = api.response.results;
  var htmlString = '';

  for (var i = 0; i < contentArray.length; ++i) {
    htmlString = htmlString + '<li class="headline"><a href="#' + i + '" id="' + i + '">' + contentArray[i].webTitle + '</a></li>';
  }
  htmlString = '<ul>' + htmlString + '</ul>';
  return document.getElementById("app").innerHTML = htmlString;

}
