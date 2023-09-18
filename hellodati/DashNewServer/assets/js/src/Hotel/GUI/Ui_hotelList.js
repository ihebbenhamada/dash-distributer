let Ui_hotelList = class {
    constructor() {
        this.EVENTS_UI();
        this.selected_hotel = null;
    }

    DATALIST(data){
        this.hotels = data.list;

    }

    CREATE_ITEM(hotelName,nbStars,logo,id){
        var item = '<div class="hotel_selected" DATI-COMPOSENT="listHotelInfo_item" CLICK="'+id+'">' +
                        '<div class="logo_header_div">' +
                            '<img src="'+logo+'" alt="logo" class="logo">' +
                        '</div>' +
                        '<div class="hotel_description_header_div">' +
                            '<div class="hotel_name_header_div">'+hotelName+'' +
                                '<i class="fas fa-angle-down" style="color:#111f35; position: absolute; top: 0px; right: 0px"></i>' +
                            '</div>' +
                            '<div style="text-align: left">' +
                                    '<span style="color: #ffde66">' ;
                                for(var i =0;i<nbStars;i++){
                                    item = item+'★';
                                }
                            item = item+'' +
                                '</span>' +
                            '</div>' +
                        '</div>' +
                    '</div>';

        return item;
    }

    UPDATE(id){
        var listItems = $("[DATI-ID="+id+"]");
        var item="";
        for(var i=0; i<this.hotels.length; i++) {
            var hotel =this.hotels[i];
           item = item + this.CREATE_ITEM(hotel.name,hotel.stars,hotel.logo,i);

            }
        $(listItems).append(item);
    }










    EVENTS_UI(){
        var myComposents = document.querySelectorAll("[dati-composent=listHotelInfo]");
        for(var i=0; i<myComposents.length;i++){
            var myComposent = myComposents[i];
            console.log($(myComposent).attr("dati-id"));
            if($(myComposent).attr("dati-update")){
                this.LUNCH($(myComposent).attr("dati-id"),$(myComposent).attr("dati-update"));
            }
        }

        $(document).on('click','[DATI-COMPOSENT=listHotelInfo_item]',function(){
            var i = $(this).attr("CLICK");
            hotelList_ui.CHANGE_SELECTED_HOTEL(i);
        });

    }

    CHANGE_SELECTED_HOTEL(pos){
        this.selected_hotel = this.hotels[pos];
        console.log(this.selected_hotel);
        window.location.href = "http://v2.datihotel.com/";
    }
    LUNCH(id,eventName){
        document.addEventListener(eventName, function(e){
            setTimeout(function(){
                hotelList_ui.UPDATE(id);
            }, 100);
        },true);
    }

};

let hotelList_ui = new Ui_hotelList();