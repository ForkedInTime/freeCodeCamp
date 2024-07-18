import React from 'react';
import { StoryObj } from '@storybook/react';
import { Table } from '.';
declare const story: {
    title: string;
    component: React.ForwardRefExoticComponent<import("./types").TableProps & React.RefAttributes<HTMLTableElement>>;
    parameters: {
        controls: {
            include: string[];
        };
    };
    argTypes: {
        striped: {
            options: boolean[];
            control: {
                type: string;
            };
        };
        condensed: {
            options: boolean[];
            control: {
                type: string;
            };
        };
    };
};
type Story = StoryObj<typeof Table>;
export declare const Default: Story;
export declare const Condensed: Story;
export declare const Striped: Story;
export default story;
//# sourceMappingURL=table.stories.d.ts.map