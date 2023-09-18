class Ui_Header{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
        this.page=null;
        this.oldPage=null;
        this.Navigation_history =["Hotels"];
        this.Navigation_history_title =["Hotels"];
        this.activePageIndex = 0;
        $(document).on('click', '[DATI-BACK-ARROW-NAVIGATION]', function () {
            dati_header.PREV_PAGE()
        });
        $(document).on('click', '[DATI-NEXT-ARROW-NAVIGATION]', function () {
            dati_header.NEXT_PAGE()
        });
        $(document).on('click', '[DATI-PATH]', function () {
            if($(this).attr("DATI-LINK") != "#" && $(this).attr("DATI-LINK") != ""){
                var pathName = $(this).attr("DATI-PATH");
                console.log(pathName,"pathName");
                $("[dati-current-pathname]").html(pathName);
            }

        });
    }
    PREV_PAGE() {
        if(dati_header.activePageIndex == 0 ){
        }else{
            dati_header.activePageIndex -= 1;
            dati_header.ACTIVE_CURRENT_PAGE();
        }

    };
    NEXT_PAGE() {
        if(dati_header.activePageIndex == dati_header.Navigation_history.length -1){

        }else{
            dati_header.activePageIndex += 1;
            dati_header.ACTIVE_CURRENT_PAGE();
        }

    };
    ACTIVE_CURRENT_PAGE() {

        var activator = dati_header.Navigation_history[dati_header.activePageIndex];
        var activorTitle = dati_header.Navigation_history_title[dati_header.activePageIndex];
        console.log(activator,"path activator");
        if (activator) {
            var page = "[DATI-PAGE=" + activator + "]";
            $("[DATI-PAGE]").css("display", "none");
            if ($(page).attr("DATI-DISPLAY")) {
                $(page).css("display", $(page).attr("DATI-DISPLAY"));
            } else {
                $(page).css("display", "inline-block");
            }
            console.log(activator,"path activator 222222");
            $("[dati-current-pathname]").html(activorTitle);
        } else {
console.log("path errrrrrrrrrrrrrreur");
        }
    };
    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e) {
            var page = e.detail.pageLink;
            var path = e.detail.pagePath;
            console.log(path,"path");
            if( dati_header.Navigation_history.indexOf(page) !== -1){
                var index = dati_header.Navigation_history.indexOf(page);
                console.log(index,"path index");
                dati_header.Navigation_history.splice(index, 1);
                dati_header.Navigation_history_title.splice(index, 1);
            }

                dati_header.Navigation_history.push(page);
                dati_header.Navigation_history_title.push(path);


            dati_header.activePageIndex = dati_header.Navigation_history.length -1 ;
            console.log( dati_header.activePageIndex,"path  dati_header.activePageIndex");


        });
    }


    EVENTS_SSAPI(){

    }
}

let dati_header= new  Ui_Header();