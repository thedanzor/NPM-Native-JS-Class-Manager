# Introduction
**NPM-Native-JS-Class-Manager**

This is a small NPM module to help you manage classes in your application, this is useful when you are building lightweight applications that are modulized and especially if each component is independent from each other.

The utility will add, remove and check if a class exists. So instead of requiring larger frameworks or tooling that has this built in or adding extra logic / validation to keep your DOM clean. You can use this lightweight utility to hopefully make your life easier.

# How to use

You will need to require the utility into each NPM module that wants to use it:

```
var cssClass = require('NPM-Native-JS-Class-Manager');
```

You can then use the utility by accessing any of the desired interfaces:

```
cssClass.add(div, 'headerClass2'); // Add a class
cssClass.remove(div, 'headerClass2'); // Remove a class
cssClass.check(div, 'headerClass2'); // Check if the class is there - returns True or False
```

The first parameter is the DOM Object that we want to control, the other is a string of the className we want to add, remove or check.

# Defects and Feature requests

You can report them here (https://github.com/thedanzor/NPM-Native-JS-Class-Manager/issues).

# Tweaking and Modifying the application (For Developers)
You will need to install the dependencies to run the tests, linting etc.

```
npm install
```

# Unit Testing (For Developers)
The Application has a few different test types:

* Compliance to coding standards
* Functional testing using Mocha

All these tests can be started through:
```
npm run test
```
