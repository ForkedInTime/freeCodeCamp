/// <reference types="react" />
import { StoryObj } from '@storybook/react';
import { FormGroup } from '.';
declare const story: {
    title: string;
    component: ({ className, validationState, controlId, as, ...props }: import("./types").FormGroupProps) => JSX.Element;
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
        controlId: {
            control: {
                type: string;
            };
        };
        as: {
            control: {
                type: string;
            };
        };
        validationState: {
            options: (string | null)[];
        };
    };
};
type Story = StoryObj<typeof FormGroup>;
export declare const Default: Story;
export declare const Success: Story;
export declare const Error: Story;
export declare const Warning: Story;
export default story;
//# sourceMappingURL=form-group.stories.d.ts.map