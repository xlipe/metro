// AddThis

function outputAddThis(id, page, title)
{
	var str = '	<div class="social"><ul id="' + id + '" class="addthis_toolbox addthis_default_style last" addthis:url="' + page + '" addthis:title="' + title + '">';
	str += '		<li><a class="addthis_button_rss"><img src="<?php echo $template_path; ?>/images/post_options/rss.png" width="23" height="23" border="0" alt="RSS" /><span>RSS</span></a></li>';
	str += '		<li><a class="addthis_button_facebook"><img src="<?php echo $template_path; ?>/images/post_options/facebook.png" width="23" height="23" border="0" alt="Facebook" /><span>Facebook</span></a></li>';
	str += '		<li><a class="addthis_button_twitter"><img src="<?php echo $template_path; ?>/images/post_options/twitter.png" width="23" height="23" border="0" alt="Twitter" /><span>Twitter</span></a></li>';
	str += '		<li><a class="addthis_button_email"><img src="<?php echo $template_path; ?>/images/post_options/email.png" width="23" height="23" border="0" alt="Email" /><span>Email</span></a></li>';
	str += '	</ul></div>';
	document.write(str);
}

var addthis_config = { data_track_clickback: false, ui_use_css: false };
