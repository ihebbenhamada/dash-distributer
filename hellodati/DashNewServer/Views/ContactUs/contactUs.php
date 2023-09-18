<div class="form_add" FORM-ID="form_add_contact_us" DATI-SEND="dati_contact_us.VERIF_FORM_CONTACT_US"  DATI-PAGE="ContactUs">

    <div class="header_add_form" style="background-color:#111f35;height: 35px;">
    <i class="far fa-id-card" style="font-size: 20px;margin-right: 5px;"></i>
        <label style="margin-left: 5px"> Contact Us</label>
    </div>
    <div class="container_contact_us" FORM-ACTION="/Contact/Add" DATI-FORM="add-room">
            <dati-contactUs  class="contact_item"  ID="contactUsHotel" LIST="dati_contact_us.contactInfo" UPDATE="showContactUs" ></dati-contactUs>
    </div>
        <!--   alert-->
        <div
                                  DATI-COMPOSENT="alerteContainer"
                                  DATI-ID="contactAlerteContact"
                                  DATI-UPDATE="showContactAlerteContact"
                                  DATI-CANCEL = "dati_contact_us.CANCEL_ALERTE()"
                                  DATI-VALIDATE = "dati_contact_us.VALIDATE_ALERTE()"
                                  >
                                   </div>
                                   <!-- end  alert-->
</div>