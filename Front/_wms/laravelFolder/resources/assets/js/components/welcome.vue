<template>
    <div class="">
        <div class="welcome">
            <a href="viewRWD" class="col-xs-6 item rwd">RWD</a>
            <a href="viewAdaptive" class="col-xs-6 item adaptive">Adaptive</a>
        </div>
        <!--<div v-else>
            <item-view :asset="assetUrl" :source="sourceUrl" :rwd="type" v-if="type"></item-view>
            <item-view :asset="assetUrl" :source="sourceUrl" :rwd="type" v-else></item-view>
        </div>-->
    </div>
</template>












<script>
    import itemView from './itemView.vue'

    export default {
        props: ['source', 'asset'],
        components: {
            itemView
        },
        data() {
            return {
                assetUrl: `${this.asset}`,
                sourceUrl: `${this.source}`,
                welcome: 1,
                type: '',
            }
        },
        created() {},
        watch: {},
        methods: {
            isRwd() {
                this.welcome = 0
                this.type = 1
            },
            isAdaptive() {
                this.welcome = 0
                this.type = 0
            },
        }
    }
</script>