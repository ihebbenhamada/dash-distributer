<div DATI-PAGE="OfferOperator" dati-display="inline-block" style="display:none" class="container_mark_dati">


    <div class="detail-container-mark">
        <dati-input class="dati-input-container" ID="inputOffreOperatorOffre" UPDATE="showInputOffreOperator" LABEL="Offre Name"></dati-input>
        <dati-select class="dati-select-container" ID="selectOffreOperatorName"  UPDATE="showInputOffreOperator" LABEL="Operator" LIST="offreOperator_ui.operator" OPTION="name"></dati-select>
        <dati-select class="dati-select-container" ID="inputOffreOperatorTypeofOffer"  UPDATE="showInputOffreOperator" LABEL="Type of offer" LIST="offreOperator_ui.typeOffre" OPTION="name"></dati-select>
        <dati-input class="dati-input-container" ID="inputOffreOperatorCommunication" UPDATE="showInputOffreOperator" LABEL="Communication"></dati-input>
        <dati-input class="dati-input-container" ID="inputOffreOperatorData" UPDATE="showInputOffreOperator" LABEL="Data"></dati-input>
        <dati-input class="dati-input-container" ID="inputOffreOperatorOtherOptions" UPDATE="showInputOffreOperator" LABEL="Other options"></dati-input>
        <dati-input class="dati-input-container" ID="inputOffreOperatorPriceHt" UPDATE="showInputOffreOperator" LABEL="Price HT"></dati-input>
        <dati-input class="dati-input-container" ID="inputOffreOperatorTVA" UPDATE="showInputOffreOperator" LABEL="TVA"></dati-input>
        <dati-input class="dati-input-container" ID="inputOffreOperatorDiscount" UPDATE="showInputOffreOperator" LABEL="Discount"></dati-input>

        <div class="submit" onclick="offreOperator_ui.Submit_form_add()">
            Validate
        </div>
    </div>

    <div class="image-container-mark">
        <dati-image-uploader  class="imageUploader" ID="uploadIamgeOffreOperator" UPDATE="showInputOffreOperator"></dati-image-uploader>

    </div>

</div>

