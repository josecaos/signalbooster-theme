$(document).ready(() => {

  console.log('SIGNALBOOSTER DEV\n' + '///////////////////////')
//
// header
  header()//default

  $(window).on('scroll',()=>{
    header()
	})
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

function header() {

    	var top = $(window).scrollTop()
        var header = $('header')
    	var maincontent = $('#PageContainer')

        if(top >= 50) {

         header.css('position','fixed')
         maincontent.css('padding-top','80px')


        } else {

          header.css('position','relative')
          maincontent.css('padding-top','0px')

        }

}
