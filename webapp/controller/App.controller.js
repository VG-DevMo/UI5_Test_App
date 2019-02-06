sap.ui.define([
	"sap/m/MessageToast",
	"sap/m/MessageBox",
	"sap/ui/core/mvc/Controller"
], function(MessageToast, MessageBox, Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.todo.controller.App", {

		onAfterRendering: function () {

		},

		loginUser: function () {
			var oModel = this.getView().getModel();
			var vUsername = oModel.getProperty("/username");
			var vPassword = oModel.getProperty("/password");
			MessageBox.information('Backend server unavailable!');
			
			// var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// oRouter.navTo("app");
		},

		usernameInputChange: function () {
			var oModel = this.getView().getModel();
			if (oModel.getProperty("/username") !== "") {
				this.getView().byId('login_password').setEnabled(true);
			} else {
				this.getView().byId('login_password').setEnabled(false);
			}
		},

		passwordInputChange: function () {
			var oModel = this.getView().getModel();
			if (oModel.getProperty("/password") !== "") {
				this.getView().byId('login_submit').setEnabled(true);
			} else {
				this.getView().byId('login_submit').setEnabled(false);
			}
		}

	});

});
