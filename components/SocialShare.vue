<template>
  <a href="#" class="social-link" @click.prevent="openWindow">
    <img
      alt="icon"
      :src="require(`../assets/images/icons/${shareImg}.svg`)"
      class="social-link-icon"
    />
  </a>
</template>
<script>
export default {
  name: "SocialShare",
  props: ["site", "link"],
  data() {
    return {
      shareLink: "",
      shareImg: "facebook"
    };
  },
  methods: {
    returnImgLink() {
      return `../assets/images/icons/${this.site}.svg`;
    },
    openWindow() {
      window.open(this.shareLink, "MyWindow", "width=600,height=300");
      return false;
    }
  },
  mounted() {
    this.shareImg = this.site;
    if (this.site === "facebook") {
      this.shareLink =
        "https://www.facebook.com/sharer/sharer.php?u=" + this.link;
    } else if (this.site === "twitter") {
      this.shareLink = "https://twitter.com/intent/tweet?text=" + this.link;
    } else if (this.site === "whatsapp") {
      this.shareLink = "https://api.whatsapp.com/send?text=" + this.link;
    } else {
      this.shareLink = this.link;
    }
  },
  created() {}
};
</script>
