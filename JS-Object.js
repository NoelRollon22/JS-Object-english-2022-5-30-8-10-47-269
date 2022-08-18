//1
var user = {
  name: "John",
  surname: "Mike"
}
console.log(user.name);
user.name = "Peter";
console.log(user.name);
delete user.name;
console.log(user.name);
//2
var fruit = {
  apple: 20,
  pear: 20,
  peach: 10 ,
  total_pieces_basket : function(){
                  var apple = this.apple;
                  var pear = this.pear;
                  var peach = this.peach;
                  var total = (apple+peach+pear);
                  return total;
                }
}
console.log( fruit.total_pieces_basket() );