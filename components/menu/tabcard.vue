<template>
  <div class="wrapper">
    <button class="change__style" @click="changeStyle()">Change Style</button>
    <st-tabs :mode="mode">
      <st-tab title="Tab 1">Hello From Tab 1</st-tab>
      <st-tab title="Tab 2">Hello From Tab 2</st-tab>
      <st-tab title="Tab 3">Hello From Tab 3</st-tab>
      <st-tab title="Tab 4">Hello From Tab 4</st-tab>
    </st-tabs>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>