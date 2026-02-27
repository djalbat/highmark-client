"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DivisionDiv;
    }
});
const _easy = require("easy");
const _constants = require("../../constants");
class DivisionDiv extends _easy.Element {
    show() {
        const display = this.getDisplay();
        this.display(display);
    }
    didMount() {
        const name = _constants.DISPLAY, display = this.css(name);
        this.setDisplay(display);
        this.hide();
    }
    willUnmount() {
    ///
    }
    getDisplay() {
        const { display } = this.getState();
        return display;
    }
    setDisplay(display) {
        this.updateState({
            display
        });
    }
    setInitialState() {
        const display = null;
        this.setState({
            display
        });
    }
    initialise() {
        this.setInitialState();
    }
    static tagName = "div";
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aWV3L2Rpdi9kaXZpc2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IERJU1BMQVkgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmlzaW9uRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIHNob3coKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IHRoaXMuZ2V0RGlzcGxheSgpO1xuXG4gICAgdGhpcy5kaXNwbGF5KGRpc3BsYXkpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgbmFtZSA9IERJU1BMQVksIC8vL1xuICAgICAgICAgIGRpc3BsYXkgPSB0aGlzLmNzcyhuYW1lKTtcblxuICAgIHRoaXMuc2V0RGlzcGxheShkaXNwbGF5KTtcblxuICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBnZXREaXNwbGF5KCkge1xuICAgIGNvbnN0IHsgZGlzcGxheSB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIGRpc3BsYXk7XG4gIH1cblxuICBzZXREaXNwbGF5KGRpc3BsYXkpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGRpc3BsYXlcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGlzcGxheVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xufVxuIl0sIm5hbWVzIjpbIkRpdmlzaW9uRGl2IiwiRWxlbWVudCIsInNob3ciLCJkaXNwbGF5IiwiZ2V0RGlzcGxheSIsImRpZE1vdW50IiwibmFtZSIsIkRJU1BMQVkiLCJjc3MiLCJzZXREaXNwbGF5IiwiaGlkZSIsIndpbGxVbm1vdW50IiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiaW5pdGlhbGlzZSIsInRhZ05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7c0JBSkc7MkJBRUE7QUFFVCxNQUFNQSxvQkFBb0JDLGFBQU87SUFDOUNDLE9BQU87UUFDTCxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVTtRQUUvQixJQUFJLENBQUNELE9BQU8sQ0FBQ0E7SUFDZjtJQUVBRSxXQUFXO1FBQ1QsTUFBTUMsT0FBT0Msa0JBQU8sRUFDZEosVUFBVSxJQUFJLENBQUNLLEdBQUcsQ0FBQ0Y7UUFFekIsSUFBSSxDQUFDRyxVQUFVLENBQUNOO1FBRWhCLElBQUksQ0FBQ08sSUFBSTtJQUNYO0lBRUFDLGNBQWM7SUFDWixHQUFHO0lBQ0w7SUFFQVAsYUFBYTtRQUNYLE1BQU0sRUFBRUQsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDUyxRQUFRO1FBRWpDLE9BQU9UO0lBQ1Q7SUFFQU0sV0FBV04sT0FBTyxFQUFFO1FBQ2xCLElBQUksQ0FBQ1UsV0FBVyxDQUFDO1lBQ2ZWO1FBQ0Y7SUFDRjtJQUVBVyxrQkFBa0I7UUFDaEIsTUFBTVgsVUFBVTtRQUVoQixJQUFJLENBQUNZLFFBQVEsQ0FBQztZQUNaWjtRQUNGO0lBQ0Y7SUFFQWEsYUFBYTtRQUNYLElBQUksQ0FBQ0YsZUFBZTtJQUN0QjtJQUVBLE9BQU9HLFVBQVUsTUFBTTtBQUN6QiJ9