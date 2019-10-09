<template>
  <div class="project-popup">
    <header>
      <div class="content">
        <div class="title">
          <h1>{{ title }}</h1>
        </div>
        <div class="location-wrapper">
          <h2>{{ location }}</h2>
          <svgmap
            ref="map"
            :activestate="abbr"
          />
        </div>
      </div>
    </header>
    <div
      class="main-image"
      :style="{backgroundImage: 'url('+getImage(id,images[0])+')'}"
    />
    <div class="content">
      <div v-html="body"></div>
    </div>
    <div class="photo-grid">
      <a
        v-for="(image, index) in galleryArray"
        :key="index"
        class="thumb"
        :style="{backgroundImage: 'url('+getImage(id,image)+')'}"
        @click="() => showImg(index)"
      />
    </div>
    <vue-easy-lightbox
      :visible="visible"
      :imgs="lightboxArray"
      @hide="handleHide"
    />
  </div>
</template>

<script>
  import ProjectMap from '@/components/Projects/ProjectMap'
  export default {
    components: {
      svgmap: ProjectMap
    },
    scrollToTop: true,
    props: {
      title: {
        default: ' ',
        type: String
      },
      location: {
        default: ' ',
        type: String
      },
      body: {
        default: ' ',
        type: String
      },
      images: Array,
      abbr: {
        default: 'OH',
        type: String
      },
      id: {
        default: ' ',
        type: String
      },
      flag: {
        default: ' ',
        type: String
      }
    },
    data () {
      return {
        visible: false
      }
    },
    computed: {
      galleryArray: function () {
        return this.images.slice(1)
      },
      lightboxArray: function () {
        const gallery = this.images.slice(1).map((img) => {
          return require('@/assets/images/projects/' + this.id + '/' + img)
        })
        return gallery
      }
    },
    methods: {
      getImage (id, pic) {
        if (pic) {
          return require('@/assets/images/projects/' + id + '/' + pic)
        } else {
          return require('@/assets/images/hero.jpg')
        }
      },
      showImg (index) {
        this.index = index
        this.visible = true
      },
      handleHide () {
        this.visible = false
      },
      getFlag (country) {
        console.log(country)
      }
    }
  }
</script>
