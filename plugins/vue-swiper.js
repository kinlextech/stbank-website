import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import VueNativeNotification from 'vue-native-notification'

// import style
import "swiper/swiper-bundle.css";

Vue.use(VueAwesomeSwiper /* { default options with global component } */);
Vue.use(VueNativeNotification, {
    // Automatic permission request before
    // showing notification (default: true)
    requestOnNotify: true
})

