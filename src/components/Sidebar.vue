<template>
  <div class="sidebar">
      <div class="logo">
          <router-link :to="{name: 'Home'}">
              <img src="../assets/logo.png" alt="" class="logo" >
          </router-link>
      </div>
      <nav>
          <ul>
            <li>
                <router-link :to="{name: 'Home'}">
                    <i class="fa fa-home"></i>
                    <p>Home</p> 
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'Image'}">
                    <i class="fa fa-image"></i>
                    <p>Images</p>
                </router-link>
            </li>
            <li>
               <router-link :to="{name: 'Video'}">
                    <i class="fa fa-video"></i>
                    <p>Videos</p>
                </router-link>
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-file"></i>
                    <p>Files</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-music"></i>
                    <p>Music</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="far fa-address-book"></i>
                    <p>Contact</p>
                </a>
            </li>
          </ul>
      </nav>
    <li>
        <router-link :to="{ name: 'logout' }">
            <i class="fas fa-sign-out-alt"></i>
            <p>Logout</p>
        </router-link>
    </li>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.sidebar{
    background: #303030;
    height: 100vh;
    width: 60px;
    color: aliceblue;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    transition: width 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
}
.sidebar:hover{
    width: 160px;
    overflow: visible;
}
.sidebar:hover .logo{
    display: flex;
    justify-content: center;
}
img.logo{
    width: 50px;
    padding: 0 4px;
    margin: 30px auto;
}
.sidebar nav{
    height: 70vh;
}
ul{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
}
li{
    list-style: none;
}
li a{
    width: 160px;    
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    padding: 16px 0;
    text-align: center;
    color: white;
    font-family: 'Poppins',sans-serif;
}
li a:hover{
    background-image: linear-gradient(
        to right,
        #2a88e6 7px,
        rgba(255,255,255,0.1) 7px
    );
}
li a.router-link-exact-active {
  background-image: linear-gradient(
        to right,
        #2a88e6 7px,
        rgba(255,255,255,0.1) 7px
    );
}
i.fa{
    font-size: 20px;
    text-align: right;
} 
li p{
    width: 75px;
    font-size: 16px;
    text-align: left;
    letter-spacing: 0.3px;    
}
</style>