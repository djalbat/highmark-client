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
    function exitFullScreen() {
        view.exitFullScreen();
    }
    function enterFullScreen() {
        view.enterFullScreen();
    }
    return {
        exitFullScreen: exitFullScreen,
        enterFullScreen: enterFullScreen
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZXRob2RzKHNjaGVkdWxlciwgbW9kZWwsIHZpZXcpIHtcbiAgZnVuY3Rpb24gZXhpdEZ1bGxTY3JlZW4oKSB7XG4gICAgdmlldy5leGl0RnVsbFNjcmVlbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW50ZXJGdWxsU2NyZWVuKCkge1xuICAgIHZpZXcuZW50ZXJGdWxsU2NyZWVuKCk7XG4gIH1cblxuICByZXR1cm4gKHtcbiAgICBleGl0RnVsbFNjcmVlbixcbiAgICBlbnRlckZ1bGxTY3JlZW5cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlTWV0aG9kcyIsInNjaGVkdWxlciIsIm1vZGVsIiwidmlldyIsImV4aXRGdWxsU2NyZWVuIiwiZW50ZXJGdWxsU2NyZWVuIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFQTs7O2VBQXdCQTs7O0FBQVQsU0FBU0EsY0FBY0MsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLElBQUk7SUFDMUQsU0FBU0M7UUFDUEQsS0FBS0MsY0FBYztJQUNyQjtJQUVBLFNBQVNDO1FBQ1BGLEtBQUtFLGVBQWU7SUFDdEI7SUFFQSxPQUFRO1FBQ05ELGdCQUFBQTtRQUNBQyxpQkFBQUE7SUFDRjtBQUNGIn0=