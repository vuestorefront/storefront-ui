import Theme from 'vitepress/theme';
import Generate from '../components/Generate.vue'
import ToCGenerate from '../components/ToCGenerate.vue'


export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('Generate', Generate),
    app.component('ToCGenerate', ToCGenerate)
  },
};
