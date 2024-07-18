/// <reference types="react" />
import { StoryObj } from '@storybook/react';
import { ControlLabel } from '.';
declare const story: {
    title: string;
    component: ({ className, htmlFor, srOnly, ...props }: import("./types").ControlLabelProps) => JSX.Element;
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
        htmlFor: {
            control: {
                type: string;
            };
        };
        srOnly: {
            options: string[];
        };
    };
};
type Story = StoryObj<typeof ControlLabel>;
export declare const Default: Story;
export default story;
//# sourceMappingURL=control-label.stories.d.ts.map