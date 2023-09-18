class Ui_HeaderNavigation {
    constructor() {
        this.EVENTS_UI();


    }
    NAV_ITEM(list){
       return '<div class="section_header" DATI-LINK='+list.link+' DATI-CURRENT-SECTION='+list.link+'>'+
            ''+list.icon+''+
            '<div >'+list.title+'</div>'+
            '</div>'
    }
    UPDATE(id){

        var navigationHeader = $("[ID="+id+"]");
        var lists_name = $(navigationHeader).attr("LIST");
        var lists = eval(lists_name);
        $(navigationHeader).html("");
        for(var i=0; i<lists.length; i++) {
            var list = lists[i];
            console.log(list,"list");
            var navItem = "";
            navItem += this.NAV_ITEM(list);
            $(navigationHeader).append(navItem);

        }
    }
    LUNCH(eventName,id){
        document.addEventListener(eventName, function(e){
            console.log(1236544);
            setTimeout(function(){
                dati_HeaderNavigation.UPDATE(id)
            }, 100);
        }, false);
    }

    EVENTS_UI(){
        $(document).ready(function() {
            var myComposents = document.querySelectorAll("dati-HeaderNavigation");
            console.log(myComposents,"testTestTest11");
            for(var i=0; i<myComposents.length;i++){
                var myComposent = myComposents[i];
                if($(myComposent).attr("UPDATE")){
                    dati_HeaderNavigation.LUNCH($(myComposent).attr("UPDATE"),$(myComposent).attr("ID"));
                }
            }

        });
        $(document).on("click", "[DATI-CURRENT-SECTION]", function () {
            var currentSection = $(this).attr("DATI-LINK");
            console.log(currentSection,"currentSection22");
            setTimeout(function(){
            $("[DATI-CURRENT-SECTION]").css("background-color","#fff");
            $("[DATI-CURRENT-SECTION]").css("color","#111f35");
            $("[DATI-CURRENT-SECTION="+currentSection+"]").css("background-color","#111f35");
            $("[DATI-CURRENT-SECTION="+currentSection+"]").css("color","#fff");
            }, 100);
        });
    }

};

let dati_HeaderNavigation = new Ui_HeaderNavigation();