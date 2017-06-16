//=====================
//     Back end Logic
//=====================
function Order(orderName, size, toppings) {
  this.order = orderName;
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
};


Order.prototype.sizeCost = function() {
  if (this.size === "Small") {
      this.cost = 8 + (2.50 * this.toppings.length);
  } else if (this.size === "Medium") {
    this.cost = 10 + (2.50 * this.toppings.length);
  } else if (this.size === "Large") {
    this.cost = 12 + (2.50 * this.toppings.length)
  } else if (this.size === "Extra Large") {
    this.cost = 14 + (2.50 * this.toppings.length)
  }
  return this.cost;
};

// Order.prototype.totalCost = function(cost) {
//   if (this.toppings.length === 1) {
//     this.cost = cost + 2.50;
//   }
// };









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
    var cost = newOrder.sizeCost()
    $("#reciept").text(cost)
    console.log(orderName);
    console.log(size);
    console.log(toppings);
    console.log(newOrder);
  });
});
