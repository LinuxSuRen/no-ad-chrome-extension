waitForElementToDisplay(".AdsSlot",function(){
    removeByClassName("AdsSlot")
    removeByClassName("AdsSlot--top")
    removeByClassName("AdsSlot--right")
    removeByClassName("AdsSlot--player")
},1000,19000);

function removeByClassName(name) {
    const eles = document.getElementsByClassName(name)
    if (eles) {
        for (var i = 0; i < eles.length; i++) {
            eles[i].remove()
        }
    }
}

function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
    var startTimeInMs = Date.now();
    (function loopSearch() {
        if (document.querySelector(selector) != null) {
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