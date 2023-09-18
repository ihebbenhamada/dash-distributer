let Ui_Uploader = class {
    constructor() {
        $(document).ready(function () {
            Uploader_ui.EVENTS_UI();
        })
    }

    ADDTODOM(id){
        var myUploader = $("[DATI-ID="+id+"]");
        $(myUploader).append('<img src="/assets/img/upload.svg" alt="">\n' +
            '<p>Upload Image Here</p>\n' +
            '<input type="file"  DATI-ID="' + id + 'file">');
        $(myUploader).css("position", "relative");
        $(myUploader).append("<div DATI-ROLE='clickableTrans' style='display: inline-block; width: 100%; height: 100%; position: absolute; top: 0px; left:0px ;    background-position: center center; background-size: 100% 100%;background-repeat: no-repeat;'></div>");
        this.LUNCH(id);
    }

    EVENTS_UI(){
        var myUploaders = document.querySelectorAll("[dati-composent=UploaderTrans]");
        $(myUploaders).html("");
        for(var i=0; i<myUploaders.length;i++) {
            var myUploader = myUploaders[i];
            var id = $(myUploader).attr("DATI-ID");
            this.ADDTODOM(id);
        }

    }

    LUNCH(id){
        $("[DATI-ID="+id+"]").find("[DATI-ROLE=clickableTrans]").click(function(){
            if($(this).parent().attr("DATI-ENABLE")){
                var isEnable =  $(this).parent().attr("DATI-ENABLE");
            }else{
                var isEnable = true;
            }
            if(isEnable && isEnable != "false"){

                $(this).parent().find("input").click();
                $(this).parent().find("[type=file]").change(function () {
                    var element = $(this);
                    var image =$(element)[0].files[0];
                    var form = new FormData();
                    form.append("img", image, $(element).val());
                    console.log("aaaaaaaaaaaaa");
                    SSAPI.upload({
                        uri:"/Cdn/upload_img",
                        onsuccess:"imageTransUploaded"+id,
                        data:form
                    })
                });
            }

        });

        document.addEventListener("imageTransUploaded"+id, function(e){
            //var id = str.search("imageTransUploaded");
            var element = $("[DATI-ID="+id+"]").find("[dati-role=clickableTrans]");
            $(element).css("background-image","url('"+e.detail.res[0]+"')");
            $(element).css("background-position","center");
            $(element).css("background-size","100% 100%");
            $(element).css("background-repeat","no-repeat");

            if($("[DATI-ID="+id+"]").attr("DATI-VAR-URL")){
                var varname = $("[DATI-ID="+id+"]").attr("DATI-VAR-URL");
                var indexDot = varname.indexOf(".") ;
                if(indexDot !== -1) {
                    var obj = varname.substr(0, indexDot);
                    var obj_attr = varname.substr(indexDot + 1, varname.length - (indexDot + 1));
                    eval(obj)[obj_attr] = e.detail.res[0];
                }else{
                    window[varname] = e.detail.res[0];
                }


            }

            if($("[DATI-ID="+id+"]").attr("DATI-UPDATE")){
                try {
                    eval($("[DATI-ID="+id+"]").attr("DATI-UPDATE"));
                }catch (e) {
                    
                }

            }
            /*   $("[dati-image-bar]").attr("src", e.detail.res[0]);*/
            /*formTrx_ui.imgTransUploaded = e.detail.res[0] ;
            formTrx_ui.updateProp();*/

        }, false);
    }




};

let Uploader_ui = new Ui_Uploader();