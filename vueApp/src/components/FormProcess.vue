<script setup>
</script>

<template>
  <section class="form-process">
    <div class="container row">
      
      <div class="steps-wrapper">
          <a class="steps__count" href="/">1</a>
          <p class="steps__text">Step 1</p>
          <h3 class="steps__title">Your info</h3>
      </div>
      
      <div class="steps-wrapper">
          <a class="steps__count" href="/step-2">2</a>
          <p class="steps__text">Step 2</p>
          <h3 class="steps__title">Select Plan</h3>
      </div>
      
      <div class="steps-wrapper">
          <a class="steps__count" href="/step-3">3</a>
          <p class="steps__text">Step 3</p>
          <h3 class="steps__title">Add-Ons</h3>
      </div>
      
      <div class="steps-wrapper">
          <a class="steps__count" href="/step-4">4</a>
          <p class="steps__text">Step 4</p>
          <h3 class="steps__title">Summary</h3>
      </div>

      
    </div>
  </section>
</template>

<style lang="scss">

.form-process{
    .container {
        width:100%;
    }
    .row {
    
        .steps-wrapper {
            width:20%;
            .steps__count {
                padding:.5em;
                border:1px solid $White;
                border-radius:20px;
                font-weight:700;
                &:visited {
                    background:$Pastelblue;
                }
            }
            .steps__text, .steps__title{
                display:none;
            }
        }
    }

    @media screen and (min-width: 800px) {
        background:url("./assets/images/bg-sidebar-desktop.svg") no-repeat;
        .row {
            flex-direction:column;
            align-content:flex-start;
            .steps-wrapper {
                display:flex;
                .steps__text, .steps__title{
                    display:block;
                }
            }
        }
    }

}

</style>
