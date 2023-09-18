class Ui_listAccessory {
    constructor() {
        this.total = 0;
        this.nbrRows=10;
        this.totalS = 0;
        this.nbrRowsS=10;
        this.selectedAccessory=null;
        this.lastSearchBy ="";
        $("[DATI-ID=pagination_AccessoryList]").attr("DATI-NBR-ROW",this.nbrRows);
        this.filterBy={
            "Name" : 1,
            "Provider" : 2,
            "Reference" : 3,
            "WareHouse" : 4,
        };
        $(document).on('change','[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_filter_by]',function(){
            var filterSelected = $(this).val();
            console.log(filterSelected);

            switch (filterSelected) {
                case "1" :
                    iAccessory.GET_ALL_ACCESSORIES2();
                    $("[DATI-ID=searchBarListAccessory] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarListAccessory] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_search_byName]").css("display","inline-block");
                    break;
                case "2" :
                    iAccessory.GET_ALL_ACCESSORIES2();
                    $("[DATI-ID=searchBarListAccessory] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarListAccessory] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_search_byProvider]").css("display","inline-block");
                    break;
                case "3" :
                    iAccessory.GET_ALL_ACCESSORIES2();
                    $("[DATI-ID=searchBarListAccessory] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarListAccessory] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_search_byReference]").css("display","inline-block");
                    break;

                case "4" :
                    iAccessory.GET_ALL_ACCESSORIES2();
                    $("[DATI-ID=searchBarListAccessory] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarListAccessory] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_search_byWareHouse]").css("display","inline-block");
                    break;
                   /* case "4" :
                    iAccessory.GET_ALL_ACCESSORIES2();
                    $("[DATI-ID=searchBarListAccessory] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarListAccessory] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_search_byStock]").css("display","inline-block");
                    break;*/

       /*         case "5" :
                    iAccessory.GET_ALL_ACCESSORIES2();
                    $("[DATI-ID=searchBarListAccessory] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarListAccessory] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_search_byStatusStock]").css("display","inline-block");
                    break;*/

            }
        });


    }

    DATALIST(data){
        this.accessories = data;
        console.log( this.accessories," this.accessories");
        try{
            this.total = data[0].count1;
            this.nbrRows = data[0].quantity1;
        }catch (e) {
            this.total = 0;
            this.nbrRows = 0;
        }
    }


    GET_STATUS(attribute){
        if (attribute != null && attribute != "null"){
            if (attribute >0) {
                return '<div style="text-align: center;color: rgb(159,213,168);background-color: rgb(232,245,237);border-radius: 20px;padding: 8px;font-size: 13px">In stock</div>';
            } else {
                return '<div style="text-align: center;color: rgb(215,92,84);background-color: rgb(247,240,241);border-radius: 20px;padding: 8px;font-size: 13px">Out of stock</div>';
            }
        }else {
            return "- -"
        }
    }

    GET_HTML_Edit(id){
        if(id != null && id != 'null' && id != ''){
            return '<img src="/assets/img/ui/edit_button.png"  title="Edit" style="cursor: pointer;padding: 5px;width: 20px;" DATI-TD-STYLE="text-align:center" DATI-LINK="EditAccessory"  DATI-PATH="Front Office &nbsp&nbsp&nbsp > &nbsp&nbsp&nbsp Guests &nbsp&nbsp&nbsp > &nbsp&nbsp&nbsp Edit Form" onclick="accessoryList_ui.setSelected(this)"/>';
        }else{
            return "";
        }

    }
    GET_HTML_Delete(id){
        if(id != null && id != 'null' && id != ''){
            return '<img src="/assets/img/ui/delete_button.png" title="Delete" style="cursor: pointer;padding: 5px;width: 20px;" DATI-TD-STYLE="text-align:right" onclick="accessoryList_ui.DELETE(this)"/>';
        }else{
            return "";
        }
    }
    GET_HTML_Plus(id){
        if(id != null && id != 'null' && id != ''){
            return '<i title="Details" style="cursor: pointer;padding: 5px;width: 20px;" DATI-TD-STYLE="text-align:right" DATI-LINK="detailsAccessory" onclick="accessoryList_ui.setSelected(this)" class="fas fa-ellipsis-v fa-lg"></i>';
        }else{
            return "";
        }
    }
    TOGGEL_ALERTE(){
        $("[DATI-PAGE=Accessories]").find("[dati-id=AccessoryDeleteAlerte]").find("[class=overlay_restau]").css("display", "block");
    }

    CANCEL_ALERTE(){
        $("[DATI-PAGE=Accessories]").find("[dati-id=AccessoryDeleteAlerte]").find("[class=overlay_restau]").css("display", "none");
    }

    VALIDATE_ALERTE(){
        var id_accessory = this.selectedAccessory.id;

        iAccessory.DELETE_ACCESSORY(id_accessory);

    }

    DELETE_NAME(){
        var name = this.selectedAccessory.name;
        $("[DATI-ID=delete-item-name]").html("Are you sure to delete accessory "+name);
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



    setSelected(iconDetail){
        var i = $(iconDetail).parent().parent().attr("DATI-ROW");
        this.selectedAccessory = this.accessories[i];
    }
    fillPageEdit() {
        console.log(this.selectedAccessory,"this.selectedAccessory");
        try {
            $("[DATI-PAGE=EditAccessory]").find("[ID=selectArticleProviderEdit]").find("select").val(this.selectedAccessory.Provider.id);
        } catch (e) {
            $("[DATI-PAGE=EditAccessory]").find("[ID=selectArticleProviderEdit]").find("select").val('');
        }
        try {
            $("[DATI-PAGE=EditAccessory]").find("[ID=inputReferenceEdit]").find("input").val(this.selectedAccessory.reference);
        } catch (e) {
            $("[DATI-PAGE=EditAccessory]").find("[ID=inputReferenceEdit]").find("input").val('');
        }
        try {
            $("[DATI-PAGE=EditAccessory]").find("[ID=inputArticleNameEdit]").find("input").val(this.selectedAccessory.name);
        } catch (e) {
            $("[DATI-PAGE=EditAccessory]").find("[ID=inputArticleNameEdit]").find("input").val('');
        }
        try {
            $("[DATI-PAGE=EditAccessory]").find("[ID=inputArticleQuantityEdit]").find("input").val(this.selectedAccessory.quantity);
        } catch (e) {
            $("[DATI-PAGE=EditAccessory]").find("[ID=inputArticleQuantityEdit]").find("input").val('');
        }
        try {
            $("[DATI-PAGE=EditAccessory]").find("[ID=inputArticleBuyingPriceHtEdit]").find("input").val(this.selectedAccessory.price_ht);
        } catch (e) {
            $("[DATI-PAGE=EditAccessory]").find("[ID=inputArticleBuyingPriceHtEdit]").find("input").val('');
        }
        try {
            $("[DATI-PAGE=EditAccessory]").find("[ID=inputArticleTVAEdit]").find("input").val(this.selectedAccessory.tva);
        } catch (e) {
            $("[DATI-PAGE=EditAccessory]").find("[ID=inputArticleTVAEdit]").find("input").val('');
        }
        try {
            $("[DATI-PAGE=EditAccessory]").find("[ID=inputArticlewarehouseEdit]").find("input").val(this.selectedAccessory.warehouse);
        } catch (e) {
            $("[DATI-PAGE=EditAccessory]").find("[ID=inputArticlewarehouseEdit]").find("input").val('');
        }
        try {
            $("[DATI-PAGE=EditAccessory]").find("[ID=inputArticleDescriptionEdit]").val(this.selectedAccessory.descrip);
        } catch (e) {
            $("[DATI-PAGE=EditAccessory]").find("[ID=inputArticleDescriptionEdit]").val('');
        }
    }
}

let accessoryList_ui = new Ui_listAccessory();