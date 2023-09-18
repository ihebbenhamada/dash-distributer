let Ui_nav = class {
    constructor() {

        $(document).ready(function () {
            document.addEventListener("NavBarReveive", function (e) {
                console.log("navBarReceive", e.detail);
                nav_ui.navItiem = e.detail.res;
                nav_ui.UPDATE();
            }, false);
        });
        document.addEventListener("SSAPI_READY", function (e) {
            nav_ui.EVENTS_UI();
        }, false);

        $(document).on('click', '[DATI-PATH]', function () {
            if($(this).attr("DATI-LINK") != "#" && $(this).attr("DATI-LINK") != ""){
                var pathName = $(this).attr("DATI-PATH");
                $("[dati-current-pathname]").html(pathName);
            }

        });
        this.chatNav = [];
        this.navItiem = [];
    }


    CREATE_ITIEM(title,link,icon,itiemList, path) {

        if(icon){
            if(itiemList){
                return "<li DATI-LINK=\""+link+"\"  DATI-EVENT=\"showpage_"+link+"\" DATI-PATH=\""+path+"\" class=\"nested_list hover_li\" "+
                    " style=\"background-image:  url("+icon+");\" "+itiemList+">" +title +
                    "</li>";
            }else{
                return "<li DATI-LINK=\""+link+"\"  DATI-PATH=\""+path+"\" DATI-EVENT=\"showpage_"+link+"\" class=\"hover_li\" " +
                    " style=\"background-image:  url("+icon+");\" "+itiemList+">" +title +
                    "</li>";
            }

        }else{
            if(itiemList) {
                return "<li DATI-LINK=\"" + link + "\"  DATI-PATH=\""+path+"\" DATI-EVENT=\"showpage_" + link + "\" class=\"hover_li\" " + itiemList +">" + title +"</li>";
            }else{
                return "<li DATI-LINK=\"" + link + "\"  DATI-PATH=\""+path+"\" DATI-EVENT=\"showpage_" + link + "\" class=\"hover_li\">" + title +"</li>";
            }

        }

    }

    GET_HTML(list,icon, path) {
        var html = "";
        var pathNew = "";


        for(var i=0; i<list.length; i++){
            if(path != ""){
                pathNew = path+" &nbsp;&nbsp;&nbsp; > &nbsp;&nbsp;&nbsp;"+list[i].title;
            }else{
                pathNew = list[i].title;
            }
            if(list[i].hasOwnProperty("fields")){
                if(list[i].fields != null && list[i].fields!= "" && list[i].fields.length > 0){
                    html += this.CREATE_ITIEM(list[i].title, list[i].routing, list[i].icon, "FOR-ITIEM-LIST='ITIEM-LIST"+list[i].id+"'", pathNew);
                    html += "<li id=\"hiddenFrontOffice\" class=\"hidden_item\" ITIEM-LIST=\"ITIEM-LIST"+list[i].id+"\"><ul>";
                    html += this.GET_HTML(list[i]["fields"],false, pathNew);
                    html += "</ul></li>";
                }else{
                    html += this.CREATE_ITIEM(list[i].title, list[i].routing, list[i].icon, false, pathNew);
                }
            }else{
                html += this.CREATE_ITIEM( list[i].title, list[i].routing, list[i].icon, false, pathNew);
            }
        }
        return html;
    }


    UPDATE() {
/*        var html = this.GET_HTML();
        console.log(html,"html");*/
console.log(this.navItiem,"bbbbbbbbbbbbbb");
        $("[DATI-NAV=nav]").html(this.GET_HTML(this.navItiem,"/assets/img/sidebar/front.svg", ""));
    }


    EVENTS_UI() {
        SSAPI.SUBMIT({
            uri: "/NavBar/getAllEnabled",
            onsuccess: "NavBarReveive"
        })

        var myComposents = document.querySelectorAll("[dati-composent=departmentInNav]");

        for (var i = 0; i < myComposents.length; i++) {
            var myComposent = myComposents[i];
            if ($(myComposent).attr("dati-update")) {
                this.LUNCH($(myComposent).attr("dati-update"), $(myComposent).attr("dati-id"));
            }
        }
        var myComposentservices = document.querySelectorAll("[dati-composent=ServiceInNav]");

        for (var i = 0; i < myComposentservices.length; i++) {
            var myComposent = myComposentservices[i];
            if ($(myComposent).attr("dati-update")) {
                this.LUNCHSERVICE($(myComposent).attr("dati-update"), $(myComposent).attr("dati-id"));
            }
        }
    }


    LUNCH(eventName, id) {
        /*
                document.addEventListener(eventName, function(e){
                    setTimeout(function(){
                        console.log("dkhaletcchat");
                        nav_ui.UPDATE(id);
                    }, 100);
                }, false);

        */

    }


    LUNCHSERVICE(eventName, id) {

        document.addEventListener(eventName, function (e) {

            setTimeout(function () {
                nav_ui.UPDATESERVICE(id);
            }, 100);
        }, false);


    }

}


let nav_ui = new Ui_nav();