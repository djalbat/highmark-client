"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return createMethods;
    }
});
function createMethods(scheduler, model, view) {
    function draftMode() {
        view.draftMode();
    }
    function embeddedMode() {
        view.embeddedMode();
    }
    function invertColours() {
        view.invertColours();
    }
    function revertColours() {
        view.revertColours();
    }
    function fullScreenMode() {
        view.fullScreenMode();
    }
    function presentationMode() {
        view.presentationMode();
    }
    return {
        draftMode: draftMode,
        embeddedMode: embeddedMode,
        invertColours: invertColours,
        revertColours: revertColours,
        fullScreenMode: fullScreenMode,
        presentationMode: presentationMode
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZXRob2RzKHNjaGVkdWxlciwgbW9kZWwsIHZpZXcpIHtcbiAgZnVuY3Rpb24gZHJhZnRNb2RlKCkge1xuICAgIHZpZXcuZHJhZnRNb2RlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBlbWJlZGRlZE1vZGUoKSB7XG4gICAgdmlldy5lbWJlZGRlZE1vZGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludmVydENvbG91cnMoKSB7XG4gICAgdmlldy5pbnZlcnRDb2xvdXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiByZXZlcnRDb2xvdXJzKCkge1xuICAgIHZpZXcucmV2ZXJ0Q29sb3VycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gZnVsbFNjcmVlbk1vZGUoKSB7XG4gICAgdmlldy5mdWxsU2NyZWVuTW9kZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJlc2VudGF0aW9uTW9kZSgpIHtcbiAgICB2aWV3LnByZXNlbnRhdGlvbk1vZGUoKTtcbiAgfVxuXG4gIHJldHVybiAoe1xuICAgIGRyYWZ0TW9kZSxcbiAgICBlbWJlZGRlZE1vZGUsXG4gICAgaW52ZXJ0Q29sb3VycyxcbiAgICByZXZlcnRDb2xvdXJzLFxuICAgIGZ1bGxTY3JlZW5Nb2RlLFxuICAgIHByZXNlbnRhdGlvbk1vZGUsXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZU1ldGhvZHMiLCJzY2hlZHVsZXIiLCJtb2RlbCIsInZpZXciLCJkcmFmdE1vZGUiLCJlbWJlZGRlZE1vZGUiLCJpbnZlcnRDb2xvdXJzIiwicmV2ZXJ0Q29sb3VycyIsImZ1bGxTY3JlZW5Nb2RlIiwicHJlc2VudGF0aW9uTW9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBRUE7OztlQUF3QkE7OztBQUFULFNBQVNBLGNBQWNDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxJQUFJO0lBQzFELFNBQVNDO1FBQ1BELEtBQUtDLFNBQVM7SUFDaEI7SUFFQSxTQUFTQztRQUNQRixLQUFLRSxZQUFZO0lBQ25CO0lBRUEsU0FBU0M7UUFDUEgsS0FBS0csYUFBYTtJQUNwQjtJQUVBLFNBQVNDO1FBQ1BKLEtBQUtJLGFBQWE7SUFDcEI7SUFFQSxTQUFTQztRQUNQTCxLQUFLSyxjQUFjO0lBQ3JCO0lBRUEsU0FBU0M7UUFDUE4sS0FBS00sZ0JBQWdCO0lBQ3ZCO0lBRUEsT0FBUTtRQUNOTCxXQUFBQTtRQUNBQyxjQUFBQTtRQUNBQyxlQUFBQTtRQUNBQyxlQUFBQTtRQUNBQyxnQkFBQUE7UUFDQUMsa0JBQUFBO0lBQ0Y7QUFDRiJ9