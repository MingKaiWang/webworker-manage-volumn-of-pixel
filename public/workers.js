this.onmessage = function(evt){  
    let data = evt.data;  // 第一层的像素数据
    let arr1 = []
    let arr2 = []
    let volumnHeight = 512
    // 在子线程创建两个512正方体像素体数据
    for (let i = 0; i < volumnHeight; i++) {
    	arr1.push(data)
    }
    for (let i = 0; i < volumnHeight; i++) {
    	arr2.push(data)
    }
    // 在此对两个像素体数据做16位混色算法，合并两个像素体
    // http://blog.csdn.net/cuixiping/article/details/1698835 算法参考地址
    	let arr = []

    	for (let i = 0; i < volumnHeight; i++) {
    		let tempArr = []
    		let tempArr1 = arr1[i]
    		let tempArr2 = arr2[i]
    		for (let j = 0; j < tempArr1.length; j++) {
    			let remainder = j % 4
    			let alphaIndex = j + 3 - remainder
				let alpha1 = tempArr1[alphaIndex]
				let alpha2 = tempArr2[alphaIndex]
    			let alpha = 1 - (1 - alpha1) * (1 -alpha2)
    			if (remainder !== 0) {
    				let pixel = tempArr1[j] * alpha1 + tempArr2[j] * alpha2 * (1 - alpha1)
    				tempArr.push(pixel / alpha)
    			}
    			if (remainder === 3) {
    				tempArr.push(alpha)
    			}
    		}
    		arr.push(tempArr)
    	}
    // 返回数据给调用者  
    postMessage('final')
}  