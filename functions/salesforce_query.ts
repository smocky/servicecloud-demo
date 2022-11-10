import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

/**
 * Functions are reusable building blocks of automation that accept
 * inputs, perform calculations, and provide outputs. Functions can
 * be used independently or as steps in Workflows.
 * https://api.slack.com/future/functions/custom
 */
export const salesforceQueryDefinition = DefineFunction({
  callback_id: "salesforce_lookup",
  title: "Lookup Salesforce Data",
  description: "Looks for matching Salesforce records",
  source_file: "functions/salesforce_query.ts",
  input_parameters: {
    properties: {
      searchTerm: {
        type: Schema.types.string,
        description: "General Search",
      },
      soqlQuery: {
        type: Schema.types.string,
        description: "SOQL Query string",
      },
    },
    required: [],
  },
  output_parameters: {
    properties: {
      salesforceResult: {
        type: Schema.types.string,
        description: "Search Results",
      },
    },
    required: ["salesforceResult"],
  },
});

export default SlackFunction(
  salesforceQueryDefinition,
  ({ inputs }) => {
    const { searchTerm, soqlQuery } = inputs;
    console.log(searchTerm, soqlQuery);

    const salesforceResult = "Account Name";
    return { outputs: { salesforceResult } };
  },
);
