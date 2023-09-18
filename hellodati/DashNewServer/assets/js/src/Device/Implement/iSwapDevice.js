class imp_SwapDevice{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }


    EVENTS_UI(){

        document.addEventListener("SHOW_PAGE", function(e){
            var page = e.detail.pageLink;
            if(page == "SwapDevice"){
                iRoom.GET_ALL_ROOMS();
                iRoom.GET_ROOMS_LINKED_TO_DEVICE();
                iDevice.AVAILABLE_DEVICES();
                swapDevice_ui.RESET_SWAP();
                var event = new CustomEvent("showMsgSwap");
                document.dispatchEvent(event);

            }else {
                swapDevice_ui.msgErreurSwap=[];
                dati_Erreurs.UPDATE("SwapErreurs");
            }

        }, false);
    }


    EVENTS_SSAPI(){


    }


}



let iSwapDevice = new imp_SwapDevice();