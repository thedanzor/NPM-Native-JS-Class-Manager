/**
 * @module test/ClassManager
 *
 * Tests for the header template
 */

var cssClass = require('../src');
var expect = require('chai').expect;

describe('Class Manager, adding a few dom elements to manage', function () {
	var div = document.createElement('div');
	var div2 = document.createElement('div');
	var div3 = document.createElement('div');
	var div4 = document.createElement('div');
	var div5 = document.createElement('div');

	before(function (done) {
		div.className = 'header';
		div2.className = 'footer';
		div3.className = 'container';
		div4.className = 'advertisement';
		div5.className = 'class1 class2 class3 class4';

		cssClass.add(div, 'headerClass2');
		cssClass.add(div, 'headerClass2');

		cssClass.add(div2, 'footerClass2');

		cssClass.add(div3, 'containerClass2');
		cssClass.add(div3, 'containerClass2');

		cssClass.add(div4, 'advertisementClass2');

		cssClass.remove(div5, 'class3');

		done();
	});

	it('Should see new classes and no duplicates', function () {
		expect(div.className).to.equal('header headerClass2');
		expect(div2.className).to.equal('footer footerClass2');
		expect(div3.className).to.equal('container containerClass2');
		expect(div4.className).to.equal('advertisement advertisementClass2');
	});

	it('Remove a class from the middle of the className', function () {
		expect(div5.className).to.equal('class1 class2 class4');
	});

	it('Should be able to find classes in the elements we manage', function () {
		expect(cssClass.check(div, 'headerClass2')).to.equal(true);
		expect(cssClass.check(div2, 'headerClass2')).to.equal(false);
	});
});
