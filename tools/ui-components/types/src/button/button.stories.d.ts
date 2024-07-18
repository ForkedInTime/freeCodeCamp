/// <reference types="react" />
import { StoryObj } from '@storybook/react';
import { Button } from '.';
declare const story: {
    title: string;
    component: import("react").ForwardRefExoticComponent<import("./types").ButtonProps & import("react").RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
    parameters: {
        controls: {
            include: string[];
        };
    };
    argTypes: {
        variant: {
            options: string[];
        };
        size: {
            options: string[];
        };
        disabled: {
            options: boolean[];
            control: {
                type: string;
            };
        };
        block: {
            options: boolean[];
            control: {
                type: string;
            };
        };
        target: {
            options: string[];
        };
        onClick: {
            action: string;
        };
        href: {
            control: {
                type: string;
            };
        };
        download: {
            control: {
                type: string;
            };
        };
    };
};
type Story = StoryObj<typeof Button>;
export declare const Default: Story;
export declare const Danger: Story;
export declare const Info: Story;
export declare const Large: Story;
export declare const Small: Story;
export declare const Disabled: Story;
export declare const FullWidth: Story;
export declare const AsALink: Story;
export declare const AsADownloadLink: Story;
export default story;
//# sourceMappingURL=button.stories.d.ts.map