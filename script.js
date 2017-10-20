$(document).ready(function(){

  $(".menud").click(function(){
    $("nav").toggle(1000);
  });
  $.getJSON("https://api.airtable.com/v0/app7nxEMWVCm3UOKS/musics?api_key=key0PPjBv7KU6orqf",
  					function(data) {
              $.each(data.records, function(key,val) {
                console.log(val.fields.title);
                $('<li>'+val.fields.title+'</li>').appendTo("#musiques");
                 $("<iframe src='https://open.spotify.com/embed?uri=" + val.fields['spotify-link'] + "'&view=coverart frameborder='0' allowtransparency='true'></iframe>").appendTo('#musiques');
				      });
  }
);
});
