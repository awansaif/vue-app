<template>
    <div>
         <Navbar/>
    <Sidebar/>
        <div class="content"><h2>Images</h2></div>
    </div>
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