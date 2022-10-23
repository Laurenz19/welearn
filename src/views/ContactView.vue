<template>
  <section class="contact">
   <div class="container contact__container">
      <aside class="contact__aside">
         <div class="aside__image">
            <img src="src/assets/images/contact.svg">
         </div>
         <h2>Contact us</h2>
         <p>
         Excepturi vel blanditiis doloremque, ipsam aut quia provident nisi doloribus quidem molestias quasi consequatur autem aspernatur architecto, animi neque fugiat qui.
         </p>
         <ul class="contact__details">
            <li>
               <i class="uil uil-phone-times"></i>
               <h5>+261 32 62 156 82</h5>
            </li>
            <li>
               <i class="uil uil-envelope"></i>
               <h5>laurenziosambany@gmail.com</h5>
            </li>
            <li>
               <i class="uil uil-location-point"></i>
               <h5>Fianarantsoa, Madagascar</h5>
            </li>
         </ul>

         <ul class="contact__socials">
            <li>
               <a href="#"><i class="uil uil-facebook-f"></i></a>
            </li>
            <li>
              <a href="#"><i class="uil uil-instagram-alt"></i></a>
            </li>
            <li>
              <a href="#"><i class="uil uil-twitter-alt"></i></a>
             </li>
            <li>
              <a href="#"><i class="uil uil-linkedin-alt"></i></a>
            </li>
         </ul>
      </aside>

      <form class="contact__form">
         <div class="form__name">
            <input type="text" name="First Name" placeholder="First Name" required>
            <input type="text" name="First Name" placeholder="First Name" required>
         </div>
         <input type="email" name="Email Address" placeholder="Your Email Address" required>
         <textarea name="Message" placeholder="Message" rows="7" required :style="{'width':'100%'}"/>
         <button type="submit" class="btn btn-primary">Send Message</button>
      </form>
   </div>
  </section>
</template>

<script setup>
</script>
  