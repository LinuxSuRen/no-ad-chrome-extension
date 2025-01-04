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

removeByMU("blog.csdn.net")
