<template>
  <section class="form-process">
    <div class="container row">
      
      <section class="steps-wrapper">
          <a href="#" class="steps__count" :class ="(this.$route.path == '/')?'active':'steps__count'">1</a>
          <div class="steps__information">
              <p class="information__text">Step 1</p>
              <h3 class="information__title">Your info</h3>
          </div>
      </section>
      
      <section class="steps-wrapper">
          <a href="#" class="steps__count" :class ="(this.$route.path == '/plan')?'active':'steps__count'">2</a>
          <div class="steps__information">
              <p class="information__text">Step 2</p>
              <h3 class="information__title">Select Plan</h3>
          </div>
      </section>
      
      <section class="steps-wrapper">
          <a href="#" class="steps__count" :class ="(this.$route.path == '/add_ons')?'active':'steps__count'">3</a>
          <div class="steps__information">
              <p class="information__text">Step 3</p>
              <h3 class="information__title">Add-Ons</h3>
          </div>
      </section>
      
      <section class="steps-wrapper">
          <a href="#" class="steps__count" :class ="(this.$route.path == '/summary')?'active':'steps__count'">4</a>
          <div class="steps__information">    
            <p class="information__text">Step 4</p>
            <h3 class="information__title">Summary</h3>
          </div>
      </section>
      
    </div>
  </section>
</template>

<style scoped lang="scss">

.form-process{
    background: url("../assets/images/bg-sidebar-mobile.svg") no-repeat;
    background-size:100%;
    padding:8rem;
    width:100%;
    min-height:80%;
    max-height:100%;
    .row {
        flex-direction:row;
        justify-content:center;
        align-self:center;
        gap:2rem;
        
        .steps-wrapper {
            width:100%;
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
                
                &.active {
                    background:$Lightblue;
                }
                
            }
            .information__text, .information__title{
                display:none;
            }
        }
    }
    
    @media screen and (min-width: 800px) {
        padding:2rem 0;
        border-radius: 2rem;
        background:url("../assets/images/bg-sidebar-desktop.svg") no-repeat;
        .row {
            width:70%;
            flex-direction:column;
            justify-content:stretch;
            align-self:center;
            .steps-wrapper {
                display:grid;
                grid-template-columns: repeat(2, 1fr 4fr);
                gap:2rem;
                align-items:center;
                justify-items:center;
                .information__title, .information__text{
                    display:block;
                    width:100%;
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
