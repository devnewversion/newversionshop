var baseURL = '/admin/orders/';
var orderItems = new Vue({
  el : "#nv-orders-list" ,
  data : {
    orderList : [] ,
    deliveryMethodFilter : 'Delivery Method' ,
    orderStatusFilter : 'Order Status'
  } ,
  methods : {
    loadOrderList : function () {
      const t = this;
      axios.
      get('/user/orders/recent/list/'+userId).
      then(function(response) {
        // t.orderList = response.data;
      }).
      catch(function(error) {
        swalWentWrong();
      }).finally(function(response) {});
    } ,
    pad : function(value) {
      return pad(value , 10);
    },
    getOrderItems : function(orderId) {
        const t = this;
        orderId = pad(orderId,10);
        if ($("#itemListModal").get(0)){
            $("#nv-order-item-list").empty();
            // $("#nv-order-item-list").append("<nv-order-item-list></nv-order-item-list>");
        }
        var modal = `
        <div class="modal fade nv-modal" id="itemListModal" tabindex="-1" role="dialog" aria-labelledby="itemList" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <div class="modal-title">
                  <div class="nv-title nv-font-bc">EDIT ITEM</div>
                  <div class="nv-subtitle">
                    <h3>Order ID : {{orderId}} </h3>
                    <h3>Total    :  ₱ {{numberWithCommas(totalAmount)}} </h3>
                  </div>
                </div>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="modal-body">
                <table class="nv-table table table-striped "  >
                  <thead>
                    <tr>
                      <td class="nv-font-bc" scope="col">Product Id</td>
                      <td class="nv-font-bc" scope="col">Product Category</td>
                      <td class="nv-font-bc" scope="col">Product Name</td>
                      <td class="nv-font-bc" scope="col">Brand</td>
                      <td class="nv-font-bc" scope="col">Order Quantity</td>
                      <td class="nv-font-bc" scope="col">Product Price</td>
                      <td class="nv-font-bc" scope="col">Total Amount</td>
                    </tr>
                  </thead>
                  <tbody id="table-order-item-list">
                    <tr v-for="item in orderItems" class="item-list">
                      <td   scope="col">{{pad(item.product_id,10)}}</td>
                      <td   scope="col">{{item.product_categ}}</td>
                      <td   scope="col">{{item.name}}</td>
                      <td   scope="col">{{item.brand}}</td>
                      <td   scope="col">{{item.quantity}}</td>
                      <td   scope="col">₱{{numberWithCommas(item.price)}}</td>
                      <td scope="col">₱ {{numberWithCommas(item.price * item.quantity)}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>`;
        $("#nv-order-item-list").append(modal);
        new Vue(
          {
            el  : "#nv-order-item-list" ,
            data : {
              orderItems : [] ,
              orderId : orderId ,
              totalAmount : 0
            } ,
            mounted (){
              const t =  this;
              axios.
              get(baseURL+'items/'+orderId).
              then(function (response) {
                t.orderItems = response.data;
              }).catch(function(error) {
                swalWentWrong();
              }).finally(function (response) {

              });

              axios.
              get(baseURL+'items/total/'+orderId).
              then(function (response) {
                t.totalAmount = response.data.total_amount;
              }).catch(function(error) {
                swalWentWrong();
              }).finally(function (response) {

              });
            } ,
            methods :{
              pad : function (value , ln) {
                return pad(value , ln);
              },
              numberWithCommas : function(x) {
                return numberWithCommas(x);
              }
            }
          }
        );

        $("#itemListModal").modal();

    }
  }
});

 
