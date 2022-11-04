import { RenderFieldExtensionCtx } from "datocms-plugin-sdk";
import { Canvas } from "datocms-react-ui";

type PropTypes = {
  ctx: RenderFieldExtensionCtx;
};

const CustomJsonFieldEditor = ({ ctx }: PropTypes) => {
  ctx.startAutoResizer();

  return (
    <Canvas ctx={ctx}>
      <>
        <h2>Steps</h2>
        <p>Given a model that has a field extension applied to it:</p>
        <ol>
          <li>create a new record of the model</li>
          <li>check the UI of the field</li>
        </ol>
        or
        <ol>
          <li>view a record that already has the extension on it</li>
          <li>check the UI of the field</li>
        </ol>
        or
        <ol>
          <li>view a record that already has the extension on it</li>
          <li>verify the custom field UI is there</li>
          <li>navigate away (click settings)</li>
          <li>navigate back (click content)</li>
          <li>check the UI of the field, it is now missing</li>
        </ol>
        <p>
          If the field is displayed, refresh the page. for my sandbox I can
          refresh
          "https://sandbox-9778.admin.datocms.com/editor/item_types/877647/items/new"
          and the field extension will disappear
        </p>
        <h3>Expected</h3>
        <p>
          The registered custom field UI is applied, replacing the standard JSON
          UI.
        </p>
        <h3>Actual</h3>
        <p>
          <code>renderFieldExtension</code> is never called, the default JSON
          view is shown. This can be verified by seeing the console logs
        </p>
      </>
    </Canvas>
  );
};

export default CustomJsonFieldEditor;
