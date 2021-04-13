console.log("我是main.js 2")

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {
        // 创建div标签
        const div = document.createElement('div')
        // 填写div内容
        div.innerHTML = request.response
        // 插入到身体里
        document.body.appendChild(div)
    }
    request.onerror = () => {}
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        // 创建script标签
        const script = document.createElement('script')
        // 填写script内容
        script.innerHTML = request.response
        // 插到身体里
        document.body.appendChild(script)
    }
    request.onerror = () => {
    }
    request.send()
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/style.css")
    request.onload = () => {
        console.log('request.response')
        console.log(request.response)

        // 创建style标签
        const style = document.createElement('style')
        // 填写style内容
        style.innerHTML = request.response
        // 插入头里面
        document.head.appendChild(style)
    }
    request.onerror = () => {
        console.log("失败了")
    }
    request.send()
}