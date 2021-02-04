<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body{
  background: #cccccc;
}
a {
  text-align: none;
}
ul,
ol {
  list-style: none;
}

.container {
  width: 1200px;
  margin: 0 auto;
}
header {
  height: 50px;
  background: aqua;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
</style>
