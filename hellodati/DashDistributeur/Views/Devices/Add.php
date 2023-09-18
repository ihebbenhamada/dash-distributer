<div DATI-PAGE="AddPhone" dati-display="inline-block" style="display:none" class="container_hotel_dati">

    <div style="width: 100%;display: inline-block">
    <div style="display: inline-block;width: 45%;float: right">

        <div class="textArea_header" style="border: 1px solid #ffffff">
            <div style="cursor: pointer;" onclick="addDevice_ui.SET_BULK()">
                ADD IMEI AND SERIAL NUMBER
            </div>
            <div>
                OR
            </div>
            <div onclick="addDevice_ui.showUploadCsv()" style="padding: 5px;background-color: var(--header-color);color: #ffffff;border-radius: 5px;cursor: pointer">
                Upload CSV file
            </div>
        </div>
        <div IMEI_SERIAL_BULK style="display: flex;align-items: center;justify-content: space-between;width: 100%;">
            <textarea IMEI_BULK class="imei_serial_textArea" placeholder="Imei"></textarea>
            <textarea SERIAL_NUMBER_BULK class="imei_serial_textArea" placeholder="Serial Number"></textarea>
        </div>

        <a exemple-csv href="/assets/img/device_example.csv" download style="display: none;margin-top: 20px;margin-bottom: 20px;text-decoration: none;justify-content: left;align-items: center;color: black;">

            <div style="margin-right: 10px">Download CSV example</div>
            <i class="fa fa-download" aria-hidden="true"></i>

        </a>

        <div class="imageUploader"
             DATI-COMPOSENT="CsvUploader"
             DATI-ID="uploadcsvDevices"
             DATI-UPDATE="AddBarForm"
             TABLE-HTML="devices"
             DATI-VAR-URL="barCard_ui.imgTransUploaded"
             style="width: 100%;margin: 0;display: none;height: inherit;"
        >


        </div>
        <div TABLE-CSV="devices" style="width: 100%;max-height: 500px;overflow-y: auto;">
        </div>


    </div>
    <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;width: 45%;float: left">
        <dati-select class="dati-select-container" ID="inputDeviceBrand" UPDATE="showInputDevices"
                    LABEL="Brand" LIST="addDevice_ui.brands" OPTION="name"></dati-select>
        <dati-select class="dati-select-container" ID="inputDeviceModel" UPDATE="showInputDevices"
                    LABEL="Model" LIST="addDevice_ui.models" OPTION="name"></dati-select>
        <dati-select class="dati-select-container" ID="inputDeviceColor" UPDATE="showInputDevices"
                    LABEL="Color"  LIST="addDevice_ui.colors" OPTION="name"></dati-select>
        <dati-input class="dati-input-container" ID="inputDeviceProvider" UPDATE="showInputDevices"
                    LABEL="Provider"></dati-input>
        <dati-input class="dati-input-container" ID="inputDevicePrice" UPDATE="showInputDevices"
                    LABEL="Price"></dati-input>
    </div>
    </div>
    <div style="width: 100%;display: flex;justify-content: center;align-items: center">
    <div onclick="addDevice_ui.Submit_form_add()" class="btn_validate" style="margin-top: 10px;width: 35%">
        Validate
    </div>
    </div>
</div>

