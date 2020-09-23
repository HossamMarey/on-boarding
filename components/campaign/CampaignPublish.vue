<template>
  <section class="campaigns_sec campaigns_publish">
    <b-row>
      <b-col cols="12">
        <div class="main_title">
          <h2 class="main_title-header">Preview video</h2>
          <p class="main_title-sub">
            looking good
          </p>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="6" class="mx-auto">
        <div class="publish_card">
          <div class="publish_card-head">
            <a href="#"> #HeadOuttaSand </a>
            <div class="d-flex align-items-center mt-2">
              <div class="sub-logo mr-2">
                <img src="~/assets/images/main/subcard-logo.png" alt="logo" />
              </div>
              West London Charity
            </div>
          </div>
          <div class="publish_card-img">
            <img src="~/assets/images/main/publish-screen.png" alt="record" />
          </div>
          <div class="publish_card-footer">
            <p>
              <a href="#"> #HeadOuttaSand </a>
              Yourself off its pleasant ecstatic now law. Ye their mirth seems
              of songs
            </p>
          </div>
        </div>

        <b-button block class="btn-camp btn-green" @click="toNextLevel(5)"
          >Next</b-button
        >
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "CampaignPublish",

  methods: {
    ...mapMutations({ toNextLevel: "campaign/TO_NEXT" })
  }
};
</script>
