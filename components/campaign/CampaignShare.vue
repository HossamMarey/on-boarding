<template>
  <section class="campaigns_sec">
    <b-row>
      <b-col cols="12">
        <div class="main_title">
          <h2 class="main_title-header">Campaign Details</h2>
          <p class="main_title-sub">
            start by adding what your campaing is about and how it started
          </p>
          <h3 class="main_title-success">
            Congratulations Your Campaign Is Live Now
          </h3>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6">
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
      </b-col>
      <b-col cols="6">
        <div class="share_link">
          <h4 class="share_link-title">link your campaign check it now</h4>
          <div class="share_link-box" @click="copyLink">
            <span :class="copied ? 'link green' : 'link '">
              {{ shareLink }}
            </span>
            <span class="icon">
              <img
                src="@/assets/images/icons/copy.svg"
                alt="icon"
                v-if="!copied"
              />
              <img
                src="@/assets/images/icons/check-green.svg"
                alt="icon"
                v-if="copied"
              />
            </span>
          </div>
        </div>
        <div class="social_link">
          <h4 class="social_link-title">Share or invite friends</h4>
          <div class="social_link-items">
            <social-share site="facebook" :link="shareLink"> </social-share>
            <social-share site="twitter" :link="shareLink"> </social-share>
            <social-share site="whatsapp" :link="shareLink"> </social-share>
          </div>
        </div>
        <div class="email_invite">
          <label for="emails-basic">invite friends by email</label>
          <b-form-tags
            :class="emailsErr ? 'input-error' : ''"
            input-id="emails-basic"
            v-model="emails"
            placeholder="Add Email"
          ></b-form-tags>
          <div class="error-text" v-if="emailsErr">
            {{ emailsErr }}
          </div>
        </div>
        <b-button block class="btn-camp btn-blue mt-5" @click="invite"
          >Invite</b-button
        >
      </b-col>
    </b-row>
  </section>
</template>

<script>
import SocialShare from "../SocialShare";
export default {
  name: "CampaignShare",
  data() {
    return {
      shareLink: "http://goo.gl/l6MS",
      emails: [],
      emailsErr: null,
      copied: false
    };
  },
  methods: {
    copyLink() {
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 1500);

      if (process.client) {
        var input = document.createElement("textarea");
        input.innerHTML = this.shareLink;
        document.body.appendChild(input);
        input.select();
        var result = document.execCommand("copy");
        document.body.removeChild(input);
        return result;
      }
    },
    invite() {
      // validate emails
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //
      let emailsValid = true;
      this.emails.forEach(email => {
        if (!re.test(String(email).toLowerCase())) {
          emailsValid = false;
        }
      });

      if (this.emails.length == 0) {
        this.emailsErr = "Please add emails";
      } else if (!emailsValid) {
        this.emailsErr = "Please add a valid emails";
      } else {
        this.emails = [];
        this.emailsErr = null;
        alert("Emails has been sent");
      }
    }
  },
  components: {
    SocialShare
  }
};
</script>

<style lang="scss">
.share_link-box {
  .link {
    transition: color 0.3s;
  }
  .link.green {
    color: #07815c;
  }
  .icon {
    img {
      height: 1rem;
      object-fit: contain;
    }
  }
}
</style>
