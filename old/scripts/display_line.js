
//Skyrim.

$('.sky_line').click(function(){
        if ($(this).is(':checked')){
            $(".sky").show();
            console.log('Checked');
        }
    else{
            console.log('Unchecked');
             $(".sky").hide();
        }
    });


//Battlefield.

$('.bf_line').click(function(){
        if ($(this).is(':checked')){
            $(".bf").show();
            console.log('Checked');
        }
    else{
            console.log('Unchecked');
             $(".bf").hide();
        }
    });

//Star Wars.

$('.sw_line').click(function(){
        if ($(this).is(':checked')){
            $(".sw").show();
            console.log('Checked');
        }
    else{
            console.log('Unchecked');
             $(".sw").hide();
        }
    });