var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
(function( $ ) {
	'use strict';

	/**
	 * ajax url wpknb_vars.ajaxurl
	 **/

	 $(function() {
	 	$('.wpknb-vote p').tooltip();

	 	//on vote click
	 	$(document).on('click','.wpknb-vote a',function(e){
	 		var vote_type = $(this).attr('data-action');
	 		var post_id = $(this).attr('data-postid');
	 		var nonce = $(this).attr('data-nonce');
	 		var login = $(this).attr('data-login');
	 		var getThis = $(this);
	 		if( $(this).hasClass('wpknb_vote')){
	 			if( vote_type.length > 0){
		 			console.log(wpknb_vars.ajaxurl);
		 			jQuery.ajax({
						type : "post",
						dataType : "json",
						url : wpknb_vars.ajaxurl,
						data : {action: "wpknb_vote", post_id : post_id, nonce: nonce, vote_type: vote_type, login : login},
						success: function(response){
							console.log(response.type);
							if(response.type == 'success'){
								$( getThis ).find('span').html( response.count );
								$('.wpknb-vote p').tooltip('destroy');
							}
						}
		 			});
		 		}
	 		}
	 		//unbind click for duplicate voting
	 		$('.wpknb-vote a').removeClass('wpknb_vote');
	 		e.preventDefault();
	 	});
	 });

})( jQuery );

}
/*
     FILE ARCHIVED ON 15:41:59 Feb 07, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:17:50 Nov 27, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.552
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.01
  esindex: 0.01
  cdx.remote: 13.074
  LoadShardBlock: 111.665 (3)
  PetaboxLoader3.datanode: 262.441 (5)
  PetaboxLoader3.resolve: 55.974 (2)
  load_resource: 213.987 (2)
*/