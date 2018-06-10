<template>
  <div class="songkick-schedule">
    <b-list-group>
      <b-list-group-item v-for="show in shows">
        <div class="row">
          <div class="col-lg-4 col-sm-12">
            {{show.displayName}}
          </div>
          <div class="col-lg-3 col-sm-12">
            {{show.venue.displayName}} <br> {{show.venue.metroArea.displayName}}, {{show.venue.metroArea.country.displayName}}
          </div>
          <div class="col-lg-3 col-sm-6">
            {{show.start.date}}
          </div>
          <div class="col-lg-2 col-sm-6">
            <b-button size="small" variant="primary" :href="show.uri">
              Tickets
            </b-button>
          </div>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import bListGroup from 'bootstrap-vue/src/components/list-group/list-group'
import bButton from 'bootstrap-vue/src/components/button/button'

export default {
  name: 'songkickSchedule',
  data () {
    return {
      shows: [],
      apiKey: '2kPN9eFcrPY9pwv4',
      artistId: '337712',
      apiBaseUrl: 'http://api.songkick.com/api/3.0'
    }
  },
  created: function () {
    this.axios.get(this.apiBaseUrl + '/artists/' + this.artistId + '/calendar.json?apikey=' + this.apiKey).then((response) => {
      this.shows = response.data.resultsPage.results.event
    })
  },
  components: {
    'b-list-group': bListGroup,
    'b-button': bButton
  }
}
</script>

<style scoped lang="less">
.songkick-schedule {
  padding: 10px;
}
</style>

<style lang="less">
.songkick-schedule {
  div.list-group-item {
    background-color: #303c4f!important;
    color: azure;
  }
}
</style>
