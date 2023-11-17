import { Meta, StoryObj } from '@storybook/react';
import {Test} from 'ui';


const meta: Meta<typeof Test> = {
    title: 'TestInDocsFromOut',
    component: Test,
};

export default meta;
type Story = StoryObj<typeof Test>;

export const Default: Story = {
    args: {
        name: 'name',
        value: 'value',
        bool: false,
        prop1: null,
    },
};

export const Story2: Story = {
    args: {
        name: 'name',
        value: 'value',
        bool: true,
        prop1: 2,
    },
};

