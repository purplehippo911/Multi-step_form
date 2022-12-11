<script>
</script>

<template>
    <div class="subscription-toggle-wrapper">
        <div class="container row">
            <h3 class="subscription-toggle__plan-title">Monthly</h3>
            <div class="slider">
      
            <div class="slider__item" v-on:click="toggleOpen">
                <strong class="slider__ball" v-on:click="toggleOpen" ref="slider"></strong>
            </div>
            </div>
            <h3 class="subscription-toggle__plan-title">Yearly</h3>
        </div>
    </div>
</template>