let Ui_depInChat = class {
    constructor() {
        this.EVENTS_UI();
        this.selectedService = null ;
        $(document).ready(function(){
            $(document).on('mouseenter','.inactive',function() {
                $(this).find(".image_inactive").css("display","none");
                $(this).find(".image_active").css("display","inline-block");

            });

            $(document).on('mouseleave','.inactive',function() {
                $(this).find(".image_active").css("display","none");
                $(this).find(".image_inactive").css("display","inline-block");

            });


    })}
    FILTERMSGBYDEP(id){

        var event = new CustomEvent("FilterMsgByDep", { detail: {id_dep : id} });
        document.dispatchEvent(event);
    }

    FIN_BY_ID_IN_LIST(list,id){
        for(var i=0; i < list.length; i++){
            if(list[i].id == id){
                return list[i];
            }
        }
    }

    SELECTED_SERVICE(element){

        var id_service = $(element).attr("dep-id");
        var listSearch = eval($(element).parent().attr("DATI-LIST"));
        this.selectedService =depInChat_ui.FIN_BY_ID_IN_LIST(listSearch,id_service);

        this.ISACTIVE(element);
    }


    SELECTBULLESERVICEACTIVE(id){
     //$("[DATI-PAGE=chat]").find("[dep-id="+id+"]").addClass("active")
     // $("[DATI-PAGE=chat]").find("[dep-id="+id+"]").removeClass("inactive")
      $("[DATI-PAGE=chat]").find("[dep-id="+id+"]").find(".image_inactive").css("display","none");
      $("[DATI-PAGE=chat]").find("[dep-id="+id+"]").find(".image_active").css("display","inline-block");

    }
    ISACTIVE(element){

        $("[DATI-PAGE=chat]").find("[dep-id]").find(".image_inactive").css("display","inline-block");
        $("[DATI-PAGE=chat]").find("[dep-id]").find(".image_active").css("display","none");
        $(".departement").removeClass("active");
        $(".departement").addClass("inactive");
        $(element).removeClass("inactive");
        $(element).addClass("active");

        $(element).find(".image_inactive").css("display","none");
        $(element).find(".image_active").css("display","inline-block");
    }

    DEPARTMENT(list){
        return  '<div class="departement inactive " DEP-ID="'+list.id+'"   onclick="depInChat_ui.FILTERMSGBYDEP('+list.id+');depInChat_ui.SELECTED_SERVICE(this)">'+
               '<img class="image_active" style="display:none" src='+list.img+' >'+
            '<img class="image_inactive"  style="display:inline-block"  src='+list.img_Inactive+'>'+
               '<span >'+list.title+'</span>'+
               '</div>'

    }
    UPDATE(id){
        var depChat = $("[DATI-ID="+id+"]");
        var lists_name = $(depChat).attr("DATI-LIST");
        var lists = eval(lists_name);
        //this.selectedService =lists[0];
            $(depChat).html("");
        for(var i=0; i<lists.length; i++) {
            var list = lists[i];
          var depItem = "";
            depItem += this.DEPARTMENT(list);
           $(depChat).append(depItem);

        }


    }



    EVENTS_UI(){

        var myComposents = document.querySelectorAll("[dati-composent=departmentInChat]");
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
                depInChat_ui.UPDATE(id)
            }, 100);
        }, false);
    }



};

let depInChat_ui = new Ui_depInChat();