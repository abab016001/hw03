function processQueryBranchList(paramObj) {
    var map = manager.processQueryLocation(paramObj);
    return manager.processQueryBranchMapList(map);
}

function processQueryBranch(paramObj) {
    return manager.processQueryBranchMap(paramObj);
}

var controller = {
    "processQueryBranchList": processQueryBranchList,
    "processQueryBranch": processQueryBranch
}