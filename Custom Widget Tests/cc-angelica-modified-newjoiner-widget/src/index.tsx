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

import React from "react";
import ReactDOM from "react-dom";

import { BlockFactory, BlockDefinition, ExternalBlockDefinition, BaseBlock } from "widget-sdk";
import { NewJoinersWidgetProps, NewJoinersWidget } from "./new-joiners-widget";
import { configurationSchema, uiSchema } from "./configuration-schema";
import pkg from '../package.json'

/**
 * Define wich attributes are handled by the widget. This should be also reflected in configuration schema
 */
const widgetAttributes: string[] = [
  'anniversaryprofilefieldid',
  'dateformat',
  'includepending',
  'loadingmessage',
  'noinstancesmessage',
  'title',
  'todaytitle',
  'yearword',
  'yearwordplural',
  'showdate',
  'showwholemonth',
  'showwholemonthforxdays',
  'showdaysbefore',
  'showdaysafter',
  'specialyears',
  'hideyearheader',
  'imageurl',
  'linktochat',
  'limit',
  'headercolor',
  'additionalfieldsdisplayed',
  'includeyear',
  'daysbeforetitle',
  'daysaftertitle',
  'networkid',
  'numbertoshow',
  'fieldfilter',
  'fieldvalue',
  'optoutfield',
  'optoutvalue'
];

/**
 * This factory creates the class which is registered with the tagname in the `custom element registry`
 * Gets the parental class and a set of helper utilities provided by the hosting application.
 */
const factory: BlockFactory = (BaseBlockClass, _widgetApi) => {
  /**
   *  <new-joiners-widget message="world!"></new-joiners-widget>
   */
  return class NewJoinersWidgetBlock extends BaseBlockClass implements BaseBlock {
    public constructor() {
      super();
    }

    private get props(): NewJoinersWidgetProps {
      const attrs = this.parseAttributes<NewJoinersWidgetProps>();
      return {
        ...attrs,
        contentLanguage: this.contentLanguage,
      };
    }

    public renderBlock(container: HTMLElement): void {
      ReactDOM.render(<NewJoinersWidget {...this.props} />, container);
    }

    /**
     * The observed attributes, where the widgets reacts on.
     */
    public static get observedAttributes(): string[] {
      return widgetAttributes;
    }

    /**
     * Callback invoked on every change of an observed attribute. Call the parental method before
     * applying own logic.
     */
    public attributeChangedCallback(...args: [string, string | undefined, string | undefined]): void {
      super.attributeChangedCallback.apply(this, args);
    }
  };
};

/**
 * The definition of the block, to let it successful register to the hosting application
 */
const blockDefinition: BlockDefinition = {
    name: "new-joiners-widget",
    factory: factory,
    attributes: widgetAttributes,
    blockLevel: 'block',
    configurationSchema: configurationSchema,
    uiSchema: uiSchema,
    label: 'New Joiners Widget',
    iconUrl: 'https://cc-scripts.staffbase.com/new-joiners-widget/new-joiners.png'
};

/**
 * Wrapping definition, which defines meta informations about the block.
 */
const externalBlockDefinition: ExternalBlockDefinition = {
  blockDefinition,
  author: pkg.author,
  version: pkg.version
};

/**
 * This call is mandatory to register the block in the hosting application.
 */
window.defineBlock(externalBlockDefinition);
