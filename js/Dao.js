function queryLocationMap(paramMap){
    var storeMapList = Store.List('');
    for (storeMap of storeMapList) {
        var map = new Map(Object.entries(storeMap));
        if (map.has("pkno") && map.get("pkno") == paramMap.pkno) {
            return {
                location: map.get("location")
            };
        }
    }
    return null;
}

function queryBranchMapList(paramMap) {
    var resultMapList = new Array();
    var storeMapList = Store.List('');
    for (storeMap of storeMapList) {
        var map = new Map(Object.entries(storeMap));
        if (map.has("location") && map.get("location") == paramMap.location) {
            resultMapList.push({
                "key": map.get("pkno"),
                "value": map.get("name"),
            });
        }
    }
    return resultMapList;
}

function queryBranchMap(paramMap) {
    var storeMapList = Store.List('');
    for (storeMap of storeMapList) {
        var map = new Map(Object.entries(storeMap));
        if (map.has("pkno") && map.get("pkno") == paramMap.pkno) {
            var obj = Object.fromEntries(map);
            obj = JSON.stringify(obj);
            return JSON.parse(obj);
        }
    }
    return null;
}

var dao = {
    "queryLocationMap": queryLocationMap,
    "queryBranchMapList": queryBranchMapList,
    "queryBranchMap": queryBranchMap
};