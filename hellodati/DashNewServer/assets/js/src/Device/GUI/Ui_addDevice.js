let Ui_addDevice = class {
    constructor() {
        this.EVENT_UI();
    }


    VERIF_FORM_ADD_DEVICE(element){

        var imei =$(element).find("[DATI-INPUT-NAME=imei_add_device]").val();
        var callTime =$(element).find("[DATI-INPUT-NAME=call_time_add_device]").val();
        var call_limit =$(element).find("[DATI-INPUT-NAME=call_limit_add_device]").val();
        var sim_number =$(element).find("[DATI-INPUT-NAME=sim_number_add_device]").val();
        var description= $(element).find("[DATI-INPUT-NAME=phone_description_add_device]").val();
        var status = $(element).find("[DATI-INPUT-NAME=status_add_device]").children("option:selected").val();
        if(imei==""){
            alert("imei is required");
        }else if(callTime===""){
            alert("call time required");
        }else if(call_limit===""){
            alert("call limit is required");
        }else if(sim_number===""){
            alert("Sim is required");
        }else {

            alert('Add Device success');
            $(element).find("[DATI-INPUT-NAME=imei_add_device]").val();
            $(element).find("[DATI-INPUT-NAME=call_time_add_device]").val();
            $(element).find("[DATI-INPUT-NAME=call_limit_add_device]").val();
            $(element).find("[DATI-INPUT-NAME=sim_number_add_device]").val();
            $(element).find("[DATI-INPUT-NAME=phone_description_add_device]").val();
            $(element).find("[DATI-INPUT-NAME=status_add_device]").children("option:selected").val();

        }
    }
    EVENT_UI(){
    }
};

let dati_add_device= new Ui_addDevice();
