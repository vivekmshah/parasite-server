var domainName = document.domain;
var domain = domainName.replace('www.','');

httpRequest = new XMLHttpRequest();
httpRequest.open('GET', '//fast-ocean-4567.herokuapp.com/api/notes?domain=' + domain, true);
// httpRequest.open('GET', 'http://localhost:3000/api/notes', true);
console.log("Hmmm...what's going on.");

httpRequest.onreadystatechange = function(){
  if (httpRequest.readyState == 4 && httpRequest.status == 200) {
    console.log("AJAX request successfully made.");
    var myArr = JSON.parse(httpRequest.responseText);
    document.getElementById('postCC').innerHTML = stylize(myArr);
  }
};

httpRequest.send();

// TEMPLATE
// <div class="postContainer">
//   <p class="Post">
//     <span class="userName">@alexhart:</span> 
//     <span class="postBody">This is a four line post that I’m writing to check on this fonts legibility for body copy.</span>
//   </p>
//   <p class="commentsLink">44 Comments</p>
// </div>

function stylize(arr) {
  var out = "";
  for(var i = 0; i < arr.length; i++) {
    out += '<div class="postContainer"> <p class="Post"> <span class="userName">@' + 'USERNAME' + ':</span><span class="postBody">' + arr[i].description + '</span></p><p class="commentsLink">' + 'COMMENT COUNT' + '</p></div>';
  }
  return out;
}




$('wndx-sidebar input#login').click(function() {
  console.log('hello?');
  var AUTH_TOKEN = $('meta[name="csrf-token"]').attr('content');
  $.ajaxSetup({
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-CSRF-Token', AUTH_TOKEN);
      }
    }); 

  $.ajax({
      type: "POST", 
      url: "/login?&authenticity_token="+encodeURIComponent(AUTH_TOKEN), 
      data:{ username : $('#username').val() , password : $('#password').val() },
      dataType: "JSON"
      //success:window.location.replace("/")
      });

  return false;
});