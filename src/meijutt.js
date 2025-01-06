waitForElementToDisplay(".widget-weixin", function(){
    removeByClassName('widget-weixin')
    removeByClassName('o_r_contact2')
    removeByClassName('a960_index')
    removeByClassName('a960_index a960_index_channel')
    removeById('HMRichBox')
    removeById('coupletleft')
    removeById('coupletright')
    removeById('nYkCEb')
    removeByElementName('divz')
}, 1000, 19000);

function removeById(id) {
    const ele = document.getElementById(id)
    if (ele) {
        ele.remove()
    }
}

function removeByClassName(name) {
    var items = document.getElementsByClassName(name)
    for (var i = 0; items.length > 0;) {
        items[i].remove()
    }
}

function removeByElementName(name) {
    var items = document.getElementsByTagName(name);
    for (var i = 0; items.length > 0;) {
        items[i].remove()
    }
}

function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
    var startTimeInMs = Date.now();
    (function loopSearch() {
        if (document.querySelector(selector) == null) {
            callback();
            return;
        }
        else {
            setTimeout(function () {
                if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
                    return;
                loopSearch();
            }, checkFrequencyInMs);
        }
    })();
}
