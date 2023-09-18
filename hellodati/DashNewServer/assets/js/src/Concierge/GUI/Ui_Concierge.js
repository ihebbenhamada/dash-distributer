let Ui_Concierge = class {
    constructor() {
        this.cards = [];
        this.EVENT_UI();
        this.selectedConcierge=null;
        this.selectedConc=null;
        this.msgErreurConcierge=[];
        this.msgErreurConciergeUp=[];
        this.btChecked={};

    }

    DATALIST(data){
        this.cards = data.res;

    }
    ATTRIBUTES(element){
        var attributs = "";
        $(element).each(function() {

            $.each(this.attributes, function() {
                // this.attributes is not a plain object, but an array
                // of attribute nodes, which contain both the name and value
                if(this.specified) {
                    attributs=attributs+' '+this.name+' = "'+this.value+'"';
                }
            });
        });
        return attributs;
    }

    SETSELECTED(Concierge){
        this.selectedConcierge= Concierge;

    }
    FIN_BY_ID_IN_LIST(list,id){
        for(var i=0; i < list.length; i++){
            if(list[i].id == id){
                return list[i];
            }
        }
    }
    SETSELECTED_detail(rest_element){

        var id = $(rest_element).parent().parent().attr("DATI-id");
        var listSearch = eval($(rest_element).parent().parent().parent().attr("DATI-LIST"));
        this.selectedConc = this.FIN_BY_ID_IN_LIST(listSearch,id);



    }

    CART_BLOCK_CONC(list,link,dataSelcted,imgEdit,imgDelete,path){
       var title =  list.title.toUpperCase();
        if(imgEdit == null){
            imgEdit = "";
        }
        if(imgDelete == null){
            imgDelete = "";
        }
        if(dataSelcted != null) {
            return '<div class="container_concierge_item" style="background-image: url(' + list.image + ');"  DATI-ID="' + list.id + '">' +
                '<div DATI-LINK="'+link+'"  DATI-PATH="'+path+'" DATI-BEFORE-LINK="'+dataSelcted+'"  style="display: inline-block; width: 100%; z-index: 2; height: 100%; position: absolute; left: 0px; top: 0px;"></div>' +
                '<span class="title">' + title + ' </span>' +
                '<div class="action">'+
                imgEdit+imgDelete+
                '</div>' +
                '</div>'
        }else{
            return '<div class="container_concierge_item" DATI-LINK="'+link+'" style="background-image: url(' + list.image + ');"  DATI-ID="' + list.id + '">' +
                '<div DATI-LINK="'+link+'"   DATI-PATH="'+path+'"style="display: inline-block; width: 100%; z-index: 2; height: 100%; position: absolute; left: 0px; top: 0px;"></div>' +
                '<span class="title">' + title + '  </span>' +
                '<div class="action">'+
                imgEdit+imgDelete+
                '</div>' +
                '</div>'
        }
    }
    SWITCHER(is_check,list,style, global_list,switch_change){

        return '<div  class="switcherContainer"\n' +
            '  DATI-COMPOSENT="switcherContainer"\n' +
            '  DATI-ID="conciergeCard'+list.id+'"\n' +
            '  DATI-UPDATE="SwitcherConcierge"\n' +
            'DATI-CHANGE="'+switch_change+'('+global_list+')"' +
            'DATI-DEFAULt_VALUE="'+is_check+'"' +
            '  style="'+style+'">\n' +


            '  </div>';
    }

    UPDATE(id){

        var conciergeCard = $("[DATI-ID="+id+"]");
        var sw = $(conciergeCard).attr("DATI-SWITECH");
        var lists_name = $(conciergeCard).attr("DATI-LIST");
        var lists = eval(lists_name);
        var link = $(conciergeCard).attr("CARDS-LINK");
        var path = $(conciergeCard).attr("CARDS-PATH");
        var switch_change = $(conciergeCard).attr("DATI-SWITECH-TOGGOLE");
        if($(conciergeCard).attr("CARDS-BEFORE-LINK")){ ;
            var before_link_data= $(conciergeCard).attr("CARDS-BEFORE-LINK");
        }
        if($(conciergeCard).find("[DATI-COMPOSENT=ConciergeCards-icon-edit]").attr("DATI-COMPOSENT")){
            var imgEdit = '<img '+this.ATTRIBUTES($(conciergeCard).find("[DATI-COMPOSENT=ConciergeCards-icon-edit]"))+' src="/assets/img/restaurant/edit_button.png" alt="Edit">'
        }else{
            var imgEdit = null;
        }
        if($(conciergeCard).find("[DATI-COMPOSENT=ConciergeCards-icon-delete]").attr("DATI-COMPOSENT")){
            var imgDelete = '<img '+this.ATTRIBUTES($(conciergeCard).find("[DATI-COMPOSENT=ConciergeCards-icon-delete]"))+' src="/assets/img/restaurant/delete_button.png" alt="Delete">'
        }else{
            var imgDelete= null;
        }
        $(conciergeCard).html("");
        if(lists.length <= 0) {

            if(imgEdit != null){
                var vll = $(conciergeCard).html()+imgEdit;

                $(conciergeCard).html(vll);
            }
            if(imgDelete != null){
                var vll = $(conciergeCard).html()+imgDelete;
                $(conciergeCard).html(vll);
            }
            $(conciergeCard).css("display","none");
        }else{
            $(conciergeCard).css("display","contents");
        }
        for(var i=0; i<lists.length; i++) {
            var list = lists[i];
            if($(conciergeCard).attr("CARDS-LINK")) {
                var link_to = link;
                var path_to=path+list.title.charAt(0).toUpperCase() +list.title.substring(1);;
            }else {
                link_to = "#";
            }
            if($(conciergeCard).attr("CARDS-BEFORE-LINK")) {
                var before_link_data_read = before_link_data + "(" + lists_name + "["+i+"])";
            }else {
                before_link_data_read = null;
            }
            var cardConcierge = "";
            cardConcierge += this.CART_BLOCK_CONC(list,link_to,before_link_data_read,imgEdit,imgDelete,path_to);
            $(conciergeCard).append(cardConcierge);
            var cardBlock = $(conciergeCard).find("[DATI-ID="+list.id+"]");
            var Switcher = this.SWITCHER(list.enable, list, sw, lists_name+"["+i+"]",switch_change);
            $(cardBlock).append(Switcher);
            dati_switcher.ADD_TO_DOM("conciergeCard" + list.id);

        }
        //document.getElementById('serviceCardContainer').innerHTML = cardService;////
    }
    VERIF_FORM_ADD_CONCIERGE(element){
        this.msgErreurConcierge = [];
        dati_Erreurs.UPDATE("ConcErreurs");
        var title = $(element).find("[DATI-INPUT-NAME-TITLE-CONCIERGE]").val();
        var description = $(element).find("[DATI-INPUT-DESCRIPTION-CONCIERGE]").val();
        var summary =$(element).find("[DATI-INPUT-SUMMARY-TITLE-CONCIERGE]").val();
        var price = $(element).find("[DATI-INPUT-NAME=price]").val();
        var image = iConcierge.imgConciergeUploaded;
        var type ;
        var classification = 4;
        var enable = 1 ;
        var translate= formTrx_ui.save_addTrx ;
        var contacts= dati_contactForm.sendContactDb;

        if ($("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeOrder]").attr("button-checked") == "false" && $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeReservation]").attr("button-checked") == "false" && $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeResquest]").attr("button-checked") == "false") {
            type = 0;
        }
        if ($("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeOrder]").attr("button-checked") == "true" && $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeReservation]").attr("button-checked") == "false" && $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeResquest]").attr("button-checked") == "false") {
            type = 1;
        }

        if ($("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeOrder]").attr("button-checked") == "false" && $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeReservation]").attr("button-checked") == "true" && $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeResquest]").attr("button-checked") == "false") {
            type = 2;
        }
        if ($("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeOrder]").attr("button-checked") == "true" && $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeReservation]").attr("button-checked") == "true" && $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeResquest]").attr("button-checked") == "false") {
            type = 3;
        }
        if ($("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeOrder]").attr("button-checked") == "false" && $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeReservation]").attr("button-checked") == "false" && $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeResquest]").attr("button-checked") == "true") {
            type = 4;
        }
        if ($("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeOrder]").attr("button-checked") == "true" && $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeReservation]").attr("button-checked") == "false" && $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeResquest]").attr("button-checked") == "true") {
            type = 5;
        }
        if ($("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeOrder]").attr("button-checked") == "false" && $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeReservation]").attr("button-checked") == "true" && $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeResquest]").attr("button-checked") == "true") {
            type = 6;
        }
        if ($("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeOrder]").attr("button-checked") == "true" && $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeReservation]").attr("button-checked") == "true" && $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeResquest]").attr("button-checked") == "true") {
            type = 7;
        }

        for( var i=0; i<translate.length; i++){
        }
        for (const [lan, value] of Object.entries(translate)) {
            if(!translate[lan].hasOwnProperty("image")){
                translate[lan]["image"] = image;
            }else if(translate[lan]["image"] == "" || translate[lan]["image"]==null){
                translate[lan]["image"] = image;
            }
        }

      for( var i=0; i<translate.length; i++){
                    }
                    for (const [lan, value] of Object.entries(translate)) {
                        if(!translate[lan].hasOwnProperty("image")){
                            translate[lan]["image"] = image;
                        }else if(translate[lan]["image"] == "" || translate[lan]["image"]==null){
                            translate[lan]["image"] = image;
                        }
                    }





                    if(title ==""){
                        this.msgErreurConcierge.push("title is required");
                        dati_Erreurs.UPDATE("ConcErreurs");
                    }
                    if(description===""){
                        this.msgErreurConcierge.push("description is required");
                        dati_Erreurs.UPDATE("ConcErreurs");
                    }
                    if(iConcierge.imgConciergeUploaded === null){
                        this.msgErreurConcierge.push("image is required");
                        dati_Erreurs.UPDATE("ConcErreurs");
                    }


                    if(this.msgErreurConcierge.length == 0) {
            /*vider list erreurs*/
          this.msgErreurConcierge = [];
            dati_Erreurs.UPDATE("ConcErreurs");
            /*vider list erreur*/
            var data = {
                title: title,
                description: description,
                image: image,
                type: type,
                price:price,
                classification: classification,
                enable: enable,
                translate:translate,
                contacts:contacts,
                summary: summary,

            };



            SSAPI.SUBMIT({
                uri: "/Concierge/add",
                data: data,
                onsuccess: "conciergeAdded",
                onerror: "conciergeAdded_error"
            });
            Concierge_ui.RESET_FORM_ADD();
            iConcierge.imgConciergeUploaded=null;
            Concierge_ui.VIDE_PREVIEW_CONC();
            $("[ DATI-ID=contactListServiceConcierge]").css("display","none");






        }


    }
    VERIF_FORM_EDIT_CONC(element){
        this.msgErreurConciergeUp=[];
        dati_Erreurs.UPDATE("ConcUpErreurs");
        var title = $(element).find("[dati-input-name-title-concierge]").val();
        var description = $(element).find("[dati-input-description-concierge]").val();
        var summary =$(element).find("[dati-input-summary-concierge]").val();
        var price = $(element).find("[DATI-INPUT-NAME=price]").val();
        if(iConcierge.imgConciergeUpUploaded != null){
            var image =  iConcierge.imgConciergeUpUploaded;
        }else {
            var image =  this.selectedConc.image;
        }
        var type  ;
        var classification = 4;
        var enable = 1 ;
        var translate= formTrx_ui.save_addTrx ;
        var contacts= dati_contactForm.sendContactDb;


        if ($("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").attr("button-checked") == "false" && $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").attr("button-checked") == "false" && $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").attr("button-checked") == "false") {
            type = 0;
        }
        if ($("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").attr("button-checked") == "true" && $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").attr("button-checked") == "false" && $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").attr("button-checked") == "false") {
            type = 1;
        }

        if ($("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").attr("button-checked") == "false" && $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").attr("button-checked") == "true" && $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").attr("button-checked") == "false") {
            type = 2;
        }
        if ($("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").attr("button-checked") == "true" && $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").attr("button-checked") == "true" && $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").attr("button-checked") == "false") {
            type = 3;
        }
        if ($("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").attr("button-checked") == "false" && $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").attr("button-checked") == "false" && $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").attr("button-checked") == "true") {
            type = 4;
        }
        if ($("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").attr("button-checked") == "true" && $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").attr("button-checked") == "false" && $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").attr("button-checked") == "true") {
            type = 5;
        }
        if ($("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").attr("button-checked") == "false" && $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").attr("button-checked") == "true" && $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").attr("button-checked") == "true") {
            type = 6;
        }
        if ($("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeOrderUp]").attr("button-checked") == "true" && $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeReservationUp]").attr("button-checked") == "true" && $("[dati-page=editConcierge]").find("[bt_checked=CheckBoxConciergeResquestUp]").attr("button-checked") == "true") {
            type = 7;
        }

        if(title ==""){
            this.msgErreurConciergeUp.push("title is required");
            dati_Erreurs.UPDATE("ConcUpErreurs");
        }
        if(description===""){
            this.msgErreurConciergeUp.push("description is required");
            dati_Erreurs.UPDATE("ConcUpErreurs");
        }
        if(image === null){
            this.msgErreurConciergeUp.push("image is required");
            dati_Erreurs.UPDATE("ConcUpErreurs");
        }


        if(this.msgErreurConciergeUp.length == 0) {
            /*vider list erreurs*/
            this.msgErreurConciergeUp = [];
            dati_Erreurs.UPDATE("ConcUpErreurs");
            var data = {
                cong_id: this.selectedConc.id,
                title: title,
                description: description,
                image: image,
                type: type,
                price:price,
                classification: classification,
                enable: enable,
                translate: translate,
                contacts:contacts,
                summary: summary,
            }


            SSAPI.SUBMIT({
                uri: "/Concierge/update",
                data: data,
                onsuccess: "ConcUpdated",
                onerror: " ConcUpdated_error",
            });
            iConcierge.imgConciergeUpUploaded = null;
        }
        }

    RESET_FORM_ADD(){
        $("[ FORM-ID=form_add_Concierge]").find("[dati-input-name-title-concierge]").val("");
        $("[ FORM-ID=form_add_Concierge]").find("[dati-input-description-concierge]").val("");
        $("[ FORM-ID=form_add_Concierge]").find("[dati-input-summary-concierge]").val("");
        $("[ FORM-ID=form_add_Concierge]").find("[DATI-INPUT-NAME=image]").val("");
        $("[ FORM-ID=form_add_Concierge]").find("[dati-role=clickableTrans]").css("background-image","none");
        $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeOrder]").attr("button-checked","false");
        $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeOrder]").find("[is_checked=OrderCheckBoxConciergeOrder]").css("display","none");
        $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeReservation]").attr("button-checked","false");
        $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeReservation]").find("[is_checked=ReservationCheckBoxConciergeReservation]").css("display","none");
        $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeResquest]").attr("button-checked","false");
        $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeResquest]").find("[is_checked=RequestCheckBoxConciergeResquest]").css("display","none");
        $("[dati-page=addConcierge]").find("[dati-id=Order]").val("");
        $("[dati-page=addConcierge]").find("[dati-id=Reservation]").val("");

    }
    VIDE_PREVIEW_CONC(){
        $("[DATI-TITLE-CONC]").html("");
        $("[DATI-DESCRIPTION-CONC]").css("display","none");
        $("[DATI-IMAGE-FLESH]").css("display","none");
        $("[DATI-PREVIEW-CONC]").css("background-color", "rgb(255,0,0,0)");
        $("[DATI-IMAGE-CONC]").css("opacity","0");

    }

    /*   }*/
    CANCEL_ALERTE(){
        $("[DATI-PAGE=ConciergePage]").find("[dati-id=ConcAlerte]").find("[class=overlay_restau]").css("display", "none");
    }
    VALIDATE_ALERTE(){
        var id_cong = this.selectedConc.id;
        iConcierge.DELETE_CONC(id_cong);

    }
    TOGGEL_ALERTE(){
        $("[DATI-PAGE=ConciergePage]").find("[dati-id=ConcAlerte]").find("[class=overlay_restau]").css("display", "block");
    }
    DELETE_NAME(){
        var title = this.selectedConc.title;
        var titleUper = title.toUpperCase();
        $("[DATI-ID=delete-item-name]").html("Are you sure to delete "+titleUper);
    }
    delete(rest_element){
        this.SETSELECTED_detail(rest_element);
        this.TOGGEL_ALERTE();
        this.DELETE_NAME();
    }

    /* ******* DELETE ******* */
    GET_POSITION_IN_LIST(list,id){
        for(var i=0; i<list.length;i++){
            if(list[i].id == id){
                return i;
            }
        }
        return -1;
    }

    DELETE_ID_FROM_LIST(id){

        var pos = eventCard_ui.GET_POSITION_IN_LIST(Concierge_ui.cards,id);
        if(pos != -1){
            Concierge_ui.cards.splice(pos, 1);
        }
        Concierge_ui.UPDATE("ConciergeList");
        Concierge_ui.CANCEL_ALERTE();
    }

    EVENT_UI(){
        var myComposents = document.querySelectorAll("[dati-composent=ConciergeCards]");

        for(var i=0; i<myComposents.length;i++){
            var myComposent = myComposents[i];
            if($(myComposent).attr("dati-update")){
                this.LUNCH($(myComposent).attr("dati-update"),$(myComposent).attr("dati-id"));

            }
        }



        /* ******************************** PREVIEW CONCIERGE ****************************************** */
        $("[dati-input-name-title-concierge]").on('keyup', function() {
            $("[DATI-TITLE-CONC]").html( $("[ dati-input-name-title-concierge]").val());
            $("[DATI-DESCRIPTION-CONC]").css("display", "inline-block");
            $("[DATI-IMAGE-FLESH ]").css("display", "inline-block");
            $("[DATI-PREVIEW-CONC]").css("background-color", "white");


        });

        /* ******************************** End PREVIEW CONCIERGE ****************************************** */

    }

    LUNCH(eventName,id){
        document.addEventListener(eventName, function(e){
            setTimeout(function(){
                Concierge_ui.UPDATE(id)
            }, 100);
        }, false);
    }
}





let Concierge_ui = new Ui_Concierge();