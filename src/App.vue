<script setup>
  import { ref, onMounted, watch } from 'vue'
  import { WEATHER_API_KEY, WEATHER_BASE_URL } from './constants'
  import GetCity from './components/GetCity.vue'
  import WeatherSummary from './components/WeatherSummary.vue'
  import Highlights from './components/Highlights.vue'
  import Coordinates from './components/Coordinates.vue'
  import Humidity from './components/Humidity.vue'

  import { city } from './Composible'

  const weatherInfo = ref(null)

  async function getWeather(){
    // console.log('get weather in', city.value)
    try {
      const res = await fetch(`${WEATHER_BASE_URL}?q=${city.value}&appid=${WEATHER_API_KEY}&units=metric`)
      weatherInfo.value = await res.json()
      // console.log('weather:', weatherInfo.value);
    } catch (error) {
      console.log('Fetch error:', error)
    }
  }

  async function checkWeather(){
    // console.log('Start checking the weather every 5 sec')
    setInterval(await getWeather(), 5000)
  }

  onMounted(() => {
    getWeather()
    checkWeather()
  });

  watch(city, () => {
    // console.log('the city is changed. New value is', city)
    getWeather()
  })
  
</script>

<template>
  <div class="page">
    <main class="main">
      <div class="container">
        <div class="laptop">
          <div class="sections">
            <section class="section section-left">
              <div class="info">
                <GetCity />
                <WeatherSummary :weatherInfo="weatherInfo" />
              </div>
            </section>
            <section class="section section-right">
              <Highlights :weatherInfo="weatherInfo" />
            </section> 
          </div>
          <div class="sections">
            <section class="section-bottom">
              <Coordinates :weatherInfo="weatherInfo" />
            </section>
            <section class="section-bottom">
              <Humidity :weatherInfo="weatherInfo" />
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="sass" scoped>
@import './assets/styles/main.sass'
.page
  position: relative
  display: flex
  justify-content: center
  align-items: center
  min-height: 100vh
  padding: 20px 0
  background-color: #59585d

.laptop
  width: 100%
  padding: 20px
  background-color: #0e100f
  border-radius: 25px

.sections
  display: flex
  width: 100%

  @media (max-width: 767px)
    flex-direction: column

.section-left
  width: 30%
  padding-right: 10px

  @media (max-width: 767px)
    width: 100%
    padding-right: 0

.section-right
  width: 70%
  padding-left: 10px

  @media (max-width: 767px)
    width: 100%
    margin-top: 16px
    padding-left: 0

.info
  height: 100%
  padding: 16px
  background: url('./assets/img/gradient-1.jpg') no-repeat 50% 50%
  background-size: cover
  border-radius: 25px

.section-bottom
  width: 50%
  margin-top: 16px

  @media (max-width: 767px)
    width: 100%
</style>
