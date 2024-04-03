import { Meta, StoryObj } from '@storybook/react';
import IdPage from '../page';
import { JSX } from 'react';

export default {
    title: 'Users UI/IdIdentification',
    component: IdPage,    
    decorators: [        
        (Story) => (
            <div>
                <Story />
            </div>
        )
    ],
} as Meta;

export const Default: StoryObj = {};