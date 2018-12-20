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

	$('.imgLiquid.imgLiquidFill').imgLiquid()
    $('.imgLiquid.imgLiquidNoFill').imgLiquid({
      fill: false
    })
    $('.imgLiquid.imgLiquidNoFillLeft').imgLiquid({
      fill: false,
      horizontalAlign: "left"
    })
    $('.imgLiquid.imgLiquidNoFillRight').imgLiquid({
      fill: false,
      horizontalAlign: "right"
    })

}

function header() {

    	var top = $(window).scrollTop()
        var header = $('header')
    	var maincontent = $('#PageContainer')
        var search = $('#fixed-search-button')

        if(top >= 58) {

         maincontent.css('padding-top','80px')
         header.css('position','fixed')
         search.removeClass('hidden')

        } else {

          maincontent.css('padding-top','0px')
          header.css('position','relative')
          search.addClass('hidden')
        }

}
