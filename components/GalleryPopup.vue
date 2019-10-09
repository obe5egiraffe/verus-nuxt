<template>
  <div class="post-popup">
    <div class="content">
      <h1>{{ title }}</h1>
      <div v-html="content"></div>
    </div>
    <div class="photo-grid">
      <a
        v-for="(image, index) in images"
        :key="index"
        class="thumb"
        :style="{backgroundImage: 'url('+getImage(image)+')'}"
        @click="() => showImg(index)"
      >
      </a>
    </div>
    <vue-easy-lightbox
      :visible="visible"
      :imgs="lightboxArray"
      @hide="handleHide"
    />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        visible: false
      }
    },
    props: {
      title: {
        default: ' ',
        type: String
      },
      content: {
        default: ' ',
        type: String
      },
      images: {
        default: ['mercy-health.jpg']
      },
      id: {
        default: ' ',
        type: String
      }
    },
    methods: {
      getImage (pic) {
        if (pic) {
          return require('@/assets/images/' + pic)
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
      }
    },
    computed: {
      lightboxArray () {
        const gallery = this.images.map((img) => {
          return require('@/assets/images/' + img)
        })
        return gallery
      }
    }
  }
</script>
