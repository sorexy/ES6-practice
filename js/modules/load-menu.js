import * as ajaxUtils from './ajaxUtils.js'

async function loadMenu() {
    let menuItems = await makeCall();
    let menu = buildMenu(menuItems);

    return menu;
}


function makeCall() {
    return new Promise((resolve, reject) => {
        var req = ajaxUtils.getHttpObject();
        req.open("GET", "./data/menu-items.json", true);
        req.send(null);

        req.onreadystatechange = (event) => {
            if (req.readyState == 4 &&
                req.status == 200) {
                    resolve(JSON.parse(req.responseText));
                }
            else if (req.readyState == 4 && req.status != 200) {
                reject(new Error("ERROR!"));
            }
        }
    });
}

function buildMenu(menuObject) {
    let menuList = "";

    for (var id in menuObject) {
        var tmpItem = `<div class="card">
                            <img src="${menuObject[id].href}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${menuObject[id].title}</h5>
                                <p class="card-text">${menuObject[id].description}</p>
                            </div>
                        </div>`

        menuList += tmpItem;
    }
    return menuList;
}

export { loadMenu };
