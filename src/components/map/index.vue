<template>
  <div class="footprint">
    <div class="footprint-map">
      <div class="mapbox-wrapper" placeholder="路为纸，地成册，行作笔，心当墨；思无界，行有疆">
        <div class="mapbox mapboxgl-map">
          <div class="mapboxgl-canary" style="visibility: hidden;"></div>
          <div
            class="mapboxgl-canvas-container mapboxgl-interactive mapboxgl-touch-drag-pan mapboxgl-touch-zoom-rotate">
            <div id="mapContainer" ref="mapDivElement" tabindex="0" aria-label="Map" role="region" width="100%"
              height="39vh;" style="width: 100%; height: 39vh;"></div>
          </div>
          <div class="mapboxgl-control-container">
            <div class="mapboxgl-ctrl-bottom-left">
              <div class="mapboxgl-ctrl" style="display: block;"><a class="mapboxgl-ctrl-logo" target="_blank"
                  rel="noopener nofollow" href="https://www.mapbox.com/" aria-label="Mapbox logo"></a></div>
            </div>
          </div>
        </div>
        <div class="toolbar">
          <a class="button" rel="external nofollow noopener" target="_blank"
            href="https://www.google.com/maps/d/embed?mid=1sRx6t0Yj1TutbwORCvjwTMgr70r62Z6w&amp;z=3">
            <i class="iconfont icon-google-maps"></i>
          </a>
          <button class="button" @click="great">
            <i class="iconfont icon-fullscreen"></i>
          </button>
        </div>
      </div>
      <div class="legends">
        <div class="now" @click="displayBut">
          <i class="iconfont icon-location"></i>
          <span class="text">苟活于此，独身一人</span>
        </div>
        <ul class="folders">
          <li class="item" @click="displayPhot(0)">
            <i class="iconfont icon-route">
            </i><span class="text">2022 山东淄博</span>
            <span class="count">(2)</span>
          </li>
          <li class="item" @click="displayPhot(1)">
            <i class="iconfont icon-route">
            </i><span class="text">2018 山东滕州</span>
            <span class="count">(1)</span>
          </li>
          <li class="item" @click="displayPhot(2)">
            <i class="iconfont icon-route"></i>
            <span class="text">2012 上海世博</span>
            <span class="count">(0)</span>
          </li>
          <li class="item" @click="displayPhot(3)">
            <i class="iconfont icon-route"></i>
            <span class="text">2008 山东临沂</span>
            <span class="count">(0)</span>
          </li>
          <li class="item">
            <i class="iconfont icon-route"></i>
            <span class="text">•••</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { initDragMap } from '@/utils/Map/drawMap';
import { ElMessage } from 'element-plus'
import mapboxgl from "mapbox-gl";

const popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false
});


//照片故事地点
let geoPhoto = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        id: 2,
        description:
          `<img src="../../../public/static/img/Header.jpg"/>
            <p>我在这里住了1年</p>`,
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
          `<p>小时候去上海玩</p>`,
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
          `<p>小时候，在这里交了几个朋友</p>`,
      },
      geometry: {
        type: 'Point',
        coordinates: [118.31442489911711, 35.07179197660254]
      }
    },
  ]
}

