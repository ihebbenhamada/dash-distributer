<div class="restaurants_container"  DATI-PAGE="Leisure" DATI-DISPLAY="flex">

<!-- add button  -->
<div class="add_button_restau"  DATI-LINK="addLeisureServices" DATI-PATH="Services &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;   Leisure &nbsp;&nbsp;&nbsp;    >  &nbsp;&nbsp;&nbsp;  Add Form" DATI-DISPLAY="grid">
    <img src="/assets/img/services/plus.svg" style="height: 30px;width: 30px;" alt="add">
    <p>Add</p>
</div>
<!-- end button  -->


  <div  class="restaurant_card_container" id="restaurantCardContainer"
  DATI-COMPOSENT="RestaurantCards"
  DATI-LIST="leisureCard_ui.cards"
  DATI-ID="LeisureList"
  DATI-SWITECH="position:absolute;right:8px;top:12px; z-index:3";
  DATI-UPDATE="LeisureCardReceive"
  CARDS-LINK=""
  DATI-ICON-CARD="/assets/img/serviceIcon/leisure.svg"
  CARDS-BEFORE-LINK="restaurantCard_ui.SETSELECTED"
   DATI-SWITECH-TOGGOLE="iLeisureCard.ENABLE_LEISURE"
  >
  <div DATI-COMPOSENT="RestaurantCards-icon-detail"
      DATI-LINK="detailServices"
      onclick="leisureCard_ui.SETSELECTED_detail(this)"
      DETAIL-TITLE="leisureCard_ui.selectedLeisure.title"
      DETAIL-DESCRIPTION="leisureCard_ui.selectedLeisure.description"
      DETAIL-IMAGE="leisureCard_ui.selectedLeisure.image"></div>

       <div DATI-COMPOSENT="RestaurantCards-icon-edit" DATI-LINK="editLeisurePage"  DATI-PATH="Services &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;   Leisure &nbsp;&nbsp;&nbsp;    >  &nbsp;&nbsp;&nbsp;  Edit Form"dati-display="grid" onclick="leisureCard_ui.SETSELECTED_detail(this)"></div>
         <div DATI-COMPOSENT="RestaurantCards-icon-delete"    onclick=" leisureCard_ui.delete(this) "></div>

  </div>



<div
DATI-COMPOSENT="alerteContainer"
DATI-ID="LeisureAlerte"
DATI-UPDATE="showAlerteLeisure"
DATI-CANCEL = "leisureCard_ui.CANCEL_ALERTE()"
DATI-VALIDATE = "leisureCard_ui.VALIDATE_ALERTE()"


>
 </div>






















</div>