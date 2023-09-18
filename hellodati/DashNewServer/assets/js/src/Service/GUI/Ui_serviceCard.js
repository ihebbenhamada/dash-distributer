let Ui_serviceCard = class {
    constructor() {
        this.cards=[];
        this.contact=null;
        this.selectedService=null;
        this.selectedServiceId=null;
    }

    DATALIST(data){
        this.cards = data.res;
    }
    CONTACTLIST(data){
        this.contact = data.res;

    }


    FIN_BY_ID_IN_LIST(list,id){
        for(var i=0; i < list.length; i++){
            if(list[i].id == id){
                return list[i];
            }
        }
    }

    getPosition(list, id) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].id == id) {
                return i;
            }
        }
        return -1;
    }

    TOGGEL_Edit(){
        $("[DATI-PAGE=Services]").find("[dati-id=editS]").find("[class=overlay_Edit]").css("display", "block");
    }
    CLOSE_EDIT(){
        $("[DATI-PAGE=Services]").find("[dati-id=editS]").find("[class=overlay_Edit]").css("display", "none");
    }

    SETSELECTED_detail(rest_element){
        var id = $(rest_element).parent().parent().attr("DATI-id");
        var listSearch = eval($(rest_element).parent().parent().parent().attr("DATI-LIST"))
        this.selectedService = this.FIN_BY_ID_IN_LIST(listSearch,id);
        this.READ_TITLE_SERCVICE();
    }
    SETSELECTED_SER(rest_element){
        var id = $(rest_element).attr("DATI-id");
        this.selectedServiceId=id;
    }
    Edit(rest_element){
        this.SETSELECTED_detail(rest_element);
        this.TOGGEL_Edit();
    }

    READ_TITLE_SERCVICE(){
        $("[DATI-PAGE=Services]").find("[DATI-ID=val_title_SERVICE]").val(this.selectedService.title);

    }

};

let serviceCard_ui = new Ui_serviceCard();