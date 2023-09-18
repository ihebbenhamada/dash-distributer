<div class="restaurants_container"  DATI-PAGE="Events">

<!-- add button  -->
<div class="add_button_restau"  DATI-LINK="addEventServices"  DATI-DISPLAY="grid">
    <img src="/assets/img/services/plus.svg" style="height: 30px;width: 30px;" alt="add">
    <p>Add</p>
</div>
<!-- end button  -->


  <div  class="restaurant_card_container" id="restaurantCardContainer"
  DATI-COMPOSENT="RestaurantCards"
  DATI-LIST="eventCard_ui.cards"
  DATI-ID="EventList"
  DATI-SWITECH="position:absolute;right:8px;top:12px; z-index:3";
  DATI-UPDATE="EventCardReceive"
   DATI-ICON-CARD="/assets/img/serviceIcon/event.svg"
  DATI-SWITECH-TOGGOLE="ieventCard.ENABLE_SERVICE"
  >
  <div DATI-COMPOSENT="RestaurantCards-icon-detail"
  DATI-LINK="detailServices"
  onclick="eventCard_ui.SETSELECTED_detail(this)"
  DETAIL-TITLE="eventCard_ui.selectedEvent.title"
  DETAIL-DESCRIPTION="eventCard_ui.selectedEvent.description"
  DETAIL-IMAGE="eventCard_ui.selectedEvent.img"></div>

  <div DATI-COMPOSENT="RestaurantCards-icon-edit" DATI-LINK="editEventPage"  dati-display="grid" onclick="eventCard_ui.SETSELECTED_detail(this)"></div>
  <div DATI-COMPOSENT="RestaurantCards-icon-delete"    onclick=" eventCard_ui.delete(this) "></div>

  </div>




<div
DATI-COMPOSENT="alerteContainer"
DATI-ID="EventAlerte"
DATI-UPDATE="showAlerteEvent"
DATI-CANCEL = "eventCard_ui.CANCEL_ALERTE()"
DATI-VALIDATE = "eventCard_ui.VALIDATE_ALERTE()"


>
 </div>






















</div>