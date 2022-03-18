removeById('noticeFixedBox')
removeById('wrap-fixed')

function removeById(id) {
    const ele = document.getElementById(id)
    if (ele) {
        ele.remove()
    }
}