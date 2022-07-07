import SearchBase from '../../components/Search/SearchBase.vue';
import SearchWithoutButton from '../../components/Search/SearchWithoutButton.vue';
import SearchWithoutButtonWithRightIcon from '../../components/Search/SearchWithoutButtonWithRightIcon.vue';
import SearchWithoutButtonWithAutocomplete from '../../components/Search/SearchWithoutButtonWithAutocomplete.vue';
import ButtonPrimaryIcons from '../../components/Button/Primary/Icon/ButtonPrimaryIcons.vue';
import SearchBaseWithAutocomplete from '../../components/Search/SearchBaseWithAutocomplete.vue';

import { focus } from '../../utils/focus-directive.js';

const searchingHints = [
  {
    result: 'apple',
    description: ''
  },
  {
    result: 'apple macbook',
    description: 'computer'
  },
  {
    result: 'apple macbook pro',
    description: 'computer'
  },
  {
    result: 'apple macbook air'
  },
  {
    result: 'iphone',
    description: 'phone'
  },
  {
    result: 'iphone 12',
    description: 'phone'
  }
];

export default {
  title: 'SFUI Components/Search',
  component: SearchBase,
  parameters: {
    docs: {
      description: {
        component:
          'The search component. [link to component docs on the page]'
      }
    }
  },
  argTypes: {
    value: {
      control: 'text',
      defaultValue: '',
      table: {
        category: 'Props',
        defaultValue: {
          summary: ''
        }
      },
      description: 'Input value'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props'
      },
      description:
        'Native input disabled attribute'
    },
    searchResults: {
      control: 'array',
      defaultValue: [],
      table: {
        category: 'Props',
        defaultValue: {
          summary: []
        }
      },
      description:
        'Search results array'
    },
    placeholder: {
      control: 'text',
      defaultValue: '',
      table: {
        category: 'Props',
        defaultValue: {
          summary: ''
        }
      },
      description: 'Placeholder value'
    },
    loading: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props'
      },
      description:
        'Loading autocomplete hints state'
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { SearchBase },
  props: Object.keys(argTypes),
  template: `
      <SearchBase 
        :value="value"
        :disabled="disabled"
        :placeholder="placeholder"
      />
    `
});

export const Base = Template.bind({});

const WithIconButton = (args, { argTypes }) => ({
  components: { SearchBase, ButtonPrimaryIcons },
  props: Object.keys(argTypes),
  template: `
    <SearchBase
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
    >
      <ButtonPrimaryIcons
        aria-label="search"
        class="px-2 rounded-l-none !shadow-none hover:!shadow-none fill-white disabled:fill-gray-500"
        @click="$emit('click', inputValue)"
        :disabled="disabled"        
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.2998 18.5C7.09977 18.5 3.99977 16.6 2.69977 13.5C1.79977 11.5 1.79977 9.20001 2.59977 7.20001C3.39977 5.10001 4.99977 3.50001 6.99977 2.70001C8.99977 1.80001 11.2998 1.80001 13.2998 2.60001C15.3998 3.40001 16.9998 5.00001 17.7998 7.00001C19.5998 11.2 17.5998 16 13.3998 17.8C12.3998 18.3 11.2998 18.5 10.2998 18.5ZM10.2998 4.00001C9.39977 4.00001 8.59977 4.20001 7.79977 4.50001C4.59977 5.80001 3.09977 9.50001 4.49977 12.7C5.79977 15.9 9.49977 17.4 12.6998 16C15.8998 14.7 17.3998 11 15.9998 7.80001C15.2998 6.30001 14.0998 5.10001 12.5998 4.40001C11.7998 4.20001 10.9998 4.00001 10.2998 4.00001Z" />
          <path d="M21.0004 21.9999C20.7004 21.9999 20.5004 21.8999 20.3004 21.6999L14.7004 16.0999C14.3004 15.6999 14.3004 15.0999 14.7004 14.6999C15.1004 14.2999 15.7004 14.2999 16.1004 14.6999L21.7004 20.2999C22.1004 20.6999 22.1004 21.2999 21.7004 21.6999C21.5004 21.8999 21.3004 21.9999 21.0004 21.9999Z" />
          <path d="M10.2998 18.5C7.09977 18.5 3.99977 16.6 2.69977 13.5C1.79977 11.5 1.79977 9.20001 2.59977 7.20001C3.39977 5.10001 4.99977 3.50001 6.99977 2.70001C8.99977 1.80001 11.2998 1.80001 13.2998 2.60001C15.3998 3.40001 16.9998 5.00001 17.7998 7.00001C19.5998 11.2 17.5998 16 13.3998 17.8C12.3998 18.3 11.2998 18.5 10.2998 18.5ZM10.2998 4.00001C9.39977 4.00001 8.59977 4.20001 7.79977 4.50001C4.59977 5.80001 3.09977 9.50001 4.49977 12.7C5.79977 15.9 9.49977 17.4 12.6998 16C15.8998 14.7 17.3998 11 15.9998 7.80001C15.2998 6.30001 14.0998 5.10001 12.5998 4.40001C11.7998 4.20001 10.9998 4.00001 10.2998 4.00001Z" />
          <path d="M21.0004 21.9999C20.7004 21.9999 20.5004 21.8999 20.3004 21.6999L14.7004 16.0999C14.3004 15.6999 14.3004 15.0999 14.7004 14.6999C15.1004 14.2999 15.7004 14.2999 16.1004 14.6999L21.7004 20.2999C22.1004 20.6999 22.1004 21.2999 21.7004 21.6999C21.5004 21.8999 21.3004 21.9999 21.0004 21.9999Z" />
        </svg>
      </ButtonPrimaryIcons>
      </SearchBase>
    `
});

