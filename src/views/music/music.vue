<template>
    <div>
        <mu-carousel transition="fade">
            <mu-carousel-item>
                <img :src="carouselImg1">
            </mu-carousel-item>
            <mu-carousel-item>
                <img :src="carouselImg2">
            </mu-carousel-item>
            <mu-carousel-item>
                <img :src="carouselImg3">
            </mu-carousel-item>
            <mu-carousel-item>
                <img :src="carouselImg4">
            </mu-carousel-item>
        </mu-carousel>
        <mu-container>
            <mu-row gutter>
                <mu-col span="12" lg="4" sm="6">
                    <mu-date-input v-model="value1" label="选择日期" label-float full-width></mu-date-input>
                </mu-col>
            </mu-row>
        </mu-container>
        <mu-container style="max-width: 500px; width:100%;position: fixed;bottom: 0;">
            <mu-bottom-nav :value.sync="shift" shift @change="bottom(shift)">
                <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"></mu-bottom-nav-item>
                <mu-bottom-nav-item value="music" title="Music" icon="music_note"></mu-bottom-nav-item>
                <mu-bottom-nav-item value="books" title="Books" icon="books"></mu-bottom-nav-item>
                <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"></mu-bottom-nav-item>
            </mu-bottom-nav>
        </mu-container>
    </div>
</template>
<script>
export default {
  name: 'Music',
  data () {
    return {
      shift: 'music',
      carouselImg1: require('../../assets/logo.png'),
      carouselImg2: require('../../assets/front.jpg'),
      carouselImg3: require('../../assets/gl.jpg'),
      carouselImg4: require('../../assets/global.jpg'),
      value1: ''
    }
  },
  methods: {
    bottom (shift) {
      if (shift === 'movies') {
        document.location = '..#/index'
      } else if (shift === 'music') {
        document.location = '..#/music'
      } else if (shift === 'books') {
        console.log(3)
      } else if (shift === 'pictures') {
        console.log(4)
      }
    }
  }
}
</script>
