<div class="service_content"   DATI-PAGE="Bar/Contents" >








          <div class="bar_container"
          DATI-COMPOSENT="barHeader"
          DATI-LIST="barContent_ui.categorie"
          DATI-ID="HeaderCB"
          DATI-UPDATE="barHeaderShow"
          DATI-READ-VALUE-INPUT="CategoriesBar_ui.READ_INPUT_CAT()"
          DATI-DELETE-CAT="CategoriesBar_ui.delete(this)"
          DATI-FILTER-CONTENT="barContent_ui.SETSELECTED_CAT(this)"
          DATI-CANCEL-ALERTE-HEADER= "CategoriesBar_ui.CANCEL_ALERTE()"
          DATI-VALIDATE-ALERTE-HEADER= "CategoriesBar_ui.VALIDATE_ALERTE()"
          DATI-TITLE-HEADER="DRINKS"
          DATI-ICON-HEADER="/assets/img/serviceIcon/barWhite.svg"

          >

          </div>

<div class="container_content">
<!-- add button  -->
<div class="add_button_restau"  DATI-ADD-BT="display" DATI-LINK="addDrinks"  DATI-DISPLAY="grid">
    <img src="/assets/img/services/plus.svg" style="height: 30px;width: 30px;" alt="add">
    <p>Add</p>
</div>
<!-- end button  -->

          <div  class="restaurant_card_container"
          DATI-COMPOSENT="RestaurantCards"
          DATI-LIST="barContent_ui.cards"
          DATI-ID="drinksList"
          DATI-SWITECH="position:absolute;right:8px;top:12px; z-index:3";
          DATI-UPDATE="barContentShow"
           DATI-ICON-CARD="/assets/img/serviceIcon/bar.svg"
          DATI-SWITECH-TOGGOLE="icontentBar.ENABLE_SERVICE"
          style="text-align: left";
          >

                   <div DATI-COMPOSENT="RestaurantCards-icon-detail"
                      DATI-LINK="detailDish"
                     onclick="barContent_ui.SETSELECTED_detail(this)"
                    DETAIL-TITLE="barContent_ui.selectedBar.title"
                    DETAIL-DESCRIPTION="barContent_ui.selectedBar.description"
                     DETAIL-IMAGE="barContent_ui.selectedBar.img"></div>

                    <div DATI-COMPOSENT="RestaurantCards-icon-edit" DATI-LINK="editDrinks"  dati-display="grid" onclick="barContent_ui.SETSELECTED_detail(this)"></div>

                    <div DATI-COMPOSENT="RestaurantCards-icon-delete"    onclick=" barContent_ui.delete(this) "></div>


        </div>
         </div>


        <div
        DATI-COMPOSENT="alerteContainer"
        DATI-ID="DrinksAlerte"
        DATI-UPDATE="showAlerteDrink"
        DATI-CANCEL = "barContent_ui.CANCEL_ALERTE()"
        DATI-VALIDATE = "barContent_ui.VALIDATE_ALERTE()">

        </div>
</div>