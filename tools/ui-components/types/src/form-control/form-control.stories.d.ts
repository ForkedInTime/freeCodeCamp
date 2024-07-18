import React from 'react';
import { StoryObj } from '@storybook/react';
import { FormControl } from '.';
declare const story: {
    title: string;
    component: {
        ({ componentClass, ...props }: import("./types").FormControlProps<"input" | "textarea">): JSX.Element;
        Feedback: ({ children, className, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) => JSX.Element;
        Static: ({ className, children, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => JSX.Element;
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
        id: {
            control: {
                type: string;
            };
        };
        onChange: {
            action: string;
        };
        value: {
            control: {
                type: string;
            };
        };
        componentClass: {
            options: string[];
        };
        placeholder: {
            control: {
                type: string;
            };
        };
        required: {
            control: string;
        };
        type: {
            options: string[];
        };
    };
};
type Story = StoryObj<typeof FormControl>;
export declare const Default: Story;
export declare const Static: StoryObj<typeof FormControl.Static>;
export declare const Feedback: StoryObj<typeof FormControl.Feedback>;
export default story;
//# sourceMappingURL=form-control.stories.d.ts.map