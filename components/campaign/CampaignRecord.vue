<template>
  <section class="campaigns_sec">
    <b-row>
      <b-col cols="12">
        <div class="main_title">
          <h2 class="main_title-header">Record Or Upload</h2>
          <p class="main_title-sub">
            We will add tips to help you tell your story
          </p>
        </div>
      </b-col>
      <b-col cols="12" md="6">
        <div class="record-img">
          <img
            src="~/assets/images/main/record-screen.png"
            alt="record screen"
          />
        </div>
      </b-col>
      <b-col cols="12" md="6">
        <b-card title="#HeadOuttaSand" class="rounded">
          <b-card-sub-title class="mb-2">
            <div class="d-flex align-items-center">
              <div class="sub-logo mr-2">
                <img src="~/assets/images/main/subcard-logo.png" alt="logo" />
              </div>
              West London Charity
            </div>
          </b-card-sub-title>
          <b-card-text>
            <a href="#"> #HeadOuttaSand </a>
            Yourself off its pleasant ecstatic now law. Ye their mirth seems of
            songs
          </b-card-text>
        </b-card>

        <b-button block class="btn-camp btn-red" @click="toNextLevel(3)"
          >Next</b-button>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "CampaignRecord",
  methods: {
    ...mapMutations({ toNextLevel: "campaign/TO_NEXT" })
  }
};
</script>
