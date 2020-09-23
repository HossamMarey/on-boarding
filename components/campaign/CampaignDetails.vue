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
        <b-form @submit.prevent="onSubmit" class="row">
          <b-col cols="12" md="6">
            <b-form-group label="Campaign Name" class="camp-name">
              <b-form-input
                :class="nameError ? 'input-error' : ''"
                placeholder="Campaign Name"
                class=""
                v-model.trim="name"
                @blur="setName($v.name.$model)"
              ></b-form-input>

              <div class="error-text" v-if="nameError">
                {{ nameError }}
              </div>
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

            <b-form-group class="camp-photo">
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
          <b-col cols="12" md="6">
            <b-form-group label="About campaign" class="camp-about">
              <b-form-textarea
                :class="aboutError ? 'input-error' : ''"
                placeholder="About campaign"
                rows="10"
                v-model.trim.lazy="about"
                @blur="setAbout($v.about.$model)"
              ></b-form-textarea>
              <div class="error-text" v-if="aboutError">
                {{ aboutError }}
              </div>
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
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "CampaignDetails",
  data() {
    return {
      name: "",
      about: "",
      file1: null,
      file2: null,
      nameError: null,
      aboutError: null
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    about: {
      required,
      minLength: minLength(4)
    }
  },

  methods: {
    ...mapMutations({ toNextLevel: "campaign/TO_NEXT" }),
    setName(val) {
      if (process.client) {
        this.name = val;
        this.$v.name.$touch();

        if (!this.$v.name.required && this.$v.name.$dirty) {
          this.nameError = "Field is required";
        } else if (!this.$v.name.minLength && this.$v.name.$dirty) {
          this.nameError = "Name must have at least 4 letters.";
        } else {
          this.nameError = null;
        }
      }
    },
    setAbout(val) {
      if (process.client) {
        this.about = val;
        this.$v.about.$touch();

        if (!this.$v.about.required && this.$v.about.$dirty) {
          this.aboutError = "Field is required";
        } else if (!this.$v.about.minLength && this.$v.about.$dirty) {
          this.aboutError = "About must have at least 4 letters.";
        } else {
          this.aboutError = null;
        }
      }
    },
    onSubmit() {
      //validation pass
      if (this.$v.name.$invalid) {
        this.nameError = "Field is required";
      } else if (this.$v.about.$invalid) {
        this.aboutError = "Field is required";
      } else {
        this.toNextLevel(2);
      }
    }
  }
};
</script>
