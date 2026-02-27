"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _necessary = require("necessary");
const _occamstyles = require("occam-styles");
const _easy = require("easy");
const _easygestures = require("easy-gestures");
const _menu = /*#__PURE__*/ _interop_require_default(require("./view/div/menu"));
const _document = /*#__PURE__*/ _interop_require_default(require("./view/div/document"));
const _state = require("./state");
const _selectors = require("./selectors");
const _styles = require("./styles");
const _constants = require("./constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { ENTER_KEY_CODE, ESCAPE_KEY_CODE, ARROW_UP_KEY_CODE, BACKSPACE_KEY_CODE, ARROW_DOWN_KEY_CODE, ARROW_LEFT_KEY_CODE, ARROW_RIGHT_KEY_CODE } = _necessary.keyCodes;
class View extends _easy.Element {
    singleTapCustomHandler = (event, element, top, left)=>{
        const { target } = event, link = this.goToLink(target);
        if (link !== null) {
            return;
        }
        const menuDiv = target.closest(_selectors.MENU_DIV_SELECTOR);
        if (menuDiv !== null) {
            return;
        }
        this.toggleMenuDiv();
    };
    doubleTapCustomHandler = (event, element, top, left)=>{
        const scale = _constants.INITIAL_SCALE;
        (0, _state.setScale)(scale);
        this.zoom();
    };
    pinchStartCustomHandler = (event, element)=>{
        const scale = (0, _state.getScale)(), startScale = scale; ///
        this.setScale(scale);
        this.setStartScale(startScale);
    };
    pinchStopCustomHandler = (event, element)=>{
        const scale = this.getScale();
        (0, _state.setScale)(scale);
    };
    pinchMoveCustomHandler = (event, element, ratio)=>{
        const startScale = this.getStartScale(), scale = startScale * Math.sqrt(ratio);
        this.setScale(scale);
        this.zoom(scale);
    };
    swipeRightCustomHandler = (event, element, top, left, speed)=>{
        this.stopScrolling();
        const scrollHorizontally = this.canScrollHorizontally(), scrollLeft = this.getScrollLeft(), scrolledLeft = scrollLeft <= 1, noScrollLeft = !scrollHorizontally;
        if (scrolledLeft || noScrollLeft) {
            this.showLeftDivisionDiv();
            this.resetScrolling();
            this.zoom();
            return;
        }
        const scrollSpeed = speed, direction = _constants.RIGHT_DIRECTION;
        this.startScrolling(scrollSpeed, direction);
    };
    swipeLeftCustomHandler = (event, element, top, left, speed)=>{
        this.stopScrolling();
        const scrollHorizontally = this.canScrollHorizontally(), maximumScrollLeft = this.getMaximumScrollLeft(), scrollLeft = this.getScrollLeft(), scrolledRight = scrollLeft >= maximumScrollLeft - 1, noScrollRight = !scrollHorizontally;
        if (scrolledRight || noScrollRight) {
            this.showRightDivisionDiv();
            this.resetScrolling();
            this.zoom();
            return;
        }
        const scrollSpeed = speed, direction = _constants.LEFT_DIRECTION;
        this.startScrolling(scrollSpeed, direction);
    };
    swipeDownCustomHandler = (event, element, top, left, speed)=>{
        this.stopScrolling();
        const scrollVertically = this.canScrollVertically();
        if (!scrollVertically) {
            return;
        }
        const scrollSpeed = speed, direction = _constants.DOWN_DIRECTION;
        this.startScrolling(scrollSpeed, direction);
    };
    swipeUpCustomHandler = (event, element, top, left, speed)=>{
        this.stopScrolling();
        const scrollVertically = this.canScrollVertically();
        if (!scrollVertically) {
            return;
        }
        const scrollSpeed = speed, direction = _constants.UP_DIRECTION;
        this.startScrolling(scrollSpeed, direction);
    };
    dragStartCustomHandler = (event, element, top, left)=>{
        this.stopScrolling();
        let startScrollTop = null, startScrollLeft = null;
        const scrollVertically = this.canScrollVertically(), scrollHorizontally = this.canScrollHorizontally();
        if (scrollVertically) {
            const scrollTop = this.getScrollTop();
            startScrollTop = scrollTop; ///
        }
        if (scrollHorizontally) {
            const scrollLeft = this.getScrollLeft();
            startScrollLeft = scrollLeft; ///
        }
        this.setStartScrollTop(startScrollTop);
        this.setStartScrollLeft(startScrollLeft);
    };
    dragRightCustomHandler = (event, element, top, left)=>{
        const startScrollLeft = this.getStartScrollLeft();
        if (startScrollLeft === null) {
            return;
        }
        const scrollLeft = startScrollLeft - left;
        this.setScrollLeft(scrollLeft);
        const startScrollTop = null;
        this.setStartScrollTop(startScrollTop);
    };
    dragDownCustomHandler = (event, element, top, left)=>{
        const startScrollTop = this.getStartScrollTop();
        if (startScrollTop === null) {
            return;
        }
        const scrollTop = startScrollTop - top;
        this.setScrollTop(scrollTop);
        const startScrollLeft = null;
        this.setStartScrollLeft(startScrollLeft);
    };
    dragLeftCustomHandler = (event, element, top, left)=>{
        const startScrollLeft = this.getStartScrollLeft();
        if (startScrollLeft === null) {
            return;
        }
        const scrollLeft = startScrollLeft - left;
        this.setScrollLeft(scrollLeft);
        const startScrollTop = null;
        this.setStartScrollTop(startScrollTop);
    };
    dragUpCustomHandler = (event, element, top, left)=>{
        const startScrollTop = this.getStartScrollTop();
        if (startScrollTop === null) {
            return;
        }
        const scrollTop = startScrollTop - top;
        this.setScrollTop(scrollTop);
        const startScrollLeft = null;
        this.setStartScrollLeft(startScrollLeft);
    };
    fullScreenChangeHandler = (event, element)=>{
        const fullScreen = this.isFullScreen();
        if (fullScreen) {
            this.showEmbeddedModeMenuButton();
            this.hideFullScreenModeMenuButton();
        } else {
            this.hideEmbeddedModeMenuButton();
            this.showFullScreenModeMenuButton();
        }
        this.zoom();
    };
    keyDownHandler = (event, element)=>{
        const { keyCode } = event;
        switch(keyCode){
            case ESCAPE_KEY_CODE:
                {
                    const fullScreen = this.isFullScreen();
                    if (fullScreen) {
                        controller.exitFullScreen();
                    }
                    break;
                }
            case ARROW_UP_KEY_CODE:
                {
                    this.showFirstDivisionDiv();
                    this.resetScrolling();
                    this.zoom();
                    break;
                }
            case ARROW_DOWN_KEY_CODE:
                {
                    this.showLastDivisionDiv();
                    this.resetScrolling();
                    this.zoom();
                    break;
                }
            case ENTER_KEY_CODE:
            case ARROW_RIGHT_KEY_CODE:
                {
                    this.showRightDivisionDiv();
                    this.resetScrolling();
                    this.zoom();
                    break;
                }
            case BACKSPACE_KEY_CODE:
            case ARROW_LEFT_KEY_CODE:
                {
                    this.showLeftDivisionDiv();
                    this.resetScrolling();
                    this.zoom();
                    break;
                }
        }
    };
    resizeHandler = (event, element)=>{
        this.zoom();
    };
    presentationMode() {
        this.activatePresentationModeMenuButton();
        this.deactivateDraftModeMenuButton();
        this.documentDivPresentationMode();
        this.zoom();
    }
    fullScreenMode() {
        const fullScreen = this.isFullScreen();
        if (fullScreen) {
            return;
        }
        this.requestFullScreen((error)=>{
        ///
        });
    }
    embeddedMode() {
        const fullScreen = this.isFullScreen();
        if (!fullScreen) {
            return;
        }
        this.exitFullScreen((error)=>{
        ///
        });
    }
    draftMode() {
        this.deactivatePresentationModeMenuButton();
        this.activateDraftModeMenuButton();
        this.documentDivDraftMode();
        this.zoom();
    }
    goToLink(target) {
        const link = target.closest(_selectors.ANCHOR_HREF_SELECTOR);
        if (link !== null) {
            const href = link.getAttribute(_constants.HREF);
            if (href === _constants.EMPTY_STRING) {
                return;
            }
            const hrefStartsWithHash = href.startsWith(_constants.HASH), linkExternal = !hrefStartsWithHash;
            if (linkExternal) {
                const target = _constants.BLANK_TARGET;
                _easy.window.open(href, target);
            } else {
                const anchorId = href.substring(1); ///
                this.goToAnchor(anchorId);
                this.resetScrolling();
                this.zoom();
            }
        }
        return link;
    }
    zoom(scale = null) {
        if (scale === null) {
            scale = (0, _state.getScale)();
        }
        const innerWidth = this.getInnerWidth(), innerHeight = this.getInnerHeight(), documentScale = scale, viewInnerWidth = innerWidth, viewInnerHeight = innerHeight; ///
        this.scaleDocumentDiv(documentScale, viewInnerWidth, viewInnerHeight);
    }
    scrollToTop() {
        const scrollTop = 0;
        this.setScrollTop(scrollTop);
    }
    scrollToLeft() {
        const scrollLeft = 0;
        this.setScrollLeft(scrollLeft);
    }
    stopScrolling() {
        let animationFrame = this.getAnimationFrame();
        if (animationFrame !== null) {
            cancelAnimationFrame(animationFrame);
            animationFrame = null;
            this.setAnimationFrame(animationFrame);
        }
    }
    startScrolling(scrollSpeed, direction) {
        this.stopScrolling();
        let now = performance.now(), then;
        then = now; ///
        const step = (now)=>{
            const timeDelta = now - then, scrollSpeedDelta = _constants.SCROLL_SPEED_DELTA * timeDelta;
            scrollSpeed = scrollSpeed - scrollSpeedDelta;
            if (scrollSpeed < 0) {
                this.stopScrolling();
                return;
            }
            const scrollDelta = scrollSpeed * _constants.SCROLL_TOP_DELTA * timeDelta;
            let scrollTop = this.getScrollTop(), scrollLeft = this.getScrollLeft();
            switch(direction){
                case _constants.UP_DIRECTION:
                    {
                        scrollTop = scrollTop + scrollDelta;
                        break;
                    }
                case _constants.LEFT_DIRECTION:
                    {
                        scrollLeft = scrollLeft + scrollDelta;
                        break;
                    }
                case _constants.DOWN_DIRECTION:
                    {
                        scrollTop = scrollTop - scrollDelta;
                        break;
                    }
                case _constants.RIGHT_DIRECTION:
                    {
                        scrollLeft = scrollLeft - scrollDelta;
                        break;
                    }
            }
            then = now; ///
            this.setScrollTop(scrollTop);
            this.setScrollLeft(scrollLeft);
            const animationFrame = requestAnimationFrame(step);
            this.setAnimationFrame(animationFrame);
        };
        const animationFrame = requestAnimationFrame(step);
        this.setAnimationFrame(animationFrame);
    }
    resetScrolling() {
        this.scrollToTop();
        this.scrollToLeft();
        this.stopScrolling();
    }
    getMaximumScrollTop() {
        const innerHeight = this.getInnerHeight(), scrollHeight = this.getScrollHeight(), maximumScrollTop = Math.max(0, scrollHeight - innerHeight);
        return maximumScrollTop;
    }
    getMaximumScrollLeft() {
        const innerWidth = this.getInnerWidth(), scrollWidth = this.getScrollWidth(), maximumScrollLeft = Math.max(0, scrollWidth - innerWidth);
        return maximumScrollLeft;
    }
    canScrollVertically() {
        const scale = (0, _state.getScale)(), innerHeight = this.getInnerHeight(), documentDivHeight = this.getDocumentDivHeight(), scaledDocumentDivHeight = documentDivHeight * scale, scrollVertically = scaledDocumentDivHeight > innerHeight;
        return scrollVertically;
    }
    canScrollHorizontally() {
        const scale = (0, _state.getScale)(), innerWidth = this.getInnerWidth(), documentDivWidth = this.getDocumentDivWidth(), scaledDocumentDivWidth = documentDivWidth * scale, scrollHorizontally = scaledDocumentDivWidth > innerWidth;
        return scrollHorizontally;
    }
    getScale() {
        const { scale } = this.getState();
        return scale;
    }
    getStartScale() {
        const { startScale } = this.getState();
        return startScale;
    }
    getAnimationFrame() {
        const { animationFrame } = this.getState();
        return animationFrame;
    }
    getStartScrollTop() {
        const { startScrollTop } = this.getState();
        return startScrollTop;
    }
    getStartScrollLeft() {
        const { startScrollLeft } = this.getState();
        return startScrollLeft;
    }
    setScale(scale) {
        this.updateState({
            scale
        });
    }
    setStartScale(startScale) {
        this.updateState({
            startScale
        });
    }
    setAnimationFrame(animationFrame) {
        this.updateState({
            animationFrame
        });
    }
    setStartScrollTop(startScrollTop) {
        this.updateState({
            startScrollTop
        });
    }
    setStartScrollLeft(startScrollLeft) {
        this.updateState({
            startScrollLeft
        });
    }
    setInitialState() {
        const scale = null, startScale = null, animationFrame = null, startScrollTop = null, startScrollLeft = null;
        this.setState({
            scale,
            startScale,
            animationFrame,
            startScrollTop,
            startScrollLeft
        });
    }
    didMount() {
        this.enableTouch();
        this.onResize(this.resizeHandler);
        _easy.window.onKeyDown(this.keyDownHandler);
        this.onFullScreenChange(this.fullScreenChangeHandler);
        this.onCustomDragUp(this.dragUpCustomHandler);
        this.onCustomSwipeUp(this.swipeUpCustomHandler);
        this.onCustomDragLeft(this.dragLeftCustomHandler);
        this.onCustomDragDown(this.dragDownCustomHandler);
        this.onCustomSingleTap(this.singleTapCustomHandler);
        this.onCustomDoubleTap(this.doubleTapCustomHandler);
        this.onCustomDragRight(this.dragRightCustomHandler);
        this.onCustomDragStart(this.dragStartCustomHandler);
        this.onCustomSwipeLeft(this.swipeLeftCustomHandler);
        this.onCustomSwipeDown(this.swipeDownCustomHandler);
        this.onCustomPinchMove(this.pinchMoveCustomHandler);
        this.onCustomPinchStop(this.pinchStopCustomHandler);
        this.onCustomPinchStart(this.pinchStartCustomHandler);
        this.onCustomSwipeRight(this.swipeRightCustomHandler);
    }
    willUnmount() {
        this.disableTouch();
        this.offResize(this.resizeHandler);
        _easy.window.offKeyDown(this.keyDownHandler);
        this.offFullScreenChange(this.fullScreenChangeHandler);
        this.offCustomDragUp(this.dragUpCustomHandler);
        this.offCustomSwipeUp(this.swipeUpCustomHandler);
        this.offCustomDragLeft(this.dragLeftCustomHandler);
        this.offCustomDragDown(this.dragDownCustomHandler);
        this.offCustomDoubleTap(this.doubleTapCustomHandler);
        this.offCustomSingleTap(this.singleTapCustomHandler);
        this.offCustomDragRight(this.dragRightCustomHandler);
        this.offCustomDragStart(this.dragStartCustomHandler);
        this.offCustomSwipeLeft(this.swipeLeftCustomHandler);
        this.offCustomSwipeDown(this.swipeDownCustomHandler);
        this.offCustomPinchMove(this.pinchMoveCustomHandler);
        this.offCustomPinchStop(this.pinchStopCustomHandler);
        this.offCustomPinchStart(this.pinchStartCustomHandler);
        this.offCustomSwipeRight(this.swipeRightCustomHandler);
    }
    childElements() {
        const resizeHandler = this.resizeHandler.bind(this);
        return [
            /*#__PURE__*/ React.createElement(_menu.default, null),
            /*#__PURE__*/ React.createElement(_document.default, {
                resizeHandler: resizeHandler
            })
        ];
    }
    initialise() {
        this.assignContext();
    }
    static tagName = "div";
    static ignoredProperties = [];
    static defaultProperties = {
        className: "view"
    };
}
Object.assign(View.prototype, _easygestures.touchMixins);
Object.assign(View.prototype, _easygestures.fullScreenMixins);
const _default = (0, _easywithstyle.default)(View)`

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  overflow: scroll;
  align-items: flex-start;
  touch-action: none;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${_styles.viewBackgroundColour};
  
  ${_occamstyles.scrollbarMixin}
  
  @media (pointer: fine) {
    ::-webkit-scrollbar-thumb {
      background-color: ${_styles.viewScrollbarThumbBackgroundColour};
    }
    
    ::-webkit-scrollbar-track {
      background-color: ${_styles.viewScrollbarTrackBackgroundColour};
    }
  
    ::-webkit-scrollbar-corner {
      background-color: ${_styles.viewScrollbarCornerBackgroundColour};
    }
  }
    
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBrZXlDb2RlcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHNjcm9sbGJhck1peGluIH0gZnJvbSBcIm9jY2FtLXN0eWxlc1wiO1xuaW1wb3J0IHsgRWxlbWVudCwgd2luZG93IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IHRvdWNoTWl4aW5zLCBmdWxsU2NyZWVuTWl4aW5zIH0gZnJvbSBcImVhc3ktZ2VzdHVyZXNcIjtcblxuaW1wb3J0IE1lbnVEaXYgZnJvbSBcIi4vdmlldy9kaXYvbWVudVwiO1xuaW1wb3J0IERvY3VtZW50RGl2IGZyb20gXCIuL3ZpZXcvZGl2L2RvY3VtZW50XCI7XG5cbmltcG9ydCB7IGdldFNjYWxlLCBzZXRTY2FsZSB9IGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgeyBBTkNIT1JfSFJFRl9TRUxFQ1RPUiwgTUVOVV9ESVZfU0VMRUNUT1IgfSBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCB7IHZpZXdCYWNrZ3JvdW5kQ29sb3VyLCB2aWV3U2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyLCB2aWV3U2Nyb2xsYmFyVHJhY2tCYWNrZ3JvdW5kQ29sb3VyLCB2aWV3U2Nyb2xsYmFyQ29ybmVyQmFja2dyb3VuZENvbG91ciB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgSFJFRixcbiAgICAgICAgIEhBU0gsXG4gICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICBCTEFOS19UQVJHRVQsXG4gICAgICAgICBVUF9ESVJFQ1RJT04sXG4gICAgICAgICBJTklUSUFMX1NDQUxFLFxuICAgICAgICAgTEVGVF9ESVJFQ1RJT04sXG4gICAgICAgICBET1dOX0RJUkVDVElPTixcbiAgICAgICAgIFJJR0hUX0RJUkVDVElPTixcbiAgICAgICAgIFNDUk9MTF9UT1BfREVMVEEsXG4gICAgICAgICBTQ1JPTExfU1BFRURfREVMVEEgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBFTlRFUl9LRVlfQ09ERSxcbiAgICAgICAgRVNDQVBFX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19VUF9LRVlfQ09ERSxcbiAgICAgICAgQkFDS1NQQUNFX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19ET1dOX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19MRUZUX0tFWV9DT0RFLFxuICAgICAgICBBUlJPV19SSUdIVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc2luZ2xlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LFxuICAgICAgICAgIGxpbmsgPSB0aGlzLmdvVG9MaW5rKHRhcmdldCk7XG5cbiAgICBpZiAobGluayAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnVEaXYgPSB0YXJnZXQuY2xvc2VzdChNRU5VX0RJVl9TRUxFQ1RPUik7XG5cbiAgICBpZiAobWVudURpdiAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudG9nZ2xlTWVudURpdigpO1xuICB9XG5cbiAgZG91YmxlVGFwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc2NhbGUgPSBJTklUSUFMX1NDQUxFO1xuXG4gICAgc2V0U2NhbGUoc2NhbGUpO1xuXG4gICAgdGhpcy56b29tKCk7XG4gIH1cblxuICBwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHNjYWxlID0gZ2V0U2NhbGUoKSxcbiAgICAgICAgICBzdGFydFNjYWxlID0gc2NhbGU7IC8vL1xuXG4gICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2NhbGUoc3RhcnRTY2FsZSk7XG4gIH1cblxuICBwaW5jaFN0b3BDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLmdldFNjYWxlKCk7XG5cbiAgICBzZXRTY2FsZShzY2FsZSk7XG4gIH1cblxuICBwaW5jaE1vdmVDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCByYXRpbykgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2NhbGUgPSB0aGlzLmdldFN0YXJ0U2NhbGUoKSxcbiAgICAgICAgICBzY2FsZSA9IHN0YXJ0U2NhbGUgKiBNYXRoLnNxcnQocmF0aW8pO1xuXG4gICAgdGhpcy5zZXRTY2FsZShzY2FsZSk7XG5cbiAgICB0aGlzLnpvb20oc2NhbGUpO1xuICB9XG5cbiAgc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCwgc3BlZWQpID0+IHtcbiAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgIGNvbnN0IHNjcm9sbEhvcml6b250YWxseSA9IHRoaXMuY2FuU2Nyb2xsSG9yaXpvbnRhbGx5KCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U2Nyb2xsTGVmdCgpLFxuICAgICAgICAgIHNjcm9sbGVkTGVmdCA9IHNjcm9sbExlZnQgPD0gMSxcbiAgICAgICAgICBub1Njcm9sbExlZnQgPSAhc2Nyb2xsSG9yaXpvbnRhbGx5O1xuXG4gICAgaWYgKHNjcm9sbGVkTGVmdCB8fCBub1Njcm9sbExlZnQpIHtcbiAgICAgIHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdigpO1xuXG4gICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgIHRoaXMuem9vbSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IFJJR0hUX0RJUkVDVElPTjtcblxuICAgIHRoaXMuc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbik7XG4gIH1cblxuICBzd2lwZUxlZnRDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBjb25zdCBzY3JvbGxIb3Jpem9udGFsbHkgPSB0aGlzLmNhblNjcm9sbEhvcml6b250YWxseSgpLFxuICAgICAgICAgIG1heGltdW1TY3JvbGxMZWZ0ID0gdGhpcy5nZXRNYXhpbXVtU2Nyb2xsTGVmdCgpLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgICBzY3JvbGxlZFJpZ2h0ID0gc2Nyb2xsTGVmdCA+PSBtYXhpbXVtU2Nyb2xsTGVmdCAtIDEsXG4gICAgICAgICAgbm9TY3JvbGxSaWdodCA9ICFzY3JvbGxIb3Jpem9udGFsbHk7XG5cbiAgICBpZiAoc2Nyb2xsZWRSaWdodCB8fCBub1Njcm9sbFJpZ2h0KSB7XG4gICAgICB0aGlzLnNob3dSaWdodERpdmlzaW9uRGl2KCk7XG5cbiAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IHNwZWVkLCAgLy8vXG4gICAgICAgICAgZGlyZWN0aW9uID0gTEVGVF9ESVJFQ1RJT047XG5cbiAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKHNjcm9sbFNwZWVkLCBkaXJlY3Rpb24pO1xuICB9XG5cbiAgc3dpcGVEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0LCBzcGVlZCkgPT4ge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgY29uc3Qgc2Nyb2xsVmVydGljYWxseSA9IHRoaXMuY2FuU2Nyb2xsVmVydGljYWxseSgpO1xuXG4gICAgaWYgKCFzY3JvbGxWZXJ0aWNhbGx5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsU3BlZWQgPSBzcGVlZCwgIC8vL1xuICAgICAgICAgIGRpcmVjdGlvbiA9IERPV05fRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHN3aXBlVXBDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCB0b3AsIGxlZnQsIHNwZWVkKSA9PiB7XG4gICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7XG5cbiAgICBjb25zdCBzY3JvbGxWZXJ0aWNhbGx5ID0gdGhpcy5jYW5TY3JvbGxWZXJ0aWNhbGx5KCk7XG5cbiAgICBpZiAoIXNjcm9sbFZlcnRpY2FsbHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxTcGVlZCA9IHNwZWVkLCAgLy8vXG4gICAgICAgICAgZGlyZWN0aW9uID0gVVBfRElSRUNUSU9OO1xuXG4gICAgdGhpcy5zdGFydFNjcm9sbGluZyhzY3JvbGxTcGVlZCwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGRyYWdTdGFydEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgbGV0IHN0YXJ0U2Nyb2xsVG9wID0gbnVsbCxcbiAgICAgICAgc3RhcnRTY3JvbGxMZWZ0ID0gbnVsbDtcblxuICAgIGNvbnN0IHNjcm9sbFZlcnRpY2FsbHkgPSB0aGlzLmNhblNjcm9sbFZlcnRpY2FsbHkoKSxcbiAgICAgICAgICBzY3JvbGxIb3Jpem9udGFsbHkgPSB0aGlzLmNhblNjcm9sbEhvcml6b250YWxseSgpO1xuXG4gICAgaWYgKHNjcm9sbFZlcnRpY2FsbHkpIHtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCk7XG5cbiAgICAgIHN0YXJ0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsSG9yaXpvbnRhbGx5KSB7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgIHN0YXJ0U2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7IC8vL1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGRyYWdSaWdodEN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHRvcCwgbGVmdCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsTGVmdCA9IHRoaXMuZ2V0U3RhcnRTY3JvbGxMZWZ0KCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxMZWZ0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHN0YXJ0U2Nyb2xsTGVmdCAtIGxlZnQ7XG5cbiAgICB0aGlzLnNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbFRvcCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKTtcbiAgfVxuXG4gIGRyYWdEb3duQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbExlZnQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGRyYWdMZWZ0Q3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxMZWZ0ID0gdGhpcy5nZXRTdGFydFNjcm9sbExlZnQoKTtcblxuICAgIGlmIChzdGFydFNjcm9sbExlZnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gc3RhcnRTY3JvbGxMZWZ0IC0gbGVmdDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTtcblxuICAgIGNvbnN0IHN0YXJ0U2Nyb2xsVG9wID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhcnRTY3JvbGxUb3Aoc3RhcnRTY3JvbGxUb3ApO1xuICB9XG5cbiAgZHJhZ1VwQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgdG9wLCBsZWZ0KSA9PiB7XG4gICAgY29uc3Qgc3RhcnRTY3JvbGxUb3AgPSB0aGlzLmdldFN0YXJ0U2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoc3RhcnRTY3JvbGxUb3AgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCAtIHRvcDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCk7XG5cbiAgICBjb25zdCBzdGFydFNjcm9sbExlZnQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGFydFNjcm9sbExlZnQoc3RhcnRTY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIGZ1bGxTY3JlZW5DaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBpZiAoZnVsbFNjcmVlbikge1xuICAgICAgdGhpcy5zaG93RW1iZWRkZWRNb2RlTWVudUJ1dHRvbigpO1xuICAgICAgdGhpcy5oaWRlRnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZUVtYmVkZGVkTW9kZU1lbnVCdXR0b24oKTtcbiAgICAgIHRoaXMuc2hvd0Z1bGxTY3JlZW5Nb2RlTWVudUJ1dHRvbigpO1xuICAgIH1cblxuICAgIHRoaXMuem9vbSgpO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICBjYXNlIEVTQ0FQRV9LRVlfQ09ERToge1xuICAgICAgICBjb25zdCBmdWxsU2NyZWVuID0gdGhpcy5pc0Z1bGxTY3JlZW4oKTtcblxuICAgICAgICBpZiAoZnVsbFNjcmVlbikge1xuICAgICAgICAgIGNvbnRyb2xsZXIuZXhpdEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIEFSUk9XX1VQX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0ZpcnN0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQVJST1dfRE9XTl9LRVlfQ09ERToge1xuICAgICAgICB0aGlzLnNob3dMYXN0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgRU5URVJfS0VZX0NPREU6XG4gICAgICBjYXNlIEFSUk9XX1JJR0hUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd1JpZ2h0RGl2aXNpb25EaXYoKTtcblxuICAgICAgICB0aGlzLnJlc2V0U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgdGhpcy56b29tKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQkFDS1NQQUNFX0tFWV9DT0RFOlxuICAgICAgY2FzZSBBUlJPV19MRUZUX0tFWV9DT0RFOiB7XG4gICAgICAgIHRoaXMuc2hvd0xlZnREaXZpc2lvbkRpdigpO1xuXG4gICAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgICB0aGlzLnpvb20oKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXNpemVIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy56b29tKCk7XG4gIH1cblxuICBwcmVzZW50YXRpb25Nb2RlKCkge1xuICAgIHRoaXMuYWN0aXZhdGVQcmVzZW50YXRpb25Nb2RlTWVudUJ1dHRvbigpO1xuICAgIHRoaXMuZGVhY3RpdmF0ZURyYWZ0TW9kZU1lbnVCdXR0b24oKTtcblxuICAgIHRoaXMuZG9jdW1lbnREaXZQcmVzZW50YXRpb25Nb2RlKCk7XG5cbiAgICB0aGlzLnpvb20oKTtcbiAgfVxuXG4gIGZ1bGxTY3JlZW5Nb2RlKCkge1xuICAgIGNvbnN0IGZ1bGxTY3JlZW4gPSB0aGlzLmlzRnVsbFNjcmVlbigpO1xuXG4gICAgaWYgKGZ1bGxTY3JlZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnJlcXVlc3RGdWxsU2NyZWVuKChlcnJvcikgPT4ge1xuICAgICAgLy8vXG4gICAgfSk7XG4gIH1cblxuICBlbWJlZGRlZE1vZGUoKSB7XG4gICAgY29uc3QgZnVsbFNjcmVlbiA9IHRoaXMuaXNGdWxsU2NyZWVuKCk7XG5cbiAgICBpZiAoIWZ1bGxTY3JlZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmV4aXRGdWxsU2NyZWVuKChlcnJvcikgPT4ge1xuICAgICAgLy8vXG4gICAgfSk7XG4gIH1cblxuICBkcmFmdE1vZGUoKSB7XG4gICAgdGhpcy5kZWFjdGl2YXRlUHJlc2VudGF0aW9uTW9kZU1lbnVCdXR0b24oKTtcbiAgICB0aGlzLmFjdGl2YXRlRHJhZnRNb2RlTWVudUJ1dHRvbigpO1xuXG4gICAgdGhpcy5kb2N1bWVudERpdkRyYWZ0TW9kZSgpO1xuXG4gICAgdGhpcy56b29tKCk7XG4gIH1cblxuICBnb1RvTGluayh0YXJnZXQpIHtcbiAgICBjb25zdCBsaW5rID0gdGFyZ2V0LmNsb3Nlc3QoQU5DSE9SX0hSRUZfU0VMRUNUT1IpO1xuXG4gICAgaWYgKGxpbmsgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZShIUkVGKTtcblxuICAgICAgaWYgKGhyZWYgPT09IEVNUFRZX1NUUklORykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhyZWZTdGFydHNXaXRoSGFzaCA9IGhyZWYuc3RhcnRzV2l0aChIQVNIKSxcbiAgICAgICAgICAgIGxpbmtFeHRlcm5hbCA9ICFocmVmU3RhcnRzV2l0aEhhc2g7XG5cbiAgICAgIGlmIChsaW5rRXh0ZXJuYWwpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gQkxBTktfVEFSR0VUO1xuXG4gICAgICAgIHdpbmRvdy5vcGVuKGhyZWYsIHRhcmdldCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhbmNob3JJZCA9IGhyZWYuc3Vic3RyaW5nKDEpOyAvLy9cblxuICAgICAgICB0aGlzLmdvVG9BbmNob3IoYW5jaG9ySWQpO1xuXG4gICAgICAgIHRoaXMucmVzZXRTY3JvbGxpbmcoKTtcblxuICAgICAgICB0aGlzLnpvb20oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGluaztcbiAgfVxuXG4gIHpvb20oc2NhbGUgPSBudWxsKSB7XG4gICAgaWYgKHNjYWxlID09PSBudWxsKSB7XG4gICAgICBzY2FsZSA9IGdldFNjYWxlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5uZXJXaWR0aCA9IHRoaXMuZ2V0SW5uZXJXaWR0aCgpLFxuICAgICAgICAgIGlubmVySGVpZ2h0ID0gdGhpcy5nZXRJbm5lckhlaWdodCgpLFxuICAgICAgICAgIGRvY3VtZW50U2NhbGUgPSBzY2FsZSwgLy8vXG4gICAgICAgICAgdmlld0lubmVyV2lkdGggPSBpbm5lcldpZHRoLCAvLy9cbiAgICAgICAgICB2aWV3SW5uZXJIZWlnaHQgPSBpbm5lckhlaWdodDsgLy8vXG5cbiAgICB0aGlzLnNjYWxlRG9jdW1lbnREaXYoZG9jdW1lbnRTY2FsZSwgdmlld0lubmVyV2lkdGgsIHZpZXdJbm5lckhlaWdodCk7XG4gIH1cblxuICBzY3JvbGxUb1RvcCgpIHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSAwO1xuXG4gICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcbiAgfVxuXG4gIHNjcm9sbFRvTGVmdCgpIHtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gMDtcblxuICAgIHRoaXMuc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTtcbiAgfVxuXG4gIHN0b3BTY3JvbGxpbmcoKSB7XG4gICAgbGV0IGFuaW1hdGlvbkZyYW1lID0gdGhpcy5nZXRBbmltYXRpb25GcmFtZSgpO1xuXG4gICAgaWYgKGFuaW1hdGlvbkZyYW1lICE9PSBudWxsKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG5cbiAgICAgIGFuaW1hdGlvbkZyYW1lID0gbnVsbDtcblxuICAgICAgdGhpcy5zZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRTY3JvbGxpbmcoc2Nyb2xsU3BlZWQsIGRpcmVjdGlvbikge1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuXG4gICAgbGV0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpLFxuICAgICAgICB0aGVuO1xuXG4gICAgdGhlbiA9IG5vdzsgIC8vL1xuXG4gICAgY29uc3Qgc3RlcCA9IChub3cpID0+IHtcbiAgICAgIGNvbnN0IHRpbWVEZWx0YSA9IG5vdyAtIHRoZW4sXG4gICAgICAgICAgICBzY3JvbGxTcGVlZERlbHRhID0gU0NST0xMX1NQRUVEX0RFTFRBICogdGltZURlbHRhO1xuXG4gICAgICBzY3JvbGxTcGVlZCA9IHNjcm9sbFNwZWVkIC0gc2Nyb2xsU3BlZWREZWx0YTtcblxuICAgICAgaWYgKHNjcm9sbFNwZWVkIDwgMCkge1xuICAgICAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNjcm9sbERlbHRhID0gc2Nyb2xsU3BlZWQgKiBTQ1JPTExfVE9QX0RFTFRBICogdGltZURlbHRhO1xuXG4gICAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGxUb3AoKSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgVVBfRElSRUNUSU9OOiB7XG4gICAgICAgICAgc2Nyb2xsVG9wID0gc2Nyb2xsVG9wICsgc2Nyb2xsRGVsdGE7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgTEVGVF9ESVJFQ1RJT046IHtcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCArIHNjcm9sbERlbHRhO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIERPV05fRElSRUNUSU9OOiB7XG4gICAgICAgICAgc2Nyb2xsVG9wID0gc2Nyb2xsVG9wIC0gc2Nyb2xsRGVsdGE7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgUklHSFRfRElSRUNUSU9OOiB7XG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgLSBzY3JvbGxEZWx0YTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoZW4gPSBub3c7ICAvLy9cblxuICAgICAgdGhpcy5zZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcblxuICAgICAgdGhpcy5zZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpO1xuXG4gICAgICBjb25zdCBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcblxuICAgICAgdGhpcy5zZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG5cbiAgICB0aGlzLnNldEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgfVxuXG4gIHJlc2V0U2Nyb2xsaW5nKCkge1xuICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcbiAgICB0aGlzLnNjcm9sbFRvTGVmdCgpO1xuICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuICB9XG5cbiAgZ2V0TWF4aW11bVNjcm9sbFRvcCgpIHtcbiAgICBjb25zdCBpbm5lckhlaWdodCA9IHRoaXMuZ2V0SW5uZXJIZWlnaHQoKSxcbiAgICAgICAgICBzY3JvbGxIZWlnaHQgPSB0aGlzLmdldFNjcm9sbEhlaWdodCgpLFxuICAgICAgICAgIG1heGltdW1TY3JvbGxUb3AgPSBNYXRoLm1heCgwLCBzY3JvbGxIZWlnaHQgLSBpbm5lckhlaWdodCk7XG5cbiAgICByZXR1cm4gbWF4aW11bVNjcm9sbFRvcDtcbiAgfVxuXG4gIGdldE1heGltdW1TY3JvbGxMZWZ0KCkge1xuICAgIGNvbnN0IGlubmVyV2lkdGggPSB0aGlzLmdldElubmVyV2lkdGgoKSxcbiAgICAgICAgICBzY3JvbGxXaWR0aCA9IHRoaXMuZ2V0U2Nyb2xsV2lkdGgoKSxcbiAgICAgICAgICBtYXhpbXVtU2Nyb2xsTGVmdCA9IE1hdGgubWF4KDAsIHNjcm9sbFdpZHRoIC0gaW5uZXJXaWR0aCk7XG5cbiAgICByZXR1cm4gbWF4aW11bVNjcm9sbExlZnQ7XG4gIH1cblxuICBjYW5TY3JvbGxWZXJ0aWNhbGx5KCkge1xuICAgIGNvbnN0IHNjYWxlID0gZ2V0U2NhbGUoKSxcbiAgICAgICAgICBpbm5lckhlaWdodCA9IHRoaXMuZ2V0SW5uZXJIZWlnaHQoKSxcbiAgICAgICAgICBkb2N1bWVudERpdkhlaWdodCA9IHRoaXMuZ2V0RG9jdW1lbnREaXZIZWlnaHQoKSxcbiAgICAgICAgICBzY2FsZWREb2N1bWVudERpdkhlaWdodCA9IGRvY3VtZW50RGl2SGVpZ2h0ICogc2NhbGUsXG4gICAgICAgICAgc2Nyb2xsVmVydGljYWxseSA9IHNjYWxlZERvY3VtZW50RGl2SGVpZ2h0ID4gaW5uZXJIZWlnaHQ7XG5cbiAgICByZXR1cm4gc2Nyb2xsVmVydGljYWxseTtcbiAgfVxuXG4gIGNhblNjcm9sbEhvcml6b250YWxseSgpIHtcbiAgICBjb25zdCBzY2FsZSA9IGdldFNjYWxlKCksXG4gICAgICAgICAgaW5uZXJXaWR0aCA9IHRoaXMuZ2V0SW5uZXJXaWR0aCgpLFxuICAgICAgICAgIGRvY3VtZW50RGl2V2lkdGggPSB0aGlzLmdldERvY3VtZW50RGl2V2lkdGgoKSxcbiAgICAgICAgICBzY2FsZWREb2N1bWVudERpdldpZHRoID0gZG9jdW1lbnREaXZXaWR0aCAqIHNjYWxlLFxuICAgICAgICAgIHNjcm9sbEhvcml6b250YWxseSA9IHNjYWxlZERvY3VtZW50RGl2V2lkdGggPiBpbm5lcldpZHRoO1xuXG4gICAgcmV0dXJuIHNjcm9sbEhvcml6b250YWxseTtcbiAgfVxuXG4gIGdldFNjYWxlKCkge1xuICAgIGNvbnN0IHsgc2NhbGUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzY2FsZTtcbiAgfVxuXG4gIGdldFN0YXJ0U2NhbGUoKSB7XG4gICAgY29uc3QgeyBzdGFydFNjYWxlIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gc3RhcnRTY2FsZTtcbiAgfVxuXG4gIGdldEFuaW1hdGlvbkZyYW1lKCkge1xuICAgIGNvbnN0IHsgYW5pbWF0aW9uRnJhbWUgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBhbmltYXRpb25GcmFtZTtcbiAgfVxuXG4gIGdldFN0YXJ0U2Nyb2xsVG9wKCkge1xuICAgIGNvbnN0IHsgc3RhcnRTY3JvbGxUb3AgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiBzdGFydFNjcm9sbFRvcDtcbiAgfVxuXG4gIGdldFN0YXJ0U2Nyb2xsTGVmdCgpIHtcbiAgICBjb25zdCB7IHN0YXJ0U2Nyb2xsTGVmdCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHN0YXJ0U2Nyb2xsTGVmdDtcbiAgfVxuXG4gIHNldFNjYWxlKHNjYWxlKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzY2FsZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhcnRTY2FsZShzdGFydFNjYWxlKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFNjYWxlXG4gICAgfSk7XG4gIH1cblxuICBzZXRBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgYW5pbWF0aW9uRnJhbWVcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXJ0U2Nyb2xsVG9wKHN0YXJ0U2Nyb2xsVG9wKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBzdGFydFNjcm9sbFRvcFxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhcnRTY3JvbGxMZWZ0KHN0YXJ0U2Nyb2xsTGVmdCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgc3RhcnRTY3JvbGxMZWZ0XG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3Qgc2NhbGUgPSBudWxsLFxuICAgICAgICAgIHN0YXJ0U2NhbGUgPSBudWxsLFxuICAgICAgICAgIGFuaW1hdGlvbkZyYW1lID0gbnVsbCxcbiAgICAgICAgICBzdGFydFNjcm9sbFRvcCA9IG51bGwsXG4gICAgICAgICAgc3RhcnRTY3JvbGxMZWZ0ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2NhbGUsXG4gICAgICBzdGFydFNjYWxlLFxuICAgICAgYW5pbWF0aW9uRnJhbWUsXG4gICAgICBzdGFydFNjcm9sbFRvcCxcbiAgICAgIHN0YXJ0U2Nyb2xsTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5lbmFibGVUb3VjaCgpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSh0aGlzLnJlc2l6ZUhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIHRoaXMub25GdWxsU2NyZWVuQ2hhbmdlKHRoaXMuZnVsbFNjcmVlbkNoYW5nZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbURyYWdVcCh0aGlzLmRyYWdVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnTGVmdCh0aGlzLmRyYWdMZWZ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURyYWdEb3duKHRoaXMuZHJhZ0Rvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tU2luZ2xlVGFwKHRoaXMuc2luZ2xlVGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbURvdWJsZVRhcCh0aGlzLmRvdWJsZVRhcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21EcmFnUmlnaHQodGhpcy5kcmFnUmlnaHRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVN3aXBlTGVmdCh0aGlzLnN3aXBlTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZURvd24odGhpcy5zd2lwZURvd25DdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9uQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vbkN1c3RvbVBpbmNoU3RvcCh0aGlzLnBpbmNoU3RvcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21QaW5jaFN0YXJ0KHRoaXMucGluY2hTdGFydEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub25DdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNhYmxlVG91Y2goKTtcblxuICAgIHRoaXMub2ZmUmVzaXplKHRoaXMucmVzaXplSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmRnVsbFNjcmVlbkNoYW5nZSh0aGlzLmZ1bGxTY3JlZW5DaGFuZ2VIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1VwKHRoaXMuZHJhZ1VwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVVwKHRoaXMuc3dpcGVVcEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0xlZnQodGhpcy5kcmFnTGVmdEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ0Rvd24odGhpcy5kcmFnRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRG91YmxlVGFwKHRoaXMuZG91YmxlVGFwQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21TaW5nbGVUYXAodGhpcy5zaW5nbGVUYXBDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbURyYWdSaWdodCh0aGlzLmRyYWdSaWdodEN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZ1N0YXJ0KHRoaXMuZHJhZ1N0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZUxlZnQodGhpcy5zd2lwZUxlZnRDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVN3aXBlRG93bih0aGlzLnN3aXBlRG93bkN1c3RvbUhhbmRsZXIpO1xuICAgIHRoaXMub2ZmQ3VzdG9tUGluY2hNb3ZlKHRoaXMucGluY2hNb3ZlQ3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21QaW5jaFN0b3AodGhpcy5waW5jaFN0b3BDdXN0b21IYW5kbGVyKTtcbiAgICB0aGlzLm9mZkN1c3RvbVBpbmNoU3RhcnQodGhpcy5waW5jaFN0YXJ0Q3VzdG9tSGFuZGxlcik7XG4gICAgdGhpcy5vZmZDdXN0b21Td2lwZVJpZ2h0KHRoaXMuc3dpcGVSaWdodEN1c3RvbUhhbmRsZXIpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCByZXNpemVIYW5kbGVyID0gdGhpcy5yZXNpemVIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPE1lbnVEaXYvPixcbiAgICAgIDxEb2N1bWVudERpdiByZXNpemVIYW5kbGVyPXtyZXNpemVIYW5kbGVyfSAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIHRvdWNoTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oVmlldy5wcm90b3R5cGUsIGZ1bGxTY3JlZW5NaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt2aWV3QmFja2dyb3VuZENvbG91cn07XG4gIFxuICAke3Njcm9sbGJhck1peGlufVxuICBcbiAgQG1lZGlhIChwb2ludGVyOiBmaW5lKSB7XG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3ZpZXdTY3JvbGxiYXJUaHVtYkJhY2tncm91bmRDb2xvdXJ9O1xuICAgIH1cbiAgICBcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dmlld1Njcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91cn07XG4gICAgfVxuICBcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3ZpZXdTY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyfTtcbiAgICB9XG4gIH1cbiAgICBcbmA7XG4iXSwibmFtZXMiOlsiRU5URVJfS0VZX0NPREUiLCJFU0NBUEVfS0VZX0NPREUiLCJBUlJPV19VUF9LRVlfQ09ERSIsIkJBQ0tTUEFDRV9LRVlfQ09ERSIsIkFSUk9XX0RPV05fS0VZX0NPREUiLCJBUlJPV19MRUZUX0tFWV9DT0RFIiwiQVJST1dfUklHSFRfS0VZX0NPREUiLCJrZXlDb2RlcyIsIlZpZXciLCJFbGVtZW50Iiwic2luZ2xlVGFwQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInRvcCIsImxlZnQiLCJ0YXJnZXQiLCJsaW5rIiwiZ29Ub0xpbmsiLCJtZW51RGl2IiwiY2xvc2VzdCIsIk1FTlVfRElWX1NFTEVDVE9SIiwidG9nZ2xlTWVudURpdiIsImRvdWJsZVRhcEN1c3RvbUhhbmRsZXIiLCJzY2FsZSIsIklOSVRJQUxfU0NBTEUiLCJzZXRTY2FsZSIsInpvb20iLCJwaW5jaFN0YXJ0Q3VzdG9tSGFuZGxlciIsImdldFNjYWxlIiwic3RhcnRTY2FsZSIsInNldFN0YXJ0U2NhbGUiLCJwaW5jaFN0b3BDdXN0b21IYW5kbGVyIiwicGluY2hNb3ZlQ3VzdG9tSGFuZGxlciIsInJhdGlvIiwiZ2V0U3RhcnRTY2FsZSIsIk1hdGgiLCJzcXJ0Iiwic3dpcGVSaWdodEN1c3RvbUhhbmRsZXIiLCJzcGVlZCIsInN0b3BTY3JvbGxpbmciLCJzY3JvbGxIb3Jpem9udGFsbHkiLCJjYW5TY3JvbGxIb3Jpem9udGFsbHkiLCJzY3JvbGxMZWZ0IiwiZ2V0U2Nyb2xsTGVmdCIsInNjcm9sbGVkTGVmdCIsIm5vU2Nyb2xsTGVmdCIsInNob3dMZWZ0RGl2aXNpb25EaXYiLCJyZXNldFNjcm9sbGluZyIsInNjcm9sbFNwZWVkIiwiZGlyZWN0aW9uIiwiUklHSFRfRElSRUNUSU9OIiwic3RhcnRTY3JvbGxpbmciLCJzd2lwZUxlZnRDdXN0b21IYW5kbGVyIiwibWF4aW11bVNjcm9sbExlZnQiLCJnZXRNYXhpbXVtU2Nyb2xsTGVmdCIsInNjcm9sbGVkUmlnaHQiLCJub1Njcm9sbFJpZ2h0Iiwic2hvd1JpZ2h0RGl2aXNpb25EaXYiLCJMRUZUX0RJUkVDVElPTiIsInN3aXBlRG93bkN1c3RvbUhhbmRsZXIiLCJzY3JvbGxWZXJ0aWNhbGx5IiwiY2FuU2Nyb2xsVmVydGljYWxseSIsIkRPV05fRElSRUNUSU9OIiwic3dpcGVVcEN1c3RvbUhhbmRsZXIiLCJVUF9ESVJFQ1RJT04iLCJkcmFnU3RhcnRDdXN0b21IYW5kbGVyIiwic3RhcnRTY3JvbGxUb3AiLCJzdGFydFNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJnZXRTY3JvbGxUb3AiLCJzZXRTdGFydFNjcm9sbFRvcCIsInNldFN0YXJ0U2Nyb2xsTGVmdCIsImRyYWdSaWdodEN1c3RvbUhhbmRsZXIiLCJnZXRTdGFydFNjcm9sbExlZnQiLCJzZXRTY3JvbGxMZWZ0IiwiZHJhZ0Rvd25DdXN0b21IYW5kbGVyIiwiZ2V0U3RhcnRTY3JvbGxUb3AiLCJzZXRTY3JvbGxUb3AiLCJkcmFnTGVmdEN1c3RvbUhhbmRsZXIiLCJkcmFnVXBDdXN0b21IYW5kbGVyIiwiZnVsbFNjcmVlbkNoYW5nZUhhbmRsZXIiLCJmdWxsU2NyZWVuIiwiaXNGdWxsU2NyZWVuIiwic2hvd0VtYmVkZGVkTW9kZU1lbnVCdXR0b24iLCJoaWRlRnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uIiwiaGlkZUVtYmVkZGVkTW9kZU1lbnVCdXR0b24iLCJzaG93RnVsbFNjcmVlbk1vZGVNZW51QnV0dG9uIiwia2V5RG93bkhhbmRsZXIiLCJrZXlDb2RlIiwiY29udHJvbGxlciIsImV4aXRGdWxsU2NyZWVuIiwic2hvd0ZpcnN0RGl2aXNpb25EaXYiLCJzaG93TGFzdERpdmlzaW9uRGl2IiwicmVzaXplSGFuZGxlciIsInByZXNlbnRhdGlvbk1vZGUiLCJhY3RpdmF0ZVByZXNlbnRhdGlvbk1vZGVNZW51QnV0dG9uIiwiZGVhY3RpdmF0ZURyYWZ0TW9kZU1lbnVCdXR0b24iLCJkb2N1bWVudERpdlByZXNlbnRhdGlvbk1vZGUiLCJmdWxsU2NyZWVuTW9kZSIsInJlcXVlc3RGdWxsU2NyZWVuIiwiZXJyb3IiLCJlbWJlZGRlZE1vZGUiLCJkcmFmdE1vZGUiLCJkZWFjdGl2YXRlUHJlc2VudGF0aW9uTW9kZU1lbnVCdXR0b24iLCJhY3RpdmF0ZURyYWZ0TW9kZU1lbnVCdXR0b24iLCJkb2N1bWVudERpdkRyYWZ0TW9kZSIsIkFOQ0hPUl9IUkVGX1NFTEVDVE9SIiwiaHJlZiIsImdldEF0dHJpYnV0ZSIsIkhSRUYiLCJFTVBUWV9TVFJJTkciLCJocmVmU3RhcnRzV2l0aEhhc2giLCJzdGFydHNXaXRoIiwiSEFTSCIsImxpbmtFeHRlcm5hbCIsIkJMQU5LX1RBUkdFVCIsIndpbmRvdyIsIm9wZW4iLCJhbmNob3JJZCIsInN1YnN0cmluZyIsImdvVG9BbmNob3IiLCJpbm5lcldpZHRoIiwiZ2V0SW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZ2V0SW5uZXJIZWlnaHQiLCJkb2N1bWVudFNjYWxlIiwidmlld0lubmVyV2lkdGgiLCJ2aWV3SW5uZXJIZWlnaHQiLCJzY2FsZURvY3VtZW50RGl2Iiwic2Nyb2xsVG9Ub3AiLCJzY3JvbGxUb0xlZnQiLCJhbmltYXRpb25GcmFtZSIsImdldEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJzZXRBbmltYXRpb25GcmFtZSIsIm5vdyIsInBlcmZvcm1hbmNlIiwidGhlbiIsInN0ZXAiLCJ0aW1lRGVsdGEiLCJzY3JvbGxTcGVlZERlbHRhIiwiU0NST0xMX1NQRUVEX0RFTFRBIiwic2Nyb2xsRGVsdGEiLCJTQ1JPTExfVE9QX0RFTFRBIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2V0TWF4aW11bVNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImdldFNjcm9sbEhlaWdodCIsIm1heGltdW1TY3JvbGxUb3AiLCJtYXgiLCJzY3JvbGxXaWR0aCIsImdldFNjcm9sbFdpZHRoIiwiZG9jdW1lbnREaXZIZWlnaHQiLCJnZXREb2N1bWVudERpdkhlaWdodCIsInNjYWxlZERvY3VtZW50RGl2SGVpZ2h0IiwiZG9jdW1lbnREaXZXaWR0aCIsImdldERvY3VtZW50RGl2V2lkdGgiLCJzY2FsZWREb2N1bWVudERpdldpZHRoIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJlbmFibGVUb3VjaCIsIm9uUmVzaXplIiwib25LZXlEb3duIiwib25GdWxsU2NyZWVuQ2hhbmdlIiwib25DdXN0b21EcmFnVXAiLCJvbkN1c3RvbVN3aXBlVXAiLCJvbkN1c3RvbURyYWdMZWZ0Iiwib25DdXN0b21EcmFnRG93biIsIm9uQ3VzdG9tU2luZ2xlVGFwIiwib25DdXN0b21Eb3VibGVUYXAiLCJvbkN1c3RvbURyYWdSaWdodCIsIm9uQ3VzdG9tRHJhZ1N0YXJ0Iiwib25DdXN0b21Td2lwZUxlZnQiLCJvbkN1c3RvbVN3aXBlRG93biIsIm9uQ3VzdG9tUGluY2hNb3ZlIiwib25DdXN0b21QaW5jaFN0b3AiLCJvbkN1c3RvbVBpbmNoU3RhcnQiLCJvbkN1c3RvbVN3aXBlUmlnaHQiLCJ3aWxsVW5tb3VudCIsImRpc2FibGVUb3VjaCIsIm9mZlJlc2l6ZSIsIm9mZktleURvd24iLCJvZmZGdWxsU2NyZWVuQ2hhbmdlIiwib2ZmQ3VzdG9tRHJhZ1VwIiwib2ZmQ3VzdG9tU3dpcGVVcCIsIm9mZkN1c3RvbURyYWdMZWZ0Iiwib2ZmQ3VzdG9tRHJhZ0Rvd24iLCJvZmZDdXN0b21Eb3VibGVUYXAiLCJvZmZDdXN0b21TaW5nbGVUYXAiLCJvZmZDdXN0b21EcmFnUmlnaHQiLCJvZmZDdXN0b21EcmFnU3RhcnQiLCJvZmZDdXN0b21Td2lwZUxlZnQiLCJvZmZDdXN0b21Td2lwZURvd24iLCJvZmZDdXN0b21QaW5jaE1vdmUiLCJvZmZDdXN0b21QaW5jaFN0b3AiLCJvZmZDdXN0b21QaW5jaFN0YXJ0Iiwib2ZmQ3VzdG9tU3dpcGVSaWdodCIsImNoaWxkRWxlbWVudHMiLCJiaW5kIiwiTWVudURpdiIsIkRvY3VtZW50RGl2IiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsInRvdWNoTWl4aW5zIiwiZnVsbFNjcmVlbk1peGlucyIsIndpdGhTdHlsZSIsInZpZXdCYWNrZ3JvdW5kQ29sb3VyIiwic2Nyb2xsYmFyTWl4aW4iLCJ2aWV3U2Nyb2xsYmFyVGh1bWJCYWNrZ3JvdW5kQ29sb3VyIiwidmlld1Njcm9sbGJhclRyYWNrQmFja2dyb3VuZENvbG91ciIsInZpZXdTY3JvbGxiYXJDb3JuZXJCYWNrZ3JvdW5kQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErckJBOzs7ZUFBQTs7O3NFQTdyQnNCOzJCQUVHOzZCQUNNO3NCQUNDOzhCQUNjOzZEQUUxQjtpRUFDSTt1QkFFVzsyQkFDcUI7d0JBQzBGOzJCQVcvRzs7Ozs7O0FBRW5DLE1BQU0sRUFBRUEsY0FBYyxFQUNkQyxlQUFlLEVBQ2ZDLGlCQUFpQixFQUNqQkMsa0JBQWtCLEVBQ2xCQyxtQkFBbUIsRUFDbkJDLG1CQUFtQixFQUNuQkMsb0JBQW9CLEVBQUUsR0FBR0MsbUJBQVE7QUFFekMsTUFBTUMsYUFBYUMsYUFBTztJQUN4QkMseUJBQXlCLENBQUNDLE9BQU9DLFNBQVNDLEtBQUtDO1FBQzdDLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdKLE9BQ2JLLE9BQU8sSUFBSSxDQUFDQyxRQUFRLENBQUNGO1FBRTNCLElBQUlDLFNBQVMsTUFBTTtZQUNqQjtRQUNGO1FBRUEsTUFBTUUsVUFBVUgsT0FBT0ksT0FBTyxDQUFDQyw0QkFBaUI7UUFFaEQsSUFBSUYsWUFBWSxNQUFNO1lBQ3BCO1FBQ0Y7UUFFQSxJQUFJLENBQUNHLGFBQWE7SUFDcEIsRUFBQztJQUVEQyx5QkFBeUIsQ0FBQ1gsT0FBT0MsU0FBU0MsS0FBS0M7UUFDN0MsTUFBTVMsUUFBUUMsd0JBQWE7UUFFM0JDLElBQUFBLGVBQVEsRUFBQ0Y7UUFFVCxJQUFJLENBQUNHLElBQUk7SUFDWCxFQUFDO0lBRURDLDBCQUEwQixDQUFDaEIsT0FBT0M7UUFDaEMsTUFBTVcsUUFBUUssSUFBQUEsZUFBUSxLQUNoQkMsYUFBYU4sT0FBTyxHQUFHO1FBRTdCLElBQUksQ0FBQ0UsUUFBUSxDQUFD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