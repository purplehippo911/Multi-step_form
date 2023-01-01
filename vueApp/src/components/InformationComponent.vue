<script setup>

defineProps ({
    informationTitle:String,
    informationText:String
})
</script>

<template>
    <section class="information__section">
        <div class="container row">
                <h2 class="information__title"> {{ informationTitle }} </h2>
                <p class="information__text"> {{ informationText }} </p>
        </div>
    </section>
</template>

<style scoped lang="scss">

.information__title {
  font-weight:600;
  color:$Marineblue;
}
.information__text {
color:$CoolGray;
}

</style>