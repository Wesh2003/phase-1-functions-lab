// Code your solution in this file!
let x;
function distanceFromHqInBlocks(x) {
    if (x>=42) {
        return x-42;
    }
    else if (x<42){
        return 42-x;
    }

}

function distanceFromHqInFeet(){
    return distanceFromHqInBlocks(x)*264;
}

function distanceTravelledInFeet(y,z){
    if (y>z){
        return (y-z)*264;
    }
    else if (z>y){
        return (z-y)*264;
    }
}
function calculatesFarePrice(start, destination){
    if (destination>start && (destination-start)<400){
        return 0;
    }
    else if (destination>start && ((destination-start)>400 && (destination-start) <2000)) {
        return (destination-start*2)/100;
    }
    else if (destination>start && ((destination-start)>2000 )) {
        return 25;
    }
    else if (start>destination && (start-destination)<400){
        return 0;
    }
    else if (start>destination && ((start-destination)>400 && (start-destination) <2000)){
        return (destination-start*2)/100;
    }
    else if (start>destination && ((start-destination)>2000)){
        return 25;
    }
    else if (destination>start && ((destination-start)>2500 )) {
        return 'cannot travel that far';
    }
    else if (start>destination && ((start-destination)>2500 )) {
        return 'cannot travel that far';
    }


}
