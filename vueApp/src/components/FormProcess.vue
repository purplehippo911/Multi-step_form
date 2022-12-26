<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="form-process">
    <div class="container row">
      
      <div class="steps-wrapper">
          <router-link class="steps__count" to="/">1</router-link>
          <div class="steps__information">
              <p class="information__text">Step 1</p>
              <h3 class="information__title">Your info</h3>
          </div>
      </div>
      
      <div class="steps-wrapper">
          <router-link class="steps__count" to="/step-2">2</router-link>
          <div class="steps__information">
              <p class="information__text">Step 2</p>
              <h3 class="information__title">Select Plan</h3>
          </div>
      </div>
      
      <div class="steps-wrapper">
          <router-link class="steps__count" to="/step-3">3</router-link>
          <div class="steps__information">
              <p class="information__text">Step 3</p>
              <h3 class="information__title">Add-Ons</h3>
          </div>
      </div>
      
      <div class="steps-wrapper">
          <router-link class="steps__count" to="/step-4">4</router-link>
          <div class="steps__information">    
            <p class="information__text">Step 4</p>
            <h3 class="information__title">Summary</h3>
          </div>
      </div>

      
    </div>
  </section>
</template>

<style lang="scss">

.form-process{
    outline:2px solid red;
    .container {
     outline:2px solid green;
    }
    .row {
        outline:2px solid blue;
        flex-direction:row;
    
        .steps-wrapper {
            outline:2px solid white;
            width:100%;
            .steps__count {
                width:2.5rem;
                height:2.5rem;
                border:1px solid $White;
                border-radius:50%;
                text-align:center;
                font-weight:700;
                display: flex;
                align-items: center;
                justify-content:center;
                &:visited {
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
            justify-content:flex-start;
            .steps-wrapper {
            display:grid;
            grid-template-columns: repeat(2, 1fr);
            justify-content:center;
            justify-items:center;
            align-items:center;
                .information__title, .information__text{
                    display:block;
                    text-transform:uppercase;
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
