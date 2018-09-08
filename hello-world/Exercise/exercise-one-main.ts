import {Like} from './exercise-one-submain';

let likeClass = new Like(3,true);
likeClass._count = 1;
likeClass._isSelected = false;
likeClass.onClick();
console.log(`Likes : ${likeClass._count}, isSelected: ${likeClass._isSelected}`);