<script>
</script>

<template>
<section class="add-ons__options">
    <div class="container row">
        <section class="options__option">
            <input type="checkbox" name="checkbox" id="checkbox">
            
            <div class="option__information">
                <h3 class="information__title">Online service</h3>
                <p class="information__text">Access to multiplayer games</p>
            </div>
            <a href="#" class="option__price">+$1/mo</a>
        </section>    
        
        <section class="options__option">
            <input type="checkbox" name="checkbox" id="checkbox">
            
            <div class="option__information">
                <h3 class="information__title">Larger storage</h3>
                <p class="information__text">Extra 1TB of cloud save</p>
            </div>

            <a href="#" class="option__price">+$2/mo</a>
        </section>    
        
        <section class="options__option">
            <input type="checkbox" name="checkbox" id="checkbox">
            
            <div class="option__information">
                <h3 class="information__title">Customizable Profile</h3>
                <p class="information__text">Custom theme on your profile</p>
            </div>
    
            <strong class="option__price">+$2/mo</strong>
        </section>    
    </div>
</section>
</template>

<style scoped lang="scss">
.options__option {
    width:100%;
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(33%, 1fr));
    align-items:center;
    
    background:$Alabaster;
    border:1px solid $Marineblue;
    padding:1.5rem;

    &:has(focus) {
        background:red;
    }
}

.add-ons__options {
    width: 100%;
    .container {
        padding:0;
        width:100%;
    }
}

.option__price {
    color:$Purplishblue;
}

</style>