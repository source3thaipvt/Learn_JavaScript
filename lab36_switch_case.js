// switch... case: dùng để thay thế if else nếu quá nhiều trường hợp
// thich hợp làm menu < boi khac la có thể lựa chọn case: 'value' khi nhap gia tri vao>
/**
 * Bai toan nember khi dua the thanh vien bronze silver || gold || diamond
 *  */
var numberCard = {
  tier: "silver",
};
function getTotal(price, card) {
  let discountRate;

  //cach 1
  switch (card.tier) {
    case "diamond":
      discountRate = 0.1;
      break;
    case "gold":
      discountRate = 0.08;
      break;
    case "silver":
      discountRate = 0.05;
      break;
    default:
      discountRate = 0.02;
      break;
  }

  //cach 2
  // if(card. tier === 'diamond'){
  //     discountRate = 0.1;
  // }else if(card. tier === 'silver'){
  //     discountRate = 0.05;
  // }else if(card. tier === 'gold'){
  //     discountRate = 0.08;
  // }else {
  //     discountRate = 0.02;
  // }

  return price * (1 - discountRate);
}
var total = getTotal(20000, numberCard);
console.log(total);


var trafficLight = 'green'
function goOrNotInVietNam(lightValue){
    switch(lightValue){
        case 'green':
            console.log('go')
            break;
        case 'yellow':
            console.log('go')
            break;
        default: console.log('stop')
        break;
    }
}
goOrNotInVietNam(trafficLight)