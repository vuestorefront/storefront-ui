import SfCimage from "./SfCimage.vue";
import { placeholderTypes } from "./helpers";
import { RESIZE_TYPES } from "@cld-apis/utils";

export default {
  title: "Getting Started/Integrations/Cloudinary/Image",
  component: SfCimage,
  decorators: [
    () => ({
      template: `<div>
        <div style="margin-bottom: 1rem; font-family: var(--font-family--primary)">
          <p>This is the image component with <a href="https://cloudinary.com">Cloudinary</a> image optimization support.</p>
          <p>To optimize the image on demand, see <a href="https://cloudinary-build-url.netlify.app/transformations/basic">Cloudinary url options docs</a> for the full API syntax.</p>
        </div>
        <story />
      </div>`,
    }),
  ],
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {},
    // end of code generated automatically
    docs: {
      description: {
        component: "The image component to use with Cloudinary.",
      },
      source: {
        code: `
          <template>
            <SfCimage
              :public-id="publicId"
              :cloud="cloud"
              :transformations="transformations"
              :placeholder="placeholder"
              :loading="loading"
              :progressive="progressive"
              :alt="alt"
            />
          </template>`,
      },
    },
  },
  argTypes: {
    publicId: {
      control: "text",
      table: {
        category: "Props",
      },
      description:
        "Path to image stored in Cloudinary (including folder), or image url",
    },
    cloud: {
      control: "object",
      table: {
        category: "Props",
      },
    },
    transformations: {
      control: "object",
      table: {
        category: "Props",
        type: {
          summary: "array",
        },
      },
      description: "Transformations of image.",
      defaultValue: [],
    },
    progressive: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description:
        "Whether to generate a JPEG using the progressive (interlaced) JPEG format.",
    },
    placeholder: {
      control: {
        type: "select",
        options: Object.keys(placeholderTypes),
      },
      table: {
        category: "Props",
      },
      description:
        "The placeholder image to use while the image is loading. Possible values: - `blur`, `pixelate`, `vectorize`, `predominant`.",
    },
    loading: {
      control: {
        type: "select",
        options: ["", "lazy", "eager"],
      },
      table: {
        category: "Attributes",
      },
      defaultValue: "lazy",
      description:
        "Set loading type for the component. Possible values: ``, `lazy` and `eager`.",
    },
    alt: {
      control: "text",
      table: {
        category: "Attributes",
      },
      description: "Alternative text in case image is not loaded.",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfCimage },
  props: Object.keys(argTypes),
  template: `
  <SfCimage
    :public-id="publicId"
    :cloud="cloud"
    :transformations="transformations"
    :placeholder="placeholder"
    :loading="loading"
    :progressive="progressive"
    :alt="alt"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  publicId: "sheep",
  cloud: {
    cloudName: "demo",
  },
  alt: "Example sheep",
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  ...Common.args,
  placeholder: "blur",
};

export const Progressive = Template.bind({});
Progressive.args = {
  ...Common.args,
  placeholder: "blur",
};

export const Resize = Template.bind({});
Resize.args = {
  ...Common.args,
  transformations: [
    {
      resize: {
        width: 500,
        height: 500,
        type: RESIZE_TYPES.CROP,
      },
    },
  ],
};

export const ResizeWithGravity = Template.bind({});
ResizeWithGravity.args = {
  ...Common.args,
  transformations: [
    {
      resize: {
        width: 500,
        height: 500,
        type: RESIZE_TYPES.CROP,
      },
      gravity: "auto",
    },
  ],
};

export const AsThumbnail = Template.bind({});
AsThumbnail.args = {
  ...Common.args,
  publicId: "puppy_cute",
  transformations: [
    {
      resize: {
        width: 300,
        height: 300,
        type: RESIZE_TYPES.THUMBNAIL,
      },
    },
  ],
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  ...Common.args,
  transformations: [
    {
      border: {
        width: 2,
        color: "black",
      },
    },
  ],
};

export const WithRoundCorner = Template.bind({});
WithRoundCorner.args = {
  ...Common.args,
  transformations: [
    {
      radius: 20,
    },
  ],
};

export const WithColor = Template.bind({});
WithColor.args = {
  ...Common.args,
  transformations: [
    {
      effect: {
        name: "colorize",
        value: 50,
      },
      color: "red",
    },
  ],
};

export const WithAccessibility = Template.bind({});
WithAccessibility.args = {
  ...Common.args,
  alt: "",
};
WithAccessibility.decorators = [
  () => ({
    template: `<div>
    <p>
      <span style="color:#b40e01">Red</span> highlight when no Alt text found.
    </p>
    <story />
  </div>`,
  }),
];
