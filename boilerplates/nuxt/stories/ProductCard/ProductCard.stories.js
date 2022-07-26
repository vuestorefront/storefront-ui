import ProductCard from '../../components/ProductCard/ProductCard.vue';
import ProductCardWithButton from '../../components/ProductCard/ProductCardWithButton.vue';
import productCardImg from '../../assets/css/images/product-280x280.png';

export default {
  title: 'SFUI Components/ProductCard',
  component: ProductCard,
  parameters: {
    docs: {
      description: {
        component:
          'The product card component. [link to component docs on the page]'
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      defaultValue: '',
      table: {
        category: 'Props'
      },
      description:
        'Label for product card'
    },
    image: {
      control: 'text',
      defaultValue: '',
      table: {
        category: 'Props'
      },
      description:
        'Image of product'
    },
    alt: {
      control: 'text',
      defaultValue: '',
      table: {
        category: 'Props'
      },
      description:
        'Alt text for product image'
    },
    link: {
      control: 'text',
      defaultValue: '/',
      table: {
        category: 'Props'
      },
      description:
        'Link for a tag to product site'
    },
    badge: {
      control: 'text',
      defaultValue: '',
      table: {
        category: 'Props'
      },
      description:
        'Text visible on a top badge'
    },
    price: {
      control: 'text',
      defaultValue: '',
      table: {
        category: 'Props'
      },
      description:
        'Product price'
    },
    oldPrice: {
      control: 'text',
      defaultValue: '',
      table: {
        category: 'Props'
      },
      description:
        'Old product price'
    },
    description: {
      control: 'text',
      defaultValue: '',
      table: {
        category: 'Props'
      },
      description:
        'Product description'
    },
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'base', 'lg'],
      defaultValue: 'base',
      table: {
        category: 'Props',
        defaultValue: {
          summary: 'base'
        }
      },
      description: 'Size of product card'
    },
    outOfStock: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props'
      },
      description:
        'Is product in stock'
    },
    ratingValue: {
      control: 'number',
      defaultValue: '',
      table: {
        category: 'Props'
      },
      description:
        'Rating value for product'
    },
    maxRatingValue: {
      control: 'number',
      defaultValue: 5,
      table: {
        category: 'Props'
      },
      description:
        'Maximum number of rating stars'
    },
    reviews: {
      control: 'number',
      defaultValue: 0,
      table: {
        category: 'Props'
      },
      description:
        'Number of reviews for product'
    },
    inCart: {
      control: 'number',
      defaultValue: '',
      table: {
        category: 'Props'
      },
      description:
        'Shows number of product added to cart'
    },
    default: {
      table: {
        category: 'Slots',
        type: {
          summary: null
        }
      },
      description: 'Use this slot to place content inside the button'
    }
  },
  args: {
    image: productCardImg
  }
};

const Template = (args, { argTypes }) => ({
  components: { ProductCard },
  props: Object.keys(argTypes),
  template: `
      <ProductCard
        :image="image"
        :alt="alt"
        :label="label"
        :price="price"
        :oldPrice="oldPrice"
        :size="size"
        :link="link"
        :badge="badge"
        :outOfStock="outOfStock"
        :inCart="inCart"
        :description="description"
        :ratingValue="ratingValue"
        :maxRatingValue="maxRatingValue"
        :reviews="reviews"
    />
    `
});

export const Base = Template.bind({});

Base.args = {
  label: 'The standard chunk of Lorem Ipsum',
  price: '$2,345.99',
  oldPrice: '$3,132.99',
  alt: 'Product image',
  badge: '30%',
  inCart: 0,
  outOfStock: false,
  ratingValue: 4,
  maxRatingValue: 5
};

const PCWithButton = (args, { argTypes }) => ({
  components: { ProductCardWithButton },
  props: Object.keys(argTypes),
  template: `
      <ProductCardWithButton
        :image="image"
        :alt="alt"
        :label="label"
        :price="price"
        :oldPrice="oldPrice"
        :size="size"
        :link="link"
        :badge="badge"
        :outOfStock="outOfStock"
        :inCart="inCart"
        :description="description"
        :ratingValue="ratingValue"
        :maxRatingValue="maxRatingValue"
        :reviews="reviews"
      />
    `
});

export const WithButton = PCWithButton.bind({});

WithButton.args = {
  ...Base.args

};
