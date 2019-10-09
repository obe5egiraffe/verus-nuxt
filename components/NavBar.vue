<template>
  <header>
    <a
      class="menu-btn"
      v-on:click="navOpen = true"
    >
      <div class="menu-icon" />
    </a>
    <nav
      v-show="navOpen"
    >
      <a
        class="close"
        v-on:click="navOpen = false"
      >X
      </a>
      <a
        v-for="(section, index) in sections"
        :key="index"
        @click="scrollTo(section)"
      >
        {{ section }}
      </a>
    </nav>
    <img class="logo" src="~/assets/images/logo_verus.svg" alt="Verus Partners Logo">
  </header>
</template>

<script>
  export default {
    data () {
      return {
        navOpen: false,
        sections: ['about', 'people', 'projects', 'contact']
      }
    },
    methods: {
      scrollTo (section) {
        const sectionId = document.querySelector('#' + section)
        window.scrollTo({ top: sectionId.offsetTop - 75, behavior: 'smooth' })
        this.navOpen = false
      }
    }
  }
</script>
