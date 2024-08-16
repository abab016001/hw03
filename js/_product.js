var OPTICAL = [
    obj("product-1", "BJ41600S", "NTD3,490"),
    obj("product-2", "BJ41600S", "NTD3,490"),
    obj("product-3", "BJ41600S", "NTD3,490"),
    obj("product-4", "BJ41600S", "NTD3,490"),
    obj("product-5", "BJ41600S", "NTD3,490"),
    obj("product-6", "BJ41600S", "NTD3,490"),
    obj("product-1", "BJ41600S", "NTD3,490"),
    obj("product-2", "BJ41600S", "NTD3,490"),
    obj("product-3", "BJ41600S", "NTD3,490"),
    obj("product-4", "BJ41600S", "NTD3,490"),
    obj("product-5", "BJ41600S", "NTD3,490"),
    obj("product-6", "BJ41600S", "NTD3,490")    
];
var SUNGLASSES = [
    obj("product-7", "BJ41600S", "NTD3,490"),
    obj("product-8", "BJ41600S", "NTD3,490"),
    obj("product-9", "BJ41600S", "NTD3,490"),
    obj("product-10", "BJ41600S", "NTD3,490"),
    obj("product-11", "BJ41600S", "NTD3,490"),
    obj("product-12", "BJ41600S", "NTD3,490")
];
var grid_OPTICAL = 4;
var grid_SUNGLASSES = 3;
// ===========================
/**
 * 商品元件
 * @param {圖片} _alt 
 * @param {名稱} _name 
 * @param {價格} _price 
 * @returns 
 */
function obj(_alt, _name, _price) {
    return {
        alt: _alt,
        name: _name,
        price: _price
    };
}
/**
 * 商品類別
 * @param {名稱} _name 
 * @param {中文名稱} _chi_name 
 * @param {清單} _list 
 */
function category(_name, _chi_name, _list, _grid) {
    return {
        "name":_name,
        "chi_name":_chi_name,
        "list":_list,
        "grid":_grid
    };
}
// ===========================
function List(_category) {
    if (_category == "" || _category == "OPTICAL") {
        return category("Celluloid Combi", "賽璐珞鈦金屬混合鏡框", OPTICAL, grid_OPTICAL);
    } else if (_category == "SUNGLASSES") {
        return category("2020 NEW COLLECTION", "賽璐珞鈦金屬混合鏡框", SUNGLASSES, grid_SUNGLASSES);
    }
    return null;
}
function Banner(_category) {
    if (_category == "" || _category == "OPTICAL") {
        return ["product-header-1", "product-header-2"];
    } else if (_category == "SUNGLASSES") {
        return ["product-header-3", "product-header-4"];
    }
    return null;
}

var Product = {
    "List": List,
    "Banner": Banner
}