<template>
    <div class="navbar">
        <div class="user-profile">
            <img src="../assets/logo.png" alt="" class="user-profile">
        </div>
    </div>
</template>

<script>
export default {
}
</script>
<style>
.navbar{
    position: fixed;
    width: 100%;
    top:0%;
    left: 0%;
    height: 50px;
    background: #e1e1e6;
    box-shadow: 0px 1px 10px #fff;
    display: flex;
    justify-content: flex-end;
    z-index: 1;
}
img.user-profile {
    width: 50px;
    margin: 0px 30px;
    border-radius: 50%;
    overflow: hidden;
    height: 50px;
    background: aquamarine;
}
</style>