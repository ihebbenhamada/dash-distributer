class Ui_editAccessory {
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI()
        this.provider=null;

    }

    DATALISTPROVIDER(data) {
        this.provider = data.res;
        console.log( this.provider,"selectArticleProviderEdit");
        dati_select.UPDATE("selectArticleProviderEdit");
    }


        Submit_form_edit(){
            var id = accessoryList_ui.selectedAccessory.id;
            var provider_id = $("[id=selectArticleProviderEdit]").find("select").val();
            var reference = $("[id=inputReferenceEdit]").find("input").val();
            var name = $("[id=inputArticleNameEdit]").find("input").val();
            var image = $("[id=inputArticleNameEdit]").find("input").val();
            var descrip = $("[id=inputArticleDescriptionEdit]").val();
            var quantity = $("[id=inputArticleQuantityEdit]").find("input").val();
            var price_ht = $("[id=inputArticleBuyingPriceHtEdit]").find("input").val();
            var tva = $("[id=inputArticleTVAEdit]").find("input").val();
            var warehouse = $("[id=inputArticlewarehouseEdit]").find("input").val();

        IAddAccessory.EDIT_ARTICLE(id,provider_id,reference,name,image,descrip,quantity,price_ht,tva,warehouse);



    }

    EVENTS_UI(){
    }

    EVENTS_SSAPI(){
    }

}
let editAccessory_ui = new Ui_editAccessory();