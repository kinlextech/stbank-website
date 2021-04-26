<template>
  <section class="container">
    <vs-row>
      <vs-col lg="3" md="3" sm="12" v-for="i in 10" :key="i">
        <vs-card sqaure type="2" class="m-1">
          <template #title>
            <h3></h3>
          </template>
          <template #img>
            <img
              :src="`https://www.stbanklaos.la/upload/news//1618277146.jpg`"
              alt=""
            />
          </template>
          <template #text>
            <p>
              {{ i }}
            </p>
          </template>
          <template #interactions>
            <vs-button danger icon>
              <i class="bx bx-heart"></i>
            </vs-button>
          </template>
        </vs-card>
      </vs-col>
    </vs-row>
  </section>
</template>

<script>
export default {
  layout:'client'
};
</script>

<style>
</style>