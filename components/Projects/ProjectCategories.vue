<template>
  <ul class="categories">
    <li
      v-for="(category, index) in categories"
      :key="index"
      :class="{'active' : (category === activeCategory)}"
      v-on:click="sendCategory(category)"
    >
      {{ category }}
    </li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        categories: [ 'featured', 'office', 'industrial', 'healthcare', 'land' ],
        activeCategory: 'featured'
      }
    },
    methods: {
      sendCategory (name) {
        this.activeCategory = name
        this.$emit('send-category', name)
      }
    }
  }
</script>
