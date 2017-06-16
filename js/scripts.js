//=====================
//     Back end Logic
//=====================
function Order(orderName, size, toppings) {
  this.order = orderName;
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
}


Order.prototype.cost = function() {
  if (this.size === "Small") {
    this.cost = 8;
  } else if (this.size === "Medium") {
    this.cost = 10;
  } else if (this.size === "Large") {
    this.cost = 12;
  } else if (this.size === "Extra Large") {
    this.cost = 14;
  }
  return this.cost;
};











//==========================
//      Front end Logic
//==========================
$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    var orderName = $("#order-name").val();
    var size = $("#size").val();
    var toppings = [];
    var newOrder = new Order(orderName, size, toppings);
    $("input:checkbox[name=toppings]:checked").each(function() {
      var topping = $(this).val();
      toppings.push(topping);

    });
    console.log(orderName);
    console.log(size);
    console.log(toppings);
    console.log(newOrder);
  });
});
