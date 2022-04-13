/*global QUnit*/

sap.ui.define([
	"FlightBookings/workshop./controller/FlightBookings.controller"
], function (Controller) {
	"use strict";

	QUnit.module("FlightBookings Controller");

	QUnit.test("I should test the FlightBookings controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
