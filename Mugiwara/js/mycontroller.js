/* VARIABLES AND PARAMETERS */
var modes = ["auto","cool","fan","dry","heat"];
for (var i=0; i < modes.length; i++) {
    var per_mode = modes[i]
};

function getMode (myStr) {
    var end = myStr.lastIndexOf('-');
    var mode = myStr.slice(end+1);
    return mode
};



/* JQUERY */
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
/*    
    $(".btn-done-features").click(function(){
        $("#remote-profile").hide();
        $("#sm").hide();
        $(".features").hide();
        $(".definition").show(350);
    });
*/
    $(".btn-done-features").click(function(){
        var fan_features = [];
        var louver_features = [];
        var swing_features = [];
        var all = {'fan_features':fan_features,'louver_features':louver_features,'swing_features':swing_features};
        
        $.each($("input[name='fan']:checked"), function(){
            fan_features.push($(this).val());
        });
        
        $.each($("input[name='louver']:checked"), function(){
            louver_features.push($(this).val());
        });
        
        $.each($("input[name='swing']:checked"), function(){
            swing_features.push($(this).val());
        });
    
        
        console.log(all)        
        
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
    
     /* button for adding features per mode */  
    $(".add-feature-fan").click(function(){
        var mode = getMode($(this).attr('class'));
        var text = $('.f-fan-value-m-'+mode+'').val();
        if (text != '') {
            $(".feature-fan").append('<label class="checkbox"><input name="fan" value='+ text +' type="checkbox">' + text + '</label>');
            $('.f-fan-value-m-'+mode+'').val('');
        }
        else {}
    });

    $(".add-feature-louver").click(function(){
        var mode = getMode($(this).attr('class'));
        var text = $('.f-louver-value-m-'+mode+'').val();
        if (text != '') {
            $(".feature-louver").append('<label class="checkbox"><input value='+ text +' type="checkbox">' + text + '</label>');
            $('.f-louver-value-m-'+mode+'').val('');
        }
        else {}
    });

    $(".add-feature-swing").click(function(){
        var mode = getMode($(this).attr('class'));
        var text = $('.f-swing-value-m-'+mode+'').val();
        if (text != '') {
            $(".feature-swing").append('<label class="checkbox"><input value='+ text +' type="checkbox">' + text + '</label>');
            $('.f-swing-value-m-'+mode+'').val('');
        }
        else {}
    });

    $("#add-feature-cs").click(function(){
        var text = $(".newCheckText5").val();
        $(".cs").append('<label class="radio"><input type="radio" name="optradio">' + text + '</label>');
        $(".newCheckText5").val('');
    });       
    
});