// 创建画布 拿到一层 100 * 100 的像素数据
let c = document.getElementById('canvas_a')
let ctx = c.getContext('2d')
ctx.rect(0,0,512,512)
ctx.fillStyle="green"
ctx.fill()
let imageData = ctx.getImageData(0, 0, 512, 512).data

// 创建512层正方体像素数据

let arr = []

for (let i = 0; i < 512; i++) {
	arr.push(imageData)
}

let w = new Worker("static/workers.js")
w.onmessage =function(evt){    
	console.log(evt.data)              
}
let handle = function () {
	btn.innerHTML = 'worker正在处理数据'
	btn.disabled = true
	// 创建一个worker webworker对传递的参数是要做深拷贝，所以直接传递大数据体会造成界面卡死，我们先只传第一层给子线程
	w.postMessage(arr[0])
}

let btn = document.getElementById('btn')

btn.onclick = handle



