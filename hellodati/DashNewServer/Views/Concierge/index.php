<div class="services_container" id="services_container"  DATI-PAGE="ConciergePage" dati-display="flex">
         <div class="add_button"  DATI-LINK="addConcierge" DATI-PATH="Services &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;   Concierge &nbsp;&nbsp;&nbsp;    >  &nbsp;&nbsp;&nbsp;  Add Form"   style="height:150px;border-radius: 10px;">
                    <img src="/assets/img/services/plus.svg" style="height: 30px;width: 30px;" alt="add">
                    <p>Add</p>
                </div>
                <!-- end button  -->

  <div  class="concierge_card_container"
  DATI-COMPOSENT="ConciergeCards"
  DATI-LIST="Concierge_ui.cards"
  DATI-ID="ConciergeList"
  DATI-SWITECH="position:absolute;left:7%;bottom:12px; z-index:3";
   DATI-SWITECH-TOGGOLE="iConcierge.ENABLE_CONCIERGE"
  CARDS-BEFORE-LINK="Concierge_ui.SETSELECTED"
  CARDS-LINK="ConciergeContents"
  CARDS-PATH="Services &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;   Concierge &nbsp;&nbsp;&nbsp;    >  &nbsp;&nbsp;&nbsp;  "
  DATI-UPDATE="ListConciergeReceive"
  >
 <div DATI-COMPOSENT="ConciergeCards-icon-edit" DATI-LINK="editConcierge" DATI-PATH="Services &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;   Concierge &nbsp;&nbsp;&nbsp;    >  &nbsp;&nbsp;&nbsp;  Edit Form"  dati-display="grid" onclick="Concierge_ui.SETSELECTED_detail(this)"></div>
  <div DATI-COMPOSENT="ConciergeCards-icon-delete"    onclick=" Concierge_ui.delete(this) "></div>

  </div>







<div
DATI-COMPOSENT="alerteContainer"
DATI-ID="ConcAlerte"
DATI-UPDATE="showAlerteConc"
DATI-CANCEL = "Concierge_ui.CANCEL_ALERTE()"
DATI-VALIDATE = "Concierge_ui.VALIDATE_ALERTE()"
>
 </div>






</div>
