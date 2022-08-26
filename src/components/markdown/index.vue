<!-- 
 "@bytemd/plugin-breaks": "^1.17.2",
    "@bytemd/plugin-footnotes": "^1.12.4",
    "@bytemd/plugin-frontmatter": "^1.17.2",
    "@bytemd/plugin-gemoji": "^1.17.2",
    "@bytemd/plugin-gfm": "^1.17.2",
    "@bytemd/plugin-highlight": "^1.17.2",
    "@bytemd/plugin-medium-zoom": "^1.17.2",
    "@bytemd/vue": "^1.17.2", -->
<template>
  <div />
</template>


<script setup lang="ts">
import {
  ref, onMounted, getCurrentInstance, watch,
} from 'vue';
import * as bytemd from 'bytemd';
import 'bytemd/dist/index.min.css';
import breaks from '@bytemd/plugin-breaks';
import highlight from '@bytemd/plugin-highlight';
import footnotes from '@bytemd/plugin-footnotes';
import frontmatter from '@bytemd/plugin-frontmatter';
import gfm from '@bytemd/plugin-gfm';
import mediumZoom from '@bytemd/plugin-medium-zoom';
import gemoji from '@bytemd/plugin-gemoji';

interface ImageAttr { title: string, url: string, alt: string }

interface Props {
  value?: string,
  placeholder?: string,
  plugins?: any,
  previewDebounce?: number,
  locale?: any,
  uploadImages?: (files: [File]) => [ImageAttr],
  maxLength?: number
}

const props = withDefaults(defineProps<Props>(), {
  maxLength: undefined,
  placeholder: '',
  previewDebounce: 200,
  uploadImages: undefined,
  value: '',
  plugins: [
    breaks(),
    highlight(),
    footnotes(),
    frontmatter(),
    gfm(),
    mediumZoom(),
    gemoji(),
  ],
});

const emit = defineEmits<{ (e: 'change', id: string): void, (e: 'update:value', id: string): void }>();
const viewer = ref<bytemd.Viewer>(null);
const instance = getCurrentInstance();

onMounted(() => {
  viewer.value = new bytemd.Viewer({
    target: instance?.subTree.el,
    props,
  });
  viewer.value.$on('change', (e: { detail: { value: string; }; }) => {
    emit('change', e.detail.value);
    emit('update:value', e.detail.value);
  });
});

watch(props, (newValue) => {
  viewer.value.$set(Object.fromEntries(Object.entries(newValue).filter((v) => v)));
});
</script>
