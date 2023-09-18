<div class="service_content"   DATI-PAGE="Restaurant/Contents" >





  <div class="bar_container"
  DATI-COMPOSENT="barHeader"
  DATI-LIST="restauContent_ui.categorie"
  DATI-LANGUAGE="langueItem_ui.langues"
  DATI-ID="Bar"
  DATI-UPDATE="headerShow"
  DATI-READ-VALUE-INPUT="Categories_ui.READ_INPUT_CAT()"
  DATI-DELETE-CAT="Categories_ui.delete(this)"
  DATI-UPDATE-CAT="Categories_ui.update(this)"
  DATI-FILTER-CONTENT="restauContent_ui.SETSELECTED_CAT(this)"
  DATI-CANCEL-ALERTE-HEADER= "Categories_ui.CANCEL_ALERTE()"
  DATI-VALIDATE-ALERTE-HEADER= "Categories_ui.VALIDATE_ALERTE()"
  DATI-TITLE-HEADER="FOODS"
  DATI-ICON-HEADER="/assets/img/serviceIcon/restaurantWhite.svg"

  >


  </div>

<div class="container_content">
<!-- add button  -->
<div class="add_button_restau"  DATI-ADD-BT="display" DATI-LINK="addDish"  DATI-DISPLAY="grid" >
    <img src="/assets/img/services/plus.svg" style="height: 30px;width: 30px;" alt="add">
    <p>Add</p>
</div>
<!-- end button  -->




  <div  class="restaurant_card_container" id="restaurantCardContainer"
  DATI-COMPOSENT="RestaurantCards"
  DATI-LIST="restauContent_ui.cards"
  DATI-ID="foodsList"
  DATI-SWITECH="position:absolute;right:8px;top:12px; z-index:3";
  DATI-UPDATE="restauContentShow"
  DATI-SWITECH-TOGGOLE="icontentRestau.ENABLE_FOODS"
  DATI-ICON-CARD="/assets/img/serviceIcon/restaurant.svg"
  style="text-align: left";
  >
 <div DATI-COMPOSENT="RestaurantCards-icon-detail"
 DATI-LINK="detailDish"
 onclick="restauContent_ui.SETSELECTED_detail(this)"
 DETAIL-TITLE="restauContent_ui.selectedFood.title"
 DETAIL-DESCRIPTION="restauContent_ui.selectedFood.description"
 DETAIL-IMAGE="restauContent_ui.selectedFood.image"
 >
 </div>
 <div DATI-COMPOSENT="RestaurantCards-icon-edit" DATI-LINK="editDishPage"  dati-display="grid" onclick="restauContent_ui.SETSELECTED_detail(this)"></div>

  <div DATI-COMPOSENT="RestaurantCards-icon-delete"    onclick="restauContent_ui.delete(this)"></div>
  </div>



 </div>

<div
 DATI-COMPOSENT="alerteContainer"
 DATI-ID="DishAlerte"
 DATI-UPDATE="showAlerteDish"
 DATI-CANCEL = "restauContent_ui.CANCEL_ALERTE()"
 DATI-VALIDATE = "restauContent_ui.VALIDATE_ALERTE()"
 >
  </div>




</div>
