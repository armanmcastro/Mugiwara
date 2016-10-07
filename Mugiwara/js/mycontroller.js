/* JQUERY */
$(document).ready(function(){
    $(".nav-pills li").click(function(){
        $(".active").removeClass("active");
        $(this).addClass("active");
    });

    /* button for navigating sections */    
    $(".btn-create-remote").click(function(){
        $("#remote-profile").show(350);
        $("#mode").hide();
        $(".features").hide();
        $(".definition").hide();
        $(".create-checksum").hide();
        $(".create-structure").hide();
    });
    
    $(".time-display").click(function(){
        $("#mode").show(350);
    });
    
    $(".btn-create-features").click(function(){
        $("#remote-profile").hide();
        $("#mode").hide();
        $(".features").hide();
        $(".definition").show(350);
        
        var all = {'fan':[],'louver':[],'swing':[],'temperature':[],'unit':[],'mode':[]};
        $.each(all, function(feat){
            $(".insert_"+feat).html('');
            $(".insert_temp").html('');
        });
        
        $(".feature-temp").each(function(){
            var none = $(this).find('input')[0];
            var celsius = $(this).find('input')[1];
            var fahrenheit = $(this).find('input')[2];
            var min = $(this).find('input')[3];
            var max = $(this).find('input')[4];
            var increment = $(this).find('input')[5];
            
            //ADD UNIT//
            if (none.checked) {
                if ($.inArray('blank', all['temperature']) === -1){
                    all['temperature'].push('blank');
                }
                min.value = '';
                max.value = '';
                increment.value = '';
            }
            else {
                if (celsius.checked){
                    if ($.inArray(celsius.value, all['unit']) === -1){
                        all['unit'].push(celsius.value);
                    }
                }
                else if (fahrenheit.checked){
                    if ($.inArray(fahrenheit.value, all['unit']) === -1){
                        all['unit'].push(fahrenheit.value);
                    }
                }
                for (var i=min.valueAsNumber; i < (max.valueAsNumber+1); i=i+increment.valueAsNumber){
                     if ($.inArray(i, all['temperature']) === -1){
                         all['temperature'].push(i);
                     }
                }
            }
            
            //ADD FEATURES//
            $.each($("input[name*='-value']:checked"), function(){
                var feat = $(this).attr('name').split('-')[0];
                if ($.inArray($(this).val(), all[feat])===-1){
                    all[feat].push($(this).val());
                    $(".insert_"+feat).append('<label>'+$(this).val()+':<input type="text"></label>');
                };
            });
            
            //ADD MODE//
            if (none.checked || celsius.checked || fahrenheit.checked){
                var modes = $(this).parents('.features')[0];
                var mode = modes.id.split('-')[1];
                if ($.inArray(mode, all['mode'])===-1){
                    all['mode'].push(mode);
                }
            }
        });
        
        //ADD TEMPERATURE//
        all['temperature'].sort(function(a, b){return a-b});
        $.each(all['temperature'],function(index,value){
            if (value == 'blank'){
                $(".insert_temp").append('<label>'+value+' :<input type="text"></label>');
            }
            else {
                $(".insert_temp").append('<label>'+value+' '+all['unit'][0]+':<input type="text"></label>');
            }
        });
    
        //ADD MODE//
        $.each(all['mode'], function(index,value){
            $(".insert_mode").append('<label>'+value+' :<input type="text"></label>');
        });  
    }); //end of btn-done-features
    
    $(".btn-back-definitions").click(function(){
        $("#mode").show(350);
        $("#remote-profile").show(350);
        $(".definition").hide();
    })
     
    $(".btn-submit-definitions").click(function(){
        $("#remote-profile").hide();
        $("#mode").hide();
        $(".features").hide();
        $(".definition").hide();
        $(".create-checksum").show(350);
    }); 
    
    // CHECKSUM //
    var all = {'checksum':[]};
    
    $(".btn-add-cs").click(function(){
    var checksum = {'ctype':'','value':''};
    
        $(".insert-cs").html('');
    
        $(".cs-function").each(function(){
            var sum_offset = $("#sel1").find('option')[0];
            var xor_offset = $("#sel1").find('option')[1];
            var sum_minus = $("#sel1").find('option')[2];
            var sum_minus2 = $("#sel1").find('option')[3];
            var xor_offset_extra = $("#sel1").find('option')[4];
            
            var cs_func = $(this).find('input')[0];
            var bit_size = $(this).find('input')[1];
            var offset = $(this).find('input')[2];
            var modulo = $(this).find('input')[3];
            var minus = $(this).find('input')[4];
            
            if (cs_func.checked && bit_size.value!=''){
                checksum['ctype'] = 'func';
                
                if (sum_offset.selected){
                    checksum['value'] = sum_offset.value+','+bit_size.value+','+offset.value+','+modulo.value;
                }
                else if (xor_offset.selected){
                    checksum['value'] = xor_offset.value+','+bit_size.value+','+offset.value;
                }
                else if (sum_minus.selected){
                    checksum['value'] = sum_minus.value+','+bit_size.value+','+offset.value+','+modulo.value+','+minus.value;
                }
                else if (sum_minus2.selected){
                    checksum['value'] = sum_minus2.value+','+bit_size.value+','+offset.value+','+modulo.value+','+minus.value;
                }
                else if (xor_offset_extra.selected){
                    checksum['value'] = xor_offset_extra.value+','+bit_size.value+','+offset.value+','+modulo.value;
                }
                
                all['checksum'].push(checksum);
            };
        }); //cs-function
        
        $(".cs-eval").each(function(){
            var cs_eval = $(this).find('input')[0];
            var eval_text = $(this).find('textarea')[0];
            
            if (cs_eval.checked && eval_text.value!=''){
                checksum['ctype'] = 'eval';
                checksum['value'] = eval_text.value;
                all['checksum'].push(checksum);
            }
        }); //cs-eval
        
        $.each(all['checksum'], function(index,value){
            $(".insert-cs").append('<p>Checksum Index: '+index+' Ctype: '+value['ctype']+' Value: '+value['value']);
        }); 
        
    }); //btn-add-cs
    
    $(".btn-delete-cs").click(function(){
        all['checksum'] = [];
        $(".insert-cs").html('');
    });    

    $(".btn-done-cs").click(function(){
        $("#remote-profile").hide();
        $("#sm").hide();
        $(".features").hide();
        $(".definition").hide();
        $(".create-structure").show(350);
    }); 
    
    /* button for navigating features */
    $("#mode-auto").click(function(){
        $("#feature-auto").show(350);
        $("#feature-cool").hide();
        $("#feature-dry").hide();
        $("#feature-fan").hide();
        $("#feature-heat").hide();
    });
    
    $("#mode-cool").click(function(){
        $("#feature-auto").hide();
        $("#feature-cool").show(350);
        $("#feature-dry").hide();
        $("#feature-fan").hide();
        $("#feature-heat").hide();
    });
    
    $("#mode-dry").click(function(){
        $("#feature-auto").hide();
        $("#feature-cool").hide();
        $("#feature-dry").show(350);
        $("#feature-fan").hide();
        $("#feature-heat").hide();
    });

    $("#mode-fan").click(function(){
        $("#feature-auto").hide();
        $("#feature-cool").hide();
        $("#feature-dry").hide();
        $("#feature-fan").show(350);
        $("#feature-heat").hide();
    });    
 
    $("#mode-heat").click(function(){
        $("#feature-auto").hide();
        $("#feature-cool").hide();
        $("#feature-dry").hide();
        $("#feature-fan").hide();
        $("#feature-heat").show(350);
    });     
    
     /* ADD FEATURES */ 
    $(".add-feature-fan").click(function(){
        var text = $(this).siblings("input")[0];
        if (text.value != '') {
            $(".feature-fan").append('<label class="checkbox"><input name="fan-value" type="checkbox" value='+text.value+'>'+text.value+'</label>');
            text.value = '';
        } 
    });
    
    $(".add-feature-louver").click(function(){
        var text = $(this).siblings("input")[0];
        if (text.value != '') {
            $(".feature-louver").append('<label class="checkbox"><input name="fan-value" type="checkbox" value='+text.value+'>'+text.value+'</label>');
            text.value = '';
        } 
    });
    
    $(".add-feature-swing").click(function(){
        var text = $(this).siblings("input")[0];
        if (text.value != '') {
            $(".feature-swing").append('<label class="checkbox"><input name="fan-value" type="checkbox" value='+text.value+'>'+text.value+'</label>');
            text.value = '';
        } 
    }); 
    
    $(".btn-new-cond").click(function(){
        $(".new-cond").append(
            '<hr>'    
           +'<div class="form-group condition-b">'
                +'<label class="control-label col-sm-2">Checksum Index:</label>'
                +'<div class="col-sm-1">'
                    +'<input type="" class="form-control">'
                +'</div>'
           +'</div>'
           +'<div class="form-group">'
                +'<label class="control-label col-sm-2">IRP String:</label>'
                +'<div class="col-sm-10">'
                    +'<input type="" class="form-control">'
                +'</div>'
           +'</div>'            
           +'<div class="form-group condition">'
                +'<label class="control-label col-sm-2"><button class="btn btn-xs btn-add-cond" type="button"><i class="fa fa-plus" aria-hidden="true"></i></button>Condition:</label>'
                +'<div class="col-sm-12 condition-a">'
                    +'<label class="control-label col-sm-2">a:</label>'
                    +'<div class="col-sm-2">'
                        +'<input type="" class="form-control">'
                    +'</div>'
                +'</div>'
                +'<div class="col-sm-12">'
                    +'<label class="control-label col-sm-2">b:</label>'
                    +'<div class="col-sm-2">'
                        +'<input type="" class="form-control">'
                    +'</div>'
                +'</div>'                
                +'<div class="col-sm-12">'
                    +'<label class="control-label col-sm-2">group:</label>'
                    +'<div class="col-sm-2">'
                        +'<input type="" class="form-control">'
                    +'</div>'
                +'</div>'
                +'<div class="col-sm-12">'
                    +'<label class="control-label col-sm-2">operator:</label>'
                    +'<div class="col-sm-2">'
                        +'<input type="" class="form-control">'
                    +'</div>'
                +'</div>'                       
            +'</div>'
            +'<div class="form-group">'
                +'<label class="control-label col-sm-2">Reverse:</label>'
                +'<div class="col-sm-12">'
                    +'<label class="control-label col-sm-2">Key:</label>'
                    +'<div class="col-sm-2">'
                        +'<input type="" class="form-control">'
                    +'</div>'
                +'</div>'
                +'<div class="col-sm-12">'
                    +'<label class="control-label col-sm-2">Message Part:</label>'
                    +'<div class="col-sm-2">'
                        +'<input type="" class="form-control">'
                    +'</div>'
                +'</div>'                
                +'<div class="col-sm-12">'
                    +'<label class="control-label col-sm-2">Value:</label>'
                    +'<div class="col-sm-2">'
                        +'<input type="" class="form-control">'
                    +'</div>'
                +'</div>'            
            +'</div>'
        );
    })
        
    $(".new-cond").on("click", ".btn-add-cond", function(){
        $(this).parents(".condition").append(
            '<div class="col-sm-12 condition-a">'
                +'<label class="control-label col-sm-2">a:</label>'
                +'<div class="col-sm-2">'
                    +'<input type="" class="form-control">'
                +'</div>'
            +'</div>'
            +'<div class="col-sm-12">'
                +'<label class="control-label col-sm-2">b:</label>'
                +'<div class="col-sm-2">'
                    +'<input type="" class="form-control">'
                +'</div>'
            +'</div>'
            +'<div class="col-sm-12">'
                +'<label class="control-label col-sm-2">group:</label>'
                +'<div class="col-sm-2">'
                    +'<input type="" class="form-control">'
                +'</div>'
            +'</div>'            
            +'<div class="col-sm-12">'
                +'<label class="control-label col-sm-2">operator:</label>'
                +'<div class="col-sm-2">'
                    +'<input type="" class="form-control">'
                +'</div>'
            +'</div>'            
        );
    });
    
    
    // IRP //
    $(".btn-done-irp").click(function(){
        $(".irp-content").each(function(){
            var index = $(this).find('input')[0];
            var irp = $(this).find('input')[1];
            var key = $(this).find('input')[2];
            var msg_part = $(this).find('input')[3];
            var value = $(this).find('input')[4];
        });
    })
    
       
}); // end //