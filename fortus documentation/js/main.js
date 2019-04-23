// JavaScript Document

	$(document).ready(function() {
		$("#tocTitle").click(function(){
			$("#toc-ul").toggle('fast');
		})
		/* 
		$("#toc-ul a").click(function(){
			if ($(window).width() < 960) {
				$("#toc-ul").toggle('fast');
			}
		});
		*/
		if($(window).width() > 959) {
			$("#toc-ul").show('fast');
		}
	});
