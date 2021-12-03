import { readFileSync } from "fs";
var text = readFileSync("./input.txt").toString("utf-8");
var directions = text.split("\n");

let up = [0];
let down = [0];
let forward = [0];
for (var direction of directions) {
    var splitVal = direction.split(" ", 2);
    if (splitVal[0] == 'up') {
        up.push(Number(splitVal[1]));
    }
    else if (splitVal[0] == 'down') {
        down.push(Number(splitVal[1]));
    }
    else if (splitVal[0] == 'forward') {
        forward.push(Number(splitVal[1]));
    }
}
let sumUp = up.reduce((a, b) => a + b, 0);
let sumDown = down.reduce((a, b) => a + b, 0);
let sumForward = forward.reduce((a, b) => a + b, 0);
let finalResult = (+sumDown - +sumUp) * +sumForward;
console.log(finalResult);

let aim = 0;
let depth = [0];
let fwd = [0];
for (direction of directions) {
    splitVal = direction.split(" ", 2);
    if (splitVal[0] == 'up') {
        aim = +aim - Number(splitVal[1]);
    }
    else if (splitVal[0] == 'down') {
        aim = +aim + Number(splitVal[1]);
    }
    else if (splitVal[0] == 'forward') {
        let fwdVal = Number(splitVal[1]);
        fwd.push(fwdVal);
        let depthVal = +fwdVal * +aim;
        depth.push(depthVal);
    }
}
let sumDepth = depth.reduce((a, b) => +a + +b, 0);
let sumFwd = fwd.reduce((a, b) => +a + +b, 0);
let trueLocation = +sumDepth * +sumFwd;
console.log(trueLocation);