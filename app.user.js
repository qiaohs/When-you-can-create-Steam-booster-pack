// ==UserScript==
// @name			When you can create Steam booster pack
// @name:zh-CN			Steam补充包制作时间显示
// @version	 		0.1
// @description			Show the time when you can create Steam booster pack at creator page.
// @description:zh-CN		Steam已隐藏下一个补充包制作时间的显示，安装后可恢复显示
// @author			QHS
// @include			*steamcommunity.com/*boostercreator*
// @icon			http://pan.hriq.org/steam.green.ico
// @namespace 			https://greasyfork.org/users/155548-黑山東雲光圈研究所
// @namespace 			https://steamcommunity.com/profiles/76561198132556503
// ==/UserScript==
$J('.booster_goo_cost').after('<div id='atime_insert' style="color: #f56795;margin-bottom: 12px;"></div>');
$J( '#booster_game_selector' ).change( function() {
	var atime = CBoosterCreatorPage.sm_rgBoosterData[$J(this).val()].available_at_time;
	if(atime){
		$J('#atime_insert').html('You will not be able to create another Booster Pack until '+atime+'.');
	}
});
