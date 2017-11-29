<template>
    <g
        class="cube"
        @click="clicked"
        :opacity="opacity">
      <polygon
        :points="ceilPoints"
        :fill="ceilColor"
        class="ceil"
        />
      <polygon
        :points="rightPoints"
        :fill="rightColor"
        class="right"
        />
      <polygon
        :points="leftPoints"
        :fill="leftColor"
        class="left"
        />
    </g>
</template>

<script>

export default {
  name: 'cube',
  props: {
      height: {
          type: Number,
          required: true,
      },
      width: {
          type: Number,
          required: true,
      },
      x: {
          type: Number,
          required: true,
      },
      y: {
          type: Number,
          required: true,
      },
      toggled: {
          type: Boolean,
          required: false,
          default: false,
      }
  },
  computed: {
      ceilPoints: function() {
        return `${this.width/2 + this.x}, ${this.y}
            ${this.width + this.x}, ${this.height/4 + this.y}
            ${this.width/2 + this.x}, ${this.height/2 + this.y}
            ${this.x}, ${this.height/4 + this.y}`;
      },
      rightPoints: function() {
          return `${this.x}, ${this.height/4 + this.y}
            ${this.width/2 + this.x}, ${this.height/2 + this.y}
            ${this.width/2 + this.x}, ${this.height + this.y}
            ${this.x}, ${this.height*0.75 + this.y}`;
      },
      leftPoints: function() {
          return `${this.width/2 + this.x}, ${this.height/2 + this.y}
            ${this.width/2 + this.x}, ${this.height + this.y}
            ${this.width + this.x}, ${this.height*0.75 + this.y}
            ${this.width + this.x}, ${this.height/4 + this.y}`;
      },
      opacity: function() {
          return this.toggled ? Math.random() : this.alpha;
      }
  },
  data () {
    return {
      ceilColor: "#339999",
      leftColor: "#226666",
      rightColor: "#55FFFF",
      alpha: Math.random()
    }
  },
  mounted: function() {
    this.updateAlpha();
  },
  methods: {
      updateAlpha() {
        this.alpha = this.alpha > 0 ? 0 : Math.random();
    },
    clicked: function(event) {
        this.updateAlpha();
    }
  }
}

</script>

<style>

g {
    transition: opacity var(--interval) steps(4, end);
}
/* 
g:hover {
    opacity: 0.5;
} */

</style>
