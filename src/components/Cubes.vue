<template>
  <div id="cubes">
    <svg
      class="cubes"
      ref="svg"
      :viewBox="viewBox"
      xmlns="http://www.w3.org/2000/svg">

      <template v-for="x in xAmnt">
        <template v-for="y in yAmnt">
          <cube
            :height="cubeHeight"
            :width="cubeWidth"
            :x="getXCoord(x, y, cubeWidth, cubeHeight)"
            :y="getYCoord(x, y, cubeWidth, cubeHeight)"
            :toggled="isToggled(x, y)"
            :key="x + y * xAmnt"
            @mouseover.native="mouseOverCube"
            />
        </template>
      </template>

    </svg>
  </div>
</template>

<script>
import Cube from './Cube.vue';

export default {
  name: 'cubes',
  components: {
    Cube
  },
  computed: {
    viewBox: function() {
      return `
        ${this.cubeWidth * this.minXMult}
        ${this.minYMult * this.cubeHeight}
        ${this.widthMult * this.cubeWidth}
        ${this.cubeHeight * this.heightMult}`;
    },
  },
  methods: {
    getXCoord(x, y, width, height) {
      return (y % 2 === 1) ? (width/2 + x * width) : 0 + (x * width);
    },
    getYCoord(x, y, width, height) {
      return y * height * 0.75;
    },
    isToggled(x, y) {
      const dist = this.distanceToSweet(x, y);
      return dist < this.distToSweetSpot;
    },
    distanceToSweet(x, y) {
      const xDist = Math.abs(this.sweetSpot.x - x);
      const yDist = Math.abs(this.sweetSpot.y - y)
      return xDist + yDist;
    },
    updateDistToSweetSpot: function(fluctScale, origDist, stepSize) {
      this.rad += stepSize;
      const fluct = (Math.sin(this.rad) + 1) * fluctScale;
      this.distToSweetSpot = origDist + Math.round(fluct);
    },
    toViewBoxCoord(event) {
      return {
        x: (event.clientX / 1920) * 30, // (event.clientX / this.$refs.svg.width) * 30,
        y: (event.clientX / 1080) * 30, // event.clientY * this.$refs.svg.height * 30
      };
    },
    mouseOverCube(event) {
      if (!this.updateSweetSpot) {
        return;
      }
      const coord = this.toViewBoxCoord(event);
      this.sweetSpot = {
        x: Math.round(coord.x),
        y: Math.round(coord.y),
      }
    },
  },
  mounted: function() {
    if (!this.fluctuate) {
      return;
    }
    const fluctScale = 20;
    const origDist = this.distToSweetSpot;
    var stepSize = 0.06; //fluctScale / this.interval / 10;
    this.updateInterval = setInterval(this.updateDistToSweetSpot.bind(this, fluctScale, origDist, stepSize), this.interval);
  },
  beforeDestroy: function() {
    clearInterval(this.updateInterval);
  },
  data () {
    return {
      cubeWidth: 3,
      cubeHeight: 3,
      xAmnt: 33,
      yAmnt: 33,
      minXMult: 3,
      minYMult: 9, 
      widthMult: 21,
      heightMult: 6,
      distToSweetSpot: 2,
      fluctuate: true,
      updateInterval: undefined,
      interval: 42,
      rad: 0,
      updateSweetSpot: false, // TODO: Fix toViewBoxCoord
      sweetSpot: {
        x: 5,
        y: 23,
      },
    }
  }
}

</script>

<style scoped>

svg {
  --interval: 0.1s;
  margin: 0 auto;
  display: block;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
}

</style>