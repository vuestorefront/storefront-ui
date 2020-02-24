<template>
  <article>
    <div class="avatar">
      <img :src="avatarUrl" :alt="member.name" class="avatar-img" />
    </div>
    <div class="profile">
      <h3>{{ member.name }}</h3>
      <div class="info">
        <div class="role row">{{ member.role }}</div>
        <div v-if="member.work" class="job-title-container row">
          <div class="icon">
            <img
              src="https://res.cloudinary.com/mayashavin/image/upload/w_14,h_14,c_scale/v1567454220/StorefrontUI/briefcase-solid.jpg"
              alt="Job title"
            />
          </div>
          <div class="job-title">
            <span>{{ member.work.title }}</span>
            <span v-if="member.work.org">@</span>
            <a
              v-if="member.work.org"
              :href="member.work.orgUrl"
              target="_blank"
              rel="noopener noreferrer"
              >{{ member.work.org }}</a
            >
            <span v-if="member.work.subTitle">{{ member.work.subTitle }}</span>
          </div>
        </div>
        <div v-if="member.location" class="location row">
          <div class="icon">
            <img
              src="https://res.cloudinary.com/mayashavin/image/upload/w_14,h_14,c_scale/v1567454220/StorefrontUI/map-marked-alt-solid.jpg"
              alt="Location"
            />
          </div>
          <span>{{ member.location }}</span>
        </div>
        <div v-if="member.languages" class="languages row">
          <div class="icon">
            <img
              src="https://res.cloudinary.com/mayashavin/image/upload/w_14,h_14,c_scale/v1567454220/StorefrontUI/globe-solid.jpg"
              alt="Spoken languages"
            />
          </div>
          <ul>
            <li
              v-for="(language, index) in spokenLanguages"
              v-if="language"
              :key="index"
            >
              <span
                v-if="index > 0 && index < spokenLanguages.length"
                class="dot"
                >&middot;</span
              >{{ language }}
            </li>
          </ul>
        </div>
        <div v-if="member.links && member.links.length > 0" class="links row">
          <div class="icon">
            <img
              src="https://res.cloudinary.com/mayashavin/image/upload/w_14,h_14,c_scale/v1567454220/StorefrontUI/link-solid.jpg"
              alt="Other links"
            />
          </div>
          <ul class="links-options">
            <li v-for="(link, index) in member.links" :key="index">
              <span
                v-if="index > 0 && index < spokenLanguages.length"
                class="dot"
                >&middot;</span
              >
              <a :href="link" target="_blank">{{ minimizedLink(link) }}</a>
            </li>
          </ul>
        </div>
        <div v-if="hasSocialLinks" class="social-medias row">
          <a
            v-if="githubLink"
            :href="githubLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/mayashavin/image/upload/h_20,c_thumb,g_auto/v1565642096/433-github.jpg"
              alt="Github"
            />
          </a>
          <a
            v-if="twitterLink"
            :href="twitterLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/mayashavin/image/upload/w_20,c_scale/v1567327341/Twitter_Logo_new.jpg"
              alt="Twitter"
            />
          </a>
          <a
            v-if="linkedInLink"
            :href="linkedInLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
const languageNameFor = {
  en: "English",
  nl: "Nederlands",
  zh: "中文",
  vi: "Tiếng Việt",
  pl: "Polski",
  pt: "Português",
  ru: "Русский",
  jp: "日本語",
  fr: "Français",
  de: "Deutsch",
  el: "Ελληνικά",
  es: "Español",
  he: "עברית",
  hi: "हिंदी",
  it: "Italiano",
  fa: "فارسی",
  ko: "한국어",
  ro: "Română",
  uk: "Українська"
};

export default {
  name: "Member",
  props: {
    member: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    hasSocialLinks() {
      const socials = this.member.socials;
      return socials && (socials.twitter || socials.github || socials.linkedIn);
    },
    spokenLanguages() {
      return (this.member.languages || []).map(
        code => languageNameFor[code] || ""
      );
    },
    githubLink() {
      const socials = this.member.socials;
      return socials.github ? `https://github.com/${socials.github}/` : "";
    },
    twitterLink() {
      const socials = this.member.socials;
      return socials.twitter ? `https://twitter.com/${socials.twitter}` : "";
    },
    linkedInLink() {
      const socials = this.member.socials;
      return socials.linkedIn
        ? `https://www.linkedin.com/in/${socials.linkedIn}`
        : "";
    },
    avatarUrl() {
      const avatar = this.member.avatar;

      if (avatar) return avatar;

      if (this.member.socials) {
        const socials = this.member.socials;

        if (socials.github) {
          return `https://github.com/${socials.github}.png`;
        } else if (socials.twitter) {
          return `https://avatars.io/twitter/${socials.twitter}`;
        }
      }

      return "https://res.cloudinary.com/mayashavin/image/upload/w_80,h_80,c_scale,r_max,q_auto/v1567439978/Portrait_Placeholder.png";
    }
  },
  methods: {
    minimizedLink(link) {
      return link
        .replace(/^https?:\/\/(www\.)?/, "")
        .replace(/\/$/, "")
        .replace(/^mailto:/, "");
    }
  }
};
</script>
<style scoped>
article {
  display: flex;
  padding: 1.5rem 0;
  border-bottom: 1px dashed #ececec;
}

.profile {
  margin-left: 1rem;
  flex: 1;
}

.avatar-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

h3 {
  margin-bottom: 0.5rem;
  margin-top: 0;
}

.row {
  font-size: 1em;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.icon {
  margin-right: 0.5rem;
}

.role {
  text-transform: uppercase;
  font-size: 0.84em;
  font-weight: 600;
}

ul {
  list-style-type: none;
  padding-left: 0;
  font-weight: 600;
  margin: 0;
}

li {
  display: inline-block;
}

.dot {
  margin: 0 0.8rem;
}

.social-medias a {
  margin-right: 0.5rem;
}
</style>
