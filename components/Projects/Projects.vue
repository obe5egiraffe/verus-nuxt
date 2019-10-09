<template>
  <article id="projects" class="project-wrap container">
    <section>
      <h1>Projects</h1>
      <categories
        @send-category="changeCategory"
      />
    </section>
    <div
      id="gridTop"
      class="project-grid"
    >
      <a
        v-for="(project, index) in projects"
        v-show="(project.category.includes(activeCategory))"
        :key="index"
        :style="{backgroundImage: 'url('+getFirstImage(project.id,project.images[0])+')'}"
        class="project-thumb"
        @click="showProjectInfo(project.id, project.title, project.location, project.content, project.images, project.abbr, project.flag)"
      >
        <div
          class="info"
          :class="project.abbr"
        >
          <h2>{{ project.title }}</h2>
          <h3>{{ project.location }}</h3>
          <img
            class="flag"
            :src="getFlag(project.flag)"
          >
          <svgmap
            :activestate="project.abbr"
          />
        </div>
      </a>
      <a
        v-show="popupOpen"
        class="close"
        @click="popupOpen = false"
      >
        x</a>
      <transition name="fade-in">
        <popup
          v-show="popupOpen"
          :id="projId"
          :title="projTitle"
          :location="projLocation"
          :body="projContent"
          :images="projImages"
          :abbr="projAbbr"
          :flag="projFlag"
        />
      </transition>
    </div>
  </article><!--projects-->
</template>

<script>
  import projectsData from '~/assets/data/projects.json'
  import ProjectMap from '@/components/Projects/ProjectMap'
  import ProjectPopup from '@/components/Projects/ProjectPopup'
  import ProjectCategories from '@/components/Projects/ProjectCategories'
  export default {
    components: {
      svgmap: ProjectMap,
      popup: ProjectPopup,
      categories: ProjectCategories
    },
    data () {
      return {
        projects: projectsData,
        popupOpen: false,
        projId: ' ',
        projTitle: ' ',
        projLocation: ' ',
        projContent: ' ',
        projImages: [],
        projAbbr: ' ',
        projFlag: ' ',
        activeCategory: 'featured'
      }
    },
    methods: {
      getProjectData () {
        fetch(projectsData)
          .then(response => response.json())
          .then(data => (this.projects = data))
      },
      getFirstImage (id, pic) {
        return require('@/assets/images/projects/' + id + '/' + pic)
      },
      showProjectInfo (projId, projTitle, projLocation, projContent, projImages, projAbbr, projFlag) {
        const thisDiv = document.querySelector('#projects')
        this.projId = projId
        this.projTitle = projTitle
        this.projLocation = projLocation
        this.projContent = projContent
        this.projImages = projImages
        this.projAbbr = projAbbr
        this.projFlag = projFlag
        this.popupOpen = true
        window.scrollTo({ top: thisDiv.offsetTop - 75, behavior: 'smooth' })
      },
      changeCategory (name) {
        this.activeCategory = name
        this.popupOpen = false
      },
      getFlag (country) {
        return require('@/assets/images/flag_' + country + '.svg')
      }
    }
  }
</script>
