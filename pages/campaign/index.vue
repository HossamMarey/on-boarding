<template>
  <div class="campaign" >
    <!-- /// campaign progress \\\  -->
    <div class="campaign_progress">
      <Progress />
    </div>
    <!-- /// campaign step \\\  -->

    <div class="campaign_container">
      <Campaign />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import Progress from "~/components/campaign/Progress";
import Campaign from "~/components/campaign/Campaign";

export default {
  components: { Progress, Campaign },
  head() {
    return {
      title: "SITE | Campaign Title "
    };
  },
  methods: {
    ...mapMutations({
      changeScreenWidth: "campaign/CHANGE_SCREEN_WIDTH"
    })
  },
  created() {
    if (process.client) {
      this.changeScreenWidth();
      window.addEventListener("resize", this.changeScreenWidth);
    }
  }
};
</script>
