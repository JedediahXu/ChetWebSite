<template>
  <div class="time-selection">
    <div class="container">
      <input type="checkbox" name="menu" id="menu" class="menu-toggler">
      <label for="menu" class="menu-toggler-label">选择年份</label>
      <ul class="stagger-menu">
        <li style="--i: 0" @click="staggerZero(2023)">2023</li>
        <li style="--i: 1" @click="staggerZero(2022)">2022</li>
        <li style="--i: 2" @click="staggerZero(2021)">2021</li>
        <li style="--i: 3" @click="staggerZero(2020)">2020</li>
        <li style="--i: 4" @click="staggerZero(2019)">2019</li>
      </ul>
    </div>
  </div>
</template>


<script setup lang="ts">

const staggerZero = (index: number) => {
  console.log(index);
};

</script>

