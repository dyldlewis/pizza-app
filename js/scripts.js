//=======================
//     Back end Logic
//=======================
function Order(orderName, size, toppings) {
  this.order = orderName;
  this.size = size;
  this.toppings = toppings;
  this.cost = 0;
};

Order.prototype.sizeCost = function() {
  if (this.size === "Small") {
      this.cost = 8 + (2 * this.toppings.length);
  } else if (this.size === "Medium") {
    this.cost = 10 + (2 * this.toppings.length);
  } else if (this.size === "Large") {
    this.cost = 12 + (2 * this.toppings.length)
  } else if (this.size === "Extra Large") {
    this.cost = 14 + (2 * this.toppings.length)
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
    var cost = newOrder.sizeCost()
    $("#orderSize").text(size);
    $("#toppingAmount").text(toppings.length);
    $("#customer").text(orderName);
    $("#reciept").text(cost);
    $("#result").show();
    console.log(orderName);
    console.log(size);
    console.log(toppings);
    console.log(newOrder);
  });
});
