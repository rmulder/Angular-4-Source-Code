"use strict";
exports.__esModule = true;
var Like = /** @class */ (function () {
    function Like(_count, _isSelected) {
        this._count = _count;
        this._isSelected = _isSelected;
    }
    Like.prototype.onClick = function () {
        this._count += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    };
    return Like;
}());
exports.Like = Like;
