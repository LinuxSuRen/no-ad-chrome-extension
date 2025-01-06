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

loopFunc(function () {
    removeByMU("blog.csdn.net")
}, 1000);

function loopFunc(callback, checkFrequencyInMs) {
    (function loopSearch() {
        callback();
        setTimeout(function () {
            loopSearch();
        }, checkFrequencyInMs);
    })();
}