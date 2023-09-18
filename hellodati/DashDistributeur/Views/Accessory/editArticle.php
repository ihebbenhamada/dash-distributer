<div DATI-PAGE="EditAccessory" dati-display="inline-block" style="display:none" class="container_mark_dati">

    <div style="width: 100%;display: inline-block">
    <div class="detail-container-mark">
        <dati-select class="dati-select-container" ID="selectArticleProviderEdit"  UPDATE="showInputArticleEdit" LABEL="Provider" LIST="editAccessory_ui.provider" OPTION="name"  ></dati-select>
        <dati-input class="dati-input-container" ID="inputReferenceEdit" UPDATE="showInputArticleEdit" LABEL="Reference"></dati-input>
        <dati-input class="dati-input-container" ID="inputArticleNameEdit" UPDATE="showInputArticleEdit" LABEL="Article Name"></dati-input>
        <dati-input class="dati-input-container" ID="inputArticleQuantityEdit" UPDATE="showInputArticleEdit" LABEL="Quantity"></dati-input>
        <dati-input class="dati-input-container" ID="inputArticleBuyingPriceHtEdit" UPDATE="showInputArticleEdit" LABEL="Buying price HT"></dati-input>
        <dati-input class="dati-input-container" ID="inputArticleTVAEdit" UPDATE="showInputArticleEdit" LABEL="TVA"></dati-input>
        <dati-input class="dati-input-container" ID="inputArticlewarehouseEdit" UPDATE="showInputArticleEdit" LABEL="warehouse"></dati-input>


    </div>

    <div class="image-container-mark">
        <dati-image-uploader  class="imageUploader" ID="uploadIamgeArticleEdit" UPDATE="showInputArticle"></dati-image-uploader>
        <textarea  ID="inputArticleDescriptionEdit" placeholder="Description"></textarea>

    </div>
    </div>
    <div style="width: 100%;display: flex;justify-content: center;align-items: center">
    <div  onclick="editAccessory_ui.Submit_form_edit()" class="btn_validate" style="margin-top: 10px;width: 35%">
        UPDATE
    </div>
    </div>

</div>

