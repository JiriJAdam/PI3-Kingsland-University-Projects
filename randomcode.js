function distance(x1, y1, x2, y2) {
    //The Euclidean distance between two points of the plane with Cartesian coordinates:
    let distX = x1 - x2;
    let distY = y1 - y2;
    return Math.sqrt(distX ** 2 + distY ** 2);
}
