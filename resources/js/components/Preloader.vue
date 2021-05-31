<template>
    <div class="overlay-wrapper" v-show="preloader">
        <div class="overlay">
            <i class="fas fa-spinner fa-spin fa-5x text-black-50"></i><br>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            preloader: state => state.preloader,
        })
    }
};
</script>