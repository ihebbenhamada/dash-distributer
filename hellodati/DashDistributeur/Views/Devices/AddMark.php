<div DATI-PAGE="AddMark" dati-display="inline-block" style="display:none" class="container_mark_dati">


    <div style="width: 100%;display: inline-block">
        <div class="detail-container-mark">
            <div style="display: flex;width: 100%;">
                <dati-input class="dati-input-container" ID="inputMark" UPDATE="showInputMark" LABEL="Brand"
                            style="width: 50%;margin-right: 0;height: 100%"></dati-input>
                <select select_existant_brand class="select_mark">

                </select>
            </div>

            <div style="display: flex;width: 100%;">
                <dati-input class="dati-input-container" ID="inputModelMark" UPDATE="showInputMark" LABEL="Model"
                            style="width: 50%;margin-right: 0;height: 100%"></dati-input>
                <select select_existant_model class="select_mark">

                </select>
            </div>


                <dati-input class="dati-input-container" ID="inputColorMark" UPDATE="showInputMark" LABEL="Color"
                            style="width: 96%;margin-right: 0;height: 100%"></dati-input>
                <!--<dati_multichoose class="dati-multichoose-container" ID="inputMarkColor" UPDATE="showInputMark"
                                  LIST="deviceList_ui.colors" BRAND="true" LABEL="Select Color">

                </dati_multichoose>-->


            <!--    <dati-select class="dati-select-container" ID="inputMarkColor" UPDATE="showInputMark"
                             LABEL="Color" LIST="addDevice_ui.colors" OPTION="name"></dati-select>-->

        </div>

        <div class="image-container-mark">
            <dati-image-uploader class="imageUploader" ID="uploadIamgeMark"
                                 UPDATE="showInputMark"></dati-image-uploader>

        </div>
    </div>

    <div style="width: 100%;display: flex;justify-content: center;align-items: center">
        <div onclick="addBrand_ui.Submit_form_add()" class="btn_validate" style="margin-top: 10px;width: 35%">
            Validate
        </div>
    </div>


</div>

