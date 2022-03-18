removeById('noticeFixedBox')
removeById('wrap-fixed')

function removeById(id) {
    const ele = document.getElementById(id)
    if (ele) {
        ele.remove()
    }
}

function removeByClassName(name) {
    const eles = document.getElementsByClassName(name)
    if (eles) {
        for (var i = 0; i < eles.length; i++) {
            eles[i].remove()
        }
    }
}