<template>
    <div class="overlay-wrapper" v-show="preloaderCard">
        <div class="overlay">
            <i class="fas fa-spinner fa-spin fa-3x text-black-50"></i><br>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            preloaderCard: state => state.preloaderCard,
        })
    }
};
</script>