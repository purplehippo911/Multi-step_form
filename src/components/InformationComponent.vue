<script setup>

defineProps ({
    informationTitle:String,
    informationText:String,
    usesH2:True
})
</script>

<template>
    <section class="information__section">
        <div class="container row">
            <h2 v-if="usesH2" class="information__title"> {{ informationTitle }} </h2>
            <h3 v-else class="information__title"> {{ informationTitle }} </h3>
            <p class="information__text"> {{ informationText }} </p>
        </div>
    </section>
</template>

<style scoped lang="scss">

.row {
    gap:0;
}

.information__title {
  font-weight:600;
  color:$Marineblue;
}
.information__text {
    color:$CoolGray;
}

</style>