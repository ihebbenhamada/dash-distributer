class Ui_AddDevice {
    constructor() {
        this.EVENT_UI();
        this.colors =[];
        this.models =[];
        this.brands =[];

    }

    LIST_COLORS(data){
        this.colors = data;
        console.log(this.colors,"colors");
    }

    FILL_SELECT_MODEL(data){
        this.models = data;
        console.log(this.models,"models");
    }

    LIST_BRANDS(data){
        this.brands = data;
        console.log(this.brands,"brands");
    }
    SET_BULK(){
        $("[IMEI_SERIAL_BULK]").css("display","flex");
        $("[DATI-ID=uploadcsvDevices]").css("display","none");
        $("[exemple-csv]").css("display","none");
        $("[TABLE-CSV=devices]").css("display","none");
        $("[TABLE-CSV=devices]").html("");
    }
    showUploadCsv(){
        $("[IMEI_SERIAL_BULK]").css("display","none");
        $("[DATI-ID=uploadcsvDevices]").css("display","flex");
        $("[exemple-csv]").css("display","flex");
        $("[TABLE-CSV=devices]").css("display","flex");
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

    RESET_FORM_ADD_DEVICE(){
        $("[id=inputDeviceProvider]").find("input").val("");
        $("[id=inputDevicePrice]").find("input").val("");
        $("[id=inputDeviceModel]").find("select").val("");
        $("[id=inputDeviceColor]").find("select").val("");
        $("[id=inputDeviceBrand]").find("select").val("");
        $("[imei_bulk]").val("");
        $("[serial_number_bulk]").val("");
        $("[table-csv=devices]").css("display","none");
    }
    Submit_form_add(){
        var imei = $("[IMEI_BULK]").val();
        var serial_number = $("[SERIAL_NUMBER_BULK]").val();
        var infoDevice = this.CHECK_IMEI_SERIAL_NUMBER(imei,serial_number);
        var provider = $("[id=inputDeviceProvider]").find("input").val();
        var price = $("[id=inputDevicePrice]").find("input").val();
        var model_id = $("[id=inputDeviceModel]").find("select").val();
        var color_id = $("[id=inputDeviceColor]").find("select").val();




        if (infoDevice.length==0){
            if (csvUploader_ui.csvData.length==0){
                alert("parametre not receive");
            }else {
                iDevice.ADD_DEVICE(csvUploader_ui.csvData,provider,price,model_id,color_id);
            }

        }else {
            console.log(infoDevice,"333333333");
            console.log(csvUploader_ui.csvData,"44444444");
            iDevice.ADD_DEVICE(infoDevice,provider,price,model_id,color_id);
        }





    }
    EVENT_UI(){
        $(document).on('change','[id=inputDeviceBrand] select',function(){
            var brand = $(this).val();
            console.log(brand,"khelloooo");
            iDevice.GET_MODELS(brand);
        });
    }
}

let addDevice_ui = new Ui_AddDevice();