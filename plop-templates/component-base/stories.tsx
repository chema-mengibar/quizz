import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import {{> MyName }} from './{{> my-name }}.index';
import MockData from './{{> my-name }}.mocks';

storiesOf("{{> MyName }}", module).add(
  "default",
  (): ReactElement => <{{> MyName }} {...MockData.default}></{{> MyName }}>
);
