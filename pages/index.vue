<template>
  <div>
    <intro />
    <gallery />
    <relationships />
    <projects />
  </div>
</template>

<script>
  import Intro from '@/components/Intro'
  import Projects from '@/components/Projects/Projects'
  import Relationships from '@/components/Relationships'
  import Gallery from '@/components/Gallery'
  export default {
    components: {
      intro: Intro,
      projects: Projects,
      gallery: Gallery,
      relationships: Relationships
    }
  }
</script>
