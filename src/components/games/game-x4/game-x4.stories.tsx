import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";

import GameX4 from './game-x4.index';
import MockData from './game-x4.mocks';

storiesOf("GameX4", module).add(
  "default",
  (): ReactElement => <GameX4 quiz={MockData.withImage.quiz}></GameX4>
);
