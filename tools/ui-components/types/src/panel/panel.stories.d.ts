import React from 'react';
import { StoryObj } from '@storybook/react';
import { Panel } from '.';
declare const story: {
    title: string;
    component: {
        ({ children, className, variant, ...restProps }: import("./types").PanelProps): JSX.Element;
        Body: ({ children, className, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => JSX.Element;
        Heading: ({ children, className, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => JSX.Element;
        Title: ({ children, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => JSX.Element;
    };
    parameters: {
        controls: {
            include: string[];
        };
    };
    argTypes: {
        className: {
            control: {
                type: string;
            };
        };
        variant: {
            option: (string | undefined)[];
        };
    };
};
type Story = StoryObj<typeof Panel>;
export declare const Default: Story;
export declare const Primary: Story;
export declare const Info: Story;
export declare const Danger: Story;
export default story;
//# sourceMappingURL=panel.stories.d.ts.map