let Ui_ImageUploader = class {
    constructor() {
        $(document).ready(function () {
            dati_image_uploader.EVENTS_UI();
        })
    }

    ADDTODOM(id){
        console.log(id,"idddd myUploader")
        var myUploader = $("[ID="+id+"]");
        $(myUploader).append('<i class="fas fa-plus-circle"></i>\n' +
            '<p>Upload Image Here</p>\n' +
            '<input type="file"  ID="' + id + 'file">');
        $(myUploader).css("position", "relative");
        $(myUploader).append("<div DATI-ROLE='clickableTrans' style='display: inline-block; width: 100%; height: 100%; position: absolute; top: 0px; left:0px ;    background-position: center center; background-size: 100% 100%;background-repeat: no-repeat;'></div>");
        this.LUNCH(id);

    }

    EVENTS_UI(){
        var myUploaders = document.querySelectorAll("dati-image-uploader");
        $(myUploaders).html("");
        for(var i=0; i<myUploaders.length;i++) {
            var myUploader = myUploaders[i];
            console.log(myUploader,"myUploader");
            var id = $(myUploader).attr("ID");
            dati_image_uploader.ADDTODOM(id);
        }

    }
    LUNCH(id){
        console.log(id,"idddd myUploader lunch")
        $("[ID="+id+"]").find("[DATI-ROLE=clickableTrans]").click(function(){
            if($(this).parent().attr("ENABLE")){
                var isEnable =  $(this).parent().attr("ENABLE");
            }else{
                var isEnable = true;
            }
            if(isEnable && isEnable != "false"){

                $(this).parent().find("input").click();
                $(this).parent().find("[type=file]").change(function () {
                    console.log("input changed")
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
            var element = $("[ID="+id+"]").find("[dati-role=clickableTrans]");
            $(element).css("background-image","url('"+e.detail.res[0]+"')");
            $(element).css("background-position","center");
            $(element).css("background-size","100% 100%");
            $(element).css("background-repeat","no-repeat");

            if($("[ID="+id+"]").attr("DATI-VAR-URL")){
                var varname = $("[ID="+id+"]").attr("VAR-URL");
                var indexDot = varname.indexOf(".") ;
                if(indexDot !== -1) {
                    var obj = varname.substr(0, indexDot);
                    var obj_attr = varname.substr(indexDot + 1, varname.length - (indexDot + 1));
                    eval(obj)[obj_attr] = e.detail.res[0];
                }else{
                    window[varname] = e.detail.res[0];
                }


            }

            if($("[ID="+id+"]").attr("UPDATE")){
                try {
                    eval($("[ID="+id+"]").attr("UPDATE"));
                }catch (e) {

                }

            }
            /*   $("[dati-image-bar]").attr("src", e.detail.res[0]);*/
            /*formTrx_ui.imgTransUploaded = e.detail.res[0] ;
            formTrx_ui.updateProp();*/

        }, false);
    }







};

let dati_image_uploader = new Ui_ImageUploader();