var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/*
 * NOTE: all actions are prefixed by plugin shortnam_action_name
 */

jQuery(function(){
	

});


function doPost(){
	
	//alert(nm_list_vars.ajaxurl);
	/*
	 * TODO: change shortname
	 */
	var data = {action: 'nm_woostore_save_file', user_name: 'admin'};
	
	jQuery.post(nm_todolist_vars.ajaxurl, data, function(resp){
		
		console.log(resp);
	});
}


function get_option(key){
	
	/*
	 * TODO: change plugin shortname
	 */
	var keyprefix = 'nm_woostore';
	
	key = keyprefix + key;
	
	var req_option = '';
	
	jQuery.each(googlerabwah_vars.settings, function(k, option){
		
		//console.log(k);
		
		if (k == key)
			req_option = option;		
	});
	
	//console.log(req_option);
	return req_option;
	
}
}
/*
     FILE ARCHIVED ON 11:41:01 Jan 21, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:17:51 Nov 27, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.667
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.01
  esindex: 0.011
  cdx.remote: 37.903
  LoadShardBlock: 115.961 (3)
  PetaboxLoader3.datanode: 143.77 (5)
  PetaboxLoader3.resolve: 85.566 (2)
  load_resource: 129.175
  loaddict: 24.498
*/