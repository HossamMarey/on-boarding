<template>
  <section
    class="progress"
    id="progress"
    :style="{ width: progressWidth + 'px' }"
  >
    <ul class="progress_steps">
      <li :class="stepClasses(1)">
        <span class="step-title"> Details </span>
        <span class="step-icon">
          <img src="../../assets/images/icons/check.svg" alt="" />
        </span>
      </li>

      <li :class="stepClasses(2)">
        <span class="step-title"> Record </span>
        <span class="step-icon">
          <img src="../../assets/images/icons/check.svg" alt="" />
        </span>
      </li>

      <li :class="stepClasses(3)">
        <span class="step-title"> Preview </span>
        <span class="step-icon">
          <img src="../../assets/images/icons/check.svg" alt="" />
        </span>
      </li>
      <li :class="stepClasses(4)">
        <span class="step-title"> Publish </span>
        <span class="step-icon">
          <img src="../../assets/images/icons/check.svg" alt="" />
        </span>
      </li>
      <li :class="stepClasses(5)">
        <span class="step-title"> Share </span>
        <span class="step-icon">
          <img src="../../assets/images/icons/check.svg" alt="" />
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Progress",
  screenWidth: 0,
  data() {
    return {};
  },
  methods: {
    ...mapGetters({
      getScreenWidth: "campaign/getScreenWidth",
      getactiveCamp: "campaign/getactiveCamp"
    }),
    stepClasses(num) {
      if (this.activeCamp >= num) {
        return "progress_steps-item active";
      } else {
        return "progress_steps-item";
      }
    }
  },
  mounted() {},
  computed: {
    progressWidth() {
      let screenWidth = this.getScreenWidth();
      if (screenWidth > 1080) {
        return (screenWidth - 730) / 2;
      } else {
        return screenWidth
      }
    },
    activeCamp() {
      return this.getactiveCamp() || 1;
    }
  }
};
</script>
