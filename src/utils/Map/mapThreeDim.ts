/*
* @Description: 渲染模型高度
* @Author: xuhuazhi
* @Date: 2022-07-09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-10 09:35:18
*/
import { Ref } from "vue";

export function mapThreeDim(map: Ref) {
  map.value.on("load", () => {
    const layers = map.value.getStyle().layers;
    if (layers !== undefined) {
      const labelLayerId = layers.find(
        (layer: { layout: { [x: string]: any; }; type: string; }) => {
          if ("layout" in layer && layer.layout !== undefined) {
            return layer.type === "symbol" && layer.layout["text-field"]
          } else {
            return false
          }
        }
      )?.id;
      //3D模型
      map.value.addLayer(
        {
          id: "3d",
          source: "composite",
          "source-layer": "building",
          filter: ["==", "extrude", "true"],
          type: "fill-extrusion",
          minzoom: 15,
          paint: {
            "fill-extrusion-color": "#aaa",

            // 当用户放大时，使用“插值”表达式为建筑物添加平滑过渡效果
            "fill-extrusion-height": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "height"],
            ],
            "fill-extrusion-base": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "min_height"],
            ],
            "fill-extrusion-opacity": 0.6,
          },
        },
        labelLayerId
      );
    }
  });
}
