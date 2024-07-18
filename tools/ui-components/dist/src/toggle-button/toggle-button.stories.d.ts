/// <reference types="react" />
import { StoryObj } from '@storybook/react';
import { ToggleButton } from '.';
declare const story: {
    title: string;
    component: ({ bsSize, type, disabled, children, checked, onChange, value, name }: import("./types").ToggleButtonProps) => JSX.Element;
    parameters: {
        controls: {
            include: string[];
        };
    };
    argTypes: {
        bsStyle: {
            options: string[];
        };
        bsSize: {
            options: string[];
        };
        disabled: {
            options: boolean[];
            control: {
                type: string;
            };
        };
        checked: {
            options: boolean[];
            control: {
                type: string;
            };
        };
        onChange: {
            action: string;
        };
        value: {
            type: {
                name: "string";
            };
        };
        name: {
            type: {
                name: "string";
            };
        };
    };
};
type Story = StoryObj<typeof ToggleButton>;
export declare const Default: Story;
export declare const Checked: Story;
export declare const Large: Story;
export declare const Medium: Story;
export declare const Disabled: Story;
export declare const RadioChecked: Story;
export declare const RadioUnchecked: Story;
export declare const InsideToggleGroup: () => JSX.Element;
export default story;
//# sourceMappingURL=toggle-button.stories.d.ts.map