$( document ).ready(function() {

  $('#add-post-container').toggle();
  $('.add-comment-container').toggle();
  // console.log(document.referrer);

  $(document).on('click', '#hide-button', function() {
    $('#wndx-sidebar').css("right", "-410px");
    $('#show-button').css("right", "-20px");
    $('.commentCC').css("right", "-380px");
    $('.userCC').css("right", "-380px");
    $('#sessionCC').css("right", "-380px");
    $('#top-bar').css("right", "-380px");
  });

  $(document).on('click', '#loginSubmitButton', function() {

      // Ajax called for authentication
     console.log('hello?');
      var AUTH_TOKEN = $('meta[name="csrf-token"]').attr('content');
      $.ajaxSetup({
          beforeSend: function (xhr) {
              xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
          }
      });

      $.ajax({
          type: "POST",
          url: "/login?&authenticity_token=" + encodeURIComponent(AUTH_TOKEN),
          data: {
              username: $('#username').val(),
              password: $('#password').val()
          },
          dataType: "HTML",
          success: function (data) {
              console.log(data);
              $('#logout').toggle();
              $('#sessionCC').css("right", "-380px");
              $('#user_id').html(JSON.parse(data).user_id);
              $('#addPost').toggle();
              // $('#add-post-container').css('display', 'block');
          },
          error: function (xhr, status) {
              console.log(status);
          }
      });

      return false;
  });

  $(document).on('click', '#signupSubmitButton', function() {

      // Ajax called for authentication
     console.log('hello?');
      var AUTH_TOKEN = $('meta[name="csrf-token"]').attr('content');
      $.ajaxSetup({
          beforeSend: function (xhr) {
              xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
          }
      });

      $.ajax({
          type: "POST",
          url: "/signup?&authenticity_token=" + encodeURIComponent(AUTH_TOKEN),
          data: {
              username: $('#usernameSU').val(),
              password: $('#passwordSU').val(),
              password_confirmation: $('#passwordSU').val()
          },
          dataType: "HTML",
          success: function (data) {
              console.log(data);
              $('#logout').toggle();
              $('#sessionCC').css("right", "-380px");
              $('#user_id').html(JSON.parse(data).user_id);
              $('#addPost').toggle();
              // $('#add-post-container').css('display', 'block');
          },
          error: function (xhr, status) {
              console.log(status);
          }
      });

      return false;

     });



 $(document).on('click', '#logout', function() {

      // Ajax call for authentication
     console.log('this is where we will put code to log out?');

      /* 

      // Ajax called for authentication
      var AUTH_TOKEN = $('meta[name="csrf-token"]').attr('content');
      $.ajaxSetup({
          beforeSend: function (xhr) {
              xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
          }
      });

      $.ajax({
          type: "DELETE",
          url: "/logout?&authenticity_token=" + encodeURIComponent(AUTH_TOKEN),
          data: {
              // username: $('#usernameSU').val(),
              // password: $('#passwordSU').val(),
              // password_confirmation: $('#passwordSU').val()
          },
          dataType: "HTML",
          success: function (data) {
              console.log(data);
              // $('#logout').toggle();
              // $('#sessionCC').css("right", "-380px");
              // $('#user_id').html(JSON.parse(data).user_id);
              // $('#addPost').toggle();
              // $('#add-post-container').css('display', 'block');
          },
          error: function (xhr, status) {
              console.log(status);
          }
      });

      return false;

      */

  });





// Ajax call for creating a post
$(document).on('click', '#submitPost', function () {

    console.log('hello?');
    var AUTH_TOKEN = $('meta[name="csrf-token"]').attr('content');
    $.ajaxSetup({
        beforeSend: function (xhr) {
            xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
        }
    });

    var url;
    var domain;
    var path;

    if (document.referrer) {
       url = document.referrer; 
       domain = url.match(/:\/\/(.[^/]+)/)[1];
    }

    path = url.substr(url.search(domain)).replace(domain,"");

    $.ajax({
        type: "POST",
        url: "/notes",
        data: {
            utf: "✓",
            authenticity_token: encodeURIComponent(AUTH_TOKEN),
            description: $('#add-post-input').val(),
            domain: domain,
            path: path,
            user_id: $('#user_id').val(),
            commit: "submit"
        },
        dataType: "JSON",
        success: function (data) {
            console.log(data);
            $('#postCC').prepend(data.info);
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });

    return false;
});

// Ajax call for creating a post
$(document).on('click', '.submitComment', function () {

    console.log('hello?');
    var AUTH_TOKEN = $('meta[name="csrf-token"]').attr('content');
    $.ajaxSetup({
        beforeSend: function (xhr) {
            xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
        }
    });
    var keepItRel = $(this).attr('rel');
    $.ajax({
        type: "POST",
        url: "/comments",
        data: {
            utf: "✓",
            authenticity_token: encodeURIComponent(AUTH_TOKEN),
            description: $('.add-comment-input[rel='+keepItRel+']').val(),
            user_id: $('.add-comment-container[rel='+keepItRel+'] .user_id').val(),
            note_id: $('.add-comment-container[rel='+keepItRel+'] .note_id').val(),
            commit: "submit"
        },
        dataType: "JSON",
        success: function (data) {
            console.log(data);

            // $('#postCC').prepend(data.info);
        },
        error: function (xhr, status) {
            console.log(status);
        }
    });

    return false;
});





  $('#show-button').click(function() {
    $('#wndx-sidebar').css("right", "0px");
    $('#show-button').css("right", "-100px");
    $('#top-bar').css("right", "0px");
  });

  $(document).on('click', '#addPost', function() {
    $('#postCC').css("margin-top", "280px");
    $('#addPost').toggle();
    $('#add-post-container').toggle();
    $('#add-post-input').css("opacity", "1");
      $('#add-post-input').css("height", "80px");
  });

  $(document).on('click', '#submitPost', function() {
    $('#postCC').css("margin-top", "90px");
    $('#addPost').toggle();
    $('#add-post-container').toggle();
    $('#add-post-input').css("opacity", "0");
    $('#add-post-input').css("height", "0px");
  });

  $(document).on('click', '#closePost', function() {
    $('#postCC').css("margin-top", "90px");
    $('#addPost').toggle();
    $('#add-post-container').toggle();
    $('#add-post-input').css("opacity", "0");
    $('#add-post-input').css("height", "0px");
  });


    $(document).on('click', '.addComment', function() {
    // $('.commentCC').css("margin-top", "280px");
    var keepItRel = $(this).attr('rel');
    $('.addComment[rel='+keepItRel+']').toggle();
    $('.add-comment-input[rel='+keepItRel+']').css("opacity", "1");
      $('.add-comment-input[rel='+keepItRel+']').css("height", "80px");
      $('.add-comment-container[rel='+keepItRel+']').toggle();
  });

  $(document).on('click', '.submitComment', function() {
    $('#commentCC').css("margin-top", "90px");
    $('.addComment').toggle();
    $('.add-comment-container').toggle();
    $('.add-comment-input').css("opacity", "0");
    $('.add-comment-input').css("height", "0px");
  });

  $(document).on('click', '.closeComment', function() {
    $('#commentCC').css("margin-top", "90px");
    $('.addComment').toggle();
    $('.add-comment-container').toggle();
    $('.add-comment-input').css("opacity", "0");
    $('.add-comment-input').css("height", "0px");
  });



  $(document).on('click', '.commentsLink', function() {

    var keepItRel = $(this).attr('rel');
    console.log($('.commentCC[rel='+keepItRel+']'));

    $('.commentCC[rel='+keepItRel+']').css("right", "-10px");
    // $('.hide-comments-vert-button').css("right", "370px");
  });
  $(document).on('click', '.postBody', function() {

    var keepItRel = $(this).attr('rel');
    console.log($('.commentCC[rel='+keepItRel+']'));

    $('.commentCC[rel='+keepItRel+']').css("right", "-10px");
    // $('.hide-comments-vert-button').css("right", "370px");
  });

  $(document).on('click', '#hide-comments-button', function() {
    $('.commentCC').css("right", "-380px");
    $('.hide-comments-vert-button').css("right", "0px");
  });

  $(document).on('click', '.hide-comments-vert-button', function() {
    $('.commentCC').css("right", "-380px");
    $('.hide-comments-vert-button').css("right", "0px");
  });

  $(document).on('mouseover', '.hide-comments-vert-button', function() {
    $('.commentCC').css("border-left", "1px solid rgba(255,255,255,.8)");
  });

  $(document).on('mouseout', '.hide-comments-vert-button', function() {
    $('.commentCC').css("border-left", "1px solid rgba(255,255,255,.1)");

  });

  $(document).on('click', '.userName', function() {

    var keepItRel = $(this).attr('rel');
    console.log($('.userCC[rel='+keepItRel+']'));

    $('.userCC[rel='+keepItRel+']').css("right", "-10px");

  });

  $(document).on('click', '#hide-user-button', function() {
    $('.userCC').css("right", "-380px");
    $('.hide-user-vert-button').css("right", "0px");
  });

  $(document).on('click', '#login', function() {
    $('#sessionCC').css("right", "-10px");
      $('#login').toggle();
    $('#signup').toggle();

  });



  $(document).on('click', '#signup', function() {

    $('#sessionCC').css("right", "-10px");
    $('#login').toggle();
    $('#signup').toggle();

  });




  $(document).on('click', '#hide-session-button', function() {
    $('#sessionCC').css("right", "-380px");
    $('#login').toggle();
    $('#signup').toggle();

  });

});