<template>
  <div
    class="gallery"
    id="about"
    v-if="showCarousel"
  >
    <client-only placeholder="Loading...">
      <carousel
        :navigation-enabled="true"
        :per-page="1"
      >
        <slide
          v-for="(post, index) in posts"
          :key="index"
        >
          <img
            :src="getImage(post.images[0])"
            @click="showPostInfo(post.title, post.content, post.images)"
          >
        </slide>
      </carousel>
    </client-only>
    <a
      v-show="popupOpen"
      class="close"
      @click="popupOpen = false,handleHide()"
    >
      x</a>
    <popup
      ref="info"
      v-show="popupOpen"
      :title="postTitle"
      :content="postContent"
      :images="postImages"
    />
  </div>
</template>

<script>
import postData from '~/assets/data/featured.json'
import PostPopup from '@/components/GalleryPopup'
export default {
  props: {
    images: Array,
    title: String
  },
  components: {
    popup: PostPopup
  },
  data () {
    return {
      posts: postData,
      photos: ['mercy-health.jpg', 'valvoline.jpg', 'atricure.jpg'],
      showCarousel: false,
      visible: false,
      popupOpen: false,
      postTitle: ' ',
      postContent: ' ',
      postImages: []
    }
  },
  methods: {
    getPostData () {
      fetch(postData)
        .then(response => response.json())
        .then(data => (this.posts = data))
    },
    showPostInfo (postTitle, postContent, postImages) {
        const thisDiv = document.querySelector('#about')
        this.postTitle = postTitle
        this.postContent = postContent
        this.postImages = postImages
        this.popupOpen = true
        window.scrollTo({ top: thisDiv.offsetTop - 95, behavior: 'smooth' })
    },
    getImage (img) {
      return require('@/assets/images/' + img)
    },
    showImg (index) {
      this.index = index
      this.visible = true
    },
    handleHide () {
      this.$refs.info.handleHide()
    }
  },
  computed: {
    lightboxArray () {
      const gallery = this.photos.map((img) => {
        return require('@/assets/images/' + img)
      })
      return gallery
    }
  },
  mounted () {
    this.showCarousel = true
  }
}
</script>
