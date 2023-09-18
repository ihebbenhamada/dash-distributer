<div DATI-PAGE="AddSims" dati-display="inline-block" style="display:none" class="container_hotel_dati">

    <div style="width: 100%;display: inline-block">
    <div style="display: inline-block;width: 45%;float: right">

        <div class="textArea_header" style="border: 1px solid #ffffff">
            <div style="cursor: pointer;" onclick="addSimCard_ui.SET_BULK()">
                ADD SIM NUMBER AND ICCID
            </div>
            <div>
                OR
            </div>
            <div onclick="addSimCard_ui.showUploadCsv()" style="padding: 5px;background-color: var(--header-color);color: #ffffff;border-radius: 5px;cursor: pointer">
                Upload CSV file
            </div>

        </div>
        <div NUM_ICCID_BULK style="display: flex;align-items: center;justify-content: space-between;width: 100%;">
            <textarea SIM_NUMBER_BULK class="imei_serial_textArea" placeholder="Sim Number"></textarea>
            <textarea ICCID_BULK class="imei_serial_textArea" placeholder="ICCID"></textarea>
        </div>

        <a exemple-sim-csv href="/assets/img/sim_card_example.csv" download style="display: none;margin-top: 20px;margin-bottom: 20px;text-decoration: none;justify-content: left;align-items: center;color: black;">

            <div style="margin-right: 10px">Download CSV example</div>
            <i class="fa fa-download" aria-hidden="true"></i>

        </a>

        <div class="imageUploader"
             DATI-COMPOSENT="CsvUploader"
             DATI-ID="uploadcsvSimCards"
             DATI-UPDATE="AddBarForm"
             TABLE-HTML="sim_cards"
             DATI-VAR-URL="barCard_ui.imgTransUploaded"
             style="    width: 100%;
    display: none;
    position: relative;
    height: inherit;
    margin: 0;"
        >


        </div>
        <div TABLE-CSV="sim_cards" style="width: 100%">
        </div>


    </div>
    <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;width: 45%;float: left">
        <dati-select class="dati-select-container" ID="inputSimCardOperator" UPDATE="showInputSimCards"
                     LABEL="Operator" LIST="addSimCard_ui.operators" OPTION="name"></dati-select>

        <dati-select class="dati-select-container" ID="inputSimCardOffre" UPDATE="showInputSimCards"
                     LABEL="Offre" LIST="addSimCard_ui.offres" OPTION="name"></dati-select>


    </div>
    </div>
    <div style="width: 100%;display: flex;justify-content: center;align-items: center">
    <div onclick="addSimCard_ui.Submit_form_add()" class="btn_validate" style="margin-top: 10px;width: 35%">
        Validate
    </div>

    </div>
</div>

