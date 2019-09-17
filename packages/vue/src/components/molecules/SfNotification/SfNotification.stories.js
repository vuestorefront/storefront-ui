// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfNotification from "./SfNotification.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";


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
                // level: {
                //     default: number("level (prop)", 2)
                // },
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
                }
            },
            components: { SfNotification, SfIcon },
            template: `
            <transition :name="transitionNotification">
                <SfNotification
                    class="sf-notification sf-notification__container" 
                    :visible="isNotificationOpen"
                    @close="isNotificationOpen = false"
                    :title="title"                    
                    :massage="massage"
                    :icon="icon"  
                    :type="type"            
                >
                    <SfIcon class="sf-notification__close" icon="cross" color="white" size="14px" @click="close" /> 
                </SfNotification>
            </transition>`
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
    .add(
        "[slot] title",
        () => ({
            props: {
                title: {
                    default: text("title (prop)", "Added to Cart")
                },
                level: {
                    default: number("level (prop)", 2)
                }
            },
            components: { SfNotification },
            template: `<SfNotification>
                <div name="content" class="sf-notification__content">
                    <component  
                    :is="level"                   
                    class="sf-notification__title"> 
                        <slot 
                            name="title"
                            v-bind="{ title }"> 
                            {{ title }} 
                        </slot> 
                    </component> 
                </div>    
            </SfNotification>`
        }), {
            info: true
        }
    )
    .add(
        "[slot] massage",
        () => ({
            props: {
                massage: {
                    default: text("massage (prop)", "This is informative message for the user. View cart")
                }
            },
            components: { SfNotification },
            template: `<SfNotification>
              <div name="content" class="sf-notification__content">          
                <div class="sf-notification__massage">
                    <slot name="massage" v-bind="{ massage }">{{ massage }}</slot>
                </div>
              </div>   
            </SfNotification>`
        }), {
            info: true
        }
    )
    .add(
        "[slot] icon",
        () => ({
            props: {
                icon: {
                    default: text("icon (prop)", "added_to_cart")
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
            components: { SfNotification, SfIcon },
            template: `<SfNotification>
                <slot name="icon" v-bind="{ icon, sizeIcon, colorIcon, type }">
                    <SfIcon class="sf-notification__icon" :icon="icon" :size="sizeIcon" :color="colorIcon"></SfIcon>
                </slot>  
            </SfNotification>`
        }), {
            info: true
        }
    )