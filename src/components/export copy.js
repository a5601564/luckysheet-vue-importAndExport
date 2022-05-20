var ival;
var str;
var charMultiple = 0;
var idbiValsum;
var IvaID;
var sText = "123456789123"

for (i = 0; i < 11; i++) {

  ival = sText.charAt(i);
  console.log("start", i , "ival",ival)

  if ((i + 1) % 2 == 1) {
    str = (ival * 2);
    str += "";

    console.log("str", str)
    deal(str, idbiValsum)
  } else {
    charMultiple = (charMultiple * 1) + parseInt(ival * 1);
     console.log("else charMultiple", charMultiple)
  }
}

function deal(str, idbiValsum) {
 	console.log("before idbiValsum", idbiValsum)
  console.log("before charMultiple", charMultiple)
  if (str.length > 1) {
    idbiValsum = parseInt(str.charAt(0)) + parseInt(str.charAt(1))
    charMultiple = (charMultiple * 1) + idbiValsum;
  } else {
    charMultiple = (charMultiple * 1) + parseInt(ival * 2);
  }
  console.log("after idbiValsum", idbiValsum)
  console.log("after charMultiple", charMultiple)
}


IvaID = 10 - (charMultiple % 10);

console.log("charMultiple",charMultiple,"IvaID", IvaID, " IvaID == sText.charAt(11)",IvaID == sText.charAt(11))
if (IvaID == '10')
  IvaID = 0;

if (IvaID == sText.charAt(11)) {

}