export const BaseWithIcon = WithIconButton.bind({});

const BaseAutocomplete = (args, { argTypes }) => ({
  components: { SearchBaseWithAutocomplete },
  props: Object.keys(argTypes),
  data() {
    return {
      inputValue: this.value,
      searchHints: this.searchResults || searchingHints,
      loadState: this.loading,
      found: []
    };
  },
  methods: {
    searchTerms(term) {
      if (term === '') {
        this.searchHints = searchingHints;
        return;
      }
      const text = term.toLowerCase();
      const reg = new RegExp(text);
      this.searchHints = searchingHints.filter(function (val) {
        val.result.trim().toLowerCase();
        if (val.result.match(reg)) {
          return val;
        }
      });
    },
    handleValue(val) {
      this.inputValue = val.target.value;
      this.loadState = true;
      setTimeout(
        () => {
          this.searchTerms(this.inputValue);
          this.loadState = false;
        }, 3000
      );
    },
    clearValue() {
      this.inputValue = '';
    },
    setValue(term) {
      this.inputValue = term;
    }
  },
  template: `
    <SearchBaseWithAutocomplete 
      :value="inputValue"
      :disabled="disabled"
      :searchResults="searchHints"
      :placeholder="placeholder"
      :loading="loadState"
      @input.native="handleValue"
      @click:cancel="clearValue"
      @input="setValue"
    >
      <template #apple>
        {{''}}
      </template>
      <template #apple-macbook-pro>
        <svg class="w-6 h-6 mr-2 fill-gray-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.7002 22C16.5956 22 15.7002 21.1046 15.7002 20C15.7002 18.8954 16.5956 18 17.7002 18C18.8048 18 19.7002 18.8954 19.7002 20C19.7002 21.1046 18.8048 22 17.7002 22Z"/>
          <path d="M9.7002 22C8.59563 22 7.7002 21.1046 7.7002 20C7.7002 18.8954 8.59563 18 9.7002 18C10.8048 18 11.7002 18.8954 11.7002 20C11.7002 21.1046 10.8048 22 9.7002 22Z"/>
          <path d="M18.2943 7.70568C18.6841 7.31594 18.6841 6.68406 18.2943 6.29432C17.9051 5.90511 17.2743 5.9045 16.8843 6.29295L15 8.17V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V8.17L11.12 6.29001C10.7283 5.89829 10.0928 5.89941 9.70251 6.29251C9.31412 6.68365 9.31524 7.31524 9.705 7.705L13.2929 11.2929C13.6834 11.6834 14.3166 11.6834 14.7071 11.2929L18.2943 7.70568Z"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C1 2.44772 1.44772 2 2 2H4.30673C5.47087 2 6.48094 2.80352 6.74271 3.93785L9.20607 14.6124C9.25843 14.8393 9.46044 15 9.69327 15H17.8288C18.0583 15 18.2583 14.8439 18.3139 14.6213L20.5299 5.75746C20.6638 5.22167 21.2067 4.89591 21.7425 5.02986C22.2783 5.16381 22.6041 5.70674 22.4701 6.24254L20.2542 15.1063C19.976 16.2193 18.976 17 17.8288 17H9.69327C8.52913 17 7.51906 16.1965 7.25729 15.0622L4.79393 4.38757C4.74157 4.1607 4.53956 4 4.30673 4H2C1.44772 4 1 3.55228 1 3Z"/>
        </svg>
      </template>
      <template #default-search>
        <button
          class="flex items-center outline-violet"
        >
          <svg
            class="w-6 h-6 mr-2 fill-gray-500"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" />
          </svg>
          <span class="flex flex-col items-start">
            <span>Default</span>
            <span class="text-sm text-gray-500">result</span>
          </span>
        </button>
      </template>
    </SearchBaseWithAutocomplete>
  `
});

