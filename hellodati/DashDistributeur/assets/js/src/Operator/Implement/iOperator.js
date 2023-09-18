class i_Operator{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }
    ADD_OPERATOR(country_id,name,logo,reg_number,address,city,postal_code,manager_name,manager_email,post){
        var data = {
            country_id:country_id,
            name:name,
            logo:logo,
            reg_number:reg_number,
            address:address,
            city:city,
            postal_code:postal_code,
            manager_name:manager_name,
            manager_email:manager_email,
            post:post,
        };
        SSAPI.SUBMIT({
            uri:"/Operator/add",
            onsuccess:"addOperatorSuccess",
            onerror:"addOperator_error",
            data:data
        });

        console.log(data,'daataa add Operator');


    }
    GET_COUNTRY(){
        SSAPI.SUBMIT({
            uri:"/Country/getAll",
            onsuccess:"countryReceive",
            onerror:"countryReceive_error",
        });
    }
    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;
            if(page == "AddOperator"){
                var event = new CustomEvent("SHOWInputOperator");
                document.dispatchEvent(event);
                IOPERATOR.GET_COUNTRY()
            }

        }, false);



    }


    EVENTS_SSAPI(){
        document.addEventListener("countryReceive", function(e){
            Operator_ui.DATALISTCOUNTRY(e.detail);
        }, false);
        document.addEventListener("addOperatorSuccess", function(e){
            addProvider_ui.SHOW_POPUP_SUCCESS("Add Operator With Success!");
        }, false);
        document.addEventListener("addOperator_error", function(e){
            addProvider_ui.SHOW_POPUP_ERROR("Operator Add  Failed!");
        }, false);
}
}

let IOPERATOR= new  i_Operator();