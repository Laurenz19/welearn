<template>
<footer>
  <div class="container footer__container">
    <div class="footer__1">
      <router-link to="/" class="footer__logo"><h4>{{appName}}</h4></router-link>
      <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, consequatur.
      </p>
    </div>

    <div class="footer__2">
      <h4>Permalinks</h4>
      <ul class="permalinks">
        <li
          v-for="(route, index) in routes"
          :key="index"
        >
            <router-link :to="route.path">{{route.name}}</router-link>
        </li>
      </ul>
    </div>

    <div class="footer__3">
      <h4>Privacy</h4>
      <ul class="privacy">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & conditions</a></li>
        <li><a href="#">Refund Policy</a></li>
      </ul>
    </div>

    <div class="footer__4">
      <h4>Contact us</h4>
      <div>
        <p>+261 32 62 156 82</p>
        <p>laurenziosambany@gmail.com</p>
      </div>
      <ul class="footer__socials">
        <li><a href="#"><i class="uil uil-facebook-f"></i></a></li>
        <li><a href="#"><i class="uil uil-instagram-alt"></i></a></li>
        <li><a href="#"><i class="uil uil-twitter-alt"></i></a></li>
        <li><a href="#"><i class="uil uil-linkedin-alt"></i></a></li>
      </ul>
    </div>
  </div>
  <div class="footer__copyright">
      <small>Copyright &copy; LaurenzioSAMBANY</small>
  </div>
 </footer>
</template>

<script setup>
/**
 * import
 */
 import {useWebsiteStore} from '@/stores/websiteStore.js'
 const {appName, routes} = useWebsiteStore()
</script>

<style scoped>
@import "../../assets/css/base.css";
/*Footer*/
footer{
    background: var(--color-bg1);
    padding-top: 5rem;
}

.footer__container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5rem;
}

.footer__container > div h4{
    margin-bottom: 1.2rem;
}

.footer__1 p{
    font-size: 0.8rem;
    margin: 1.4rem 0 2rem;
}

.footer__container a{
    font-size: 0.8rem;
}

footer ul li{
   margin-bottom: 0.2rem;   
}

footer ul li a:hover{
    text-decoration: underline;   
}

.footer__4 p{
    font-size: 0.8rem;
    padding: 0.2rem;
}

.footer__socials{
    display: flex;
    text-align: center;
    gap:2rem;
    font-size: 1.2rem;
}

.footer__copyright{
    text-align: center;
    font-size: 0.9rem;
    margin-top: 4rem;
    padding: 1.2rem 0;
    border-top: 1px solid var(--color-bg2);
}

/* Media Queries (tablets) */

@media screen and (max-width: 1024px) {
    .footer__container{
        grid-template-columns: 1fr 1fr;
    }
}

/* Media Queries (Phone) */

@media screen and (max-width: 600px) {
    footer{
        padding: 2rem 0;
    }
    .footer__container{
        grid-template-columns: 1fr;
        text-align: center;
        gap:1rem;
    }

    .footer__1 p{
        margin: 1rem auto;
    }

    .footer__socials{
        justify-content: center;
    }
}
</style>