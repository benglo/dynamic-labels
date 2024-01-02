import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import view from "./view";
import styles from "./label-value-item-separator.scss";

createCustomElement("label-value-item-separator", {
    renderer: {
        type: snabbdom
    },
    view,
    properties: {
        separatorColor: {
            default: "black"
        },
        separatorWidth: {
            default: "1px"
        }
    },
    styles,
});