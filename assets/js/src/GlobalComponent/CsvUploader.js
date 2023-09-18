let Ui_CsvUploader = class {
    constructor() {
        $(document).ready(function () {
            csvUploader_ui.EVENTS_UI();
        });
        this.obj_csv = {
            size:0,
            dataFile:[]
        }
        this.csvData = [];
    }

    ADDTODOM(id){
        var myUploader = $("[DATI-ID="+id+"]");
        $(myUploader).append('<img src="/assets/img/upload.svg" alt="">\n' +
            '<p>Upload Csv file Here</p>\n' +
            '<input type="file" accept=".csv"  DATI-ID="' + id + 'file">');
        $(myUploader).css("position", "relative");
        $(myUploader).append("<div DATI-ROLE='clickableTrans' style='display: inline-block; width: 100%; height: 100%; position: absolute; top: 0px; left:0px ;    background-position: center center; background-size: 100% 100%;background-repeat: no-repeat;'></div>");
        this.LUNCH(id);
    }

    EVENTS_UI(){
        var myUploaders = document.querySelectorAll("[dati-composent=CsvUploader]");
        $(myUploaders).html("");
        for(var i=0; i<myUploaders.length;i++) {
            var myUploader = myUploaders[i];
            var id = $(myUploader).attr("DATI-ID");
            this.ADDTODOM(id);
        }

    }

    parseData(data,target){
        this.csvData = [];
        let rows = data.split("\n");
        rows.forEach(res => {
            this.csvData.push(res.split(";"));
        });
        console.log( this.csvData);
        var content = "<table class='dataTableStyle' " +
            "style='padding: 0'>" +
            "<tr>" +
            "<th style=\"text-align:center\">IMEI</th>" +
            "<th style=\"text-align:center\">SERIAL NUMBER</th>" +
            "</tr>";
        for(var i=1; i<this.csvData.length; i++){
            content += '<tr><td style="text-align:center">' + this.csvData[i][0]+ '</td><td style="text-align:center">' + this.csvData[i][1]+ '</td></tr>';
        }
        content += "</table>";
        this.csvData.shift();
        console.log(this.csvData,"hobbtiiin");
        $("[TABLE-CSV="+target+"]").html("");
        $("[TABLE-CSV="+target+"]").append(content);
    }
    LUNCH(id){
        $("[DATI-ID="+id+"]").find("[DATI-ROLE=clickableTrans]").click(function(){
            if($(this).parent().attr("DATI-ENABLE")){
                var isEnable =  $(this).parent().attr("DATI-ENABLE");
            }else{
                var isEnable = true;
            }
           var target = $(this).parent().attr("TABLE-HTML");
            if(isEnable && isEnable != "false"){

                $(this).parent().find("input").click();
                $(this).parent().find("[type=file]").change(function () {
                    var element = $(this);
                    console.log($(element)[0].files[0]);
                    if ($(element)[0].files[0]) {
                        let reader = new FileReader();
                        reader.readAsBinaryString($(element)[0].files[0]);
                        reader.onload = function (e) {

                            csvUploader_ui.obj_csv.size = e.total;
                            csvUploader_ui.obj_csv.dataFile = e.target.result;
                            csvUploader_ui.parseData(csvUploader_ui.obj_csv.dataFile,target)
                        }
                    }
                });
            }

        });

        document.addEventListener("csvUploaded"+id, function(e){
            //var id = str.search("imageTransUploaded");
            var element = $("[DATI-ID="+id+"]").find("[dati-role=clickableTrans]");

            if($("[DATI-ID="+id+"]").attr("DATI-UPDATE")){
                try {
                    eval($("[DATI-ID="+id+"]").attr("DATI-UPDATE"));
                }catch (e) {

                }
            }
        }, false);
    }
}

let csvUploader_ui = new Ui_CsvUploader();