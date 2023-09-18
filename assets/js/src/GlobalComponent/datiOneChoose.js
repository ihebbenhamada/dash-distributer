let Ui_DatiOneChoose = class {
    constructor() {
        this.EVENTS_UI();
        this.primaryLanguage = [];

    }

    SHOW_CONTAINER_BOX(elem) {
        var id = $(elem).parent().attr("id");
        console.log(id,"myyidis test");
        if ($("[DATI-SHOW-ITEM-ONE-SCROLL=" + id + "]").css('display') == 'none') {
            $("[DATI-SHOW-ITEM-ONE-SCROLL=" + id + "]").css('display', 'flex')
        } else {
            $("[DATI-SHOW-ITEM-ONE-SCROLL=" + id + "]").css('display', 'none')
        }


    }

    containsObject(obj, list) {


        for (var i = 0; i < list.length; i++) {
            list[i].isPrimary=0;
        }
        for (var i = 0; i < list.length; i++) {
            console.log(list.length,"length");
            console.log(list[i].id,"last list itttiii");
            console.log(obj[0].id,"last list itttiii obj");
            if (list[i].id == obj[0].id) {
                console.log(1111111111111111111111,"last list  trueeeeeeeeeeeeeeeee");
                list[i].isPrimary=1;
                console.log(list[i],"last list  trueeeeeeeeeeeeeeeee");
            }
        }
        console.log(list,"last list 1");
    }
    containsObjectDb(obj, list) {

        for (var i = 0; i < list.length; i++) {
            list[i][1]=0;
        }
        for (var i = 0; i < list.length; i++) {
            console.log(list.length,"length");
            console.log(list[i].id,"last list itttiii");
            console.log(obj[0].id,"last list itttiii obj");
            if (list[i][0] == obj[0].id) {
                console.log(1111111111111111111111,"last list  trueeeeeeeeeeeeeeeee");
                list[i][1]=1;
                console.log(list[i],"last list  trueeeeeeeeeeeeeeeee");
            }
        }
        console.log(list,"last list db 1");
    }

    CHECK_LANGUAGE(elem) {
        var PrimaryLanguageToPush = $(elem).attr("dati-checkbox-container");
        var PrimaryLanguageItem = $(elem).attr("ITEM-CHECKBOX");
        PrimaryLanguageItem = JSON.parse(PrimaryLanguageItem);
        console.log(PrimaryLanguageItem,"PrimaryLanguageToPush");
        $("[ONE-CHECKED-ITEM-IN-LIST]").css('display','none');
        $("[ONE-CHECKED-ITEM-IN-LIST="+PrimaryLanguageToPush+"]").css('display','flex');
        $("[ONE-CHECKED-ITEM-IN-LIST]").attr("DATI-ITEM-CHEKED", "false");
        $("[ONE-CHECKED-ITEM-IN-LIST="+PrimaryLanguageToPush+"]").attr("DATI-ITEM-CHEKED", "true");
        console.log($("[ONE-CHECKED-ITEM-IN-LIST="+PrimaryLanguageToPush+"]").attr("DATI-ITEM-CHEKED"),"this.primaryLanguage nn")
        if(  $("[ONE-CHECKED-ITEM-IN-LIST="+PrimaryLanguageToPush+"]").attr("DATI-ITEM-CHEKED") == 'true'){
            this.primaryLanguage = [];
            this.primaryLanguage.push(PrimaryLanguageItem);
            console.log(this.primaryLanguage,"this.primaryLanguage dakhel");
        }
        console.log(this.primaryLanguage,"first last list obj");
        console.log(dati_multichoose.defaultLnagugeList,"first last list");
        this.containsObject(this.primaryLanguage,dati_multichoose.defaultLnagugeList);
        this.containsObjectDb(this.primaryLanguage,dati_multichoose.defaultLnagugeListDB);
        console.log(dati_multichoose.defaultLnagugeList,"last list");
    }

    INPUT(label, id) {
        console.log(id, "clickkkkkkkkkk sar1");
        return "<div class='list-clickable' DATI-SHOW-LIST-ONE-SCROLL='" + id + "' onclick='dati_onechoose.SHOW_CONTAINER_BOX(this)'>" + label + "</div>" +
            '<div class="container_list"  DATI-SHOW-ITEM-ONE-SCROLL="' + id + '" >' +

            '</div>'

    }

    ITEM_BLOCK(list, id) {
        console.log(id,"étesttttidm")
        var myList = JSON.stringify(list);
        return '<div class="langage_item" ITEM-CHECKBOX=' + myList + ' DATI-CHECKBOX-CONTAINER=' + list.maternalName + id + ' onclick="dati_onechoose.CHECK_LANGUAGE(this)">' +
            '<span class="container_order_input">'+
            '<i class="fas fa-check check" style="display: none;" aria-hidden="true" ONE-CHECKED-ITEM-IN-LIST='+list.maternalName + id+' DATI-ITEM-CHEKED="false"></i>'+
            '</span>'+
            '<div>' + list.maternalName + '</div>' +
            '</div>'
    }

    UPDATE(id) {
        var InputC = $("[ID=" + id + "]");
        var label = $(InputC).attr("LABEL");
        var lists_name = $(InputC).attr("LIST");
        var lists = eval(lists_name);
        $(InputC).html("");
        var input = this.INPUT(label, id);
        $(InputC).append(input);
        var listItems = $(InputC).find("[DATI-SHOW-ITEM-ONE-SCROLL='" + id + "']");
        for (var i = 0; i < lists.length; i++) {
            var list = lists[i];
            console.log(list, "listlistggg");
            var item = "";
            item += this.ITEM_BLOCK(list, id);
            $(listItems).append(item);

        }


    }


    EVENTS_UI() {
        $(document).ready(function () {
            var myComposents = document.querySelectorAll("dati_onechoose");
            for (var i = 0; i < myComposents.length; i++) {

                var myComposent = myComposents[i];
                if ($(myComposent).attr("UPDATE")) {
                    dati_onechoose.LUNCH($(myComposent).attr("UPDATE"), $(myComposent).attr("ID"));
                }
            }
        });



    }


    LUNCH(eventName, id) {
        document.addEventListener(eventName, function (e) {
            setTimeout(function () {
                dati_onechoose.UPDATE(id);
            }, 100);
        }, false);


    }


}


let dati_onechoose = new Ui_DatiOneChoose();