$(document).ready(function() {

  $.ajax({
      url: 'https://bb-election-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType: 'json'
  }).done(function(responseData)) {}
  
});
