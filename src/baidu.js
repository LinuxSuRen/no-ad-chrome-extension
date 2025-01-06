function removeByMU(name) {
    var divs = document.querySelectorAll('div[mu]')
    if (!divs) {
        return
    }

    for (var i = 0; i < divs.length; i++) {
        if (divs[i].getAttribute('mu').indexOf(name) != -1) {
            divs[i].remove()
        }
    }
}

function removeAd() {
    var items = document.getElementsByTagName('span');
    Array.from(items).forEach(i => {
        if (i.innerText !== '广告') {
            return;
        }
        var target = getParentWithClass(i, 'c-container');
        if (target) {
            target.remove();
        }
    })
}

function getParentWithClass(ele, className) {
    if (!ele || !ele.parentElement || !ele.parentElement.classList) {
        return null;
    }
    if (ele.parentElement.classList.contains(className)) {
        return ele;
    }
    return getParentWithClass(ele.parentElement, className)
}

loopFunc(function () {
    removeByMU("blog.csdn.net");
    removeAd();
}, 1000);

function loopFunc(callback, checkFrequencyInMs) {
    (function loopSearch() {
        callback();
        setTimeout(function () {
            loopSearch();
        }, checkFrequencyInMs);
    })();
}