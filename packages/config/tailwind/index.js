export const tailwindConfig = {
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: [
            {
              color: theme('colors.neutral.900'),
              fontSize: '16px',
              fontFamily: theme('fontFamily.body'),
              p: {
                marginTop: '20px',
                marginBottom: '20px',
              },
              '[class~="lead"]': {
                fontWeight: theme('fontWeight.medium'),
                fontSize: '20px',
                lineHeight: '32px',
                marginTop: '24px',
                marginBottom: '24px',
                color: theme('colors.neutral.900'),
              },
              blockquote: {
                fontWeight: theme('fontWeight.medium'),
                color: theme('colors.neutral.900'),
                marginTop: '32px',
                marginBottom: '32px',
                paddingLeft: '20px',
              },
              'blockquote ~ figcaption ': {
                fontWeight: theme('fontWeight.medium'),
                color: theme('colors.neutral.900'),
                fontStyle: 'italic',
              },
              h1: {
                fontSize: '36px',
                fontFamily: theme('fontFamily.headings'),
                marginTop: '0',
                marginBottom: '32px',
                lineHeight: '40px',
              },
              h2: {
                fontSize: '24px',
                fontFamily: theme('fontFamily.headings'),
                marginTop: '48px',
                marginBottom: '24px',
                lineHeight: '32px',
              },
              h3: {
                fontSize: '20px',
                fontFamily: theme('fontFamily.headings'),
                marginTop: '32px',
                marginBottom: '12px',
                lineHeight: '32px',
              },
              h4: {
                fontFamily: theme('fontFamily.headings'),
                marginTop: '24px',
                marginBottom: '8px',
                lineHeight: '24px',
              },
              img: {
                marginTop: '32px',
                marginBottom: '32px',
              },
              video: {
                marginTop: '32px',
                marginBottom: '32px',
              },
              figure: {
                marginTop: '32px',
                marginBottom: '32px',
              },
              'figure > *': {
                marginTop: '0',
                marginBottom: '0',
              },
              figcaption: {
                fontWeight: theme('fontStyle.italic'),
                fontSize: '14px',
                lineHeight: '20px',
                marginTop: '12px',
              },
              code: {
                fontSize: '14px',
              },
              'h2 code': {
                fontSize: '21px',
              },
              'h3 code': {
                fontSize: '18px',
              },
              strong: {
                fontWeight: theme('fontWeight.medium'),
              },
              pre: {
                fontSize: '14px',
                lineHeight: '24px',
                marginTop: '24px',
                marginBottom: '24px',
                borderRadius: '6px',
                paddingTop: '12px',
                paddingRight: '16px',
                paddingBottom: '12px',
                paddingLeft: '16px',
              },
              ol: {
                marginTop: '20px',
                marginBottom: '20px',
                paddingLeft: '20px',
              },
              ul: {
                marginTop: '20px',
                marginBottom: '20px',
                paddingLeft: '26px',
              },
              li: {
                marginTop: '8px',
                marginBottom: '8px',
              },
              'ol > li': {
                paddingLeft: '6px',
              },
              'ul > li': {
                paddingLeft: '6px',
              },
              '> ul > li p': {
                marginTop: '12px',
                marginBottom: '12px',
              },
              '> ul > li > *:first-child': {
                marginTop: '20px',
              },
              '> ul > li > *:last-child': {
                marginBottom: '20px',
              },
              '> ol > li > *:first-child': {
                marginTop: '20px',
              },
              '> ol > li > *:last-child': {
                marginBottom: '20px',
              },
              'ul ul, ul ol, ol ul, ol ol': {
                marginTop: '12px',
                marginBottom: '12px',
              },

              hr: {
                marginTop: '48px',
                marginBottom: '48px',
              },
              'hr + *': {
                marginTop: '0',
              },
              'h2 + *': {
                marginTop: '0',
              },
              'h3 + *': {
                marginTop: '0',
              },
              'h4 + *': {
                marginTop: '0',
              },

              table: {
                fontSize: '14px',
                lineHeight: '24px',
              },
              'thead th': {
                fontWeight: theme('fontWeight.medium'),
                paddingRight: '8px',
                paddingBottom: '8px',
                paddingLeft: '8px',
              },
              'thead th:first-child': {
                paddingLeft: '0',
              },
              'thead th:last-child': {
                paddingRight: '0',
              },
              'tbody td, tfoot td': {
                paddingTop: '8px',
                paddingRight: '8px',
                paddingBottom: '8px',
                paddingLeft: '8px',
              },
              'tbody td:first-child, tfoot td:first-child': {
                paddingLeft: '0',
              },
              'tbody td:last-child, tfoot td:last-child': {
                paddingRight: '0',
              },
            },
            {
              '> :first-child': {
                marginTop: '0',
              },
              '> :last-child': {
                marginBottom: '0',
              },
            },
          ],
        },
      }),
    },
  },
};
