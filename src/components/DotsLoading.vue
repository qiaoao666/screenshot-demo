<template>
  <span>{{ text }}</span>
</template>

<script>
  export default {
    name: "DotsLoading",
    props: {
      letter: {
        type: String,
        default: "."
      },
      length: {
        type: Number,
        default: 3
      },
      interval: {
        type: Number,
        default: 500
      }
    },
    created() {
      this.startLoading();
    },
    data() {
      return {
        text: "",
        timer: null
      }
    },
    methods: {
      startLoading() {
        let i = 0;
        let len = this.length + 1;
        this.timer = setInterval(() => {
          this.text = this.letter.repeat(i++ % len);
        },this.interval);
      }
    },
    beforeDestroy() {
      clearInterval(this.timer);
    }
  }
</script>

<style scoped>

</style>