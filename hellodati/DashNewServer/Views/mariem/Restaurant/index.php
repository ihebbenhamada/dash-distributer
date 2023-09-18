<div class="restaurants_container"  DATI-PAGE="Restaurant">

<!-- add button  -->
<div class="add_button_restau"  DATI-LINK="addFormServices"  DATI-DISPLAY="grid">
    <img src="/assets/img/services/plus.svg" style="height: 30px;width: 30px;" alt="add">
    <p>Add</p>
</div>
<!-- end button  -->


  <div  class="restaurant_card_container" id="restaurantCardContainer"
  DATI-COMPOSENT="RestaurantCards"
  DATI-LIST="restaurantCard_ui.cards"
  DATI-ID="RestaurantList"
  DATI-SWITECH="position:absolute;right:8px;top:12px; z-index:3";
  DATI-UPDATE="RestaurantCardReceive"
  CARDS-LINK="Restaurant\/Contents"
  DATI-ICON-CARD="/assets/img/serviceIcon/restaurant.svg"
  CARDS-BEFORE-LINK="restaurantCard_ui.SETSELECTED"
   DATI-SWITECH-TOGGOLE="irestaurantCard.ENABLE_RESTAURANT"
  >
    <div DATI-COMPOSENT="RestaurantCards-icon-detail"
     DATI-LINK="detailServices"
     DETAIL-TITLE="restaurantCard_ui.selectedRest.title"
     DETAIL-DESCRIPTION="restaurantCard_ui.selectedRest.description"
     DETAIL-IMAGE="restaurantCard_ui.selectedRest.image"
     onclick="restaurantCard_ui.SETSELECTED_detail(this)"></div>
      

    <div DATI-COMPOSENT="RestaurantCards-icon-edit" DATI-LINK="editRestauPage"  dati-display="grid" onclick="restaurantCard_ui.SETSELECTED_detail(this)"></div>
    <div DATI-COMPOSENT="RestaurantCards-icon-delete"    onclick=" restaurantCard_ui.delete(this) "></div>

  </div>


<div
 DATI-COMPOSENT="alerteContainer"
 DATI-ID="RestaurantAlerte"
 DATI-UPDATE="showAlerte"
 DATI-CANCEL = "restaurantCard_ui.CANCEL_ALERTE()"
 DATI-VALIDATE = "restaurantCard_ui.VALIDATE_ALERTE()">
  </div>

























</div>