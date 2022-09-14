import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

/**
 * Functions are reusable building blocks of automation that accept
 * inputs, perform calculations, and provide outputs. Functions can
 * be used independently or as steps in Workflows.
 * https://api.slack.com/future/functions/custom
 */
export const servicecloudCreateDefinition = DefineFunction({
  callback_id: "servicecloud_create",
  title: "Create Ticket",
  description: "Creates a new Service Cloud ticket",
  source_file: "functions/servicecloud_create.ts",
  input_parameters: {
    properties: {
      issueWho: {
        type: Schema.slack.types.user_id,
        description: "Who this is for?",
      },
      issueType: {
        type: Schema.types.string,
        description: "What type of issue?",
      },
      issuePriority: {
        type: Schema.types.string,
        description: "What is the priority?",
      },
      issueWhat: {
        type: Schema.types.string,
        description: "What is the issue?",
      },
    },
    required: ["issueWho", "issueType", "issuePriority", "issueWhat"],
  },
  output_parameters: {
    properties: {
      issueId: {
        type: Schema.types.string,
        description: "Ticket Id",
      },
      systemName: {
        type: Schema.types.string,
        description: "Name of ticketing system",
      },
      surveyTemplate: {
        type: Schema.types.string,
        description: "Name of followup survey",
      },
    },
    required: ["issueId"],
  },
});

export default SlackFunction(
  servicecloudCreateDefinition,
  ({ inputs }) => {
    const { issueWho, issueWhat, issueType, issuePriority } = inputs;
    console.log(issueWho, issueWhat, issueType, issuePriority);
    const issueId = Math.ceil(Math.random() * 1000000).toString();
    const systemName = "Service Cloud";
    const surveyTemplate = "Helpdesk Ticket";
    return { outputs: { issueId, systemName, surveyTemplate } };
  },
);
