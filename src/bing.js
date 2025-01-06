import { getParentWithClass, loopFunc } from 'common.js';

function removeCSDN() {
    var items = document.querySelectorAll('a[redirecturl]');
    Array.from(items).forEach(e => {
        if (e.getAttribute('href').startsWith('https://blog.csdn.net')) {
            if (e.parentElement && e.parentElement.parentElement) {
                e.parentElement.parentElement.remove();
            }
        }
    })
}

function removeAd() {
    var items = document.getElementsByTagName('span');
    Array.from(items).forEach(i => {
        if (i.innerText !== 'Ad') {
            return;
        }
        var target = getParentWithClass(i, 'sb_add');
        if (target && target.parentElement) {
            target.parentElement.remove();
        }
    })
}

loopFunc(function () {
    removeAd()
    removeCSDN()
}, 1000);
