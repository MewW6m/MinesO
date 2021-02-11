import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {ModalSection, ModalSectionProps} from "./ModalSection";

export default {
  title: 'Components/Organisms/Top/ModalSection',
  component: ModalSection
} as Meta;

const Template: Story<ModalSectionProps> = (args) => <ModalSection {...args} />;

export const Default = Template.bind({});
Default.args = {
};