"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getPersistentState: function() {
        return getPersistentState;
    },
    migratePersistentState: function() {
        return migratePersistentState;
    },
    setPersistentState: function() {
        return setPersistentState;
    }
});
var _constants = require("./constants");
var _version3 = require("./state/version3");
var _migrate = require("./migrate");
function getPersistentState() {
    var persistentState;
    var key = _constants.STATE_KEY, value = localStorage.getItem(key);
    if (value === null) {
        persistentState = null;
    } else {
        var jsonString = value, json = JSON.parse(jsonString);
        persistentState = json; ///
    }
    return persistentState;
}
function setPersistentState(persistentState) {
    var json = persistentState, jsonString = JSON.stringify(json), key = _constants.STATE_KEY, value = jsonString; ///
    localStorage.setItem(key, value);
}
function migratePersistentState() {
    var state, persistentState;
    persistentState = getPersistentState();
    if (persistentState === null) {
        state = (0, _version3.createState)();
    } else {
        state = persistentState; ///
        state = (0, _migrate.migrateState)(state); ///
    }
    persistentState = state; ///
    setPersistentState(persistentState);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sb2NhbFN0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNUQVRFX0tFWSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY3JlYXRlU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZS92ZXJzaW9uM1wiO1xuaW1wb3J0IHsgbWlncmF0ZVN0YXRlIH0gZnJvbSBcIi4vbWlncmF0ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGVyc2lzdGVudFN0YXRlKCkge1xuICBsZXQgcGVyc2lzdGVudFN0YXRlO1xuXG4gIGNvbnN0IGtleSA9IFNUQVRFX0tFWSxcbiAgICAgICAgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuXG4gIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHBlcnNpc3RlbnRTdGF0ZSA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QganNvblN0cmluZyA9IHZhbHVlLCAgLy8vXG4gICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG5cbiAgICBwZXJzaXN0ZW50U3RhdGUgPSBqc29uOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwZXJzaXN0ZW50U3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQZXJzaXN0ZW50U3RhdGUocGVyc2lzdGVudFN0YXRlKSB7XG4gIGNvbnN0IGpzb24gPSBwZXJzaXN0ZW50U3RhdGUsIC8vL1xuICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbiksXG4gICAgICAgIGtleSA9IFNUQVRFX0tFWSxcbiAgICAgICAgdmFsdWUgPSBqc29uU3RyaW5nOyAgLy8vXG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWdyYXRlUGVyc2lzdGVudFN0YXRlKCkge1xuICBsZXQgc3RhdGUsXG4gICAgICBwZXJzaXN0ZW50U3RhdGU7XG5cbiAgcGVyc2lzdGVudFN0YXRlID0gZ2V0UGVyc2lzdGVudFN0YXRlKCk7XG5cbiAgaWYgKHBlcnNpc3RlbnRTdGF0ZSA9PT0gbnVsbCkge1xuICAgIHN0YXRlID0gY3JlYXRlU3RhdGUoKTtcbiAgfSBlbHNlIHtcbiAgICBzdGF0ZSA9IHBlcnNpc3RlbnRTdGF0ZTsgIC8vL1xuXG4gICAgc3RhdGUgPSBtaWdyYXRlU3RhdGUoc3RhdGUpOyAgLy8vXG4gIH1cblxuICBwZXJzaXN0ZW50U3RhdGUgPSBzdGF0ZTsgIC8vL1xuXG4gIHNldFBlcnNpc3RlbnRTdGF0ZShwZXJzaXN0ZW50U3RhdGUpO1xufVxuIl0sIm5hbWVzIjpbImdldFBlcnNpc3RlbnRTdGF0ZSIsIm1pZ3JhdGVQZXJzaXN0ZW50U3RhdGUiLCJzZXRQZXJzaXN0ZW50U3RhdGUiLCJwZXJzaXN0ZW50U3RhdGUiLCJrZXkiLCJTVEFURV9LRVkiLCJ2YWx1ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJqc29uU3RyaW5nIiwianNvbiIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInNldEl0ZW0iLCJzdGF0ZSIsImNyZWF0ZVN0YXRlIiwibWlncmF0ZVN0YXRlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFNZ0JBLGtCQUFrQjtlQUFsQkE7O0lBMkJBQyxzQkFBc0I7ZUFBdEJBOztJQVRBQyxrQkFBa0I7ZUFBbEJBOzs7eUJBdEJVO3dCQUNFO3VCQUNDO0FBRXRCLFNBQVNGO0lBQ2QsSUFBSUc7SUFFSixJQUFNQyxNQUFNQyxvQkFBUyxFQUNmQyxRQUFRQyxhQUFhQyxPQUFPLENBQUNKO0lBRW5DLElBQUlFLFVBQVUsTUFBTTtRQUNsQkgsa0JBQWtCO0lBQ3BCLE9BQU87UUFDTCxJQUFNTSxhQUFhSCxPQUNiSSxPQUFPQyxLQUFLQyxLQUFLLENBQUNIO1FBRXhCTixrQkFBa0JPLE1BQU0sR0FBRztJQUM3QjtJQUVBLE9BQU9QO0FBQ1Q7QUFFTyxTQUFTRCxtQkFBbUJDLGVBQWU7SUFDaEQsSUFBTU8sT0FBT1AsaUJBQ1BNLGFBQWFFLEtBQUtFLFNBQVMsQ0FBQ0gsT0FDNUJOLE1BQU1DLG9CQUFTLEVBQ2ZDLFFBQVFHLFlBQWEsR0FBRztJQUU5QkYsYUFBYU8sT0FBTyxDQUFDVixLQUFLRTtBQUM1QjtBQUVPLFNBQVNMO0lBQ2QsSUFBSWMsT0FDQVo7SUFFSkEsa0JBQWtCSDtJQUVsQixJQUFJRyxvQkFBb0IsTUFBTTtRQUM1QlksUUFBUUMsSUFBQUEscUJBQVc7SUFDckIsT0FBTztRQUNMRCxRQUFRWixpQkFBa0IsR0FBRztRQUU3QlksUUFBUUUsSUFBQUEscUJBQVksRUFBQ0YsUUFBUyxHQUFHO0lBQ25DO0lBRUFaLGtCQUFrQlksT0FBUSxHQUFHO0lBRTdCYixtQkFBbUJDO0FBQ3JCIn0=