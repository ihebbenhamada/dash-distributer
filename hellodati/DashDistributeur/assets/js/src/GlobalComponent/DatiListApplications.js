let Ui_DatiListApplications = class {
    constructor() {
        this.EVENTS_UI();
        this.listServiceDB=[];
    }
    PUSH_SERVICE(elem){
        console.log(  this.listServiceDB,"all service list");
        var id = $(elem).attr("DATI-SERVICE-ID");
        console.log(id,"service id")
        var serviceId = parseInt(id);
        console.log(  serviceId,"id init service");
        var title = $(elem).attr("DATI-SERVICE-TITLE");
        console.log(  title,"title service");
        var checked =$(elem).attr("ITEM-CHEKCKED");
           /* TEST DISPLAY AND IF CHECKED OR NOT*/
        if ( $("[DATI-IS-CHECKED-SERVICE-"+title+"]").css('display') == 'none') {
            $("[DATI-IS-CHECKED-SERVICE-"+title+"]").css('display', 'flex');
            $("[DATI-IS-CHECKED-SERVICE-"+title+"]").attr('DATI-IS-CHECKED-SERVICE-'+title+'', 'true');

        }
        else {
            $("[DATI-IS-CHECKED-SERVICE-"+title+"]").css('display', 'none');
            $("[DATI-IS-CHECKED-SERVICE-"+title+"]").attr('DATI-IS-CHECKED-SERVICE-'+title+'', 'false');
        }
        /* TEST IF CHECKED ANA PUSH OR ELSE REMOVE ITEM*/
        if(  $("[DATI-IS-CHECKED-SERVICE-"+title+"]").attr('DATI-IS-CHECKED-SERVICE-'+title+'') == 'true'){

            var itemToAdd = DatiListApplications_ui.listServiceDB.includes(serviceId);
              if(!itemToAdd){
                  DatiListApplications_ui.listServiceDB.push(serviceId);
              }


        }
        else{
            var itemToDelete = DatiListApplications_ui.listServiceDB.includes(serviceId);
            if(itemToDelete){
                var elementToDelete = serviceId;
                var indexElementToRemove = DatiListApplications_ui.listServiceDB.indexOf(elementToDelete);
                if (indexElementToRemove > -1) {
                    DatiListApplications_ui.listServiceDB.splice(indexElementToRemove, 1);
                }
            }
        }
    }



    ApplicationsItemCart(list){
        if(list.active){
            var checkbox =  '<i class="fas fa-check check" style="display: flex;" aria-hidden="true" DATI-IS-CHECKED-SERVICE-'+list.libelle+'="true" ></i>' ;
        }else{
            var checkbox =  '<i class="fas fa-check check" style="display: none;" aria-hidden="true" DATI-IS-CHECKED-SERVICE-'+list.libelle+'="false" ></i>' ;
        }
        return '<div class="container-service-item" onclick="DatiListApplications_ui.PUSH_SERVICE(this)" DATI-SERVICE-ID='+list.id+' DATI-SERVICE-TITLE='+list.libelle+' >'+
            '<div class="image-container-service" style="background-image: url('+list.img_dash+')"></div>'+
            '<div class="action-container">'+
            '<span>'+
            ''+checkbox+''+
            '</span>'+
            '<label class="title-service">'+list.libelle+'</label>'+
            '</div>'+
            '</div>'
    }


    UPDATE(id){
        console.log(id,"service id first");
        var Applications = $("[ID="+id+"]");
        var lists_name = $(Applications).attr("LIST");
        var lists = eval(lists_name);
        console.log(lists,"service lists first");
        $(Applications).html("");
        for(var i=0; i<lists.length; i++) {
            console.log(lists.length,"length service")
            var list = lists[i];
            this.listServiceDB.push(list.id);
            var ApplicationsItem = "";
            ApplicationsItem += this.ApplicationsItemCart(list);
            $(Applications).append(ApplicationsItem);
            console.log(list.id,"id service")

        }
        this.DRAG_SCROLL(id);


    }

    EVENTS_UI(){
        $(document).ready(function() {
            var myComposents = document.querySelectorAll("dati-list-application");
            for (var i = 0; i < myComposents.length; i++) {
                var myComposent = myComposents[i];
                console.log(myComposent,"apppppp");
                if ($(myComposent).attr("update")) {
                            DatiListApplications_ui.LUNCH($(myComposent).attr("UPDATE"), $(myComposent).attr("ID"));
                }
            }
        });
    }

    LUNCH(eventName, id) {
        document.addEventListener(eventName, function (e) {
            setTimeout(function () {
                DatiListApplications_ui.UPDATE(id);
            }, 100);
        }, false);


    }
    DRAG_SCROLL(id) {
        const slider = document.querySelector('[ID='+id+']');

        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;

        });

    }
    SCROLL_LEFT(arrow){
        var elm =$(arrow).parent().find("[id=ListApplicationHotel]");
        elm[0].scrollBy(-100, 0);
    }
    SCROLL_RIGHT(arrow){
        var elm =$(arrow).parent().find("[id=ListApplicationHotel]");
        elm[0].scrollBy(100, 0);
    }

};

let DatiListApplications_ui = new Ui_DatiListApplications();