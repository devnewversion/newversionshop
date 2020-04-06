
Vue.component("nv-component-product-category" ,
{
  data :function() {
    return {
      typeList : []
    }
  } ,
  template : `<div>
    <a  v-for="type in typeList" :href="'/products/' + type.type_name" class="list-group-item list-group-item-action nv-items d-flex justify-content-between align-items-center">
     {{type.type_name}} <i class="fas fa-angle-right"></i>
     </a>
     </div>`,
  mounted (){
    const t = this;
    axios.
    get('/admin/products/type/all')
    .then(function(response) {

      t.typeList = response.data;

    }).catch(function(error) {
      swalWentWrong();
    }).finally(function(response) { });
  }
});
new Vue({el : ".nv-category-list"})

var loadProducts = new Vue({
  methods: {
    loadProducts : function(searchValue) {
      if ($("#nv-product-grid").get(0)){
          $("#nv-product-grid").empty();
          $("#nv-product-grid").append("<nv-component-product-grid></nv-component-product-grid>");
      }

      Vue.component("nv-component-product-grid" ,
      {
        data :function() {
          return {
            productList : [] ,
            isLoaded : ""
          }
        } ,
        template : `
          <div class="nv-product-grid row" v-if="productList.length > 0">
            <div v-for='product in productList' class="col-lg-4">
              <div class="card nv-product-card nv-default-box-shadow">
                <div class="nv-img-container">
                  <div class="nv-product-actions d-flex justify-content-center align-items-center">
                    <a href="#"><i class="fas fa-cart-plus"></i></a>
                    <div class="nv-heart-checkbox " >
                      <input type="checkbox" id="favorite1">
                      <label for="favorite1"><i class="far fa-heart"></i></label>
                    </div>

                  </div>
                  <img :src='getProductImagesPath("1585579559168bridal-banner-home.jpg")' >
                </div>
                <div class="card-body d-flex justify-content-between align-items-center">
                  <div  >
                    <div class="nv-name nv-font-bc">
                      {{product.name}}
                    </div>
                    <div class="nv-category">
                      {{product.product_categ}}
                    </div>
                  </div>
                  <div class="nv-price nv-font-bc">
                    ₱  {{numberWithCommas(product.price)}}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="d-flex justify-content-center">
            <div id="noResult" class="d-flex justify-content-center">
               <div class="fa fa-car fa-4x loader-icon"></div>
               <div class="fa fa-tools fa-4x loader-icon"></div>
            </div>
          </div>

            `,
        mounted (){
          const t = this;
          var url ="";

          if(searchValue){
            url = "/products/list/search/"+searchValue;
          }else{
            url = "/products/list/"+selectedCategory;
          }
          axios.
          // get('/admin/products/page/'+start+'/'+end)
          get(url)
          .then(function(response) {

            t.productList = response.data;
            $("#totalResult").text(t.productList.length);

          }).catch(function(error) {
            swalWentWrong();
          }).finally(function(response) {
            if(t.productList.length == 0){
              noResultMessage()
            }
           });

        } ,
        methods :{
          getProductImagesPath: function(img){
            return window.location.origin + "/uploads/images/products/"+img;
          } ,
          numberWithCommas : function(x) {
            return numberWithCommas(x);
          }
        }
      });
      new Vue({el : "#nv-product-grid"})
    }
  }
})
loadProducts.loadProducts();

new Vue({
  el : ".nv-search-filter-group" ,
  data : {
    searchValue : ""
  } ,
  methods : {
    searchProduct : function() {
      const t = this ;

      if (t.searchValue.trim()){
        loadProducts.loadProducts(t.searchValue);
      }else {
        swalWarning("Please enter product name");
      }

    }
  }
})