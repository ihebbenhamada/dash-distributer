class Ui_listOffre {
    constructor() {
        this.total = 0;
        this.nbrRows=10;
        this.totalS = 0;
        this.nbrRowsS=10;
        this.selectedOffre=null;
        this.lastSearchBy ="";
        $("[DATI-ID=pagination_OffreList]").attr("DATI-NBR-ROW",this.nbrRows);
        this.filterBy={
            "Name" : 1,
            "Price" : 2,
            "Hotel" : 3,
            "Equiped Room" : 4,
            "Status" : 5,
        };
        $(document).on('change','[DATI-ID=searchBarListOffre] [DATI-ID=listOffre_filter_by]',function(){
            var filterSelected = $(this).val();
            console.log(filterSelected);

            switch (filterSelected) {
                case "1" :
                    iOffre.GET_ALL_OFFRES2();
                    $("[DATI-ID=searchBarListOffre] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarListOffre] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListOffre] [DATI-ID=listOffre_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListOffre] [DATI-ID=listOffre_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarListOffre] [DATI-ID=listOffre_search_byName]").css("display","inline-block");
                    break;
                case "2" :
                    iOffre.GET_ALL_OFFRES2();
                    $("[DATI-ID=searchBarListOffre] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarListOffre] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListOffre] [DATI-ID=listOffre_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListOffre] [DATI-ID=listOffre_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarListOffre] [DATI-ID=listOffre_search_byPrice]").css("display","inline-block");
                    break;
                case "3" :
                    iOffre.GET_ALL_OFFRES2();
                    $("[DATI-ID=searchBarListOffre] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarListOffre] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListOffre] [DATI-ID=listOffre_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListOffre] [DATI-ID=listOffre_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarListOffre] [DATI-ID=listOffre_search_byHotel]").css("display","inline-block");
                    break;

                case "4" :
                    iOffre.GET_ALL_OFFRES2();
                    $("[DATI-ID=searchBarListOffre] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarListOffre] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListOffre] [DATI-ID=listOffre_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListOffre] [DATI-ID=listOffre_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarListOffre] [DATI-ID=listOffre_search_byEquipedRoom]").css("display","inline-block");
                    break;

                case "5" :
                    iOffre.GET_ALL_OFFRES2();
                    $("[DATI-ID=searchBarListOffre] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarListOffre] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListOffre] [DATI-ID=listOffre_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListOffre] [DATI-ID=listOffre_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarListOffre] [DATI-ID=listOffre_search_byStatus]").css("display","inline-block");
                    break;

            }
        });
    }
    DATALIST(data){
        this.offres = data;
    }
    GET_HTML_Edit(id){
        if(id != null && id != 'null' && id != ''){
            return '<img src="/assets/img/ui/edit_button.png"  title="Edit" style="cursor: pointer;padding: 5px;width: 20px;" DATI-TD-STYLE="text-align:center" DATI-LINK="EditOffre"  DATI-PATH="Front Office &nbsp&nbsp&nbsp > &nbsp&nbsp&nbsp Guests &nbsp&nbsp&nbsp > &nbsp&nbsp&nbsp Edit Form" onclick="offreList_ui.setSelected(this)"/>';
        }else{
            return "";
        }

    }
    GET_HTML_Delete(id){
        if(id != null && id != 'null' && id != ''){
            return '<img src="/assets/img/ui/delete_button.png" title="Delete" style="cursor: pointer;padding: 5px;width: 20px;" DATI-TD-STYLE="text-align:right" onclick="offreList_ui.DELETE(this)"/>';
        }else{
            return "";
        }
    }
    GET_HTML_Plus(id){
        if(id != null && id != 'null' && id != ''){
            return '<i title="Details" style="cursor: pointer;padding: 5px;width: 20px;" DATI-TD-STYLE="text-align:right" DATI-LINK="detailsOffre" onclick="offreList_ui.setSelected(this)" class="fas fa-ellipsis-v fa-lg"></i>';
        }else{
            return "";
        }
    }
    TOGGEL_ALERTE(){
        $("[DATI-PAGE=Offers]").find("[dati-id=OffreDeleteAlerte]").find("[class=overlay_restau]").css("display", "block");
    }
    CANCEL_ALERTE(){
        $("[DATI-PAGE=Offers]").find("[dati-id=OffreDeleteAlerte]").find("[class=overlay_restau]").css("display", "none");
    }
    VALIDATE_ALERTE(){
        var id_offre = this.selectedOffre.id;
        iOffre.DELETE_OFFRE(id_offre);

    }
    DELETE_NAME(){
        var name = this.selectedOffre.name;
        $("[DATI-ID=delete-item-name]").html("Are you sure to delete offre "+name);
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

    }
    setSelected(iconDetail){
        var i = $(iconDetail).parent().parent().attr("DATI-ROW");
        this.selectedOffre = this.offres[i];
    }
}

let offreList_ui = new Ui_listOffre();