<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="form-process">
    <div class="container row">
      
      <section class="steps-wrapper">
          <router-link class="steps__count" to="/">1</router-link>
          <div class="steps__information">
              <p class="information__text">Step 1</p>
              <h3 class="information__title">Your info</h3>
          </div>
      </section>
      
      <section class="steps-wrapper">
          <router-link class="steps__count" to="/step-2">2</router-link>
          <div class="steps__information">
              <p class="information__text">Step 2</p>
              <h3 class="information__title">Select Plan</h3>
          </div>
      </section>
      
      <section class="steps-wrapper">
          <router-link class="steps__count" to="/step-3">3</router-link>
          <div class="steps__information">
              <p class="information__text">Step 3</p>
              <h3 class="information__title">Add-Ons</h3>
          </div>
      </section>
      
      <section class="steps-wrapper">
          <router-link class="steps__count" to="/step-4">4</router-link>
          <div class="steps__information">    
            <p class="information__text">Step 4</p>
            <h3 class="information__title">Summary</h3>
          </div>
      </section>
      
    </div>
  </section>
</template>

<style lang="scss">

.form-process{
    .container {
        max-width:100%;
    }
    .row {
        flex-direction:center;
        justify-content:center;
        align-items:center;
        gap:2rem;
        outline:2px solid blue;
    
        .steps-wrapper {
            outline:2px solid green;
            .steps__count {
                width:2.5rem;
                height:2.5rem;
                border:.1rem solid $White;
                border-radius:50%;
                text-align:center;
                font-weight:700;
                display: flex;
                align-items: center;
                justify-content:center;
                outline:2px solid red;
                &:is(:active, :target, :visited, :active) {
                    background:$Pastelblue;
                }
            }
            .information__text, .information__title{
                display:none;
            }
        }
    }

    @media screen and (min-width: 800px) {
        background:url("./assets/images/bg-sidebar-desktop.svg") no-repeat;
        .row {
            flex-direction:column;
            .steps-wrapper {
                display:grid;
                grid-template-columns: repeat(2, auto 4fr);
                justify-items:center;
                justify-content:center;
                gap:2rem;
                align-items:center;
                .information__title, .information__text{
                    display:block;
                    text-transform:uppercase;
                    outline:2px solid red;
                }

                .information__title {
                    font-weight:700;
                    color:$White;
                    margin-top:0;
                }
            }
        }
    }

}

</style>
