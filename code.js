function convertToAdjList(adjMatrix) {
    if (adjMatrix.length === 0) {
      return adjMatrix;
    }
    else if (adjMatrix.length === 1){
        if(adjMatrix[0] === 1){
            return [[1]]
        }
        else{
            return [[0]];
        }
    }
    var list = [];
    for (var i = 0; i < adjMatrix.length; i++) {
        var node = [];
        for (var j = 0; j < adjMatrix[i].length; j++) {
            if (adjMatrix[i][j] === 1) {
                node.push(j + 1);
            }
        }
        list.push(node);
    }
    return list;
}
