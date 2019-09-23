// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfNotification from "./SfNotification.vue";

// use this to document scss vars
const scssTableConfig = {
    tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
    tableBodyConfig: [
        [
            "$notification__message-padding-left",
            "0.625rem",
            "left padding for text"
        ],
        [
            "$notification--info-color",
            "#1D1F22",
            "text and icon color for info version"
        ],
        [
            "$notification--warning-color",
            "#d12727",
            "text and icon color for warning version"
        ],
        [
            "$notification--alert-color",
            "#0468db",
            "text and icon color for alert version"
        ],
        [
            "$notification--success-color",
            "#5ECE7B",
            "text and icon color for success version"
        ],
        ["$notification-padding", "1.25rem", "padding for the whole notification content"],
        ["$notification__title-font-size", "3rem", "font size of the title"]
    ]
};

// use this to document events
const cssTableConfig = {
    tableHeadConfig: ["NAME", "DESCRIPTION"],
    tableBodyConfig: [
        [".sf-notification--info", "to set black color for notification background"],
        [".sf-notification--alert", "to set blue color for notification background"],
        [".sf-notification--warning", "to set red color for notification background"],
        [".sf-notification--success", "to set green color for notification background"]
    ]
};

storiesOf("Molecules|Notification", module)
    .addDecorator(withKnobs)
    .add(
        "basic",
        () => ({
            data() {
                return {
                    isNotificationOpen: true
                };
            },
            props: {
                title: {
                    default: text("title (prop)", "Added to Cart")
                },
                message: {
                    default: text(
                        "message (prop)",
                        "This is informative message for the user. View cart"
                    )
                },
                type: {
                    default: select("type (prop)", [
                        "alert",
                        "warning",
                        "info",
                        "success"
                    ])
                }
            },
            components: { SfNotification },
            template: `<SfNotification
                    class="sf-notification sf-notification__container" 
                    :visible="isNotificationOpen"
                    @close="isNotificationOpen = false"
                    :title="title"                    
                    :message="message"
                    :icon="chooseIcon"  
                    :type="type"            
                />`
        }), {
            info: {
                summary: `<p>Component description.</p>
            <h2>Usage</h2>
            <pre><code>import { SfNotification } from "@storefront-ui/vue"</code></pre>
            ${generateStorybookTable(
                scssTableConfig,
                "SCSS variables"
            )}
            ${generateStorybookTable(
                cssTableConfig,
                "CSS modifiers"
            )}`
            }
        }
    );