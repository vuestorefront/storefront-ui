<template lang="html" src="./SfTab.html"> </template>
<script src="./SfTab.js"></script>
<style>
/* @import '../../../../utilities/transitions/transitions.scss'; */
.slide-left-enter-active {
  -webkit-animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-left-leave-active {
  -webkit-animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
    reverse;
  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both reverse;
}
@keyframes slide-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
