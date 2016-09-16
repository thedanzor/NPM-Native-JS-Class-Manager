/**
 * @module NPM-Native-JS-Class-Manager v1
 */

/**
 * Check if the DOM element already has the parsed class
 *
 * @param {Object} element   - The DOM element to check
 * @param {String} className - The name of the class we want to check for
 *
 * @return {Boolean} - Returns true or false depending if a class exists
 */
var check = function (element, className) {
	// If no element or class name is parsed, we return (do nothing)
	if (!element || !className) {
		return;
	}

	// Split the class names into an array we can check
	var classArray = element.className.split(' ');
	// Check the array if the className is there
	var hasclass = classArray.indexOf(className);

	// If class is there, return true
	if (hasclass > 0) {
		return true;
	}

	return false;
};

/**
 * Add the class to the DOM element
 *
 * @param {Object} element   - The DOM element to check
 * @param {String} className - The class name we want to add
 */
var add = function (element, className) {
	// If no element or class name is parsed, we return (do nothing)
	if (!element || !className) {
		return;
	}

	// Check if the element has the class
	// If it does we simply do nothing.
	if (check(element, className)) {
		return;
	}

	// Change the element className attribute with the new list of class names
	element.className += ' ' + className;
};

/**
 * Remove a class from the DOM element
 *
 * @param {Object} element   - The DOM element to check
 * @param {String} className - The class name we want to remove
 */
var remove = function (element, className) {
	// If no element or class name is parsed, we return (do nothing)
	if (!element || !className) {
		return;
	}

	// Check if the element has the class
	// If so we can remove it
	if (check(element, className)) {
		// Split the class names into an array we can manage
		var classArray = element.className.split(' ');
		// Get the index of the class we want to remove
		var removeClass = classArray.indexOf(className);

		// Remove the class from the array
		classArray.splice(removeClass, 1);

		// Change the element className attribute
		// with the new list of class names from our array
		element.className = classArray.join(' ');
	}
};

// Export our interfaces for this utility
module.exports = {
	check: check,
	add: add,
	remove: remove
};
