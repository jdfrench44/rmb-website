<template>
  <div class="home container-fluid">
    <div class="row">
      <img id="header-image" src="../assets/img/boys.png"/>
    </div>
    <div class="row equal">
      <div class="carousel-container col-lg-5 col-sm-12">
        <b-carousel ref="carousel"
                    style="text-shadow: 1px 1px 2px #333;"
                    controls
                    indicators
                    background="#ababab"
                    :interval="0"
                    v-model="slide">

          <b-carousel-slide img-src="/static/img/RMB_KitchenDwellers.jpg"
          ></b-carousel-slide>

          <b-carousel-slide img-src="/static/img/DarkStarJubileePoster_modified.jpg">
          </b-carousel-slide>
        </b-carousel>
      </div>
      <div class="col-lg-7 col-sm-12">
        <div>
          <b-card :style="showsCardStyles" title="Upcoming Shows" class="showsCard mb-2">
            <songkick-schedule></songkick-schedule>
          </b-card>
        </div>
      </div>
    </div>
    <!-- <div class="row justify-content-center">
    </div> -->
    <div class="row card-row">
      <div class="col-lg-4 col-md-6 col-xs-12">
        <div class="card-container">
          <b-card title="Music"
                  class="mb-2">
            <div>
              <iframe src="https://open.spotify.com/embed/album/77RszxIlXbOV78EMMVzNCm" width="340" height="420" frameborder="0" allowtransparency="true"></iframe>
            </div>
          </b-card>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 col-xs-12">
        <div class="card-container">
          <b-card title="News"
                  class="mb-2">
              <div class="fb-page" data-height="420" data-href="https://www.facebook.com/RumpkeMountainBoys/" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true"
              data-hide-cover="false" data-show-facepile="true">
              <blockquote cite="https://www.facebook.com/RumpkeMountainBoys/"
              class="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/RumpkeMountainBoys/">Rumpke Mountain Boys</a>
            </blockquote>
              </div>
          </b-card>
        </div>
      </div>
        <div class="col-lg-4 col-md-6 col-xs-12">
          <div class="card-container">
            <b-card title="Merch"
                    img-src="/static/img/dmctee.png"
                    img-alt="Rumpke Tee Shirt"
                    img-bottom
                    class="mb-2">
              <p class="card-text">
                Get all your Rumpke Mountains Boys gear in our online store.  Cd's, shirts, hats, posters, and more.
              </p>
              <p class="card-text">
                Didn't find what you were looking for?  Drop us a line and we'll do our best to satisfy your request!
              </p>
              <b-button to="/merch" variant="primary">Merch Store</b-button>
            </b-card>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import bCarousel from 'bootstrap-vue/src/components/carousel/carousel'
import bCard from 'bootstrap-vue/src/components/card/card'
import songkickSchedule from './songkickSchedule.vue'

export default {
  name: 'Home',
  data () {
    return {
      slide: 0,
      showsCardStyles: {'max-height': '500px'}
    }
  },
  components: {
    'b-carousel': bCarousel,
    'b-card': bCard,
    songkickSchedule
  },
  mounted () {
    this.$nextTick(function () {
      var height = this.$refs.carousel.$children[0].$el.clientHeight
      if (height > 500) {
        this.showsCardStyles = {
          'max-height': height + 'px'
        }
      }
    })
  }
}
</script>

<style scoped lang="less">
.showsCard {
  background-color: #303c4f;
  .card-title {
    color: azure;
  }
}
.home {
  padding-left: 20px;
  padding-right: 20px;

  .row:nth-child(2) {
    padding-top: 30px;
  }
}
.row {
  .row+.row {
    margin-top: 40px;
  }
  > div {
    margin-bottom: 20px;
  }
}
.carousel-container {
  width: 500px;
  margin: 0 auto;
}
.card-container {
  display: inline-block;
  min-width: 100%;
  height: 100%;
}
.centered-container {
  display: inline-block;
}
.card-row > div {
  text-align: center;
}
.mb-2 {
  height: 100%;
  max-height: 527px;
  overflow-y: auto;
}
</style>

<style lang="less">
.home {
  h4.card-title {
    text-align: center;
  }
  div.carousel-inner {
    border-radius: 3px;
  }
  .mb-2 {
    background-color: #303c4f;
    color: white;
  }
  .mb-2::-webkit-scrollbar {
      width: 1em;
  }
  .mb-2::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
  .mb-2::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    border-radius: 1em;
  }
}
</style>
