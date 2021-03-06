$(document).ready(function() {

  $.ajax({
      url: 'https://bb-election-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType: 'json'
  }).done(function(responseData)) {
    var candidates = responseData.candidates;


    $.each(candidates, function(index, data) {
      var listItem = $('<li>');
      $('<h3>').html(data.name).appendTo(listItem);
      $('<span>').html(data.votes).appendTo(listItem);
      $('#candidates').append(listItem);
    })
  });

});
