/// <reference types="react" />
import { StoryObj } from '@storybook/react';
import { Container } from '.';
declare const story: {
    title: string;
    component: ({ children, className, fluid }: import("./types").ContainerProps) => JSX.Element;
    argTypes: {
        fluid: {
            control: {
                type: string;
            };
        };
    };
};
export declare const Default: StoryObj<typeof Container>;
export default story;
//# sourceMappingURL=container.stories.d.ts.map