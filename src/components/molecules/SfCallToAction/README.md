# SfCallToAction

<!-- Write about general purpose of the component. Include screenshot (to be replaced with a live example once we migrate to vuepress) -->

Banner with text and a call to action (as the component name self-explain) element.

## HTML Template

<!-- Just paste HTML template. It's much better description than any other code -->

````html
<section class="sf-call-to-action">
  <slot />
  <slot name="message">
    <h1 class="sf-call-to-action__message" v-if="message">
      {{ message }}
    </h1>
  </slot>
  <slot name="action">
    <div class="sf-call-to-action__button" v-if="buttonText">
      <sf-button>
        {{ buttonText }}
      </sf-button>
    </div>
  </slot>
</section>
````
## Props

<!--Write down props and their purpose -->

- `message` - Phrase in prominence, should be good for SEO,
placed on H1 tag.

- `buttonText` - Text placed on the CTA button.

## Slots

<!-- Describe slots and their purpose -->

- `default` - Banner text, should be a short description
or completion for title message.

- `message` - Places the banner title, should contain a
heading tag (H1 by default).

- `action` - Places the action element, contains
a button by default.
