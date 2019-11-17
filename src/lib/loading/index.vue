<template>
<div class="loader"></div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.loader {
  height: 40px;
  width: 40px;
  position: absolute;
  left: 50%;
  margin-left: -20px;
  top: 50%;
  margin-top: -20px;
  
  &:before,
  &:after {
    content: "";
    height: 40px;
    width: 40px;
    border: 8px solid rgba(230, 247, 0, 0.5);
    border-radius: 10px;
    position: absolute;
    top: 0;
  }
  
  &:before {
    animation: animate 2s infinite linear;
  }
  
  &:after {
    animation: animate2 2s infinite linear;
  }
}

@keyframes animate {
  100% {
    transform: rotate(180deg) skew(360deg);
  }
}

@keyframes animate2 {
  100% {
    transform: rotate(-180deg) skew(-360deg);
  }
}
</style>