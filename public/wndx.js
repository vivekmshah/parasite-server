$( document ).ready(function() {

  $('#add-post-container').toggle();

  $('#hide-button').click(function() {
    $('#wndx-sidebar').css("right", "-400px");
    $('#show-button').css("right", "-20px");
    $('.commentCC').css("right", "-380px");
    $('.userCC').css("right", "-380px");
    $('#sessionCC').css("right", "-380px");
  });

  $('#show-button').click(function() {
    $('#wndx-sidebar').css("right", "0px");
    $('#show-button').css("right", "-100px");
  });

  $('#addPost').click(function() {
    $('#postCC').css("margin-top", "280px");
    $('#addPost').css("opacity", "0");
    $('#addPost').toggle();
    $('#add-post-container').toggle();
    $('#add-post-input').css("opacity", "1");
      $('#add-post-input').css("height", "80px");
  });

  $('#submitPost').click(function() {
    $('#postCC').css("margin-top", "90px");
    $('#addPost').css("opacity", "1");
    $('#add-post-container').toggle();
    $('#add-post-input').css("opacity", "0");
    $('#add-post-input').css("height", "0px");
  });

  $('#closePost').click(function() {
    $('#postCC').css("margin-top", "90px");
    $('#addPost').css("opacity", "1");
    $('#addPost').toggle();
    $('#add-post-container').toggle();
    $('#add-post-input').css("opacity", "0");
    $('#add-post-input').css("height", "0px");
  });

  $('.commentsLink').click(function() {
    $('.commentCC').css("right", "-10px");
    $('.hide-comments-vert-button').css("right", "370px");
  });

  $('#hide-comments-button').click(function() {
    $('.commentCC').css("right", "-380px");
    $('.hide-comments-vert-button').css("right", "0px");
  });

  $('.hide-comments-vert-button').click(function() {
    $('.commentCC').css("right", "-380px");
    $('.hide-comments-vert-button').css("right", "0px");
  });

  $('.hide-comments-vert-button').mouseover(function() {
    $('.commentCC').css("border-left", "1px solid rgba(255,255,255,.8)");
  });

  $('.hide-comments-vert-button').mouseout(function() {
    $('.commentCC').css("border-left", "1px solid rgba(255,255,255,.1)");

  });

  $('.userName').click(function() {
    $('.userCC').css("right", "-10px");
  });

  $('#hide-user-button').click(function() {
    $('.userCC').css("right", "-380px");
    $('.hide-user-vert-button').css("right", "0px");
  });

  $('#login').click(function() {
    $('#sessionCC').css("right", "-10px");
      $('#login').toggle();
    $('#signup').toggle();

  });

  $('#signup').click(function() {
    $('#sessionCC').css("right", "-10px");
      $('#login').toggle();
    $('#signup').toggle();
  });

  $('#hide-session-button').click(function() {
    $('#sessionCC').css("right", "-380px");
    $('#login').toggle();
    $('#signup').toggle();

  });

});