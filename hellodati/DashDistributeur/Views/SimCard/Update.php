<div DATI-PAGE="EditSimCard" dati-display="inline-block" style="display:none" class="container_hotel_dati">

    <div style="width: 100%;display: inline-block">
        <div style="display: inline-block;width: 45%;float: right">

            <div class="textArea_header">
                <div>
                    UPDATE SIM NUMBER AND ICCID
                </div>
            </div>
            <div style="display: flex;align-items: center;justify-content: space-between;width: 100%;">
                <dati-input class="dati-input-container" ID="inputUpdateNumberSimCard" UPDATE="showInputUpdateSimCards"
                            LABEL="Sim Number" style="margin: 0"></dati-input>
                <dati-input class="dati-input-container" ID="inputUpdateICCID" UPDATE="showInputUpdateSimCards"
                            LABEL="ICCID" style="margin: 0"></dati-input>
            </div>

        </div>

        <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;width: 45%;float: left">

            <dati-select class="dati-select-container" ID="inputOperatorUpdateSimCard" UPDATE="showInputUpdateSimCards"
                         LABEL="Operator" LIST="updateSimCard_ui.operators" OPTION="name"></dati-select>
            <dati-select class="dati-select-container" ID="inputOffreUpdateSimCard" UPDATE="showInputUpdateSimCards"
                         LABEL="Offre" LIST="updateSimCard_ui.offres" OPTION="name"></dati-select>

        </div>
    </div>
    <div style="width: 100%;display: flex;justify-content: center;align-items: center">
        <div onclick="updateSimCard_ui.Submit_form_update()" class="btn_validate" style="margin-top: 10px;width: 35%">
            UPDATE
        </div>
    </div>


</div>

