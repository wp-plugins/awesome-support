//@prepros-prepend ../vendor/featherlight/featherlight.min.js
//@prepros-prepend ../vendor/hideShowPassword/hideShowPassword.js

(function ($) {
	"use strict";

	/*
	Convert string to Boolean
	http://stackoverflow.com/a/21445227
	 */
	function stringToBool(val) {
		return (val + '').toLowerCase() === 'true';
	}

	$(function () {

		/*
		Check if TinyMCE is empty
		http://codeblow.com/questions/method-to-check-whether-tinymce-is-active-in-wordpress/
		http://stackoverflow.com/a/8749616
		 */
		if (typeof tinyMCE != "undefined") {

			$('.wpas-form').submit(function (event) {
				var submitBtn = $('[type="submit"]', $(this));
				var editorContent = tinyMCE.activeEditor.getContent();
				if (editorContent === '' || editorContent === null) {

					/* Highlight the active editor */
					$(tinyMCE.activeEditor.getBody()).css('background-color', '#ffeeee');

					/* Alert the user */
					alert('You can\'t submit an empty ticket reply.');
					$(tinyMCE.activeEditor.getBody()).css('background-color', '');

					/* Focus on editor */
					tinyMCE.activeEditor.focus();

					return false;
				} else {
					submitBtn.prop('disabled', true).text(submitBtn.data('onsubmit'));
				}
			});

		} else {

			$('.wpas-form').submit(function (event) {
				var submitBtn = $('[type="submit"]', $(this));
				submitBtn.prop('disabled', true).text(submitBtn.data('onsubmit'));
			});

		}

		/*
		Registration form: terms and conditions modal
		https://github.com/noelboss/featherlight/
		 */
		$('.wpas-modal-trigger').featherlight();

		/*
		Registration form: toggle password visibility
		https://github.com/cloudfour/hideShowPassword
		 */
		$('input[name="pwdshow"]').change(function () {
			$('#password').hideShowPassword($(this).prop('checked'));
		});

		/*
		Registration form: email validation by MailGun
		http://www.mailgun.com/email-validation
		http://documentation.mailgun.com/api-email-validation.html
		 */
		if (typeof wpas !== 'undefined' && stringToBool(wpas.emailCheck)) {
			var emailInput = $('input[name="email"]'),
				emailCheck = $('#email-validation');

			emailInput.change(function () {
				var data = {
					'action': 'email_validation',
					'email': emailInput.val()
				};
				$.post(wpas.ajaxurl, data, function (response) {
					emailCheck.html(response).show();
				});
			});

			emailCheck.on('click', 'strong', function () {
				emailInput.val($(this).html());
				emailCheck.hide();
			});
		}

	});

}(jQuery));