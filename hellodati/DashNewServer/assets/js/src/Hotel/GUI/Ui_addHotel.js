let Ui_addHotel = class {
    constructor() {
        this.EVENT_UI();
    }

    CHECK_EMAIL(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


    VERIF_FORM_ADD_HOTEL(element){

    }

    EVENT_UI(){
        $(document).ready(function(){
            $(document).on('click','[DATI-ID=btnAddChain]',function(){


                var display = $("[class=pupup_up_add_chain]").css("display");
                if (display == "block") {
                    $("[class=pupup_up_add_chain]").css("display", "none");

                } else {
                    $("[class=pupup_up_add_chain]").css("display", "block");
                }

            });


            $(document).on('click','[DATI-ID=add_chain]',function(){

                var chainName = document.getElementById("chain_name").value;
                var i =1;

                $("[DATI-ID=select_chain]").append($('<option>', {
                    value: i,
                    text: chainName
                }));
                document.getElementById("chain_name").value="";
                $("[class=pupup_up_add_chain]").css("display", "none")

            });


            $(document).on('click','[DATI-COMPOSENT=SUBMIT]',function() {
                var formId = $(this).attr("DATI-FOR");
                var fn = $("[FORM-ID="+formId+"]").attr("DATI-SEND");
                var element = "$('[FORM-ID="+formId+"]')";
                fn=fn+"("+element+")";
                eval(fn);
            });


        });


    }
};

let dati_add_hotel = new Ui_addHotel();





