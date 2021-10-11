import {
  BlurEffects,
  PixelateEffects,
  ColorAdjustment,
  RESIZE_TYPES,
  Gravity,
} from "@cld-apis/utils";

export const placeholderTypes = {
  blur: [
    {
      effect: {
        name: BlurEffects.Default,
        value: "2000",
      },
    },
  ],
  pixelate: [
    {
      effect: {
        name: PixelateEffects.Default,
      },
    },
  ],
  vectorize: [
    {
      effect: {
        name: ColorAdjustment.Vectorize,
        value: "3:0.1",
      },
      format: "svg",
    },
  ],
  predominant: [
    {
      resize: { width: "iw_div_2", type: RESIZE_TYPES.PAD },
      aspectRatio: 1,
      background: "auto",
    },
    {
      resize: {
        type: RESIZE_TYPES.CROP,
        width: 1,
        height: 1,
      },
      gravity: Gravity.NorthEast,
    },
  ],
};
