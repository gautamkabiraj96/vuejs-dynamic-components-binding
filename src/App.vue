<template>
  <div id="app">
    <button @click="selectedTab = 'About'">About</button>
    <button @click="selectedTab = 'Profile'">Profile</button>
    <button @click="selectedTab = 'Photos'">Photos</button>

    <div class="tab-content">
      <component v-bind:is="selectedTabComponent"></component>
    </div>
    <div class="np-credits">wwww.nightprogrammer.com</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selectedTab: "about",
    };
  },
  computed: {
    selectedTabComponent() {
      return `${this.selectedTab.toLowerCase()}-tab`;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  padding: 24px;
}

button {
  background-color: #004cbe;
  color: #ffffff;
  border: 0px;
  border-radius: 6px;
  padding: 6px 20px;
  margin-right: 1em;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  background-color: #2f79e7;
  transition: all 0.3s;
}

.tab-content {
  margin-top: 20px;
  background: #eee;
  padding: 12px;
  border-radius: 4px;
}

.np-credits {
  font-size: 12px;
  margin-top: 12px;
  color: #4b4b4b;
}
</style>