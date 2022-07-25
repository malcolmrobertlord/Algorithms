// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane., return boolean.

var checkStraightLine = function(coordinates) {
    //edge case if only 2 coordinates
    if (coordinates.length === 2){
        return true;
    }
    //find slope between 1st and second point (rise/run)
    let slope = (coordinates[1][1]-coordinates[0][1])/(coordinates[1][0]-coordinates[0][0])
    console.log(slope)
    //loop through next points to check if matching slope, if not return false, if yes continue to next point until end
    for (let i = 2; i < coordinates.length; i++){
        let tempSlope = 0;
        //check if current point is in front of first coordinate
        if(coordinates[i][1] > coordinates[0][1]){
            tempSlope = (coordinates[i][1]-coordinates[0][1])/(coordinates[i][0]-coordinates[0][0])
        }
        //coordinate is behind first coordinate
        else {
            tempSlope = (coordinates[0][1]-coordinates[i][1])/(coordinates[0][0]-coordinates[i][0])
        }
        if (tempSlope != slope){
            return false;
        }
    }
    return true
};

// let coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
// coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
coordinates = [[1,1],[2,2],[2,0]]
console.log(checkStraightLine(coordinates))
