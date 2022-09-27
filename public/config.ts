
//照片故事地点
export const geoPhoto = {
	type: 'FeatureCollection',
	features: [
		{
			type: 'Feature',
			properties: {
				id: 2,
				description:
					`<img src="/static/img/message/wx.jpeg"/>
            <p>我在这里住了一年</p>`,
			},
			geometry: {
				type: 'Point',
				coordinates: [118.05137021120487, 36.825070241220615]
			}
		},
		{
			type: 'Feature',
			properties: {
				id: 1,
				description:
					`<p>我的老家-滕州</p>`,
			},
			geometry: {
				type: 'Point',
				coordinates: [117.16002462636527, 35.112975155662255]
			}
		},
		{
			type: 'Feature',
			properties: {
				id: 1,
				description:
					`<p>上海世博会</p>`,
			},
			geometry: {
				type: 'Point',
				coordinates: [121.47034810622273, 31.23049718208874]
			}
		},
		{
			type: 'Feature',
			properties: {
				id: 1,
				description:
					`<p>临沂｜兰山</p>`,
			},
			geometry: {
				type: 'Point',
				coordinates: [118.31442489911711, 35.07179197660254]
			}
		},
	]
}

//轨迹
export const geoData = {
	type: 'FeatureCollection',
	features: [
		{
			type: 'Feature',
			properties: {
				id: 1,
				color: "#118CF3",
			},
			geometry: {
				type: 'Point',
				coordinates: [118.06383558265588, 36.83380362296499]
			}
		},
		{
			type: 'Feature',
			properties: {
				id: 2,
				color: "#77BDF3",
			},
			geometry: {
				type: 'Point',
				coordinates: [118.05387584915871, 36.82487560000904]
			}
		},
		{
			type: 'Feature',
			properties: {
				id: 3,
				color: "#77BDF3",
			},
			geometry: {
				type: 'Point',
				coordinates: [118.0554791999565, 36.82572537053237]
			}
		},
		{
			type: 'Feature',
			properties: {
				id: 4,
				color: "#77BDF3",
			},
			geometry: {
				type: 'Point',
				coordinates: [118.06142009279318, 36.825425322843046]
			}
		},
		{
			type: 'Feature',
			properties: {
				id: 5,
				color: "#118CF3",
			},
			geometry: {
				type: 'Point',
				coordinates: [118.05165463163985, 36.824444924202695]
			}
		},
		{
			type: 'Feature',
			properties: {
				id: 5,
				color: "#118CF3",
			},
			geometry: {
				type: 'Point',
				coordinates: [118.06266097920314, 36.82955384257393]
			}
		},
		{
			type: 'Feature',
			properties: {
				id: 5,
				color: "#118CF3",
			},
			geometry: {
				type: 'Point',
				coordinates: [118.04921632687797, 36.82483684455295]
			}
		},
		{
			type: 'Feature',
			properties: {
				id: 5,
				color: "#118CF3",
			},
			geometry: {
				type: 'Point',
				coordinates: [118.05221848439749, 36.82433671469282]
			}
		},
	]
}
