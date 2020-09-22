<template>
  <section class="campaigns_sec campaign-details">
    <b-row>
      <b-col cols="12">
        <div class="main_title">
          <h2 class="main_title-header">Campaign Details</h2>
          <p class="main_title-sub">
            start by adding what your campaing is about and how it started
          </p>
        </div>
      </b-col>

      <b-col cols="12">
        <b-form @submit="onSubmit" class="row">
          <b-col cols="6">
            <b-form-group label="Campaign Name" class="camp-name">
              <b-form-input
                v-model="form.name"
                placeholder="Campaign Name"
                class=""
              ></b-form-input>
            </b-form-group>

            <b-form-group class="camp-logo">
              <legend>
                Campaign Logo
                <span class="optional"> ( Optional ) </span>
              </legend>
              <b-form-file
                v-model="file1"
                placeholder="Drop files to upload or"
                class=" "
              ></b-form-file>
            </b-form-group>

            <b-form-group  class="camp-photo">
              <legend>
                Campaign Logo
                <span class="optional"> ( Optional ) </span>
              </legend>
              <b-form-file
                v-model="file2"
                placeholder="Drop files to upload or"
              ></b-form-file>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group label="About campaign" class="camp-about">
              <b-form-textarea
                placeholder="About campaign"
                rows="10"
              ></b-form-textarea>
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-button block class="btn-camp btn-red" type="submit"
              >Next</b-button
            >
          </b-col>
        </b-form>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "CampaignDetails",
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true,
      file1: null,
      file2: null
    };
  },
  methods: {
    ...mapMutations({ toNextLevel: "campaign/TO_NEXT" }),
    onSubmit() {
      //validation

      //done
      this.toNextLevel(2);
    }
  }
};
</script>
