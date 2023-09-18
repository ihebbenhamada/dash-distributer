let Ui_demandeList = class {
    constructor() {
        this.total = 0;
        this.selectedDemande=null;
    }

    DATALIST(data){
        this.demandes = data.list;

    }


    fillPageDetail(){
        $("[DATI-ID=room_number]").html(this.selectedDemande.room_number);
        $("[DATI-ID=type]").html(this.selectedDemande.type);
        $("[DATI-ID=status]").html(this.selectedDemande.status);
        $("[DATI-ID=comment]").html(this.selectedDemande.comment);
        $("[DATI-ID=date]").html(this.selectedDemande.date);
    }



    setSelected(iconDetail){
        var i = $(iconDetail).parent().parent().attr("DATI-ROW");
        this.selectedDemande = this.demandes[i];

    }


};

let demandeList_ui = new Ui_demandeList();