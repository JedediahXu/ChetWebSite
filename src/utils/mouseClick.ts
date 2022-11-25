/*
 * @Author: GGxu 510374040@qq.com
 * @Date: 2022-09-18 19:54:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-17 11:42:16
 * @FilePath: /ChetWebSite/src/utils/mouseClick.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const mouse = () => {
	const arr = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '🤓', '😞', '😩', '😡']
	let flag = true
	document.body.addEventListener('click', function (e) {
		if (flag) {
			const X = e.clientX //点击的x坐标
			const Y = e.clientY //点击的y坐标
			// console.log(X, Y)
			let curT = Y
			let curF = 20 //字体的大小
			let curO = 1 //opacity
			// 随机出现的标题
			const title = arr[Math.floor(Math.random() * 13)]
			const span = document.createElement('span')
			span.className = 'idName'
			span.innerText = title
			//初始化节点
			span.style.position = 'fixed'
			span.style.top = curT + 'px'
			span.style.fontSize = curF + 'px'
			span.style.opacity = curO as any
			span.style.left = X + 'px'
			document.body.appendChild(span)
			const a = document.getElementsByClassName('idName')[0] as HTMLElement
			// 随机颜色
			a.style.color = 'rgb(' + Math.floor(Math.random() * 225) + ',' + Math.floor(Math.random() * 225) + ',' + Math.floor(Math.random() * 225) + ')'
			// console.log(a)
			// 开启定时器
			const timer = setInterval(() => {
				curT -= 10
				curF += 1
				curO -= 0.1
				a.style.top = curT + 'px'
				a.style.fontSize = curF + 'px'
				a.style.opacity = curO as any
			}, 50)
			setTimeout(() => {
				// 清除定时器
				clearInterval(timer)
				document.body.removeChild(a)
				flag = true
			}, 300)
			flag = false
		}
	})
}
