$(document).ready(function(){
    $(".nav-pills li").click(function(){
        $(".active").removeClass("active");
        $(this).addClass("active");
    });
    /* button for navigating sections */    
    $(".btn1").click(function(){
        $("#remote-profile").show(350);
        $("#sm").hide();
        $(".features").hide();
        $(".definition").hide();
        $(".create-checksum").hide();
        $(".create-structure").hide();
    });
    
    $(".td").click(function(){
        $("#sm").show(350);
    });
    
    $(".btn-done-features").click(function(){
        $("#remote-profile").hide();
        $("#sm").hide();
        $(".features").hide();
        $(".definition").show(350);
    });
    
    $(".btn-done-definitions").click(function(){
        $("#remote-profile").hide();
        $("#sm").hide();
        $(".features").hide();
        $(".definition").hide();
        $(".create-checksum").show(350);
    }); 

    $(".btn-done-cs").click(function(){
        $("#remote-profile").hide();
        $("#sm").hide();
        $(".features").hide();
        $(".definition").hide();
        $(".create-structure").show(350);
    }); 
    
    

    /* button for navigating features */
    $("#m-auto").click(function(){
        $("#f-auto").show(350);
        $("#f-cool").hide();
        $("#f-dry").hide();
        $("#f-fan").hide();
        $("#f-heat").hide();
    });
    
    $("#m-cool").click(function(){
        $("#f-auto").hide();
        $("#f-cool").show(350);
        $("#f-dry").hide();
        $("#f-fan").hide();
        $("#f-heat").hide();
    });
    
    $("#m-dry").click(function(){
        $("#f-auto").hide();
        $("#f-cool").hide();
        $("#f-dry").show(350);
        $("#f-fan").hide();
        $("#f-heat").hide();
    });

    $("#m-fan").click(function(){
        $("#f-auto").hide();
        $("#f-cool").hide();
        $("#f-dry").hide();
        $("#f-fan").show(350);
        $("#f-heat").hide();
    });    
 
    $("#m-heat").click(function(){
        $("#f-auto").hide();
        $("#f-cool").hide();
        $("#f-dry").hide();
        $("#f-fan").hide();
        $("#f-heat").show(350);
    });     
    
     /* button for adding features */
    $("#add-feature-mode").click(function(){
        var text = $(".newCheckText").val();
        $("ul.nav").append('<li id=""><a href="#">' + text + '</a></li>');
        $(".newCheckText").val('');
    });
    
    $("#add-feature-fan").click(function(){
        var text = $(".newCheckText1").val();
        $(".control-group1").append('<label class="checkbox"><input value="0" type="checkbox">' + text + '</label>');
        $(".newCheckText1").val('');
    });
    
    $("#add-feature-louver").click(function(){
        var text = $(".newCheckText2").val();
        $(".control-group2").append('<label class="checkbox"><input value="0" type="checkbox">' + text + '</label>');
        $(".newCheckText2").val('');
    });

    $("#add-feature-swing").click(function(){
        var text = $(".newCheckText3").val();
        $(".control-group3").append('<label class="checkbox"><input value="0" type="checkbox">' + text + '</label>');
        $(".newCheckText3").val('');
    });
    
    $("#add-feature-of").click(function(){
        var text = $(".newCheckText4").val();
        $(".control-group4").append('<label class="checkbox"><input value="0" type="checkbox">' + text + '</label>');
        $(".newCheckText4").val('');
    });

    $("#add-feature-cs").click(function(){
        var text = $(".newCheckText5").val();
        $(".cs").append('<label class="radio"><input type="radio" name="optradio">' + text + '</label>');
        $(".newCheckText5").val('');
    });    
    
    
    
}); // end //