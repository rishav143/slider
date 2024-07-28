import React from "react";
import Slider from "../components/Slider";

export default {
  title: "components/Slider",
  component: Slider,
  argTypes: {
    type: {
      control: 'select',
      options: ['Continuous', 'Discrete'], 
      description: ['Continuous', 'Discrete'],
      defaultValue: 'Continuous',
    },
    subtype : {
        control: 'select',
        options: ["Single", "Range"]
    },
    steps: {
      control: 'select',
      options: [1, 2, 4, 5, 10],
      description: [1, 2, 4, 5, 10],
      defaultValue: 1,
    },
    size: {
      control: 'select',
      options: ['Size_24', 'Size_32'], 
      description: ['Size_24', 'Size_32'],
      defaultValue: 'Size_24',
    },
    handleClick: { action: "handleClick" }
  },
};

const Template = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'Continuous',
  subtype: 'Single',
  steps: 5,
  size: 'Size_24',
};