export const BaseWithAutocomplete = BaseAutocomplete.bind({});

BaseWithAutocomplete.args = {
  searchHints: searchingHints
}

const NoButton = (args, { argTypes }) => ({
  components: { SearchWithoutButton },
  props: Object.keys(argTypes),
  template: `
    <SearchWithoutButton 
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
    />
    `
});

export const WithoutButton = NoButton.bind({});

const NoButtonWithRightSearchIcon = (args, { argTypes }) => ({
  components: { SearchWithoutButtonWithRightIcon },
  props: Object.keys(argTypes),
  data() {
    return {
      inputValue: this.value
    };
  },
  directives: {
    focus
  },
  template: `
      <SearchWithoutButtonWithRightIcon
        :value="value"
        :disabled="disabled"
        :placeholder="placeholder"
      />
    `
});

export const WithoutButtonAndWithRightIcon = NoButtonWithRightSearchIcon.bind({});

const WithoutButtonAutocomplete = (args, { argTypes }) => ({
  components: { SearchWithoutButtonWithAutocomplete },
  props: Object.keys(argTypes),
  data() {
    return {
      inputValue: this.value,
      searchHints: this.searchResults || searchingHints,
      loadState: this.loading,
      found: []
    };
  },
  methods: {
    searchTerms(term) {
      if (term === '') {
        this.searchHints = searchingHints;
        return;
      }
      const text = term.toLowerCase();
      const reg = new RegExp(text);
      this.searchHints = searchingHints.filter(function (val) {
        val.result.trim().toLowerCase();
        if (val.result.match(reg)) {
          return val;
        }
      });
    },
    handleValue(val) {
      this.inputValue = val.target.value;
      this.loadState = true;
      setTimeout(
        () => {
          this.searchTerms(this.inputValue);
          this.loadState = false;
        }, 3000
      );
    },
    clearValue() {
      this.inputValue = '';
    },
    setValue(term) {
      this.inputValue = term;
    }
  },
  template: `
      <SearchWithoutButtonWithAutocomplete 
        :value="inputValue"
      :disabled="disabled"
      :searchResults="searchHints"
      :placeholder="placeholder"
      :loading="loadState"
      @input.native="handleValue"
      @click:cancel="clearValue"
      @input="setValue"
      >
        <template #apple>
          {{''}}
        </template>
        <template #apple-macbook-pro>
          <svg class="w-6 h-6 mr-2 fill-gray-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.7002 22C16.5956 22 15.7002 21.1046 15.7002 20C15.7002 18.8954 16.5956 18 17.7002 18C18.8048 18 19.7002 18.8954 19.7002 20C19.7002 21.1046 18.8048 22 17.7002 22Z"/>
            <path d="M9.7002 22C8.59563 22 7.7002 21.1046 7.7002 20C7.7002 18.8954 8.59563 18 9.7002 18C10.8048 18 11.7002 18.8954 11.7002 20C11.7002 21.1046 10.8048 22 9.7002 22Z"/>
            <path d="M18.2943 7.70568C18.6841 7.31594 18.6841 6.68406 18.2943 6.29432C17.9051 5.90511 17.2743 5.9045 16.8843 6.29295L15 8.17V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V8.17L11.12 6.29001C10.7283 5.89829 10.0928 5.89941 9.70251 6.29251C9.31412 6.68365 9.31524 7.31524 9.705 7.705L13.2929 11.2929C13.6834 11.6834 14.3166 11.6834 14.7071 11.2929L18.2943 7.70568Z"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C1 2.44772 1.44772 2 2 2H4.30673C5.47087 2 6.48094 2.80352 6.74271 3.93785L9.20607 14.6124C9.25843 14.8393 9.46044 15 9.69327 15H17.8288C18.0583 15 18.2583 14.8439 18.3139 14.6213L20.5299 5.75746C20.6638 5.22167 21.2067 4.89591 21.7425 5.02986C22.2783 5.16381 22.6041 5.70674 22.4701 6.24254L20.2542 15.1063C19.976 16.2193 18.976 17 17.8288 17H9.69327C8.52913 17 7.51906 16.1965 7.25729 15.0622L4.79393 4.38757C4.74157 4.1607 4.53956 4 4.30673 4H2C1.44772 4 1 3.55228 1 3Z"/>
          </svg>
        </template>
      </SearchWithoutButtonWithAutocomplete>
    `
});

export const WithoutButtonWithAutocomplete = WithoutButtonAutocomplete.bind({});

WithoutButtonWithAutocomplete.args = {
  searchResults: searchingHints
};
