$(document).ready(function(){
	$("#red").slider({
		max:255,
		range:'min',
		value:180,
		slide:result,
		change:result,
	});

	$("#green").slider({
		max:255,
		range:'min',
		value:80,
		slide:result,
		change:result,
	});

	$("#blue").slider({
		max:255,
		range:'min',
		value:140,
		slide:result,
		change:result,
	});

     function result(){
     	var red = $("#red").slider("value");
     	var green = $("#green").slider("value");
     	var blue = $("#blue").slider("value");

     	var hex = '#'+red.toString(16)+green.toString(16)+blue.toString(16);
        
         $("#color-result").css('background',hex);
         $("#result").html(hex);
         $("#red-input").val(red);
         $("#green-input").val(green);
         $("#blue-input").val(blue);
     }

     result();

     $("input[name='color']").keypress(function(){
          var x = this.id.replace("-input","");
          $('#'+x).slider("value",this.value);

     });

     $("input[name='color']").keyup(function(){
          var x = this.id.replace("-input","");
          $('#'+x).slider("value",this.value);

     });

    $("#cop").click(function(){
    	var red = $("#red").slider("value");
     	var green = $("#green").slider("value");
     	var blue = $("#blue").slider("value");
        var hex = '#'+red.toString(16)+green.toString(16)+blue.toString(16);
        // document.execCommand("copy");
        navigator.clipboard.writeText(hex); 
        var x = document.getElementById("myAudio");
        x.play();
       
    	
    });
  
 

});