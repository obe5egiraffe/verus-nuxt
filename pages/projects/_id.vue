<template>
  <div>
    <h1>{{ project.title }}</h1>
    <div class="map">
      <h2>{{ project.location }}</h2>
      <img class="flag" src="#">
    </div>
    <p>{{ project.content }}</p>
  </div>
</template>

<script>
  import projectsData from '~/assets/data/projects.json'
  export default {
    data () {
      return {
        id: this.$route.params.id,
        projects: projectsData
      }
    },
    computed: {
      project () {
        return this.projects.find(project => project.id === this.id)
      }
    },
    methods: {
      getProjectData () {
        fetch(projectsData)
          .then(response => response.json())
          .then(data => (this.projects = data))
      }
    }
  }
</script>
