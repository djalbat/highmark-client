"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get getScale () {
        return getScale;
    },
    get setScale () {
        return setScale;
    }
});
const _orientation = require("./utilities/orientation");
const _constants = require("./constants");
const scale = {
    [_constants.PORTRAIT_ORIENTATION]: _constants.INITIAL_SCALE,
    [_constants.LANDSCAPE_ORIENTATION]: _constants.INITIAL_SCALE
}, state = {
    scale
};
function getScale() {
    const orientation = (0, _orientation.getOrientation)();
    let scale;
    ({ scale } = state);
    const orientedScale = scale[orientation]; ///
    scale = orientedScale; ///
    return scale;
}
function setScale(scale) {
    const orientation = (0, _orientation.getOrientation)(), orientedScale = scale; ///
    ({ scale } = state);
    Object.assign(scale, {
        [orientation]: orientedScale
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZ2V0T3JpZW50YXRpb24gfSBmcm9tIFwiLi91dGlsaXRpZXMvb3JpZW50YXRpb25cIjtcbmltcG9ydCB7IElOSVRJQUxfU0NBTEUsIFBPUlRSQUlUX09SSUVOVEFUSU9OLCBMQU5EU0NBUEVfT1JJRU5UQVRJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3Qgc2NhbGUgPSB7XG4gICAgICAgIFtQT1JUUkFJVF9PUklFTlRBVElPTl06IElOSVRJQUxfU0NBTEUsXG4gICAgICAgIFtMQU5EU0NBUEVfT1JJRU5UQVRJT05dOiBJTklUSUFMX1NDQUxFLFxuICAgICAgfSxcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBzY2FsZVxuICAgICAgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjYWxlKCkge1xuICBjb25zdCBvcmllbnRhdGlvbiA9IGdldE9yaWVudGF0aW9uKCk7XG5cbiAgbGV0IHNjYWxlO1xuXG4gICh7IHNjYWxlIH0gPSBzdGF0ZSk7XG5cbiAgY29uc3Qgb3JpZW50ZWRTY2FsZSA9IHNjYWxlW29yaWVudGF0aW9uXTsgLy8vXG5cbiAgc2NhbGUgPSBvcmllbnRlZFNjYWxlOyAgLy8vXG5cbiAgcmV0dXJuIHNjYWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U2NhbGUoc2NhbGUpIHtcbiAgY29uc3Qgb3JpZW50YXRpb24gPSBnZXRPcmllbnRhdGlvbigpLFxuICAgICAgICBvcmllbnRlZFNjYWxlID0gc2NhbGU7ICAvLy9cblxuICAoeyBzY2FsZSB9ID0gc3RhdGUpO1xuXG4gIE9iamVjdC5hc3NpZ24oc2NhbGUsIHtcbiAgICBbb3JpZW50YXRpb25dOiBvcmllbnRlZFNjYWxlXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImdldFNjYWxlIiwic2V0U2NhbGUiLCJzY2FsZSIsIlBPUlRSQUlUX09SSUVOVEFUSU9OIiwiSU5JVElBTF9TQ0FMRSIsIkxBTkRTQ0FQRV9PUklFTlRBVElPTiIsInN0YXRlIiwib3JpZW50YXRpb24iLCJnZXRPcmllbnRhdGlvbiIsIm9yaWVudGVkU2NhbGUiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWFnQkE7ZUFBQUE7O1FBY0FDO2VBQUFBOzs7NkJBekJlOzJCQUM0QztBQUUzRSxNQUFNQyxRQUFRO0lBQ04sQ0FBQ0MsK0JBQW9CLENBQUMsRUFBRUMsd0JBQWE7SUFDckMsQ0FBQ0MsZ0NBQXFCLENBQUMsRUFBRUQsd0JBQWE7QUFDeEMsR0FDQUUsUUFBUTtJQUNOSjtBQUNGO0FBRUMsU0FBU0Y7SUFDZCxNQUFNTyxjQUFjQyxJQUFBQSwyQkFBYztJQUVsQyxJQUFJTjtJQUVILENBQUEsRUFBRUEsS0FBSyxFQUFFLEdBQUdJLEtBQUk7SUFFakIsTUFBTUcsZ0JBQWdCUCxLQUFLLENBQUNLLFlBQVksRUFBRSxHQUFHO0lBRTdDTCxRQUFRTyxlQUFnQixHQUFHO0lBRTNCLE9BQU9QO0FBQ1Q7QUFFTyxTQUFTRCxTQUFTQyxLQUFLO0lBQzVCLE1BQU1LLGNBQWNDLElBQUFBLDJCQUFjLEtBQzVCQyxnQkFBZ0JQLE9BQVEsR0FBRztJQUVoQyxDQUFBLEVBQUVBLEtBQUssRUFBRSxHQUFHSSxLQUFJO0lBRWpCSSxPQUFPQyxNQUFNLENBQUNULE9BQU87UUFDbkIsQ0FBQ0ssWUFBWSxFQUFFRTtJQUNqQjtBQUNGIn0=