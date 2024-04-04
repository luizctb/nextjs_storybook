import { Meta, StoryObj } from '@storybook/react';
import IdPage from './page';
import { UserProps } from './page';

const meta: Meta<UserProps> = {
    title: 'Users/UserId',  
    component: IdPage,  
};
export default meta;
type Story = StoryObj<UserProps>;

export const NoName: Story = {
  args: {
    params: {id: '12345'},
  },
};

export const WithName: Story = {
    args: {
      params: {id: '12345'},
      name: 'Luiz'
    },
  };