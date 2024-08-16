var A17 = [
    obj("1", "A17", "store-1", "台北中山旗艦店", "(02)000-1234", "10:00-21:00", "台北市中山區南京東路25巷2-1號", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.2383876722772!2d121.52680963881843!3d25.051824624333424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96666b29a4f%3A0xe21f6e5cc85c4d57!2zMTA0OTHlj7DljJfluILkuK3lsbHljYDljZfkuqzmnbHot6_kuozmrrUy6Jmf!5e0!3m2!1szh-TW!2stw!4v1723587399543!5m2!1szh-TW!2stw"),
    obj("2", "A17", "store-2", "台北綠園店", "(02)000-2345", "10:00-21:00", "台北市中正區復興南路 132-1 號", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.237849199048!2d121.5402515259458!3d25.02600106583754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab3015c9a2b3%3A0xb3d99abccee1204a!2z5Y-w5YyX5biC5aSn5a6J5Y2A5b6p6IiI5Y2X6Lev5LqM5q61MTcx5be3MjPomZ8!5e0!3m2!1szh-TW!2stw!4v1723671397119!5m2!1szh-TW!2stw")
];
var B54 = [
    obj("3", "B54", "store-3", "台中清水旗艦店", "(02)000-1234", "10:00-21:00", "台中市清水區經南一路 23 號 8 樓", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14549.77529829317!2d120.52249408564677!3d24.26122392190092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346914b9a937d0bb%3A0x5c78287a571c31dc!2zNDM15Y-w5Lit5biC5qKn5qOy5Y2A5Y2X57Ch!5e0!3m2!1szh-TW!2stw!4v1723671550673!5m2!1szh-TW!2stw")
];
var E77 = [
    obj("4", "E77", "store-4", "高雄中正形象店", "(07)000-2345", "10:00-21:00", "高雄市苓雅區中正路 38 號 12 樓", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.604586309417!2d120.3069367758934!3d22.631236392452532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0565de94bec5%3A0x7b126a7a28c5d2e2!2z6YGZ6YGZ55u45pyb772c5rSL6aOf5bCP6aSQ6aSo!5e0!3m2!1szh-TW!2stw!4v1723671644671!5m2!1szh-TW!2stw"),
    obj("5", "E77", "store-5", "高雄夢時代店", "(07)000-1234", "10:00-21:00", "高雄市前鎮區中華一路 63 號 6 樓", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.6348885973644!2d120.28535078643323!3d22.667397676450925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e05aebd7f7325%3A0xdb01082e64b82121!2zODA06auY6ZuE5biC6byT5bGx5Y2A5Lit6I-v5LiA6LevNjPomZ8!5e0!3m2!1szh-TW!2stw!4v1723671679469!5m2!1szh-TW!2stw")
];
var storeList = {
    "A17": A17,
    "B54": B54,
    "E77": E77
};
// ===========================
/**
 * 門市
 * @param {索引} _pkno 
 * @param {地區} _location 
 * @param {圖片} _alt 
 * @param {名稱} _name 
 * @param {電話} _tel 
 * @param {營業時間} _time 
 * @param {地址} _address 
 * @param {googleMap} _googleMap 
 * @returns 
 */
function obj(_pkno, _location, _alt, _name, _tel, _time, _address, _googleMap) {
    return {
        pkno: _pkno,
        location: _location,
        alt: _alt,
        name: _name,
        tel: "電話：" + _tel,
        time: "營業時間：" + _time,
        address: "地址：" + _address,
        googleMap: _googleMap
    };
}
// ===========================
function List(location) {
    var rtn = storeList[location];
    if (rtn != null) {
        return rtn;
    }
    rtn = new Array();
    var map = new Map(Object.entries(storeList));
    map.forEach((value, key) => {
        for (v of value) {
            rtn.push(v);
        }
    });
    return rtn;
}

var Store = {
    "List": List
}