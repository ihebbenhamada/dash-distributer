<div DATI-PAGE="AddOperator" dati-display="inline-block" style="display:none" class="container_mark_dati">

    <div style="width: 100%;display: inline-block">
    <div class="detail-container-mark">
        <dati-input class="dati-input-container" ID="inputOperatorName" UPDATE="SHOWInputOperator" LABEL="Name"></dati-input>
        <dati-input class="dati-input-container" ID="inputOperatorNumberTaxRegistration" UPDATE="SHOWInputOperator" LABEL="Tax registration number"></dati-input>
        <dati-input class="dati-input-container" ID="inputOperatorAdresse" UPDATE="SHOWInputOperator" LABEL="Adresse"></dati-input>
        <div style="width: 96%;
    display: flex;
    justify-content: space-between;
    margin: 2%;">
            <dati-input class="dati-input-container" ID="inputOperatorCity"  UPDATE="SHOWInputOperator" LABEL="City" style="margin: 0px"></dati-input>
            <dati-input class="dati-input-container" ID="inputOperatorZIP"  UPDATE="SHOWInputOperator" LABEL="ZIP" style="margin: 0px"></dati-input>
            <dati-select class="dati-select-container" ID="inputOperatorCountry"  UPDATE="SHOWInputOperator" LABEL="Country" LIST="Operator_ui.country" OPTION="name"  style="margin: 0px; box-sizing: content-box;"></dati-select>
        </div>

        <dati-input class="dati-input-container" ID="inputOperatorManagerName" UPDATE="SHOWInputOperator" LABEL="Manager name"></dati-input>
        <dati-input class="dati-input-container" ID="inputOperatorManagerEmail" UPDATE="SHOWInputOperator" LABEL="Manager email"></dati-input>
        <dati-input class="dati-input-container" ID="inputOperatorPost" UPDATE="SHOWInputOperator" LABEL="Post"></dati-input>



    </div>

    <div class="image-container-mark">
        <dati-image-uploader  class="imageUploader" ID="uploadIamgeOperator" UPDATE="SHOWInputOperator"></dati-image-uploader>

    </div>
    </div>
    <div style="width: 100%;display: flex;justify-content: center;align-items: center">
    <div  onclick="Operator_ui.Submit_form_add()" class="btn_validate" style="margin-top: 10px;width: 35%">
        Validate
    </div>
    </div>
</div>

