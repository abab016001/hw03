
function LoadHtml(elementId, _url) {
    var url = "../page/" + elementId + ".html";
    if (_url != null) { // 指定頁面
        url = _url;
    }
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(elementId).innerHTML = html;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function LoadProduct(product, productGroupGridId) {
    if (product == null) {
        LoadHtml(productGroupGridId, "../page/product-none.html");
        return;
    }
    var productGroupGrid = document.getElementById(productGroupGridId);
    var productGrid = productGroupGrid.querySelector("#productGrid");
    productGroupGrid.querySelector("#product_name").textContent = product.name;
    productGroupGrid.querySelector("#product_chi_name").textContent = product.chi_name;
    productGrid.classList.add(getGridCol(product.grid));

    var url = "../page/product.html";
    var index = 0;
    for (var i = 0; i < product.list.length; i++) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                var li = html;
                var p = product.list[index];
                li = li.replaceAll('product_alt', p.alt);
                li = li.replaceAll('product_src', getImgSrc(p.alt));
                li = li.replaceAll('product_name', p.name);
                li = li.replaceAll('product_price', p.price);
                productGrid.innerHTML += li;
                index++;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }
}

// 載入橫幅廣告
function LoadBanner(bannerList, parentId) {
    if (bannerList == null) return;
    for (banner of bannerList) {
        var innerHTML =
            "<a href='#'><img class='product-banner-img w-1' src='imgsrc'></a>"
                .replaceAll('imgsrc', getImgSrc(banner));
        var li = document.createElement("li").innerHTML = innerHTML;
        document.getElementById(parentId).innerHTML += li;
    }
}

// 載入上一頁、頁碼、下一頁
function LoadPage(product, pageGroupGridId, pageCnt, pageSelected) {
    if (product == null) {
        document.getElementById(pageGroupGridId).innerHTML = "";
        return;
    }
    var pageGroupGrid = document.getElementById(pageGroupGridId);
    var pageGrid = pageGroupGrid.querySelector("div #pageGrid");
    var index = 1;
    for (var i = 0; i < pageCnt; i++) {
        var innerHTML =
            "<button class='btn-page btn-page-selected'>page_txt</button>"
                .replaceAll('page_txt', index);
        if (index != pageSelected) {
            innerHTML = innerHTML.replaceAll('btn-page-selected', "");
        }
        var li = document.createElement("li").innerHTML = innerHTML;
        pageGrid.innerHTML += li;
        index++;
    }
}

// 載入門市據點
function LoadStore(storeList, storeGridId) {
    var storeGrid = document.getElementById(storeGridId);
    storeGrid.innerHTML = "";
    var url = "../page/store.html";
    var index = 0;
    for (var i = 0; i < storeList.length; i++) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                var li = html;
                var store = storeList[index];
                li = li.replaceAll('store_alt', store.alt);
                li = li.replaceAll('store_src', getImgSrc(store.alt));
                li = li.replaceAll('store_name', store.name);
                li = li.replaceAll('store_tel', store.tel);
                li = li.replaceAll('store_time', store.time);
                li = li.replaceAll('store_address', store.address);
                li = li.replaceAll('store_pkno', store.pkno);
                li = li.replaceAll('store_location', store.location);
                storeGrid.innerHTML += li;
                index++;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }
}

// 載入部落格
function LoadBlog(blogList, blogGridId) {
    var blogGrid = document.getElementById(blogGridId);
    var url = "../page/blog.html";
    var index = 0;
    for (var i = 0; i < blogList.length; i++) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                var li = html;
                var blog = blogList[index];
                li = li.replaceAll('blog_alt', blog.alt);
                li = li.replaceAll('blog_src', getImgSrc(blog.alt));
                li = li.replaceAll('blog_main_title', blog.main_title);
                li = li.replaceAll('blog_sub_title', blog.sub_title);
                li = li.replaceAll('blog_date', blog.date);
                li = li.replaceAll('blog_content', blog.content);
                blogGrid.innerHTML += li;
                index++;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }
}

// 載入常見問題
function LoadQuestion(questionList, questionGroupGridId) {
    var questionGroupGrid = document.getElementById(questionGroupGridId);
    var url = "../page/question.html";
    var index = 0;
    for (var i = 0; i < questionList.length; i++) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                var question = questionList[index];
                var li_0 = document.createElement("li");
                li_0.classList.add("questionGrid");
                var h3_0 = document.createElement("h3");
                h3_0.textContent = question.title;
                h3_0.classList.add("h3");
                h3_0.classList.add("mb-6");
                
                var ul_0 = document.createElement("ul");
                for (q of question.list) {
                    var li = html;
                    li = li.replaceAll('question_q', q.q);
                    li = li.replaceAll('question_a', q.a);
                    ul_0.innerHTML += li;
                }
                questionGroupGrid.append(li_0);
                li_0.append(h3_0);
                li_0.append(ul_0);
                index++;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }
}

// 載入下拉選單
function LoadSelectByMapList(paramMapList, parentId) {
    var select = document.getElementById(parentId);
    for(paramMap of paramMapList) {
        var option = document.createElement("option");
        option.value = paramMap.key;
        option.textContent = paramMap.value;
        select.append(option);
    }
}

// 載入Google地圖
function LoadGoogleMapList(paramMapList, parentId) {
    var select = document.getElementById(parentId);
    for(paramMap of paramMapList) {
        var option = document.createElement("option");
        option.value = paramMap.key;
        option.textContent = paramMap.value;
        select.append(option);
    }
}

// 重載頁面
function ReLoadHash(hash) {
    location.hash = hash;
    location.reload();
}
function SwitchFrame(href) {
    location.href = href;
}
function SwitchFrameWithExcute(href, method, paramObj) {
    localStorage.setItem('excuteMethod', method);
    localStorage.setItem('excuteMethodParamObj', paramObj);
    location.href = href;
}

// ExcuteFunction
function CheckExcuteFunction() {
    const checkexcuteMethod = localStorage.getItem("excuteMethod");
    if (checkexcuteMethod != null) {
        var method = localStorage.getItem("excuteMethod");
        var paramObj = localStorage.getItem("excuteMethodParamObj");
        if (paramObj != null) {
            eval(`${method}(${paramObj})`);
        } else {
            eval(`${method}()`);
        }
    }

    localStorage.clear();
}

var Util = {
    "LoadHtml": LoadHtml,
    "LoadBanner": LoadBanner,
    "LoadProduct": LoadProduct,
    "LoadPage": LoadPage,
    "ReLoadHash": ReLoadHash,
    "LoadBlog": LoadBlog,
    "LoadQuestion": LoadQuestion,
    "SwitchFrame": SwitchFrame,
    "SwitchFrameWithExcute": SwitchFrameWithExcute,
    "CheckExcuteFunction": CheckExcuteFunction,
    "LoadSelectByMapList": LoadSelectByMapList
}

function getImgSrc(alt) {
    return "../img/" + alt + ".png";
}

function getGridCol(index) {
    return "grid-col-" + index;
}