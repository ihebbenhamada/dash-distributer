class Ui_addAccessory {
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI()
        this.provider=null;

    }

    DATALISTPROVIDER(data) {
        this.provider = data.res;
        console.log(this.provider,"provider");
        dati_select.UPDATE("selectArticleProvider");
    }


        Submit_form_add(){
            var provider_id = $("[id=selectArticleProvider]").find("select").val();
            var reference = $("[id=inputReference]").find("input").val();
            var name = $("[id=inputArticleName]").find("input").val();
            var image = $("[id=inputArticleName]").find("input").val();
            var descrip = $("[id=inputArticleDescription]").val();
            var quantity = $("[id=inputArticleQuantity]").find("input").val();
            var price_ht = $("[id=inputArticleBuyingPriceHt]").find("input").val();
            var tva = $("[id=inputArticleTVA]").find("input").val();
            var warehouse = $("[id=inputArticlewarehouse]").find("input").val();

        IAddAccessory.ADD_ARTICLE(provider_id,reference,name,image,descrip,quantity,price_ht,tva,warehouse);



    }

    EVENTS_UI(){
    }

    EVENTS_SSAPI(){
    }

}
let addAccessory_ui = new Ui_addAccessory();