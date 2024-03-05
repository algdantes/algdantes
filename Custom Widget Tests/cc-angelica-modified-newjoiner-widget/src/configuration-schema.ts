/*!
 * Copyright 2021, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

/**
 * schema used for generation of the configuration dialog
 * see https://react-jsonschema-form.readthedocs.io/en/latest/ for documentation
 */
export const configurationSchema: JSONSchema7 = {
  properties: {
    title: {
      type: "string",
      title: "Title",
    },
    fieldfilter: {
      type: "string",
      title: "Filter Profile Field ID"
    },
    fieldvalue: {
      type: "string",
      title: "Filter Profile Field Value"
    },
    /*
    groupid: {
      type: "string",
      title: "Group ID",
    },
    */
    numbertoshow: {
      type: "number",
      title: "Height (px)",
    },
    anniversaryprofilefieldid: {
      type: "string",
      title: "Start Date Profile Field ID"
    },
    dateformat: {
      type: "string",
      enum: ["DD.MM", "MM.DD"],
      title: "Date Format",
      default: "MM.DD"
    },
    showdate: {
      type: "boolean",
      title: "Show Start Date?",
      default: true
    },
    /*
    imageurl: {
      type: "string",
      title: "Default Profile Picture Image URL"
    },
    */
    loadingmessage: {
      type: "string",
      title: "Message when the widget is still loading",
    },
    noinstancesmessage: {
      type: "string",
      title: "Message when there are no applicable users",
    },
    yearword: {
      type: "string",
      title: "Year Word"
    },
    yearwordplural: {
      type: "string",
      title: "Year Word Plural"
    },
    includeyear: {
      type: "boolean",
      title: "Split by Year"
    },
    showdaysbefore: {
      type: "number",
      title: "Number of visible past days",
      default: 0
    },
    /*
    daysbeforetitle: {
      type: "string",
      title: "Days Before Title",
    },
    */
    showdaysafter: {
      type: "number",
      title: "Number of visible future days",
      default: 30
    },
    /*
    daysaftertitle: {
      type: "string",
      title: "Days After Title",
    },
    */
    specialyears: {
      type: "string",
      title: "Special Years",
    },
    headercolor: {
      type: "string",
      title: "Header Color",
    },
    hideyearheader: {
      type: "boolean",
      title: "Hide year header",
      default: false
    },
    optoutfield: {
      type: "string",
      title: "Profile Field ID for Opt Out Field"
    },
    optoutvalue: {
      type: "string",
      title: "Value for Opt Out Field"
    },

    includepending: {
      type: "boolean",
      title: "Include Pending Users",
      default: false
    }
  },
  required : ["anniversaryprofilefieldid", "dateformat"],
  dependencies: {
    /*
    limit: {
      properties: {
        fullpageid: {
          type: "string",
          title: "Page ID",
        },
        fullpagetext: {
          type: "string",
          title: "Message Link to Full page",
        }
      }
    },
    */
    includepending: {
      oneOf: [
        {
          properties: {
            includepending: {
              enum: [ true ]
            },
            networkid: {
              type: "string",
              title: "Network Plugin ID",
            }
          },
          required: [
            "networkid"
          ]
        }
      ]
    },
  }
};

/**
 * schema to add more customization to the form's look and feel
 * @see https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/uiSchema/
 */
export const uiSchema: UiSchema = {
  anniversaryprofilefieldid: {
    "ui:help": "Enter the profile field ID of the field that holds the date information",
  },
  groupid: {
    "ui:help": "The group ID for the group of users who should be shown"
  },
  dateformat: {
    "ui:help": "Enter the date format that the date is entered in."
  },
  includepending: {
    "ui:help": "Check to include pending users",
    "ui:hidden": true
  },
  loadingsmessage: {
    "ui:help": "Text that will be shown when the widget is still loading the users",
  },
  noinstancesmessage: {
    "ui:help": "Text that will be shown in the event that there are no applicable users",
  },
  title: {
    "ui:help": "The title of the widget",
  },
  todaytitle: {
    "ui:help": "The wording that will be shown above the users whose start date is today",
  },
  showdate: {
    "ui:help": "Select to show the user's date next to the user's name",
  },
  showwholemonth: {
    "ui:help": "Select to show all new joiners for the current month",
  },
  showwholemonthforxdays: {
    "ui:help": "Number of days that the month's worth of new joiners should be shown (starting at the beginning of the month)",
  },
  showdaysbefore: {
    "ui:help": "The number of previous days for which corresponding instances should be shown",
  },
  daysbeforetitle: {
    "ui:help": "The message that appears at the top of previous joiners section",
  },
  showdaysafter: {
    "ui:help": "The number of upcoming days for which corresponding instances should be shown",
  },
  daysaftertitle: {
    "ui:help": "The message that appears at the top of upcoming joiners section",
  },
  fieldfilter: {
    "ui:help": "The profile field ID that will be used to filter users",
  },
  fieldvalue: {
    "ui:help": "The profile field value that will be used to filter users",
  },
  headercolor: {
    "ui:help": "Hexcode color of the Header",
  },
  additionalfieldsdisplayed: {
    "ui:help": "Profile Field IDs to show next to user's name separated by commas",
  },
  optoutgroupid: {
    "ui:help": "Group ID of opt out group. Users in this group will not be shown in the widget",
  },
  numbertoshow : {
    "ui: help": "Enter the height of the widget (in pixels) Each profile is approximately 80 px. If left blank, all profiles will be shown."
  }
};
