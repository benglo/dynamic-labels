import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
import "./label-value-item";
import "./label-value-item-separator";
import {properties} from "./properties";

const view = ({properties}) => {
	const items = properties.items;
	const separatorWidth = properties.separatorWidth;
	const separatorColor = properties.separatorColor;

	return (
		<div className="flex-row">
			{items.map((item, index) => {
				// Add a separator after each item except the last one
				if (index < items.length - 1) {
					return (
						<div className="flex-row">
							<label-value-item label={item.label} value={item.value} />
							<label-value-item-separator separatorColor={separatorColor} separatorWidth={separatorWidth}/>
						</div>
					);
				} else {
					return (
						<div className="flex-row">
							<label-value-item label={item.label} value={item.value} />
						</div>
					)
				}
			})}
		</div>
	);
};



createCustomElement("x-qhgc2-dynamic-labels", {
	renderer: { type: snabbdom },
	view,
	properties,
	styles,
});
