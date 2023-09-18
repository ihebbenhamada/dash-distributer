let Ui_headerBar = class {
    constructor() {
        this.EVENTS_UI();
        this.LANGUAGES = null ;
        this.scrollId = null ;

    }


    BAR_BLOCK(){

        return  ' <div class="restaurant_bar" >' +
            '</div>';
    }

      BAR_DESCRIPTION (title ,iconBar){
        return           '<div class="description">'+
              '<img src="'+iconBar+'" alt="Dish">'+
              '<p class="title">'+title+'</p>'+
              '</div>'
      }
      BAR_CATEGORIES(id){
        return          '<div class="categories">'+
            '<div class="arrow left" style="width:50px" onclick="dati_headerBar.SCROLL_LEFT(this)">'+
            '<i class="fas fa-angle-left" DATI-ARROW></i>'+
            '</div>'+
            ' <div class="categories_name" id="ScrollBarHeaderShow'+id+'">'+

            '</div>'+
            '<div class="arrow right" style="width:50px" onclick="dati_headerBar.SCROLL_RIGHT(this)">'+
            '<i class="fas fa-angle-right" DATI-ARROW></i>'+
            '</div>'+
          '</div>'
      }
    SCROLL_LEFT(arrow){
        var elm =$(arrow).parent().find("[class=categories_name]");
        elm[0].scrollBy(-100, 0);
    }
    SCROLL_RIGHT(arrow){
        var elm =$(arrow).parent().find("[class=categories_name]");
        elm[0].scrollBy(100, 0);
    }
/*    BAR_ADDFORM(readInput){

       return  '<div class="category_form" DATI-ID="toggelCat">'+
            '<div class="title_form">Add Category (menu)</div>'+
            '<div class="form_element">'+
            '<p>Category Name</p>'+
            '<input type="text" placeholder="Ex: Dessert" DATI-ID="inputCatAdd"/>'+
            '<div class="category_add" onclick="'+readInput+'">'+
            '<span>+</span>'+
            '<p>Add</p>'+
            '</div>'+
            '<div class="categories" DATI-CATEGORIES="actions">'+
            <!-- one cat  -->



            <!-- end one cat  -->

            '</div>'+
            '</div>'+
           '</div>'
    }*/
    CANCEL_FORM(selectedCategory){
        selectedCategory = null ;
        $("[DATI-ID=toggelCat]").css("display", "none");
        $("[dati-composent=barHeader]").find("input").val("");
        $(".categories > span").css("background-color","rgba(0,0,0,0)");
        $(".categories > span > span").css("background-color","#1a3e64");
        $(".categories > span").css("color","#1a3e64");
    }

    CANCEL_UPDATE(selectedCategory){
        selectedCategory = null ;
        $("[dati-composent=barHeader]").find("input").val("");
        $(".categories > span").css("background-color","rgba(0,0,0,0)");
        $(".categories > span > span").css("background-color","#1a3e64");
        $(".categories > span").css("color","#1a3e64");
    }
    BAR_ADDFORM(readInput,cancel_form,id,idErreur,ListErreur){
        return  '<div class="container_add_cat"   DATI-ID="toggelCat">'+
            '<div class="add_languge_container">'+
             '<div>'+
            '<div class="add_cat_by-language">'+
            '<div class="container_msg_erreur"\n' +
            'DATI-COMPOSENT="msgErreurContainer"\n' +
            'DATI-ID="'+idErreur+'"\n' +
            'DATI-LIST="'+ListErreur+'">\n' +
            '</div>\n' +
            '<div DATI-LANG-CONTAINER class="add_cat_by-language-item">'+
            '</div>'+
            '<div DATI-IMAGE-CONTAINER class="add_cat_by-language-image">'+
            '<div  class="imageUploader"\n' +
            'DATI-COMPOSENT="UploaderTrans"\n' +
            'DATI-ID="uploadIamgeCat'+id+'"\n' +
             'DATI-UPDATE="uploadCatImage">' +
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>'+


            '<div class="categories"  DATI-CATEGORIES="actions">'+


            <!-- one cat  -->



            <!-- end one cat  -->
            '</div>'+

        '<div class="buttons_container">'+
            '<div>'+
            '<div class="confirm" onclick="'+readInput+'">'+
            ' <i class="fas fa-check" style="color: #ffffff ; margin-right: 10%;"></i>'+
            '<p>Confirm</p>'+
            '</div>'+

            '<div class="cancel" onclick="'+cancel_form+'">'+
            '<i class="fas fa-times" style="color: #ffffff ; margin-right: 10%;"></i>'+
            '<p>Cancel</p>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>'+
           '</div>'

    }
    NAME_CATEGORIES(id,name,toggelContentByCat){
        return '<p DATI-ID="'+id+'"  onclick="'+toggelContentByCat+'">'+name+'</p >'
    }


    ALERTEGLOBAL(validate,cancel){
        return '<div DATI-COMPOSENT="alerteContainer"\n' +
        'DATI-ID="CatAlerte"\n' +
        'DATI-UPDATE="showAlerte"\n'+
        'DATI-CANCEL= "'+cancel+'"\n' +
        'DATI-VALIDATE= "'+validate+'"\n' +
            '>\n' +
            '</div>'
    }
    ACTION_CATEGORIES(id,name,deleteCat,updateCat){
        return '<span  DATI-ID="'+id+'" DATI-TITLE="'+name+'" onclick="'+updateCat+'">'+name+' <span onclick="'+deleteCat+'">&times;</span>'+
            '</span>'

    }
    BT_CATEGORIES(){
        return '<div class="categories_container" id="forCat">'+
              '<button class="category_button">'+
             ' <img src="/assets/img/barHeader/edit.png" alt="Reviews">'+
              '<p>Edit categories</p>'+
             '</button>'+
          '</div>'
    }
    INPUT_TRANSLATE(language){

        return '<div class="tra_item">'+
            '<div class="lang">'+language.code+'</div>'+
            '<div class="text">'+
            '<input type="text" placeholder=" Enter categories In '+language.languageName+'" DATI-ID="inputCatAdd'+language.code+'">'+
            '</div>'+
            '</div>'
    }
    UPDATE(id){


        var bh = $("[DATI-ID="+id+"]");
        var lists_name = $(bh).attr("DATI-LIST");
        var lists = eval(lists_name);
        var lists_languages =  $(bh).attr("DATI-LANGUAGE");
        var cancel_form =  $(bh).attr("DATI-CANCEL-FORM");
        var languages = eval(lists_languages);
        this.LANGUAGES = languages ;
        var titleBar = $(bh).attr("DATI-TITLE-HEADER");
        var titleBarHeader = eval(titleBar);
        var iconBar =   $(bh).attr("DATI-ICON-HEADER");
        var readInput =  $(bh).attr("DATI-READ-VALUE-INPUT");
        var toggelContentByCat =  $(bh).attr("DATI-FILTER-CONTENT");
        var validate =  $(bh).attr("DATI-VALIDATE-ALERTE-HEADER");
        var cancel =  $(bh).attr("DATI-CANCEL-ALERTE-HEADER");
        var deleteCat =  $(bh).attr("DATI-DELETE-CAT");
        var updateCat =  $(bh).attr("DATI-UPDATE-CAT");
        var idErreur=$(bh).attr("DATI-ID-MSG-ERREURS");
        var ListErreur=$(bh).attr("DATI-LIST-MSGE-RREURS");
        this.scrollId=id;

        $(bh).html("");
        var hedearBar = this.BAR_BLOCK();
        $(bh).append(hedearBar);
        var alertHeader = this.ALERTEGLOBAL(validate,cancel);
        $(bh).append(alertHeader);
        var idCatDelete = $(alertHeader).attr("DATI-ID");
        dati_alerte.ADD_TO_DOM(idCatDelete);
        var barBlock = $(bh).find("[class=restaurant_bar]");
        var descriptionBar = this.BAR_DESCRIPTION(titleBarHeader,iconBar);
        $(barBlock).append(descriptionBar);
        var categoriesBar = this.BAR_CATEGORIES(id);
        $(barBlock).append(categoriesBar);
        var categoriesBt = this.BT_CATEGORIES();
        $(barBlock).append(categoriesBt);
        var formAdd = this.BAR_ADDFORM(readInput,cancel_form,id,idErreur,ListErreur);
        $(barBlock).append(formAdd);
        for(var i=0; i<lists.length; i++) {

            var list = lists[i];
            var categorieName = "";
            categorieName += this.NAME_CATEGORIES(list.id,list.name,toggelContentByCat);
            var categoriesName = $(bh).find("[class=categories_name]");
            $(categoriesName).append(categorieName);
            var catBlock = $(bh).find("[DATI-CATEGORIES=\"actions\"]");
            var actionCategory =  this.ACTION_CATEGORIES(list.id,list.name,deleteCat,updateCat);
            $(catBlock).append(actionCategory);

        }



        var InputBlock =  $(barBlock).find("[DATI-LANG-CONTAINER]");

        for(var i=0; i<languages.length; i++) {
            var language = languages[i];
            var inputTranslate = this.INPUT_TRANSLATE(language);
            $(InputBlock).append(inputTranslate);}

           Uploader_ui.ADDTODOM("uploadIamgeCat"+id+"");


    }



    EVENTS_UI(){
        var myComposents = document.querySelectorAll("[dati-composent=barHeader]");

        for(var i=0; i<myComposents.length;i++){
            var myComposent = myComposents[i];
            if($(myComposent).attr("dati-update")){
                this.LUNCH($(myComposent).attr("dati-update"),$(myComposent).attr("dati-id"));

            }
        }
    }
    LUNCH(eventName,id){
        document.addEventListener(eventName, function(e){
            setTimeout(function(){
                dati_headerBar.UPDATE(id)
            }, 100);
        }, false);
    }


}

$(document).ready(function(){
    $(document).on('click','[class=categories_container]',function(){

        var display = $("[class=container_add_cat]").css("display");

        if (display == "block") {
            $("[class=container_add_cat]").css("display", "none");

        } else {
            $("[class=container_add_cat]").css("display", "block");
            //vider msg erreur fo cat bar rest
            Categories_ui.msgErreurCatRest = [];
            dati_Erreurs.UPDATE("ErreursCatRestau");
            CategoriesBar_ui.msgErreurCatBar=[];
            dati_Erreurs.UPDATE("ErreursCatBar");
        }

    })
    $(document).on("mouseover",'[class="categories"]',function(){
        var myContainer = document.getElementById("ScrollBarHeaderShow"+dati_headerBar.scrollId+"") ;
        var hasScroll = myContainer.scrollWidth > myContainer.clientWidth;
        if(hasScroll){
            $("[DATI-ARROW]").css("display","inline-block");
        }

    })
    $(document).on("mouseleave",'[class="categories"]',function(){
        $("[DATI-ARROW]").css("display","none");
    })

/*    $(document).on('click','[class=container_add_cat]',function(){

       $("[class=container_add_cat]").css("display", "none");

    })*/
})


let dati_headerBar = new Ui_headerBar();