<template>
  
</template>

<script>
export default {
created() {
    localStorage.removeItem('token');
    this.$router.push('/');
}
}
</script>

<style>

</style>