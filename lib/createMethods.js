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
    function embeddedMode() {
        view.embeddedMode();
    }
    function fullScreenMode() {
        view.fullScreenMode();
    }
    return {
        embeddedMode: embeddedMode,
        fullScreenMode: fullScreenMode
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZXRob2RzKHNjaGVkdWxlciwgbW9kZWwsIHZpZXcpIHtcbiAgZnVuY3Rpb24gZW1iZWRkZWRNb2RlKCkge1xuICAgIHZpZXcuZW1iZWRkZWRNb2RlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBmdWxsU2NyZWVuTW9kZSgpIHtcbiAgICB2aWV3LmZ1bGxTY3JlZW5Nb2RlKCk7XG4gIH1cblxuICByZXR1cm4gKHtcbiAgICBlbWJlZGRlZE1vZGUsXG4gICAgZnVsbFNjcmVlbk1vZGVcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlTWV0aG9kcyIsInNjaGVkdWxlciIsIm1vZGVsIiwidmlldyIsImVtYmVkZGVkTW9kZSIsImZ1bGxTY3JlZW5Nb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFQTs7O2VBQXdCQTs7O0FBQVQsU0FBU0EsY0FBY0MsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLElBQUk7SUFDMUQsU0FBU0M7UUFDUEQsS0FBS0MsWUFBWTtJQUNuQjtJQUVBLFNBQVNDO1FBQ1BGLEtBQUtFLGNBQWM7SUFDckI7SUFFQSxPQUFRO1FBQ05ELGNBQUFBO1FBQ0FDLGdCQUFBQTtJQUNGO0FBQ0YifQ==