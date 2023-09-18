class Ui_AddSimCards {
    constructor() {
        this.EVENT_UI();
        this.operators =[];
        this.offres =[];

    }

    LIST_OPERATORS(data){
        this.operators = data;
        console.log(this.operators,"operators");
    }

    SET_BULK(){
        $("[NUM_ICCID_BULK]").css("display","flex");
        $("[DATI-ID=uploadcsvSimCards]").css("display","none");
        $("[exemple-sim-csv]").css("display","none");
        $("[TABLE-CSV=sim_cards]").css("display","none");
        $("[TABLE-CSV=sim_cards]").html("");
    }
    LIST_OFFRES(data){
        this.offres = data;
        console.log(this.offres,"offres");
    }

    showUploadCsv(){
        $("[NUM_ICCID_BULK]").css("display","none");
        $("[DATI-ID=uploadcsvSimCards]").css("display","flex");
        $("[exemple-sim-csv]").css("display","flex");
        $("[TABLE-CSV=sim_cardss]").css("display","flex");
    }

    CHECK_NUM_ICCID_NUMBER(num_sim,iccid){
        var sim_numbers = num_sim.split("\n");
        var iccids = iccid.split("\n");
        var infoSims = [];

        var filtered_sim_numbers = sim_numbers.filter(function (el) {
            return el != "";
        });
        var filtered_iccids = iccids.filter(function (el) {
            return el != "";
        });

        if (filtered_sim_numbers.length == filtered_iccids.length){
            for (var i=0;i<filtered_sim_numbers.length;i++){
                filtered_sim_numbers[i]=filtered_sim_numbers[i].replace(/ /g,'');
            }
            for (var j=0;j<filtered_iccids.length;j++){
                filtered_iccids[j]=filtered_iccids[j].replace(/ /g,'');
            }

            for (var b = 0;b<sim_numbers.length;b++){
                infoSims.push([filtered_sim_numbers[b],filtered_iccids[b]]);
            }
            return infoSims;

        }else {
            alert("sim numbers and iccids not much");
        }
    }
    RESET_FORM_ADD(){

        $("[id=inputSimCardOperator]").find("select").val("");
        $("[id=inputSimCardOffre]").find("select").val("");
        $("[SIM_NUMBER_BULK]").val("");
        $("[ICCID_BULK]").val("");
        $("[table-csv=sim_cards]").css("display","none");
    }
    Submit_form_add(){
        var sim_num = $("[SIM_NUMBER_BULK]").val();
        var iccids = $("[ICCID_BULK]").val();
        var sims = this.CHECK_NUM_ICCID_NUMBER(sim_num,iccids);
        var offre_id = $("[id=inputSimCardOffre]").find("select").val();
        var operator_od = $("[id=inputSimCardOperator]").find("select").val();

        if (sims.length==0){
            if (csvUploader_ui.csvData.length==0){
                alert("parametre not receive");
            }else {
                iSimCard.ADD_SIM_CARDS(csvUploader_ui.csvData,offre_id,operator_od);
            }

        }else {
            console.log(sims,"333333333");
            console.log(csvUploader_ui.csvData,"44444444");
            iSimCard.ADD_SIM_CARDS(sims,offre_id,operator_od);
        }





    }
    EVENT_UI(){

    }
}

let addSimCard_ui = new Ui_AddSimCards();