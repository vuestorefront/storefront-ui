# Footer component

The Footer component is an inseparable element of every page. It can contains list of useful links, contact details and links to other pages connected to the website like links to social media.

The Footer is not made of single component but a couple of them to let you compose it from smaller pieces. This one is an entry point for full implementation.

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=13970%3A22832)

<!-- react -->
###  Props:
| Prop name   | Type      | Default value | Possible values                        |
| ----------- |-----------| ------------- | -------------------------------------- |
| className | string    |             |                                        |                                        |
| children | ReactNode |             |                                        |                                        |
<!-- end react -->

## Subcomponents
<!-- react -->
* FooterBottomLinks
* FooterSection
<!-- end react -->
* FooterColumn
* FooterLabel
* FooterSocialMedia

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfFooter/VsfFooter.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfFooter/VsfFooter.tsx
<!-- end react -->


## Full implementation
<!-- react -->
```tsx
<VsfFooter>
  <VsfFooterSection type={VsfFooterSectionType.top}>
    <VsfFooterColumn>
      <VsfFooterLabel type={VsfFooterLabelType.category}>Category 1</VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 1</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 2</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 3</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 4</a></VsfFooterLabel>
    </VsfFooterColumn>
    <VsfFooterColumn>
      <VsfFooterLabel type={VsfFooterLabelType.category}>Category 2</VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 1</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 2</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 3</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 4</a></VsfFooterLabel>
    </VsfFooterColumn>
    <VsfFooterColumn>
      <VsfFooterLabel type={VsfFooterLabelType.category}>Category 3</VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 1</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 2</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 3</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 4</a></VsfFooterLabel>
    </VsfFooterColumn>
    <VsfFooterColumn>
      <VsfFooterLabel type={VsfFooterLabelType.category}>Category 4</VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 1</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 2</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 3</a></VsfFooterLabel>
      <VsfFooterLabel><a>subcategory link 4</a></VsfFooterLabel>
    </VsfFooterColumn>
  </VsfFooterSection>
  <VsfFooterSection type={VsfFooterSectionType.middle}>
    <VsfFooterColumn type={VsfFooterColumnType.middle}>
      <VsfIconHelp size={VsfIconSizeEnum.lg} />
      <VsfFooterLabel type={VsfFooterLabelType.contact}>
        label 1
      </VsfFooterLabel>
      <VsfFooterLabel type={VsfFooterLabelType.contactDescription}>
        description
      </VsfFooterLabel>
    </VsfFooterColumn>
    <VsfFooterColumn type={VsfFooterColumnType.middle}>
      <VsfIconChat size={VsfIconSizeEnum.lg} />
      <VsfFooterLabel type={VsfFooterLabelType.contact}>
        label 2
      </VsfFooterLabel>
      <VsfFooterLabel type={VsfFooterLabelType.contactDescription}>
        description
      </VsfFooterLabel>
    </VsfFooterColumn>
    <VsfFooterColumn type={VsfFooterColumnType.middle}>
      <VsfIconPhone size={VsfIconSizeEnum.lg} />
      <VsfFooterLabel type={VsfFooterLabelType.contact}>
        label 3
      </VsfFooterLabel>
      <VsfFooterLabel type={VsfFooterLabelType.contactDescription}>
        description
      </VsfFooterLabel>
    </VsfFooterColumn>
  </VsfFooterSection>
  <VsfFooterSection type={VsfFooterSectionType.bottom}>
    <VsfFooterSocialMedia>
      <VsfFooterLabel type={VsfFooterLabelType.socialMedia}>
        <a><VsfIconFacebook /></a>
      </VsfFooterLabel>
      <VsfFooterLabel type={VsfFooterLabelType.socialMedia}>
        <a><VsfIconTwitter /></a>
      </VsfFooterLabel>
      <VsfFooterLabel type={VsfFooterLabelType.socialMedia}>
        <a><VsfIconInstagram /></a>
      </VsfFooterLabel>
      <VsfFooterLabel type={VsfFooterLabelType.socialMedia}>
        <a><VsfIconPinterest /></a>
      </VsfFooterLabel>
      <VsfFooterLabel type={VsfFooterLabelType.socialMedia}>
        <a><VsfIconYoutube /></a>
      </VsfFooterLabel>
    </VsfFooterSocialMedia>
    <VsfFooterBottomLinks>
      <VsfFooterLabel type={VsfFooterLabelType.bottomLinks}>
        <a>Link 1</a>
      </VsfFooterLabel>
      <VsfFooterLabel type={VsfFooterLabelType.bottomLinks}>
        <a>Link 2</a>
      </VsfFooterLabel>
    </VsfFooterBottomLinks>
    <VsfFooterLabel type={VsfFooterLabelType.companyName}>© 2022 Vue Storefront</VsfFooterLabel>
  </VsfFooterSection>
</VsfFooter>
```
<!-- end react -->
<!-- vue -->
```vue
<VsfFooter>
    <template #categories>
      <VsfFooterColumn>
        <VsfFooterLabel :type="VsfFooterLabelType.category">Category 1</VsfFooterLabel>
        <VsfFooterLabel><a>subcategory link 1</a></VsfFooterLabel>
        <VsfFooterLabel><a>subcategory link 2</a></VsfFooterLabel>
        <VsfFooterLabel><a>subcategory link 3</a></VsfFooterLabel>
        <VsfFooterLabel><a>subcategory link 4</a></VsfFooterLabel>
      </VsfFooterColumn>
      <VsfFooterColumn>
        <VsfFooterLabel :type="VsfFooterLabelType.category">Category 2</VsfFooterLabel>
        <VsfFooterLabel><a>subcategory link 1</a></VsfFooterLabel>
        <VsfFooterLabel><a>subcategory link 2</a></VsfFooterLabel>
        <VsfFooterLabel><a>subcategory link 3</a></VsfFooterLabel>
        <VsfFooterLabel><a>subcategory link 4</a></VsfFooterLabel>
      </VsfFooterColumn>
      <VsfFooterColumn>
        <VsfFooterLabel :type="VsfFooterLabelType.category">Category 3</VsfFooterLabel>
        <VsfFooterLabel><a>subcategory link 1</a></VsfFooterLabel>
        <VsfFooterLabel><a>subcategory link 2</a></VsfFooterLabel>
        <VsfFooterLabel><a>subcategory link 3</a></VsfFooterLabel>
        <VsfFooterLabel><a>subcategory link 4</a></VsfFooterLabel>
      </VsfFooterColumn>
      <VsfFooterColumn>
        <VsfFooterLabel :type="VsfFooterLabelType.category">Category 4</VsfFooterLabel>
        <VsfFooterLabel><a>subcategory link 1</a></VsfFooterLabel>
        <VsfFooterLabel><a>subcategory link 2</a></VsfFooterLabel>
        <VsfFooterLabel><a>subcategory link 3</a></VsfFooterLabel>
        <VsfFooterLabel><a>subcategory link 4</a></VsfFooterLabel>
      </VsfFooterColumn>
    </template>
    <template #contact>
      <VsfFooterColumn :type="VsfFooterColumnType.middle">
        <VsfIconHelp :size="VsfIconSizeEnum.lg" />
        <VsfFooterLabel :type="VsfFooterLabelType.contact">
          label 1
        </VsfFooterLabel>
        <VsfFooterLabel :type="VsfFooterLabelType.contactDescription">
          description
        </VsfFooterLabel>
      </VsfFooterColumn>
      <VsfFooterColumn :type="VsfFooterColumnType.middle">
        <VsfIconChat :size="VsfIconSizeEnum.lg" />
        <VsfFooterLabel :type="VsfFooterLabelType.contact">
          label 2
        </VsfFooterLabel>
        <VsfFooterLabel :type="VsfFooterLabelType.contactDescription">
          description
        </VsfFooterLabel>
      </VsfFooterColumn>
      <VsfFooterColumn :type="VsfFooterColumnType.middle">
        <VsfIconPhone :size="VsfIconSizeEnum.lg" />
        <VsfFooterLabel :type="VsfFooterLabelType.contact">
          label 3
        </VsfFooterLabel>
        <VsfFooterLabel :type="VsfFooterLabelType.contactDescription">
          description
        </VsfFooterLabel>
      </VsfFooterColumn>
    </template>
    <template #socialMedia>
      <VsfFooterSocialMedia>
        <VsfFooterLabel :type="VsfFooterLabelType.socialMedia">
          <a><VsfIconFacebook /></a>
        </VsfFooterLabel>
        <VsfFooterLabel :type="VsfFooterLabelType.socialMedia">
          <a><VsfIconTwitter /></a>
        </VsfFooterLabel>
        <VsfFooterLabel :type="VsfFooterLabelType.socialMedia">
          <a><VsfIconInstagram /></a>
        </VsfFooterLabel>
        <VsfFooterLabel :type="VsfFooterLabelType.socialMedia">
          <a><VsfIconPinterest /></a>
        </VsfFooterLabel>
        <VsfFooterLabel :type="VsfFooterLabelType.socialMedia">
          <a><VsfIconYoutube /></a>
        </VsfFooterLabel>
      </VsfFooterSocialMedia>
    </template>
    <template #bottomLinks>
      <VsfFooterLabel :type="VsfFooterLabelType.bottomLinks">
        <a>Link 1</a>
      </VsfFooterLabel>
      <VsfFooterLabel :type="VsfFooterLabelType.bottomLinks">
        <a>Link 2</a>
      </VsfFooterLabel>
    </template>
    <template #companyName>
      © 2022 Vue Storefront
    </template>
    </VsfFooter>
```
<!-- end vue -->
