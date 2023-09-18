let Ui_alerte = class {
    constructor() {
        this.EVENTS_UI();
    }


ALERTE(validate,cancel,type,class_css){
        if (type=="1"){
            return   '<div class="overlay_restau">\n' +
                '        <div class="'+class_css+'">\n' +
                '            <div class="body_modal">\n' +
                '                <p DATI-ID="delete-item-name"></p>\n' +
                '                <div class="bt_actions">\n' +
                '                    <div class="cancel" onclick=" '+cancel+'"  >\n' +
                '                        <i class="fas fa-times"style="color: #ffffff"></i>\n' +
                '                        <p>Cancel</p>\n' +
                '                        </div>\n' +
                '                    <div class="validate"  onclick=" '+validate+'">\n' +
                '                        <i class="fas fa-check" style="color: #ffffff"></i>\n' +
                '                        <p>Validate</p>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </div>'

        }else if (type == 2) {
            return   '<div class="overlay_restau">\n' +
                '        <div class="'+class_css+'">\n' +
                '            <div class="body_modal">\n' +
                '                <p DATI-ID="delete-item-name"></p>\n' +
                '                <div class="bt_actions">\n' +
                '                    <div class="cancel" onclick=" '+cancel+'"  >\n' +
                '                        <i class="fas fa-times"style="color: #ffffff"></i>\n' +
                '                        <p>Cancel</p>\n' +
                '                    </div>\n' +
                '                    <div class="validate"  onclick=" '+validate+'">\n' +
                '                        <i class="fas fa-check" style="color: #ffffff"></i>\n' +
                '                        <p>Validate</p>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </div>'
        }


}


    UPDATE(id){
        var alerteC = $("[DATI-ID="+id+"]");
        var type = $(alerteC).attr("TYPE");
        var validate = $(alerteC).attr("DATI-VALIDATE");
        var cancel = $(alerteC).attr("DATI-CANCEL");
        var class_css = $(alerteC).attr("CLASS-CSS");
        $(alerteC).html("");
        var alerte = this.ALERTE(validate,cancel,type,class_css);
        $(alerteC).append(alerte);


    }




    EVENTS_UI(){

        $(document).ready(function() {
            var myComposents = document.querySelectorAll("[DATI-COMPOSENT=alerteContainer]");
            console.log(myComposents.length, "66666666");
            for (var i = 0; i < myComposents.length; i++) {
                var myComposent = myComposents[i];
                if ($(myComposent).attr("dati-update")) {
                    dati_alerte.LUNCH($(myComposent).attr("dati-update"), $(myComposent).attr("dati-id"));
                }
            }
        });

    }

    ADD_TO_DOM(id){

        var myComposent = $("[DATI-ID="+id+"]");
        if($(myComposent).attr("dati-update")){
            this.LUNCH($(myComposent).attr("dati-update"),$(myComposent).attr("dati-id"));
            dati_alerte.UPDATE(id);
        }
    }

    LUNCH(eventName,id){
        document.addEventListener(eventName, function(e){
            console.log(555555555);
            setTimeout(function(){
                dati_alerte.UPDATE(id);
            }, 100);
        }, false);


    }


}




let dati_alerte = new Ui_alerte();