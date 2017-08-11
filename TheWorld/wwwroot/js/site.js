// site JS

// this is an anonymous function that self-executes/immediately invokes
// this is used to prevent name collisions

///// Pre-jQuery
//(function () { 

//    let ele = document.getElementById("username");
//    ele.innerHTML = "Pranay K Maharana";

//    let main = document.getElementById("main");
//    main.onmouseenter = function () {
//        main.style.backgroundColor = "#888";
//    };

//    main.onmouseleave = function () {
//        main.style.backgroundColor = "";
//    };
//})();

// jQuery exposes a single object to the global scope for use anywhere in this js file. That global
// object is called jQuery, uses $ - exposes a number of methods for dloing different things
// like making network calls and manipulating the UI
// queries documents for individual elements. uses CSS selector as a language for it

//(function () {

//    let ele = $("#username");
//    ele.text("Pranay K. Maharana");

//    let main = $("#main");

//    main.on("mouseenter", function () {
//        main.style = "background-color: #888;";
//    });

//    main.on("mouseleave", function () {
//        main.style = "";
//    });

//    let menuItems = $("ul.menu li a");
//    menuItems.on("click", function () {
//        let me = $(this); // this refers to the object the function is related to
//                           //by wrapping this in $(), turns it into a jQuery object 
//        alert("Hello " + me.text());
//    });

//})();

(function () {

    let $sidebarAndWrapper = $("#sidebar,#wrapper"); //gets both the elements. called a wrapped set of DOM elements

    $sidebarAndWrapper.toggleClass("hide-sidebar");
})();