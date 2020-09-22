<template>
  <section class="campaigns">
    <campaign-details v-if="activeCamp === 1"></campaign-details>
    <campaign-record v-if="activeCamp === 2"></campaign-record>
    <campaign-preview v-if="activeCamp === 3"></campaign-preview>
    <campaign-publish v-if="activeCamp === 4"></campaign-publish>
    <campaign-share v-if="activeCamp === 5"></campaign-share>
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
    ...mapGetters({ getactiveCamp: "campaign/getactiveCamp" })
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
