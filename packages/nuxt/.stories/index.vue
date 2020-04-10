<template>
  <div>
    <button
      id="stories-nav-toggle"
      class="btn btn-outline-primary btn-sm"
      @click="toggleStoriesNav"
    >
      {{ showStoriesNav ? "\u2196" : "\u2198" }}
    </button>
    <transition name="fade-stories-nav">
      <nav
        v-show="showStoriesNav"
        class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0"
      >
        <a
          class="navbar-brand col-sm-3 col-md-2 mr-0 stories-home"
          :href="storiesHome"
          >Stories</a
        >
        <ul class="navbar-nav px-3">
          <li class="nav-item text-nowrap">
            <a class="nav-link" href="/">Back to APP</a>
          </li>
        </ul>
      </nav>
    </transition>
    <div class="container-fluid">
      <div class="row">
        <transition name="fade-stories-nav">
          <nav v-show="showStoriesNav" :class="sidebarNav">
            <div class="sidebar-sticky">
              <b-card
                v-for="story in stories"
                :key="story.name"
                no-body
                class="mb-1 nav flex-column"
              >
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button
                    block
                    variant="info"
                    @click="toggleVisibility(story)"
                  >
                    <nuxt-link :to="story.path" style="color:white;">{{
                      story.name
                    }}</nuxt-link></b-button
                  >
                </b-card-header>
                <b-collapse
                  :id="storyId(story.name)"
                  :visible="story.visible"
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>
                      <b-nav
                        v-for="child in story.children"
                        :key="child.name"
                        vertical
                        class="story-child-nav-item"
                      >
                        <b-list-group>
                          <b-list-group-item
                            :active="childActive(child)"
                            @click="showChild(child)"
                          >
                            {{ cleanName(child.name) }}
                          </b-list-group-item>
                          <b-list-group-item
                            >Child 2 (add file to
                            {{ story.name }} dir</b-list-group-item
                          >
                          <b-list-group-item
                            >Child 3 (add file to
                            {{ story.name }} dir</b-list-group-item
                          >
                        </b-list-group>
                      </b-nav>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </nav>
        </transition>
        <main role="main" :class="mainCss">
          <h2>Story content goes here! Click items in the left sidebar...</h2>
          <nuxt-child></nuxt-child>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stories: [],
      storyCfg: {},
      storiesHome: "",
      showStoriesNav: true
    };
  },
  computed: {
    childActive() {
      return child => {
        const { fullPath } = this.$route;
        const childFullPath = this.nameToPath(child.name);
        return fullPath.toLowerCase() === childFullPath.toLowerCase();
      };
    },
    cleanName() {
      return name => (name ? name.split("-").slice(-1)[0] : "");
    },
    mainCss() {
      return this.showStoriesNav
        ? "col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
        : "col-md-12 ml-sm-auto col-lg-12 pt-3 px-4 main-top";
    },
    sidebarNav() {
      return this.showStoriesNav
        ? "col-md-2 d-md-block bg-light sidebar"
        : "col-md0";
    },
    storyId() {
      return name => `accordion-${name}`;
    }
  },
  mounted() {
    Object.assign(this.storyCfg, this.$nuxtStories({}).options);
    const { storiesAnchor } = this.storyCfg;
    this.storiesHome = `/${storiesAnchor}`;
    this.buildStories({ routeRoot: storiesAnchor });
  },
  methods: {
    buildStories({ routeRoot }) {
      const storyRoutes = this.$router.options.routes.find(
        ({ name }) => name === routeRoot
      );
      const currentRoute = this.$route.name;
      if (storyRoutes && storyRoutes.children && storyRoutes.children.length) {
        this.stories = storyRoutes.children.map(child => {
          if (!child.path.startsWith(`/${routeRoot}/`)) {
            child.path = `/${routeRoot}/${child.path}`;
          }
          child.name = this.cleanName(child.name);
          child.visible = false;
          if (child.children && child.children.length) {
            child.children.forEach(c => {
              c.active = false;
              if (currentRoute.includes(c.name)) {
                c.active = true;
              }
            });
          }
          return child;
        });
      }
    },
    nameToPath(name) {
      return `${this.storiesHome}/${name
        .split("-")
        .slice(1)
        .join("/")}`;
    },
    showChild(child) {
      if (this.childActive(child)) return;
      const toPath = this.nameToPath(child.name);
      this.$router.push(toPath);
    },
    toggleStoriesNav() {
      this.showStoriesNav = !this.showStoriesNav;
    },
    toggleVisibility(story) {
      this.stories.forEach(s => {
        if (s.name !== story.name) {
          s.visible = false;
        }
      });
      story.visible = !story.visible;
    }
  }
};
</script>

<style>
.main-top {
  margin-top: 20px;
}
.stories-home {
  padding-left: 40px;
}

.story-child-nav-item {
  cursor: pointer;
}

#stories-nav-toggle {
  position: fixed;
  background-color: white;
  color: #007bff;
  z-index: 1022;
  margin-top: 5px;
}
#stories-nav-toggle:hover {
  background-color: #007bff;
  color: white;
}

.fade-stories-nav-enter-active,
.fade-stories-nav-leave-active {
  transition: all 0.25s ease-in-out;
}
.fade-stories-nav-enter,
.fade-stories-nav-leave-to {
  opacity: 0;
}

#stories-nav-toggle {
  transition: all 0.5s ease-in;
}
</style>
