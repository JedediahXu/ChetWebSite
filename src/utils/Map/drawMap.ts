
import { onMounted, Ref, ref } from "vue";
import mapboxgl, { Map, Marker } from "mapbox-gl";
import { mapThreeDim } from './mapThreeDim'
import { skyLoad } from './skyLoad'
import { click } from './click'
import { addPhoto } from './addPhoto'
import { addPointMk } from './addPointMk'
import { Popups } from './Popups'


export function initDragMap(mapboxgl: { accessToken: string; }, popup: any, geoPhoto: any, geoData: any) {
  const mapDivElement: Ref<HTMLDivElement | null> = ref(null)
  const map: Ref<Map> = ref({}) as Ref<Map>
  const marker: Ref<Marker> = ref({}) as Ref<Marker>

  onMounted(initMap)

  return {
    map,
    mapDivElement,
    marker,
  }

  /**
   * initialization mapbox
   */
  function initMap() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2VyZW5hZGUwOTE2IiwiYSI6ImNsNWRieWNrZTBwdWgzYm8yZXNiZno2NWsifQ.IKHQFsbqXEpXC3wPWDDs1A';
    mapNew(map, mapDivElement, marker, popup, geoPhoto, geoData, [Number(117.98417547037542), Number(36.81708160054497)]);
  }
}
/** 
 * Map
 * @param map
 * @param mapDivElement
 * @param marker
 * @param popup
 * @param arr
 */
function mapNew(map: Ref<Map>, mapDivElement: Ref<HTMLDivElement | null>, marker: Ref<Marker>, popup: mapboxgl.Popup, geoPhoto: any, geoData: any, arr: [number, number]) {
  if (mapDivElement.value !== null) {
    map.value = new mapboxgl.Map({
      container: mapDivElement.value, // container id 
      center: arr, // 初始坐标系
      minZoom: 1.7, // 设置最小拉伸比例
      zoom: 9, // starting zoom 地图初始的拉伸比例
      style: "mapbox://styles/serenade0916/cl5g5ecmx003d14pv1c05whzc",
      pitch: 30, //地图的角度
      bearing: 0, //地图的初始方向，值是北的逆时针度数，默认是0，即是正北,-17.6
      antialias: false, //抗锯齿，通过false关闭提升性能
    });

    map.value.on('click', function (e: any) {
      console.log(e.lngLat, '---------')
    });

    marker.value = new mapboxgl.Marker()
      .setLngLat(arr)
      .addTo(map.value);

    mapThreeDim(map);  //渲染模型高度
    skyLoad(map); //转动后的天空层
    addPhoto(map, popup, geoPhoto);  //渲染坐标
    addPointMk(map, popup, geoData);
    click(map, popup);  //移除坐标弹窗
    Popups(map, popup); //弹窗信息

    const scale = new mapboxgl.ScaleControl({
      maxWidth: 100,
      unit: 'metric'
    });

    map.value.addControl(scale, "bottom-left");// 比例尺
    scale.setUnit('metric');

  } else {
    throw Error('map new init error')
  }
}




