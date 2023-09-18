let Ui_switcher = class {
    constructor() {
        this.EVENTS_UI();
    }






    SWITCHER(is_check){
        if(eval(is_check)){
            return '<div class="switcherTest" >' +
                '<div class="flipswitch">' +
                '<input type="checkbox" name="flipswitch" class="flipswitch-cb"  id="switcher" checked   />' +
                '<label class="flipswitch-label" >' +
                '<div class="flipswitch-inner"></div>' +
                '<div id="colorSwitch" class="flipswitch-switch" ></div>' +
                '</label>' +
                '</div>' +
                '</div>';
        }else{
            return '<div class="switcherTest" >' +
                '<div class="flipswitch">' +
                '<input type="checkbox" name="flipswitch" class="flipswitch-cb"  id="switcher"   />' +
                '<label class="flipswitch-label" >' +
                '<div class="flipswitch-inner"></div>' +
                '<div id="colorSwitch" class="flipswitch-switch" ></div>' +
                '</label>' +
                '</div>' +
                '</div>';
        }

    }


    UPDATE(id){
        var switcherC = $("[DATI-ID="+id+"]");
        var colorOff = $(switcherC).attr("DATI-CHANGE-COLOR-SWITCHER");
        $(switcherC).html("");
        var enableColor = $(switcherC).attr("DATI-ENABLE-COLOR");
        var disableColor = $(switcherC).attr("DATI-DISABLE-COLOR");
        var switcher = this.SWITCHER($(switcherC).attr("DATI-DEFAULt_VALUE"));
        $(switcherC).append(switcher);
        var isChecked = $(switcherC).find("[type=checkbox]").is(":checked");
        if(isChecked){
            if(enableColor){
                $(switcherC).find(".flipswitch-switch").css("background-color",enableColor);
            }else{
                $(switcherC).find(".flipswitch-switch").css("background-color","#E0CD08");
            }

        }else{

            if(colorOff) {
                $(switcherC).find(".flipswitch-switch").css("background-color", "#9f9f9f");
            }else {
                $(switcherC).find(".flipswitch-switch").css("background-color", "#f58635");
            }
            if(disableColor) {
                $(switcherC).find(".flipswitch-switch").css("background-color", disableColor);
            }else {
                $(switcherC).find(".flipswitch-switch").css("background-color", "#f58635");
            }
        }

    }


    ADD_TO_DOM(id){
        var myComposent = $("[DATI-ID="+id+"]");
        if($(myComposent).attr("dati-update")){
            this.LUNCH($(myComposent).attr("dati-update"),$(myComposent).attr("dati-id"));
            dati_switcher.UPDATE(id);
        }
    }
    EVENTS_UI(){
        var myComposents = document.querySelectorAll("[dati-composent=switcherContainer]");
        for(var i=0; i<myComposents.length;i++){
            var myComposent = myComposents[i];
            if($(myComposent).attr("dati-update")){
                this.LUNCH($(myComposent).attr("dati-update"),$(myComposent).attr("dati-id"));
            }
        }

    }

    LUNCH(eventName,id){
        document.addEventListener(eventName, function(e){
            setTimeout(function(){
                dati_switcher.UPDATE(id);
            }, 100);
        }, false);

        $(document).off('click', '[DATI-ID='+id+']');
        $(document).on('click','[DATI-ID='+id+']',function(){
           var elem = $('[DATI-ID='+id+']');
            dati_switcher.TOGGLE_VAL(elem);
            if($(elem).attr("DATI-CHANGE")){
                var fn = $(this).attr("DATI-CHANGE");
                // eval pour executrer fn comme fonction
                eval(fn);

            }
        });
    }

    TOGGLE_VAL(element){
        var colorOff = $(element).attr("DATI-CHANGE-COLOR-SWITCHER");
        var isChecked = $(element).find("[type=checkbox]").is(":checked");
        var enableColor = $(element).attr("DATI-ENABLE-COLOR");
        var disableColor = $(element).attr("DATI-DISABLE-COLOR");
        if(isChecked){
            if(colorOff) {
                $(element).find("[type=checkbox]").removeAttr("checked");
                $(element).find(".flipswitch-switch").css("background-color", "#9f9f9f");
            }else{
                $(element).find("[type=checkbox]").removeAttr("checked");
                $(element).find(".flipswitch-switch").css("background-color", "#f58635");
            }
            if(disableColor) {
                $(element).find(".flipswitch-switch").css("background-color", disableColor);
            }else {

                $(element).find(".flipswitch-switch").css("background-color", "#f58635");
            }
        }else{
            $(element).find("[type=checkbox]").attr("checked","true");
            $(element).find(".flipswitch-switch").css("background-color","#E0CD08");
            if(enableColor){
                $(element).find(".flipswitch-switch").css("background-color",enableColor);
            }else{
                $(element).find(".flipswitch-switch").css("background-color","#E0CD08");
            }

        }

    }
}



let dati_switcher = new Ui_switcher();