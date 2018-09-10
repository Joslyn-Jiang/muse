<template>
    <div>
        <link rel="stylesheet" href="https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css">
        <mu-appbar style="width: 100%;" color="primary">
            <mu-button icon slot="left">
                <mu-icon value="menu"></mu-icon>
            </mu-button>
            Title
            <mu-menu slot="right">
                <mu-button flat>MENU</mu-button>
                <mu-list slot="content">
                    <mu-list-item button>
                        <mu-list-item-content>
                            <mu-list-item-title>Menu Item 1</mu-list-item-title>
                        </mu-list-item-content>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-content>
                            <mu-list-item-title>Menu Item 2</mu-list-item-title>
                        </mu-list-item-content>
                    </mu-list-item>
                </mu-list>
            </mu-menu>
        </mu-appbar>
        <mu-container>
            <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
                <mu-card-header title="Myron Avatar" sub-title="sub title">
                    <mu-avatar slot="avatar">
                        <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
                    </mu-avatar>
                </mu-card-header>
                <mu-card-media title="Image Title" sub-title="Image Sub Title">
                    <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
                </mu-card-media>
                <mu-card-title title="Content Title" sub-title="Content Title"></mu-card-title>
                <mu-card-text>
                    散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。 调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。 似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光， 找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
                </mu-card-text>
                <mu-card-actions>
                    <mu-button flat>Action 1</mu-button>
                    <mu-button flat>Action 2</mu-button>
                </mu-card-actions>
            </mu-card>
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
  name: 'Index',
  data () {
    return {
      shift: 'movies'
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
<style>
</style>
