<div class="service_content"   DATI-PAGE="ConciergeContents" >





  <div class="bar_container"
  DATI-COMPOSENT="barHeader"
  DATI-LIST="congContent_ui.categorie"
  DATI-LANGUAGE="formTrx_ui['langues']"
  DATI-ID="ConciergeBar"
  DATI-UPDATE="ConciergeUpdateBar"
  DATI-READ-VALUE-INPUT="CategoriesConc_ui.READ_INPUT_CAT()"
  DATI-DELETE-CAT="CategoriesConc_ui.delete(this)"
  DATI-UPDATE-CAT="CategoriesConc_ui.update(this)"
  DATI-FILTER-CONTENT="congContent_ui.SETSELECTED_CAT(this)"
  DATI-CANCEL-ALERTE-HEADER= "CategoriesConc_ui.CANCEL_ALERTE()"
  DATI-VALIDATE-ALERTE-HEADER= "CategoriesConc_ui.VALIDATE_ALERTE()"
  DATI-TITLE-HEADER=" Concierge_ui.selectedConcierge.title"
  DATI-ICON-HEADER="/assets/img/sidebar/notifications.svg"
  DATI-CANCEL-FORM="CategoriesConc_ui.TEST_CANCEL_FORM()"
  DATI-ID-MSG-ERREURS="ErreursCatRestau"
  DATI-LIST-MSGE-RREURS="Categories_ui.msgErreurCatRest"


  >


  </div>


<div class="container_content">
<!-- add button  -->
<div class="add_button"  DATI-ADD-BT="display" DATI-LINK="addConciergeItem" DATI-PATH="Services &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;   Concierge &nbsp;&nbsp;&nbsp;    >  &nbsp;&nbsp;&nbsp;  Add Form Item"  DATI-DISPLAY="grid" style="height:150px ; border-radius: 10px;">
    <img src="/assets/img/services/plus.svg" style="height: 30px;width: 30px;" alt="add">
    <p>Add</p>
</div>
  <div  class="concierge_card_container"
  DATI-COMPOSENT="ConciergeCards"
  DATI-LIST="congContent_ui.cards"
  DATI-ID="ConciergeContentList"
  DATI-SWITECH="position:absolute;left:7%;bottom:12px; z-index:3";
  DATI-SWITECH-TOGGOLE="iConciergeContent.ENABLE_CONCIERGE_ITEM"
  CARDS-BEFORE-LINK=""
  CARDS-LINK=""
  DATI-UPDATE="ConciergeContentRecieve"
  >
 <div DATI-COMPOSENT="ConciergeCards-icon-edit" DATI-LINK="editItemConcierge" DATI-PATH="Services &nbsp;&nbsp;&nbsp;> &nbsp;&nbsp;&nbsp;   Concierge &nbsp;&nbsp;&nbsp;    >  &nbsp;&nbsp;&nbsp;  Edit Form Item" dati-display="grid" onclick="congContent_ui.SETSELECTED_detail(this)"></div>
  <div DATI-COMPOSENT="ConciergeCards-icon-delete"    onclick="congContent_ui.delete(this)  "></div>

  </div>
</div>
<!-- end button  -->




<div
 DATI-COMPOSENT="alerteContainer"
 DATI-ID="ItemAlerte"
 DATI-UPDATE="showAlerteItem"
 DATI-CANCEL = "congContent_ui.CANCEL_ALERTE()"
 DATI-VALIDATE = "congContent_ui.VALIDATE_ALERTE()"
 >
  </div>



</div>
