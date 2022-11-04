import {
  connect,
  Field,
  FieldIntentCtx,
  RenderFieldExtensionCtx,
} from "datocms-plugin-sdk";
import { render } from "./utils/render";
import ConfigScreen from "./entrypoints/ConfigScreen";
import "datocms-react-ui/styles.css";
import CustomJsonFieldEditor from "./entrypoints/CustomJsonField";

connect({
  onBoot() {
    console.log("[onBoot] plugin has booted");
  },
  renderConfigScreen(ctx) {
    return render(<ConfigScreen ctx={ctx} />);
  },
  overrideFieldExtensions(field: Field, ctx: FieldIntentCtx) {
    console.log("[overrideFieldExtensions]");
    if (field.attributes.api_key === "custom_field_ext") {
      return {
        editor: { id: "pluginFieldExtension" },
      };
    }
  },
  renderFieldExtension(fieldExtensionId: string, ctx: RenderFieldExtensionCtx) {
    console.log("[renderFieldExtension]");
    switch (fieldExtensionId) {
      case "pluginFieldExtension":
        console.log("[renderFieldExtension] mounting <CustomJsonFieldEditor/>");
        return render(<CustomJsonFieldEditor ctx={ctx} />);
    }
  },
});
