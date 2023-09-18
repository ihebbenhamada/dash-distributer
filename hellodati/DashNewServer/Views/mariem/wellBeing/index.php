<div class="restaurants_container"  DATI-PAGE="Well-being">

<!-- add button  -->
<div class="add_button_restau"  DATI-LINK="addWellBServices"  DATI-DISPLAY="grid">
    <img src="/assets/img/services/plus.svg" style="height: 30px;width: 30px;" alt="add">
    <p>Add</p>
</div>
<!-- end button  -->


  <div  class="restaurant_card_container"
  DATI-COMPOSENT="RestaurantCards"
  DATI-LIST="WellBeingCard_ui.cards"
  DATI-ID="wellBList"
  DATI-SWITECH="position:absolute;right:8px;top:12px; z-index:3";
  DATI-UPDATE="wellBeingCardReceive"
  CARDS-LINK=""
  DATI-ICON-CARD="/assets/img/serviceIcon/wellB.svg"
  DATI-SWITECH-TOGGOLE="iWellBeingCard.ENABLE_SERVICE"
  >
  <div DATI-COMPOSENT="RestaurantCards-icon-detail"
      DATI-LINK="detailServices"
      onclick="WellBeingCard_ui.SETSELECTED_detail(this)"
      DETAIL-TITLE="WellBeingCard_ui.selectedLeisure.title"
      DETAIL-DESCRIPTION="WellBeingCard_ui.selectedLeisure.description"
      DETAIL-IMAGE="WellBeingCard_ui.selectedLeisure.img"></div>

       <div DATI-COMPOSENT="RestaurantCards-icon-edit" DATI-LINK="editWellBPage"  dati-display="grid" onclick="WellBeingCard_ui.SETSELECTED_detail(this)"></div>
         <div DATI-COMPOSENT="RestaurantCards-icon-delete"    onclick=" WellBeingCard_ui.delete(this) "></div>

  </div>



<div
DATI-COMPOSENT="alerteContainer"
DATI-ID="wellBAlerte"
DATI-UPDATE="showAlerteWellB"
DATI-CANCEL = "WellBeingCard_ui.CANCEL_ALERTE()"
DATI-VALIDATE = "WellBeingCard_ui.VALIDATE_ALERTE()"


>
 </div>






















</div>