<template>
  <div class="hello">
    <h1>{{ toby }}</h1>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return{
            toby : 'new content',
            value : [],
        }
    },
    methods: {
        goToTemplate:function(){
          console.log(123)
        },
        get:function(){
            return axios.get('ddd').then(x => x.data);
        },
        post () {
            return axios.post('ddd');
        }
    }
}
</script>