let Ui_pagination = class {
    constructor() {
        this.EVENTS_UI();
    }


    CREATE_PAGINATION(id){

        return    '<select DATI_COMPOSENT="PAGES"></select>';
    }

    RESET(pagination, element){
        $(pagination).html("");
        $(pagination).append(element);
    }
    UPDATE(id){
        var pagination = $("[DATI-ID="+id+"]");
        var selected_page= $(pagination).find("[dati_composent=PAGES]").val();
        var arrowNext= $(pagination).find("[DATI-COMPOSENT=arrow_pagination_next]").attr("class");
        var arrowPrev= $(pagination).find("[DATI-COMPOSENT=arrow_pagination_prev]").attr("class");

        var nbr_rows_page = $(pagination).attr("DATI-NBR-ROW");
        var total = eval($(pagination).attr("DATI-TOTAL-PAGE"));
        var nbr_pages = total / nbr_rows_page;
        if(nbr_pages != parseInt(nbr_pages)){
            nbr_pages = parseInt(nbr_pages)+1;
        }


        // remplir select
        var element = this.CREATE_PAGINATION(id);
        this.RESET(pagination,element);
        var select_element = $(pagination).find("select");
        var options = this.CREATE_OPTION(nbr_pages,nbr_rows_page,total);
        $(select_element).append(options);


    // fin remplir select

        $(pagination).append("<div style='display: inline-block;padding-left: 5px;'> of "+total+" </div>");
        if(nbr_pages <= 1){
            $(pagination).append("<div DATI-COMPOSENT='arrows_pagination'> " +
                "<i class=\"fas fa-angle-left inactive\" DATI-COMPOSENT='arrow_pagination_prev'>" +
                "</i>  <i class=\"fas fa-angle-right inactive\" DATI-COMPOSENT='arrow_pagination_next'></i>" +
                " </div>");
        }else{
            if(selected_page > 0 && selected_page < nbr_pages){
                $(pagination).append("<div DATI-COMPOSENT='arrows_pagination'> " +
                    "<i class=\"fas fa-angle-left\" DATI-COMPOSENT='arrow_pagination_prev'>" +
                    "</i>  <i class=\"fas fa-angle-right \" DATI-COMPOSENT='arrow_pagination_next'></i>" +
                    " </div>");
            }else if(selected_page >= nbr_pages-1){
                $(pagination).append("<div DATI-COMPOSENT='arrows_pagination'> " +
                    "<i class=\"fas fa-angle-left\" DATI-COMPOSENT='arrow_pagination_prev'>" +
                    "</i>  <i class=\"fas fa-angle-right inactive\" DATI-COMPOSENT='arrow_pagination_next'></i>" +
                    " </div>");
            }else if(selected_page < 1){
                $(pagination).append("<div DATI-COMPOSENT='arrows_pagination'> " +
                    "<i class=\"fas fa-angle-left inactive\" DATI-COMPOSENT='arrow_pagination_prev'>" +
                    "</i>  <i class=\"fas fa-angle-right\" DATI-COMPOSENT='arrow_pagination_next'></i>" +
                    " </div>");
            }
        }





        //var list = $(table).attr("DATI-LIST");
        if(selected_page){
            $(pagination).find("[dati_composent=PAGES]").val(selected_page);
        }

        /*if(arrowNext){
            $(pagination).find("[DATI-COMPOSENT=arrow_pagination_next]").addClass(arrowNext);
        }
        if(arrowPrev){
            $(pagination).find("[DATI-COMPOSENT=arrow_pagination_prev]").addClass(arrowPrev);
        }*/
        if(nbr_pages <= 1){
            $(pagination).find("[DATI-COMPOSENT=arrow_pagination_next]").addClass("inactive");
            $(pagination).find("[DATI-COMPOSENT=arrow_pagination_prev]").addClass("inactive");
        }else {

            if(parseInt($(select_element).val()) ==0){
                $(pagination).find("[DATI-COMPOSENT=arrow_pagination_prev]").addClass("inactive");
            }else if(parseInt($(select_element).val()) == nbr_pages-1){
                $(pagination).find("[DATI-COMPOSENT=arrow_pagination_next]").addClass("inactive");
            }
        }


    }
    CREATE_OPTION(nbr_pages,nb_ligne,total){
        var option ="";

        for (var i=0;i<nbr_pages;i++){
            if(i==nbr_pages-1){
                option = option+'<option value="'+i+'">'+((i*nb_ligne)+1)+' - '+total+'</option>';
            }
            else {
                option = option+'<option value="'+i+'">'+((i*nb_ligne)+1)+' - '+((i+1)*nb_ligne)+'</option>';
        }
        }
        return option;
    }

    EVENTS_UI(){
        $(document).on('click',"[DATI-COMPOSENT=arrow_pagination_next]",function(){
            if($(this).attr('class').indexOf("inactive")==-1){
                var global_c=$(this).parent().parent();

                var pages = $(global_c).find("select");
                var selected_page = parseInt($(pages).val());
                var prev =$(this).parent().find("[dati-composent=arrow_pagination_prev]");
                var options_length = parseInt($(pages).find("option").length)-1;
                if (selected_page<options_length){
                    if(selected_page==options_length-1){
                        var classn = $(this).attr('class');
                        $(this).attr('class',classn+" inactive");
                    }
                    if($(prev).attr("class").indexOf("inactive")!=-1){
                        $(prev).removeClass("inactive");
                    }
                    $(pages).val(selected_page+1);
                    if($(this).parent().parent().attr("DATI-FN")){
                        try {
                            eval($(this).parent().parent().attr("DATI-FN"));
                        }catch (e) {

                        }
                    }
                }

            }
        });

        $(document).on('click',"[DATI-COMPOSENT=arrow_pagination_prev]",function(){
            if($(this).attr('class').indexOf("inactive")==-1){
                var global_c=$(this).parent().parent();
                var pages = $(global_c).find("select");
                var selected_page = parseInt($(pages).val());
                var next =$(this).parent().find("[dati-composent=arrow_pagination_next]");
                var options_length = parseInt($(pages).find("option").length)-1;
                if (selected_page>0){
                    if(selected_page==1){
                        var classn = $(this).attr('class');
                        $(this).attr('class',classn+" inactive");
                    }

                    if($(next).attr("class").indexOf("inactive")!=-1){
                        $(next).removeClass("inactive");
                    }
                    $(pages).val(selected_page-1);
                    if($(this).parent().parent().attr("DATI-FN")){
                        try {
                            eval($(this).parent().parent().attr("DATI-FN"));
                        }catch (e) {

                        }
                    }
                }
            }
        });
        $(document).on('change',"[DATI-COMPOSENT=pagination] [dati_composent=PAGES]",function(){
            var nb_page = parseInt($(this).find("option").length)-1;
            if(parseInt($(this).val()) != 0){
                $(this).parent().find("[DATI-COMPOSENT=arrow_pagination_prev]").removeClass("inactive");
            }

            if(parseInt($(this).val()) != nb_page){
                $(this).parent().find("[DATI-COMPOSENT=arrow_pagination_next]").removeClass("inactive");
            }
            if(parseInt($(this).val()) == nb_page){
                $(this).parent().find("[DATI-COMPOSENT=arrow_pagination_next]").addClass("inactive");
            }else if(parseInt($(this).val()) == 0){
                $(this).parent().find("[DATI-COMPOSENT=arrow_pagination_prev]").addClass("inactive");
            }
            if($(this).parent().attr("DATI-FN")){
                try {
                    eval($(this).parent().attr("DATI-FN"));
                }catch (e) {

                }
            }
        });
        var myComposents = document.querySelectorAll("[dati-composent=pagination]");
        for(var i=0; i<myComposents.length;i++){
            var myComposent = myComposents[i];
            if($(myComposent).attr("dati-update")){
                this.LUNCH($(myComposent).attr("dati-id"),$(myComposent).attr("dati-update"),$(myComposent).attr("dati-nbr-row"));
            }
        }
    }

    LUNCH(id,eventName,nbr){

        document.addEventListener(eventName, function(e){


            setTimeout(function(){
                dati_pagination.UPDATE(id);
            }, 100);
        },true);

    }
}

let dati_pagination = new Ui_pagination();