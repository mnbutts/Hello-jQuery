// JavaScript Document
$(function() {
	"use strict";
	//
	$("a").on("click", function() {
		$(this).addClass("background_change");
	});
	$("h2").on("click", function() {
		$(this).hide();
	});	
});

