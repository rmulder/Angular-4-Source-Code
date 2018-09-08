"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X : ' + this.x + ', Y : ' + this.y);
    };
    Point.prototype.getXvalue = function () {
        return this.x;
    };
    Point.prototype.setXvalue = function (value) {
        if (value < 0)
            throw new Error('Value should not be less than zero');
        this.x = value;
    };
    return Point;
}());
exports.Point = Point;
exports.nameConstant = 'Saravana Prasanth';
