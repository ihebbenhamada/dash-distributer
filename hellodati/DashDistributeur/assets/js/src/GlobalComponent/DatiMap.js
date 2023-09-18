let Ui_DatiMap = class {
    constructor() {
        this.EVENTS_UI();
        this.Src="https://www.google.com/maps/embed/v1/place?q=tunisie&amp;zoom=5z&amp;key=AIzaSyAyAVk8K2sts7qZkGn7ldLpZCEa726kNk4";

    }


    MAP(){

        return '<iframe DATI-IFRAME-MAP id="inlineFrameExample" title="Inline Frame Example" width="100%" height="300" src='+this.Src+' FRAMEBORDER="0">'+
            '</iframe>'

    }


    UPDATE(id){
        console.log("deedeedeededddd");
        var MapC = $("[ID="+id+"]");
        var label = $(MapC).attr("LABEL");
        $(MapC).html("");
        var map = this.MAP(label);
        $(MapC).append(map);


    }




    EVENTS_UI(){
        $(document).ready(function() {
        console.log("mapmapmapmap");
        var myComposents = document.querySelectorAll("dati-map");
        for(var i=0; i<myComposents.length;i++){

            var myComposent = myComposents[i];
            console.log(myComposent,"myComponents");
            if($(myComposent).attr("UPDATE")){
                dati_map.LUNCH($(myComposent).attr("UPDATE"),$(myComposent).attr("ID"),$(myComposent).attr("DATI-VALIDATE"),$(myComposent).attr("DATI-CANCEL"));
            }
        }
        });

        $(document).on('change', '[DATI-SERACH-QUERY-MAP]', function() {

            var value = $(this).val();
            var Terme =value.replace(/ /g, "");
            var MySrc = "https://www.google.com/maps/embed/v1/place?q="+Terme+"&amp;zoom=16z&amp;key=AIzaSyAyAVk8K2sts7qZkGn7ldLpZCEa726kNk4";
            dati_map.Src=MySrc;
        /*    console.log(value,"tvalueesssttgggt");
            console.log(MySrc,"tvalueesssttgggt");*/
            $("[DATI-IFRAME-MAP]").attr('src', dati_map.Src);
            dati_map.UPDATE("MapHotel")
        });

    }



    LUNCH(eventName,id){
        document.addEventListener(eventName, function(e){
            setTimeout(function(){
                dati_map.UPDATE(id);
            }, 100);
        }, false);


    }


}




let dati_map = new Ui_DatiMap();