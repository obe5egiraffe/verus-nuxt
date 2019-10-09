<template>
  <article id="people" class="container">
    <section>
      <h1>Relationships Matter</h1>
      <p>The key to success is the quality of our relationships.</p>
      <div class="logo-container">
        <img
          v-for="(logo, index) in logos"
          :key="index"
          :src="getLogo(logo.src)"
          :alt="logo.title"
        >
      </div><!--logos-->
    </section>
  </article><!--about-->
</template>

<script>
  export default {
    data () {
      return {
        logos: [
          {
            'title': 'AEW Logo',
            'src': 'aew_logo-1.png'
          },
          {
            'title': 'Cabot Logo',
            'src': 'cabot_logo.png'
          },
          {
            'title': 'Clarion Partners Logo',
            'src': 'clarion-partners-logo-1.png'
          },
          {
            'title': 'CSSB Logo',
            'src': 'cssb_logo.png'
          },
          {
            'title': 'Duke Realty Logo',
            'src': 'duke.png'
          },
          {
            'title': 'ING Logo',
            'src': 'ing_logo-1.png'
          },
          {
            'title': 'KingSett Capital Logo',
            'src': 'kingsett_logo.png'
          },
          {
            'title': 'WPT Logo',
            'src': 'logo-1.png'
          },
          {
            'title': 'Crestpoint Real Estate Logo',
            'src': 'logo-crestpoint.png'
          },
          {
            'title': 'Exetere Property Group Logo',
            'src': 'logo-exetere.png'
          },
          {
            'title': 'Heitman Logo',
            'src': 'logo-heitman.png'
          },
          {
            'title': 'Janko Group Logo',
            'src': 'logo-janko-1.png'
          },
          {
            'title': 'Lexington Realty Trust Logo',
            'src': 'logo-lexington-1.png'
          },
          {
            'title': 'Province of Manitoba Logo',
            'src': 'mb-logo_web-1.png'
          },
          {
            'title': 'Metlife Logo',
            'src': 'metlife_logo.png'
          },
          {
            'title': 'Molto Logo',
            'src': 'molto_logo.png'
          },
          {
            'title': 'Morguard Logo',
            'src': 'morguard_logo.png'
          },
          {
            'title': 'SITQ logo',
            'src': 'sitq_logo.png'
          },
          {
            'title': 'Sunlife Financial Logo',
            'src': 'sunlife_logo.png'
          },
          {
            'title': 'USAA Logo',
            'src': 'usaa_logo-1-1.png'
          },
          {
            'title': 'Walsh Group Logo',
            'src': 'walsh_group_logo.png'
          }
        ]
      }
    },
    methods: {
      getLogo (pic) {
        return require('~/assets/images/logos/' + pic)
      }
    }
  }
</script>
