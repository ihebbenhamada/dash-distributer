<div class="restaurants_container"  DATI-PAGE="Bar">

<!-- add button  -->
<div class="add_button_restau"  DATI-LINK="addBarServices"  DATI-DISPLAY="grid">
    <img src="/assets/img/services/plus.svg" style="height: 30px;width: 30px;" alt="add">
    <p>Add</p>
</div>
<!-- end button  -->


  <div  class="restaurant_card_container"
  DATI-COMPOSENT="RestaurantCards"
  DATI-LIST="barCard_ui.cards"
  DATI-ID="BarList"
  CARDS-BEFORE-LINK="barCard_ui.SETSELECTED"
  DATI-SWITECH="position:absolute;right:8px;top:12px; z-index:3";
  DATI-UPDATE="BarCardReceive"
  DATI-ICON-CARD="/assets/img/serviceIcon/bar.svg"
 CARDS-LINK="Bar\/Contents"

  >
    <div DATI-COMPOSENT="RestaurantCards-icon-detail"
     DATI-LINK="detailServices"
     onclick="barCard_ui.SETSELECTED_detail(this)"
    DETAIL-TITLE="barCard_ui.selectedBar.title"
    DETAIL-DESCRIPTION="barCard_ui.selectedBar.description"
     DETAIL-IMAGE="barCard_ui.selectedBar.img"></div>
    <div DATI-COMPOSENT="RestaurantCards-icon-edit" DATI-LINK="editBarPage"  dati-display="grid" onclick="barCard_ui.SETSELECTED_detail(this)"></div>
    <div DATI-COMPOSENT="RestaurantCards-icon-delete"    onclick=" barCard_ui.delete(this) "></div>

  </div>


<div
DATI-COMPOSENT="alerteContainer"
DATI-ID="BarAlerte"
DATI-UPDATE="showAlerteBar"
DATI-CANCEL = "barCard_ui.CANCEL_ALERTE()"
DATI-VALIDATE = "barCard_ui.VALIDATE_ALERTE()"

>
 </div>

























</div>