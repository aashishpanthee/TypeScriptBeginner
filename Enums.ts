/* Enums allows us to define a set of named constants.
We can give these constants numeric or string values.
There's quite a few options when it comes to enums! */

// Numeric enums
enum Responses{
    no,
    yes,
    maybe,
}

enum OrderStatus{
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED,
}
const myStatus=OrderStatus.DELIVERED;

function isDelivered(status:OrderStatus){
    return status===OrderStatus.DELIVERED;
}
console.log(isDelivered(myStatus));

enum Arrowkeys{
    UP="up",
    DOWN="down",
    LEFT="left",
    RIGHT="right",
}
Arrowkeys.UP;