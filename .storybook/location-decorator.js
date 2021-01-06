// location-decorator.js
import React from "react";
import { Location } from "@reach/router";
const LocationDecorator = storyFn => (
  <Location>{storyFn()}</Location>
)

export default LocationDecorator
