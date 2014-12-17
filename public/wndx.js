$( document ).ready(function() {

  $('#add-post-container').toggle();

  $(document).on('click', '#hide-button', function() {
    $('#wndx-sidebar').css("right", "-400px");
    $('#show-button').css("right", "-20px");
    $('.commentCC').css("right", "-380px");
    $('.userCC').css("right", "-380px");
    $('#sessionCC').css("right", "-380px");
    $('#top-bar').css("right", "-380px");

  });

  $('#show-button').click(function() {
    $('#wndx-sidebar').css("right", "0px");
    $('#show-button').css("right", "-100px");
    $('#top-bar').css("right", "0px");
  });

  $(document).on('click', '#addPost', function() {
    $('#postCC').css("margin-top", "280px");
    $('#addPost').css("opacity", "0");
    $('#addPost').toggle();
    $('#add-post-container').toggle();
    $('#add-post-input').css("opacity", "1");
      $('#add-post-input').css("height", "80px");
  });

  $(document).on('click', '#submitPost', function() {
    $('#postCC').css("margin-top", "90px");
    $('#addPost').css("opacity", "1");
    $('#add-post-container').toggle();
    $('#add-post-input').css("opacity", "0");
    $('#add-post-input').css("height", "0px");
  });

  $(document).on('click', '#closePost', function() {
    $('#postCC').css("margin-top", "90px");
    $('#addPost').css("opacity", "1");
    $('#addPost').toggle();
    $('#add-post-container').toggle();
    $('#add-post-input').css("opacity", "0");
    $('#add-post-input').css("height", "0px");
  });

  $(document).on('click', 'span.commentsLink', function() {

    // $('span').rel==$('div').rel ? 
    // $('.commentCC').css("right", "-10px") : console.log('thefuck?');
    // $('.commentCC').css("right", "-10px");
    // $('.hide-comments-vert-button').css("right", "370px");

    var keepItRel = $(this).attr('rel');
    console.log($('.commentCC[rel='+keepItRel+']'));
    
    $('.commentCC[rel='+keepItRel+']').css("right", "-10px");
    $('.hide-comments-vert-button').css("right", "370px");
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
    $('.userCC').css("right", "-10px");
  });

   // + ' ' + '#' + userId

   // $('span').rel==$('div').rel ? 
  // $('.userCC').css("right", "-10px") : console.log('thefuck?');

  // $(document).on('click', '#hide-user-button',function() {
  // $('#hide-user-button').click(function() {
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