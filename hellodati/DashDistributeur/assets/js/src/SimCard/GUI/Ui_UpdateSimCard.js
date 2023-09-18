class Ui_UpdateSimCard {
    constructor() {
        this.EVENT_UI();
        this.operators = [];
        this.offres = [];

    }

    LIST_OPERATORS(data) {
        this.operators = data;
        console.log(this.operators, "operators");
        dati_select.UPDATE("inputOperatorUpdateSimCard");
    }

    LIST_OFFRES(data) {
        this.offres = data;
        console.log(this.offres, "offres");
        dati_select.UPDATE("inputOffreUpdateSimCard")
    }

    Submit_form_update() {
        var simnumber = $("[id=inputUpdateNumberSimCard]").find("input").val();
        var iccid = $("[id=inputUpdateICCID]").find("input").val();
        var operator = $("[id=inputOperatorUpdateSimCard]").find("select").val();
        var offre = $("[id=inputOffreUpdateSimCard]").find("select").val();


        console.log(simCardList_ui.selectedSimCard.id, simnumber, iccid, operator, offre);

        iSimCard.EDIT_SIM(simCardList_ui.selectedSimCard.id, simnumber, iccid, operator, offre);


    }

    EVENT_UI() {

    }
}

let updateSimCard_ui = new Ui_UpdateSimCard();