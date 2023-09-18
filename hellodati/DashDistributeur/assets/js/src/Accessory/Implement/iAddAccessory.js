class i_AddAccessory{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }
    ADD_ARTICLE(provider_id,reference,name,image,descrip,quantity,price_ht,tva,warehouse){
        var data = {
            provider_id:provider_id,
            reference:reference,
            name:name,
            image:image,
            descrip:descrip,
            quantity:quantity,
            price_ht:price_ht,
            tva:tva,
            warehouse:warehouse,

        };
        SSAPI.SUBMIT({
            uri:"/Accessory/add",
            onsuccess:"addAccessorySuccess",
            onerror:"addAccessory_error",
            data:data
        });

        console.log(data,'daataa add Accessory');


    }
    EDIT_ARTICLE(id,provider_id,reference,name,image,descrip,quantity,price_ht,tva,warehouse){
        var data = {
            id:id,
            provider_id:provider_id,
            reference:reference,
            name:name,
            image:image,
            descrip:descrip,
            quantity:quantity,
            price_ht:price_ht,
            tva:tva,
            warehouse:warehouse,

        };
        SSAPI.SUBMIT({
            uri:"/Accessory/update",
            onsuccess:"AccessoryEditSuccess",
            onerror:"AccessoryEditSuccess_error",
            data:data
        });

        console.log(data,'daataa edit Accessory');


    }
    GET_PROVIDER(){
        SSAPI.SUBMIT({
            uri:"/Provider/getAll",
            onsuccess:"providerReceive",
            onerror:"providerReceive_error",
        });
    }

    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;
            if(page == "AddArticles" ){
                var event = new CustomEvent("showInputArticle");
                document.dispatchEvent(event);
                IAddAccessory.GET_PROVIDER();
            }
            if(page == "EditAccessory" ){
                IAddAccessory.GET_PROVIDER();

            }
        }, false);



    }


    EVENTS_SSAPI(){
        document.addEventListener("providerReceive", function(e){
            addAccessory_ui.DATALISTPROVIDER(e.detail);
            editAccessory_ui.DATALISTPROVIDER(e.detail);
        }, false);
        document.addEventListener("addAccessorySuccess", function(e){
            addProvider_ui.SHOW_POPUP_SUCCESS("Add Article With Success!");
            $("[id=inputArticleDescription]").val("");
        }, false);
        document.addEventListener("addAccessory_error", function(e){
            addProvider_ui.SHOW_POPUP_ERROR("Article Add  Failed!");
        }, false);
        document.addEventListener("AccessoryEditSuccess", function(e){
            addProvider_ui.SHOW_POPUP_SUCCESS("Edit Article With Success!");
            $("[id=inputArticleDescriptionEdit]").val("");
        }, false);
        document.addEventListener("AccessoryEditSuccess_error", function(e){
            addProvider_ui.SHOW_POPUP_ERROR("Article Edit  Failed!");
        }, false);
    }
}

let IAddAccessory= new  i_AddAccessory();