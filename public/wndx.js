// var domainName = document.domain;
// var domain = domainName.replace('www.','');

httpRequest = new XMLHttpRequest();
// httpRequest.open('GET', '//fast-ocean-4567.herokuapp.com/api/notes?domain=' + domain, true);
httpRequest.open('GET', 'http://localhost:3000/api/notes', true);
console.log("Hmmm...what's going on.");

httpRequest.onreadystatechange = function(){
  if (httpRequest.readyState == 4 && httpRequest.status == 200) {
    console.log("AJAX request successfully made.");
    var myArr = JSON.parse(httpRequest.responseText);
    document.getElementById('postCC').innerHTML = stylize(myArr);
  }
};

httpRequest.send();

function stylize(arr) {
  var out = "";
  for(var i = 0; i < arr.length; i++) {
    out += '<div class="postContainer"> <p class="Post"> <span class="userName">@' + 'USERNAME' + ':</span><span class="postBody">' + arr[i].description + '</span></p><p class="commentsLink">' + 'COMMENT COUNT' + '</p></div>';
  }
  return out;
}