//轨迹
let geoData = {
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

const {
  map,
  mapDivElement,
  marker } = initDragMap(mapboxgl, popup, geoPhoto, geoData);

const great = (() => {
  ElMessage({
    message: h('p', null, [
      h('span', null, '全屏功能后续开发,敬请期待～'),
      h('i', { style: 'color: teal' }, 'ChetSerenade'),
    ]),
  })
})


let displayBut = (() => {
  map.value.flyTo({ center: [Number(118.04290297151124), Number(36.80807022921253)], zoom: 12 })
})

let displayPhot = ((i: any) => {
  let mapContainer = geoPhoto.features[i].geometry.coordinates
  map.value.flyTo({ center: [mapContainer[0], mapContainer[1]], zoom: 14 })
  popup.setLngLat([mapContainer[0], mapContainer[1]]).setHTML(
    geoPhoto.features[i].properties.description
  ).addTo(map.value)
})

</script>


<style lang="scss" scoped>
.footprint {
  .about-page .footprint {
    width: 100%;
    margin-bottom: 2rem;
  }

  .footprint-map {
    position: relative;
    display: flex;
    padding-top: 1rem;
    height: 44vh;
  }


  .footprint-map .mapbox-wrapper {
    position: relative;
    padding: 0.6rem;
    background-color: hsl(var(--n));
    transition: background-color .25s;
    border-radius: 6px;
    overflow: hidden;
    flex: 1;
  }

  .footprint-map .mapbox-wrapper .mapbox {
    width: 100%;
    height: 39vh;
    display: block;
  }

  .mapboxgl-map {
    font: 12px/20px Helvetica Neue, Arial, Helvetica, sans-serif;
    overflow: hidden;
    position: relative;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }


  .mapboxgl-canvas {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }

  .footprint-map .mapbox-wrapper .toolbar {
    position: absolute;
    top: 2.472rem;
    right: 2.472rem;
    z-index: 1;
    display: flex;
  }

  .footprint-map .mapbox-wrapper .toolbar .button {
    margin-left: 1.236rem;
    display: block;
    width: 2em;
    height: 2em;
    line-height: 2em;
    border-radius: 2px;
    text-align: center;
    background-color: var(--module-bg);
    font-size: 16.1px;
    color: var(--text-secondary);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
  }

  a {
    color: var(--link-color);
  }

  a,
  area,
  button,
  input,
  label,
  select,
  textarea,
  [tabindex] {
    touch-action: manipulation;
  }

  a {
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }


  .footprint-map .mapbox-wrapper .toolbar .button {
    margin-left: 1.236rem;
    display: block;
    width: 2em;
    height: 2em;
    line-height: 2em;
    border-radius: 2px;
    text-align: center;
    background-color: var(--module-bg);
    font-size: 16.1px;
    color: var(--text-secondary);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
  }

  input[type=submit],
  input[type=reset],
  button {
    cursor: pointer;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
  }

  .iconfont {
    font-size: 1em;
  }

  .footprint-map .legends {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
  }

  .footprint-map .legends .now {
    flex-shrink: 0;
    display: inline-flex;
    margin-bottom: 1.236rem;
    padding: 0 1rem;
    width: 100%;
    line-height: 3.4em;
    cursor: pointer;
    color: #fff;
  }

  .footprint-map .legends .folders,
  .footprint-map .legends .now {
    background-color: hsl(var(--n));
    transition: background-color .25s;
    border-radius: 6px;
    overflow: hidden;
  }

  .footprint-map .legends .now .iconfont {
    margin-right: 0.618rem;
  }

  .iconfont {
    font-size: 1em;
  }

  .iconfont {
    font-family: iconfont !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .footprint-map .legends .now .text {
    font-weight: 700;
  }

  .footprint-map .legends .folders {
    flex: 1;
    list-style: none;
    margin: 0;
    padding: 0.618rem 1rem;
  }

  .footprint-map .legends .folders,
  .footprint-map .legends .now {
    transition: background-color .25s;
    border-radius: 6px;
    overflow: hidden;
  }

  .footprint-map .legends .folders .item {
    line-height: 2.4em;
    cursor: pointer;
    color: #fff;
  }

  ul,
  ol {
    margin-bottom: 1em;
    padding-left: 3em;
    vertical-align: baseline;
  }

  .footprint-map .legends .folders .item .iconfont[data-v-4b83f663] {
    margin-right: 1rem;
  }

  .iconfont {
    font-size: 1em;
  }

  .iconfont {
    font-family: iconfont !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .footprint-map .legends .folders .item .text[data-v-4b83f663] {
    font-weight: 700;
    margin-right: 0.309rem;
  }
}
</style>
