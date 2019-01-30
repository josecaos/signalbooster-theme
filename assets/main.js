$(document).ready(() => {

  console.log('SIGNALBOOSTER DEV\n' + '///////////////////////')
//
  header()//default

//
  img_liquid()
  read_more()

//   scroll actions
  $(window).on('scroll',()=>{
   		header()
	})

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
        var header = $('header.main-header')
    	var maincontent = $('#PageContainer')
        var search = $('#fixed-search-button')
        var filters = $(".filters-toolbar-wrapper")

        if(top >= 60) {

         maincontent.css('padding-top','80px')
         header.css('position','fixed')
         search.removeClass('hidden')
         //products filter
         var x = $(filters).detach()
         $('header.main-header').append(x)
         $(filters).css({'margin-bottom':'0px','background-color':'white'})


        } else {

          maincontent.css('padding-top','0px')
          header.css('position','relative')
          search.addClass('hidden')
          //products filter
          var y = $(filters).detach()
         $('header.collection-header').append(y)
         $(filters).css('margin-bottom','55px')

        }

}

function read_more() {

  $('.fulltext').each(function(){
  $('.fulltext').hide();
  $('.shown .readmore').click(function (event) {
  event.preventDefault();
  $(this).parent().find('.fulltext').slideToggle('slow');
  $(this).text($(this).text() == 'Close Info' ? 'Read More' : 'Close Info');
  	});
  });
}
