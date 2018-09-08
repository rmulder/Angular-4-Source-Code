"use strict";
exports.__esModule = true;
var exercise_one_submain_1 = require("./exercise-one-submain");
var likeClass = new exercise_one_submain_1.Like(3, true);
likeClass._count = 1;
likeClass._isSelected = false;
likeClass.onClick();
console.log("Likes : " + likeClass._count + ", isSelected: " + likeClass._isSelected);
