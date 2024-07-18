/// <reference types="react" />
import { StoryObj } from '@storybook/react';
import { Alert } from './alert';
declare const story: {
    title: string;
    component: ({ children, className, variant, ...props }: import("./alert").AlertProps) => JSX.Element;
    argTypes: {
        children: {
            control: {
                type: string;
            };
        };
        className: {
            control: {
                type: string;
            };
        };
    };
};
type Story = StoryObj<typeof Alert>;
export declare const Success: Story;
export declare const Info: Story;
export declare const Warning: Story;
export declare const Danger: Story;
export declare const LongText: Story;
export declare const WithHeadingAndParagraphs: Story;
export default story;
//# sourceMappingURL=alert.stories.d.ts.map