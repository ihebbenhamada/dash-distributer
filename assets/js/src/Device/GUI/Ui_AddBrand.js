class Ui_AddBrand {
    constructor() {
        this.EVENT_UI();

    }

    FILL_SELECT_BRAND(data){
        $("[dati-page=AddMark]").find("[select_existant_brand]").html("");
        var options = "<option value='-1'>Select existant Brand</option>";
        for (var i = 0; i < data.length; i++) {
            console.log(data[i],"7liliiiii");
            options =  options + '<option value="' + data[i].id + '">'+data[i].name+'</option>';
        }
        $("[dati-page=AddMark]").find("[select_existant_brand]").append(options);
    }

    FILL_SELECT_MODEL(data){
        $("[dati-page=AddMark]").find("[select_existant_model]").html("");
        var options = "<option value='-1'>Select existant Model</option>";
        for (var i = 0; i < data.length; i++) {
            console.log(data[i],"7liliiiii");
            options =  options + '<option value="' + data[i].id + '">'+data[i].name+'</option>';
        }
        $("[dati-page=AddMark]").find("[select_existant_model]").append(options);
    }
    Submit_form_add(){

        var colors =[];
        var brand = $("[dati-page=AddMark]").find("[id=inputMark]").find("input").val();
        var existant_brand = $("[dati-page=AddMark]").find("[select_existant_brand]").val();
        var existant_model = $("[dati-page=AddMark]").find("[select_existant_model]").val();
        var model = $("[dati-page=AddMark]").find("[id=inputModelMark]").find("input").val();
        var color = $("[dati-page=AddMark]").find("[id=inputColorMark]").find("input").val();
        colors.push(color);

        console.log(colors,"maamamammmamam");

        if(existant_brand == "-1"){
            var b = brand;
        }else {
            var b = existant_brand;
        }

        if(existant_model == "-1"){
            var m = model;
        }else {
            var m = existant_model;
        }


        iBrand.ADD_BRAND(b,m,colors);

    }
    EVENT_UI(){
       /* $(document).on('change','[select_existant_brand]',function(){
            var brand = $(this).val();
            console.log(brand,"khelloooo");
            iDevice.GET_MODELS(brand);
        });*/
    }
}

let addBrand_ui = new Ui_AddBrand();