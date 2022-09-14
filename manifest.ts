import { Manifest } from "deno-slack-sdk/mod.ts";
import { servicecloudCreateDefinition } from "./functions/servicecloud_create.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "Service Cloud",
  description: "Demo functions for Service Cloud",
  icon: "assets/salesforce.png",
  functions: [servicecloudCreateDefinition],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
