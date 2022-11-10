import { Manifest } from "deno-slack-sdk/mod.ts";
import { servicecloudCreateDefinition } from "./functions/servicecloud_create.ts";
import { salesforceQueryDefinition } from "./functions/salesforce_query.ts";
import { salesforceAssociateChannelDefinition } from "./functions/salesforce_associate.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "Salesforce",
  description: "Demo functions for Salesforce",
  icon: "assets/salesforce.png",
  functions: [
    servicecloudCreateDefinition,
    salesforceQueryDefinition,
    salesforceAssociateChannelDefinition,
  ],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
