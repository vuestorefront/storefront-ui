// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfNotification from "./SfNotification.vue";


// use this to document scss vars
const scssTableConfig = {
    tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
    tableBodyConfig: [
        ["$notification__message-padding-left", "0.625rem", "left padding for text"],
        ["$notification--info-color", "$c-dark-primary", "text and icon color for info version"],
        ["$notification--warning-color", "#d12727", "text and icon color for warning version"],
        ["$notification--alert-color", "#0468db", "text and icon color for alert version"],
        ["$notification--success-color", "#128830", "text and icon color for success version"],
        ["$notification-mobile-padding", "$spacer-big", "padding on mobile"],
        ["$notification-background-size", "cover", "size of the background"],
        ["$notification-background-position", "bottom left", "position of the background"],
        ["$notification__title-font-size", "3rem", "font size of the title"]
    ]
};

// use this to document events
const cssTableConfig = {
    tableHeadConfig: ["NAME", "DESCRIPTION"],
    tableBodyConfig: [
        [".sf-notification--right", "aligns content to the right"],
        [".sf-notification--info", "to set black color for notification message"],
        [".sf-notification--alert", "to set blue color for notification message"],
        [".sf-notification--warning", "to set red color for notification message"],
        [".sf-notification--success", "to set green color for notification message"]
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
                    default: text("message (prop)", "This is informative message for the user. View cart")
                },
                icon: {
                    default: text("icon (prop)", "added_to_cart")
                },
                type: {
                    default: select("type (prop)", [
                        "alert",
                        "warning",
                        "info",
                        "success"
                    ])
                },
                sizeIcon: {
                    type: String,
                    default: select("icon size (prop)", [
                        "xxs",
                        "xs",
                        "sm",
                        "md",
                        "lg",
                        "xl",
                        "xxl",
                        "xl3",
                        "xl4",
                    ])
                },
                colorIcon: {
                    type: String,
                    default: select("icon color (prop)", [
                        "primary",
                        "secondary",
                        "white",
                        "black",
                        "accent",
                        "green-primary",
                        "green-secondary",
                        "gray-primary",
                        "gray-secondary",
                        "light-primary",
                        "light-secondary",
                        "pink-primary",
                        "pink-secondary",
                        "yellow-primary",
                        "yellow-secondary",
                        "blue-primary",
                        "blue-secondary",
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
                    :icon="icon"  
                    :type="type"            
                >
                    <div name="content" class="sf-notification__content">
                        <div class="sf-notification__title"> 
                            <slot 
                                name="title"
                                v-bind="{ title }"> 
                                {{ title }} 
                            </slot> 
                        </div> 
                        <div class="sf-notification__message">
                            <slot name="message" v-bind="{ message }">{{ message }}</slot>
                        </div>
                    </div>
                    <slot name="icon" v-bind="{ icon, sizeIcon, colorIcon, type }">
                        <SfIcon class="sf-notification__icon" :icon="icon" :size="sizeIcon" :color="colorIcon" :class="sf-notification--type"></SfIcon>
                    </slot>
                </SfNotification>`
        }), {
            info: {
                summary: `<p>Component description.</p>
                        <h2>Usage</h2>
                        <pre><code>import { SfNotification } from "@storefront-ui/vue"</code></pre>
                        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
                        ${generateStorybookTable(cssTableConfig, "CSS modifiers")}`
            }
        }
    )