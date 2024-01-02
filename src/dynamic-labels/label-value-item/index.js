import {
	createCustomElement
} from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import view from "./view";
import styles from "./label-value-item.scss";

createCustomElement("label-value-item", {
    renderer: {
        type: snabbdom
    },
    view,
    properties: {
        label: {
            default: "Label"
        },
        value: {
            default: "--"
        }
    },
    styles,
});