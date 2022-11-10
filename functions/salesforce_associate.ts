import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

/**
 * Functions are reusable building blocks of automation that accept
 * inputs, perform calculations, and provide outputs. Functions can
 * be used independently or as steps in Workflows.
 * https://api.slack.com/future/functions/custom
 */
export const salesforceAssociateChannelDefinition = DefineFunction({
  callback_id: "salesforce_associate",
  title: "Associate channel",
  description: "Associates a Slack channel with an account record",
  source_file: "functions/salesforce_associate.ts",
  input_parameters: {
    properties: {
      accountName: {
        type: Schema.types.string,
        description: "Account name",
      },
      channelToAssociate: {
        type: Schema.slack.types.channel_id,
        description: "The account channel",
      },
    },
    required: ["accountName", "channelToAssociate"],
  },
  output_parameters: {
    properties: {
      accountLink: {
        type: Schema.types.string,
        description: "The link to account record",
      },
    },
    required: ["accountLink"],
  },
});

export default SlackFunction(
  salesforceAssociateChannelDefinition,
  ({ inputs }) => {
    const { accountName, channelToAssociate } = inputs;
    console.log(accountName, channelToAssociate);

    const accountLink = "https://com";
    return { outputs: { accountLink } };
  },
);
