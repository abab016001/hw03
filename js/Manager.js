function processQueryLocation(paramMap) {
    return dao.queryLocationMap(paramMap);
}
function processQueryBranchMapList(paramMap) {
    return dao.queryBranchMapList(paramMap);
}

function processQueryBranchMap(paramMap) {
    return dao.queryBranchMap(paramMap);
}

var manager = {
    "processQueryLocation": processQueryLocation,
    "processQueryBranchMapList": processQueryBranchMapList,
    "processQueryBranchMap": processQueryBranchMap
}