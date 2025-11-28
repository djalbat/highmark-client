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
var _state = require("./state");
function createMethods(scheduler, model, view) {
    function zoom(zoom) {
        (0, _state.setZoom)(zoom);
        view.updateZoom();
    }
    function exitFullScreen() {
        view.exitFullScreen();
    }
    function enterFullScreen() {
        view.enterFullScreen();
    }
    function updateFullScreen() {
        view.updateFullScreenCheckboxDiv();
    }
    return {
        zoom: zoom,
        exitFullScreen: exitFullScreen,
        enterFullScreen: enterFullScreen,
        updateFullScreen: updateFullScreen
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVNZXRob2RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzZXRab29tIH0gZnJvbSBcIi4vc3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWV0aG9kcyhzY2hlZHVsZXIsIG1vZGVsLCB2aWV3KSB7XG4gIGZ1bmN0aW9uIHpvb20oem9vbSkge1xuICAgIHNldFpvb20oem9vbSk7XG5cbiAgICB2aWV3LnVwZGF0ZVpvb20oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4aXRGdWxsU2NyZWVuKCkge1xuICAgIHZpZXcuZXhpdEZ1bGxTY3JlZW4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVudGVyRnVsbFNjcmVlbigpIHtcbiAgICB2aWV3LmVudGVyRnVsbFNjcmVlbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlRnVsbFNjcmVlbigpIHtcbiAgICB2aWV3LnVwZGF0ZUZ1bGxTY3JlZW5DaGVja2JveERpdigpO1xuICB9XG5cbiAgcmV0dXJuICh7XG4gICAgem9vbSxcbiAgICBleGl0RnVsbFNjcmVlbixcbiAgICBlbnRlckZ1bGxTY3JlZW4sXG4gICAgdXBkYXRlRnVsbFNjcmVlblxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVNZXRob2RzIiwic2NoZWR1bGVyIiwibW9kZWwiLCJ2aWV3Iiwiem9vbSIsInNldFpvb20iLCJ1cGRhdGVab29tIiwiZXhpdEZ1bGxTY3JlZW4iLCJlbnRlckZ1bGxTY3JlZW4iLCJ1cGRhdGVGdWxsU2NyZWVuIiwidXBkYXRlRnVsbFNjcmVlbkNoZWNrYm94RGl2Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7O3FCQUZBO0FBRVQsU0FBU0EsY0FBY0MsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLElBQUk7SUFDMUQsU0FBU0MsS0FBS0EsSUFBSTtRQUNoQkMsSUFBQUEsY0FBTyxFQUFDRDtRQUVSRCxLQUFLRyxVQUFVO0lBQ2pCO0lBRUEsU0FBU0M7UUFDUEosS0FBS0ksY0FBYztJQUNyQjtJQUVBLFNBQVNDO1FBQ1BMLEtBQUtLLGVBQWU7SUFDdEI7SUFFQSxTQUFTQztRQUNQTixLQUFLTywyQkFBMkI7SUFDbEM7SUFFQSxPQUFRO1FBQ05OLE1BQUFBO1FBQ0FHLGdCQUFBQTtRQUNBQyxpQkFBQUE7UUFDQUMsa0JBQUFBO0lBQ0Y7QUFDRiJ9