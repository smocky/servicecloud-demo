import { Trigger } from "deno-slack-api/types.ts";
import SampleWorkflow from "../workflows/sample_workflow.ts";
/**
 * Triggers determine when Workflows are executed. A trigger
 * file describes a scenario in which a workflow should be run,
 * such as a user pressing a button or when a specific event occurs.
 * https://api.slack.com/future/triggers
 */
const zendeskCreate: Trigger<typeof SampleWorkflow.definition> = {
  type: "shortcut",
  name: "Create Zendesk Ticket",
  description: "A sample Zendesk ticket",
  workflow: "#/workflows/zendesk_create",
  inputs: {
    interactivity: {
      value: "{{data.interactivity}}",
    },
    channel: {
      value: "{{data.channel_id}}",
    },
  },
};

export default zendeskCreate;
