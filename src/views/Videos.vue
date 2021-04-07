<template>
   <div class="sidebar__navbar">
      <Navbar/>
      <Sidebar/>
    </div>
    <h2 class="heading">Video</h2>
    <div class="content"></div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
  },
}
</script>

<style>

</style>