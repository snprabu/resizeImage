(function ($){
    $.fn.imgAlignment = function( options ) {
		$('.alignimg').each(function(e){
			$(this).wrap("<div class='childimgPod'></div>");
			if(!($(this).parent('div').hasClass('applied'))){
				var imgWidth = $(this).width(),
					imgHeight = $(this).height(),
					dataWidth = $(this).attr('data-width'),
					dataHeight = $(this).attr('data-height'),
					podWidth = $(this).parent('div').innerWidth(),
					podHeight = $(this).parent('div').innerHeight();
				
				if((imgWidth != undefined || imgHeight != undefined) && (imgWidth != null || imgHeight != null) && (imgWidth > 0 || imgHeight > 0)){
					if((imgWidth >= podWidth) || (imgHeight >= podHeight) || (podWidth >= imgWidth) || (podHeight >= imgHeight)){
						if(imgWidth > imgHeight){
							$(this).css('width','100%');
							var revheight = $(this).css('height').split('px');
							var resval;
							if(revheight[0] < podHeight){
								resval = (podHeight - revheight[0])/2;
							} else if(revheight[0] > podHeight) {
								resval = -(revheight[0]-podHeight)/2;
							} else {
								resval = 0;
							}
							$(this).css('margin-top',resval+'px');
						} else {
							$(this).css('height','100%');
							var revwidth = $(this).css('width').split('px');
							var resval;
							if(revwidth[0]<podWidth){
								resval = (podWidth - revwidth[0])/2;
							} else if(revwidth[0] > podWidth) {
								resval = -(revwidth[0]-podWidth)/2;
							} else {
								resval = 0;
							}
							$(this).css('margin-left',resval+'px');
						}
					}
					$(this).parent('div').css('overflow','hidden').addClass('applied');
				} else {					
					$('p.result').html('There is some issue in the image width / image height!!!');
					return false;
				}
			}			
		});
    };
}(jQuery));