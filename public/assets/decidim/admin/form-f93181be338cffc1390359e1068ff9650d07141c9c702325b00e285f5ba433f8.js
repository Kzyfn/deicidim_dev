"use strict";$(function(){$(".participatory_texts_disabled").click(function(e){return e.preventDefault(),!1});var e,t,n=$("input#component_settings_amendments_enabled");n.length>0&&(e=$("[id*='amendments_wizard_help_text']").parent(),t=$(".amendments_step_settings").parent(),n.is(":not(:checked)")&&(e.hide(),t.hide().siblings(".help-text").hide()),n.click(function(){e.toggle(),t.toggle().siblings(".help-text").toggle()}))});