<template>
  <section class="campaigns">
    <transition-group name="fadeIn" mode="out-in">
      <campaign-details
        v-if="activeCamp === 1"
        key="details"
      ></campaign-details>
      <campaign-record v-if="activeCamp === 2" key="record"></campaign-record>
      <campaign-preview
        v-if="activeCamp === 3"
        key="preview"
      ></campaign-preview>
      <campaign-publish
        v-if="activeCamp === 4"
        key="publish"
      ></campaign-publish>
      <campaign-share v-if="activeCamp === 5" key="share"></campaign-share>
    </transition-group>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import CampaignDetails from "~/components/campaign/CampaignDetails";
import CampaignRecord from "~/components/campaign/CampaignRecord";
import CampaignPreview from "~/components/campaign/CampaignPreview";
import CampaignPublish from "~/components/campaign/CampaignPublish";
import CampaignShare from "~/components/campaign/CampaignShare";

export default {
  name: "Campaign",
  data() {
    return {
      // activeCamp: 1
    };
  },
  methods: {
    ...mapGetters({ getactiveCamp: "campaign/getactiveCamp" }),
    activeCampFn() {
      if (this.activeCamp === 1) {
        return CampaignDetails;
      } else if (this.activeCamp === 2) {
        return CampaignRecord;
      } else if (this.activeCamp === 3) {
        return CampaignPreview;
      } else if (this.activeCamp === 4) {
        return CampaignPublish;
      } else if (this.activeCamp === 5) {
        return CampaignShare;
      } else {
        return CampaignDetails;
      }
    }
  },
  computed: {
    activeCamp() {
      return this.getactiveCamp();
    }
  },
  created() {
    // console.log(this.$store.state.campaign.activeCamp);
  },
  components: {
    CampaignDetails,
    CampaignRecord,
    CampaignPreview,
    CampaignPublish,
    CampaignShare
  }
};
</script>

<style lang="scss" scoped>
.fadeIn-move {
  transition: opacity 0.4s ease;
}
.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 0.4s ease;
}
.fadeIn-enter,
.fadeIn-leave-to {
  opacity: .1;
}
</style>
