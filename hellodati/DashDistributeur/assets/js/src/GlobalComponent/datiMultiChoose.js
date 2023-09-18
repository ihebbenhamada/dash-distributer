let Ui_DatiMultiChoose = class {
    constructor() {
        this.EVENTS_UI();
        this.defaultLnagugeList = [];
        this.defaultLnagugeListDB = [];
        this.primaryLanguage = [];

    }

    SHOW_CONTAINER(elem) {
        var id = $(elem).parent().attr("id");
        if ($("[DATI-SHOW-ITEM-SCROLL=" + id + "]").css('display') == 'none') {
            $("[DATI-SHOW-ITEM-SCROLL=" + id + "]").css('display', 'flex')
        } else {
            $("[DATI-SHOW-ITEM-SCROLL=" + id + "]").css('display', 'none')
        }


    }
     containsObject(obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i].languageName === obj.languageName) {
                console.log("true");
                return true;

            }else{
                console.log("false");
                return false;
            }
        }

    }
    GET_SELECTED_IDS(elem){

    }
    CHECK_LANGUAGE(elem) {
        var currentLanguage = $(elem).attr("DATI-CHECKBOX-CONTAINER");
        var ItemToAdded = $(elem).attr("LIST-CHECKBOX");
        ItemToAdded = JSON.parse(ItemToAdded);
        console.log(ItemToAdded,"currentLanguage");
        /* TEST IF A NRML ARRAY OF LANGUAGE DOESN4T HAVE ATTRIBUT DATI-DEFAULT LANGUAGE ANA F IT HAVE THIS ATTRIBUTE ELSE DO ANOTHER TRAITMENT */
            console.log(currentLanguage,"currentLanguage");
            /* TEST DISPLAY AND IF CHECKED OR NOT*/
            if ( $('[CHECKED-ITEM-IN-LIST='+currentLanguage+']').css('display') == 'none') {
                $('[CHECKED-ITEM-IN-LIST='+currentLanguage+']').css('display', 'flex');
                $('[CHECKED-ITEM-IN-LIST='+currentLanguage+']').attr('DATI-ITEM-ADDED', 'true');

            } else {
                $('[CHECKED-ITEM-IN-LIST='+currentLanguage+']').css('display', 'none');
                $('[CHECKED-ITEM-IN-LIST='+currentLanguage+']').attr('DATI-ITEM-ADDED', 'false');
            }
            /* TEST IF CHECKED ANA PUSH OR ELSE REMOVE ITEM*/
          if(   $('[CHECKED-ITEM-IN-LIST='+currentLanguage+']').attr('DATI-ITEM-ADDED')== 'true'){
              dati_multichoose.defaultLnagugeList.push(ItemToAdded);
              console.log(dati_multichoose.defaultLnagugeList, "lauagnguagelange add");
              /*    DB LIST */
              console.log(ItemToAdded.id , "lauagnguagelange id");
              console.log(ItemToAdded.isPrimary , "lauagnguagelange isPrimary");
              dati_multichoose.defaultLnagugeListDB.push([ItemToAdded.id,ItemToAdded.isPrimary]);
              console.log(dati_multichoose.defaultLnagugeListDB, "lauagnguagelange add DB");
           /*   UPDATE PRIMARY LIST*/
              dati_onechoose.UPDATE("inputListOfDefaultLanguage");

          } else{
              var elementToDelete = ItemToAdded.maternalName;
              console.log(elementToDelete,"elementToDelete");
              var indexElementToRemove = dati_multichoose.defaultLnagugeList.findIndex(x => x.maternalName === elementToDelete);
              console.log(indexElementToRemove,"indexElementToRemove");
              dati_multichoose.defaultLnagugeList.splice(indexElementToRemove, 1);
              dati_onechoose.UPDATE("inputListOfDefaultLanguage");
              console.log(dati_multichoose.defaultLnagugeList, "lauagnguagelange delete");
          }


        console.log(dati_multichoose.defaultLnagugeList, "languagelanguage finale");
    }

    INPUT(label, id) {
        console.log(id, "clickkkkkkkkkk sar1");
        return "<div class='list-clickable' DATI-SHOW-LIST-SCROLL='" + id + "' onclick='dati_multichoose.SHOW_CONTAINER(this)'>" + label + "</div>" +
            '<div class="container_list"  DATI-SHOW-ITEM-SCROLL="' + id + '" >' +

            '</div>'

    }

    ITEM_BLOCK(list, id,brand) {
        if (brand==false){
            console.log(id,"étesttttidm")
            var myList = JSON.stringify(list);
            return '<div class="langage_item" LIST-CHECKBOX=' + myList + ' DATI-CHECKBOX-CONTAINER=' + list.maternalName + id + ' onclick="dati_multichoose.CHECK_LANGUAGE(this)">' +
                '<span class="container_order_input">'+
                '<i class="fas fa-check check" style="display: none;" aria-hidden="true" CHECKED-ITEM-IN-LIST='+list.maternalName + id+' DATI-ITEM-ADDED="false"></i>'+
                '</span>'+
                '<div>' + list.maternalName + '</div>' +
                '</div>'
        }else {
            console.log(id,"étesttttidm")
            var myList = JSON.stringify(list);
            return '<div class="langage_item" LIST-CHECKBOX=' + myList + ' DATI-CHECKBOX-CONTAINER=' + list.name + id + ' onclick="dati_multichoose.GET_SELECTED_IDS(this)">' +
                '<span class="container_order_input">'+
                '<i class="fas fa-check check" style="display: none;" aria-hidden="true" CHECKED-ITEM-IN-LIST='+list.name + id+' DATI-ITEM-ADDED="false"></i>'+
                '</span>'+
                '<div>' + list.name + '</div>' +
                '</div>'
        }

    }

    UPDATE(id) {
        var InputC = $("[ID=" + id + "]");
        var label = $(InputC).attr("LABEL");
        var brand = $(InputC).attr("BRAND");
        var lists_name = $(InputC).attr("LIST");
        var lists = eval(lists_name);
        $(InputC).html("");
        var input = this.INPUT(label, id);
        $(InputC).append(input);
        var listItems = $(InputC).find("[DATI-SHOW-ITEM-SCROLL='" + id + "']");
        if (brand=="false"){
            for (var i = 0; i < lists.length; i++) {
                var list = lists[i];
                console.log(list, "listlistggg");
                var item = "";
                item += this.ITEM_BLOCK(list, id,false);
                $(listItems).append(item);

            }
        }else {
            for (var i = 0; i < lists.length; i++) {
                var list = lists[i];
                console.log(list, "listlistggg");
                var item = "";
                item += this.ITEM_BLOCK(list, id,true);
                $(listItems).append(item);

            }
        }



    }


    EVENTS_UI() {
        $(document).ready(function () {
            var myComposents = document.querySelectorAll("dati_multichoose");
            for (var i = 0; i < myComposents.length; i++) {

                var myComposent = myComposents[i];
                if ($(myComposent).attr("UPDATE")) {
                    dati_multichoose.LUNCH($(myComposent).attr("UPDATE"), $(myComposent).attr("ID"));
                }
            }
        });


    }

    LUNCH(eventName, id) {
        document.addEventListener(eventName, function (e) {
            setTimeout(function () {
                dati_multichoose.UPDATE(id);
            }, 100);
        }, false);


    }


}


let dati_multichoose = new Ui_DatiMultiChoose();