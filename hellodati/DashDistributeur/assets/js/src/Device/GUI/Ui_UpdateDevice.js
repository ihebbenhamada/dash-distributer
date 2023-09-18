class Ui_UpdateDevice {
    constructor() {
        this.EVENT_UI();
        this.colors =[];
        this.models =[];
        this.brands =[];

    }

    LIST_COLORS(data){
        this.colors = data;
        console.log(this.colors,"colors");
        dati_select.UPDATE("inputDeviceUpdateColor");
    }

    FILL_SELECT_MODEL(data){
        this.models = data;
        console.log(this.models,"models");
    }

    LIST_BRANDS(data){
        this.brands = data;
        console.log(this.brands,"brands");
    }

    showUploadCsv(){
        $("[IMEI_SERIAL_BULK]").css("display","none");
        $("[DATI-ID=uploadcsvDevices]").css("display","flex");
    }

    CHECK_IMEI_SERIAL_NUMBER(imei_val,serial_val){
        var imeis = imei_val.split("\n");
        var serials = serial_val.split("\n");
        var infoDevice = [];

        var filtered_imeis = imeis.filter(function (el) {
            return el != "";
        });
        var filtered_serials = serials.filter(function (el) {
            return el != "";
        });

        if (filtered_imeis.length == filtered_serials.length){
            for (var i=0;i<filtered_imeis.length;i++){
                if (filtered_imeis[i].length==15){
                    filtered_imeis[i]=filtered_imeis[i].replace(/ /g,'');
                }else {
                    alert("IMEI not valid");
                }
            }
            for (var j=0;j<filtered_serials.length;j++){
                filtered_serials[j]=filtered_serials[j].replace(/ /g,'');
            }

            for (var b = 0;b<filtered_serials.length;b++){
                infoDevice.push([filtered_imeis[b],filtered_serials[b]]);
            }
            return infoDevice;

        }else {
            alert("IMEIs and serial numbers not much");
        }
    }
    Submit_form_update(){
        var imei = $("[id=inputUpdateImeiDevice]").find("input").val();
        var serial_number = $("[id=inputUpdateSerialNumberDevice]").find("input").val();
        var infoDevice = this.CHECK_IMEI_SERIAL_NUMBER(imei,serial_number);
        var provider = $("[id=inputDeviceUpdateProvider]").find("input").val();
        var price = $("[id=inputDeviceUpdatePrice]").find("input").val();
        var model_id = $("[id=inputDeviceUpdateModel]").find("select").val();
        var color_id = $("[id=inputDeviceUpdateColor]").find("select").val();

        console.log(deviceList_ui.selectedDevice.id,serial_number,provider,imei,price,model_id,color_id);

        iDevice.EDIT_DEVICE(deviceList_ui.selectedDevice.id,serial_number,imei,provider,price,model_id,color_id);



    }
    EVENT_UI(){
        $(document).on('change','[dati-select-list-brand]',function(){
            var brand = $(this).val();
            console.log(brand,"khelloooo");
            iDevice.GET_MODELS(brand);
        });
    }
}

let updateDevice_ui = new Ui_UpdateDevice();