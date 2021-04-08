<template>
        <div class="sidebar__navbar">
          <Navbar/>
          <Sidebar/>
        </div>
        <h2 class="heading">Images</h2>
        <div class="content">
          <div v-for="image in images" class="show__img" :key="image.id">
            <img :src="image.previewURL" :alt="image.previewURL" >
            <div class="img_btn">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(241, 237, 237, 1);transform:scaleX(-1);-ms-filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"><path fill="none" d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"></path><path d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"></path><path d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
  },
  data() {
    return {
      images: null
    }
  },
  mounted() {
    axios.get('https://pixabay.com/api/?key=13294964-2579748c4022fff2654d16e92').then(response => {
     this.images = response.data.hits;
    })
  }
}
</script>

<style>
.show__img {
    position: relative;
    margin: 1px;
}
.show__img img{
  width: 100%;
  height: auto;
  border: 1px double darkcyan;
  box-shadow: 10px 4px 14px 4px #d8c5c5;
}
.show__img:hover .img_btn{
  display: block;
}
.img_btn {
    display: none;
    position: absolute;
    top: 0px;
    right: 0px;
}
.img_btn button {
    padding: 0px 0px;
    background: #f14e4e;;
    border: none;
    border-radius: 0px 0px 0px 10px;
}
</style>