/* Enums allows us to define a set of named constants.
We can give these constants numeric or string values.
There's quite a few options when it comes to enums! */
// Numeric enums
var Responses;
(function (Responses) {
    Responses[Responses["no"] = 0] = "no";
    Responses[Responses["yes"] = 1] = "yes";
    Responses[Responses["maybe"] = 2] = "maybe";
})(Responses || (Responses = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var myStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
console.log(isDelivered(myStatus));
var Arrowkeys;
(function (Arrowkeys) {
    Arrowkeys["UP"] = "up";
    Arrowkeys["DOWN"] = "down";
    Arrowkeys["LEFT"] = "left";
    Arrowkeys["RIGHT"] = "right";
})(Arrowkeys || (Arrowkeys = {}));
Arrowkeys.UP;
