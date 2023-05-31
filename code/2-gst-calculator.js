// ####################################
// #### ----- GST Calculator ----- ####
// ####################################

function gstCalculator() {
  alert('The price with GST the price and 15%.')

  let ogPrice = prompt('What is the cost before GST?')

  let finalPrice = ogPrice * 1.15

  alert('The cost with GST is $' +finalPrice)


}
