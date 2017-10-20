$(document).ready(function(){

  $(".menud").click(function(){
    $("nav").toggle(1000);
  });

  $.getJSON("https://api.airtable.com/v0/app7nxEMWVCm3UOKS/musics?api_key=key0PPjBv7KU6orqf",
            function(data) {
              $.each(data.records, function(key,val) {
                console.log(val.fields.title);

                content = "<article><iframe src='https://open.spotify.com/embed?uri=" + val.fields['spotify-link'] + "'&view=coverart' width='200' height='280' frameborder='0' allowtransparency='true'></iframe>\
                          <br><iframe class='jaime' src="+ val.fields['facebook'] + " scrolling='no' frameborder='0' style='border:none; overflow:hidden;width:65px; height:65px; margin-top:3px;' allowTransparency='true'></iframe><br></article>";

                $("#musiques").append(content);
               
              });
  }
  );

  });
