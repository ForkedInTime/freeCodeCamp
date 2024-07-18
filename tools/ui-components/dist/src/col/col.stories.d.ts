import React from 'react';
import { StoryObj } from '@storybook/react';
import { Col } from '.';
declare const story: {
    title: string;
    component: ({ className, children, xs, sm, md, lg, smPush, xsOffset, smOffset, mdOffset, lgOffset, ...props }: import("./types").ColProps) => React.JSX.Element;
    argTypes: {
        className: {
            control: {
                type: string;
            };
        };
        xs: {
            options: (number | undefined)[];
        };
        sm: {
            options: (number | undefined)[];
        };
        md: {
            options: (number | undefined)[];
        };
        lg: {
            options: (number | undefined)[];
        };
        xsOffset: {
            options: (number | undefined)[];
        };
        smOffset: {
            options: (number | undefined)[];
        };
        mdOffset: {
            options: (number | undefined)[];
        };
        lgOffset: {
            options: (number | undefined)[];
        };
        smPush: {
            options: (number | undefined)[];
        };
    };
};
export declare const Default: StoryObj<typeof Col>;
export default story;
//# sourceMappingURL=col.stories.d.ts.map