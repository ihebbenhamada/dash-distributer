class Ui_listSimCard {
    constructor() {
        this.total = 0;
        this.nbrRows=10;
        this.totalS = 0;
        this.nbrRowsS=10;
        this.selectedSimCard=null;
        this.lastSearchBy ="";
        $("[DATI-ID=pagination_SimCardList]").attr("DATI-NBR-ROW",this.nbrRows);
        /*this.filterBy={
            "Number" : 1,
            "Operator" : 2,
            "ICCD" : 3,
            "Offre" : 4,
            "Status" : 5,
        };*/
        this.filterBy={
            "Number" : 1,
            "Operator" : 2,

        };
        $(document).on('change','[DATI-ID=searchBarListSimCard] [DATI-ID=listSimCard_filter_by]',function(){
            var filterSelected = $(this).val();
            console.log(filterSelected);

            switch (filterSelected) {
                case "1" :
                    iSimCard.GET_ALL_SIM_CARDS2();
                    $("[DATI-ID=searchBarListSimCard] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarListSimCard] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListSimCard] [DATI-ID=listSimCard_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListSimCard] [DATI-ID=listSimCard_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarListSimCard] [DATI-ID=listSimCard_search_byNumber]").css("display","inline-block");
                    break;
                case "2" :
                    iSimCard.GET_ALL_SIM_CARDS2();
                    $("[DATI-ID=searchBarListSimCard] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarListSimCard] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListSimCard] [DATI-ID=listSimCard_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListSimCard] [DATI-ID=listSimCard_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarListSimCard] [DATI-ID=listSimCard_search_byOperator]").css("display","inline-block");
                    break;
                /*case "3" :
                    iSimCard.GET_ALL_SIM_CARDS2();
                    $("[DATI-ID=searchBarListSimCard] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarListSimCard] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListSimCard] [DATI-ID=listSimCard_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListSimCard] [DATI-ID=listSimCard_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarListSimCard] [DATI-ID=listSimCard_search_byICCID]").css("display","inline-block");
                    break;

                case "4" :
                    iSimCard.GET_ALL_SIM_CARDS2();
                    $("[DATI-ID=searchBarListSimCard] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarListSimCard] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListSimCard] [DATI-ID=listSimCard_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListSimCard] [DATI-ID=listSimCard_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarListSimCard] [DATI-ID=listSimCard_search_byOffre]").css("display","inline-block");
                    break;

                case "5" :
                    iSimCard.GET_ALL_SIM_CARDS2();
                    $("[DATI-ID=searchBarListSimCard] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarListSimCard] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListSimCard] [DATI-ID=listSimCard_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListSimCard] [DATI-ID=listSimCard_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarListSimCard] [DATI-ID=listSimCard_search_byStatus]").css("display","inline-block");
                    break;*/

            }
        });


    }

    DATALIST(data){
        this.simCards = data;
        try{
            this.total = data[0].count1;
            this.nbrRows = data[0].quantity1;
        }catch (e) {
            this.total = 0;
            this.nbrRows = 0;
        }

    }

    GET_SIM_STATUS(attribute){
        if (attribute != null && attribute != "null"){
            if (attribute == 1) {
                return '<div style="text-align: center;color: rgb(159,213,168);background-color: rgb(232,245,237);border-radius: 20px;padding: 8px;font-size: 13px">Active</div>';
            } else if (attribute == 0) {
                return '<div style="text-align: center;color: rgb(215,92,84);background-color: rgb(247,240,241);border-radius: 20px;padding: 8px;font-size: 13px">Inactive</div>';
            }
        }else {
            return "- -"
        }
    }


    GET_HTML_Edit(id){
        if(id != null && id != 'null' && id != ''){
            return '<img src="/assets/img/ui/edit_button.png"  title="Edit" style="cursor: pointer;padding: 5px;width: 20px;" DATI-TD-STYLE="text-align:center" DATI-LINK="EditSimCard"  DATI-PATH="Front Office &nbsp&nbsp&nbsp > &nbsp&nbsp&nbsp Guests &nbsp&nbsp&nbsp > &nbsp&nbsp&nbsp Edit Form" onclick="simCardList_ui.setSelected(this)"/>';
        }else{
            return "";
        }

    }
    GET_HTML_Delete(id){
        if(id != null && id != 'null' && id != ''){
            return '<img src="/assets/img/ui/delete_button.png" title="Delete" style="cursor: pointer;padding: 5px;width: 20px;" DATI-TD-STYLE="text-align:right" onclick="simCardList_ui.DELETE(this)"/>';
        }else{
            return "";
        }
    }
    GET_HTML_Plus(id){
        if(id != null && id != 'null' && id != ''){
            return '<i title="Details" style="cursor: pointer;padding: 5px;width: 20px;" DATI-TD-STYLE="text-align:right" DATI-LINK="detailsSimCard" onclick="simCardList_ui.setSelected(this)" class="fas fa-ellipsis-v fa-lg"></i>';
        }else{
            return "";
        }
    }
    TOGGEL_ALERTE(){
        $("[DATI-PAGE=SimsCard]").find("[dati-id=SimCardDeleteAlerte]").find("[class=overlay_restau]").css("display", "block");
    }

    CANCEL_ALERTE(){
        $("[DATI-PAGE=SimsCard]").find("[dati-id=SimCardDeleteAlerte]").find("[class=overlay_restau]").css("display", "none");
    }

    VALIDATE_ALERTE(){
        var id_simCard = this.selectedSimCard.id;

        iSimCard.DELETE_SIM_CARD(id_simCard);

    }

    DELETE_NAME(){
        var number = this.selectedSimCard.sim_number;
        $("[DATI-ID=delete-item-name]").html("Are you sure to delete sim card number "+number);
    }

    DELETE(rest_element){
        this.setSelected(rest_element);
        this.TOGGEL_ALERTE();
        this.DELETE_NAME();
    }
    GET_POSITION_IN_TAB(list,id){
        for(var i=0; i<list.length;i++){
            if(list[i].id == id){
                return i;
            }
        }
        return -1;
    }

    fillPageDetail(){

    }


    fillPageEdit(){
        try {
            $("[DATI-PAGE=EditSimCard]").find("[ID=inputUpdateNumberSimCard]").find("input").val(this.selectedSimCard.sim_number);
        } catch (e) {
            $("[DATI-PAGE=EditSimCard]").find("[ID=inputUpdateNumberSimCard]").find("input").val('');
        }
        try {
            $("[DATI-PAGE=EditSimCard]").find("[ID=inputUpdateICCID]").find("input").val(this.selectedSimCard.iccid);
        } catch (e) {
            $("[DATI-PAGE=EditSimCard]").find("[ID=inputUpdateICCID]").find("input").val('');
        }

        try {
            $("[DATI-PAGE=EditSimCard]").find("[ID=inputOperatorUpdateSimCard]").find("select").val(this.selectedSimCard.Operator.id);
        } catch (e) {
            $("[DATI-PAGE=EditSimCard]").find("[ID=inputOperatorUpdateSimCard]").find("select").val('');
        }

        try {
            $("[DATI-PAGE=EditSimCard]").find("[ID=inputOffreUpdateSimCard]").find("select").val(this.selectedSimCard.Offer.id);
        } catch (e) {
            $("[DATI-PAGE=EditSimCard]").find("[ID=inputOffreUpdateSimCard]").find("select").val('');
        }
    }
    setSelected(iconDetail){
        var i = $(iconDetail).parent().parent().attr("DATI-ROW");
        this.selectedSimCard = this.simCards[i];
        console.log(this.selectedSimCard);
    }

    DATA_SEARCH(data){
        simCardList_ui.simCards=data;
        dati_table.UPDATE("SimCardList");

    }

}

let simCardList_ui = new Ui_listSimCard();