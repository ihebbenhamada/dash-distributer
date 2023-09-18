<div DATI-PAGE="AddArticles" dati-display="inline-block" style="display:none" class="container_mark_dati">

    <div style="width: 100%;display: inline-block">
    <div class="detail-container-mark">
        <dati-select class="dati-select-container" ID="selectArticleProvider"  UPDATE="showInputArticle" LABEL="Provider" LIST="addAccessory_ui.provider" OPTION="name"  ></dati-select>
        <dati-input class="dati-input-container" ID="inputReference" UPDATE="showInputArticle" LABEL="Reference"></dati-input>
        <dati-input class="dati-input-container" ID="inputArticleName" UPDATE="showInputArticle" LABEL="Article Name"></dati-input>
        <dati-input class="dati-input-container" ID="inputArticleQuantity" UPDATE="showInputArticle" LABEL="Quantity"></dati-input>
        <dati-input class="dati-input-container" ID="inputArticleBuyingPriceHt" UPDATE="showInputArticle" LABEL="Buying price HT"></dati-input>
        <dati-input class="dati-input-container" ID="inputArticleTVA" UPDATE="showInputArticle" LABEL="TVA"></dati-input>
        <dati-input class="dati-input-container" ID="inputArticlewarehouse" UPDATE="showInputArticle" LABEL="warehouse"></dati-input>

    </div>

    <div class="image-container-mark">
        <dati-image-uploader  class="imageUploader" ID="uploadIamgeArticle" UPDATE="showInputArticle"></dati-image-uploader>
        <textarea  ID="inputArticleDescription" placeholder="Description"></textarea>

    </div>
    </div>
    <div style="width: 100%;display: flex;justify-content: center;align-items: center">
        <div  onclick="addAccessory_ui.Submit_form_add()" class="btn_validate" style="margin-top: 10px;width: 35%">
            Validate
        </div>
    </div>
</div>

