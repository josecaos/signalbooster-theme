$(document).ready(() => {

  console.log('SIGNALBOOSTER DEV\n' + ' ///////////////////////')
//

  img_liquid()


//
  console.log('Scripts OK')

})
//
function img_liquid() {

	$('.imgLiquid .imgLiquidFill').imgLiquid()
    $('.imgLiquid .imgLiquidNoFill').imgLiquid({
      fill: false
    })
    $('.imgLiquid .imgLiquidNoFillLeft').imgLiquid({
      fill: false,
      horizontalAlign: "left"
    })
    $('.imgLiquid .imgLiquidNoFillRight').imgLiquid({
          fill: false,
      horizontalAlign: "right"
    })

}
