import React from 'react';
import { StoryObj } from '@storybook/react';
import { type ModalProps, type HeaderProps, type BodyProps } from './types';
type StoryProps = ModalProps & HeaderProps & BodyProps;
type Story = StoryObj<StoryProps>;
declare const story: {
    title: string;
    component: {
        ({ children, open, onClose, size, variant }: ModalProps): React.JSX.Element;
        Header: ({ children, showCloseButton, closeButtonClassNames }: HeaderProps) => React.JSX.Element;
        Body: ({ children, alignment }: BodyProps) => React.JSX.Element;
        Footer: ({ children }: {
            children: React.ReactNode;
        }) => React.JSX.Element;
    };
    args: {
        size: "medium";
        variant: "default";
    };
    argTypes: {
        open: {
            control: boolean;
        };
        onClose: {
            control: boolean;
        };
        size: {
            options: string[];
        };
        variant: {
            options: string[];
        };
    };
};
export declare const Default: Story;
export declare const Large: Story;
export declare const Danger: Story;
export declare const WithoutCloseButton: Story;
export declare const LeftAlignedBody: Story;
export declare const StartAlignedBody: Story;
export default story;
//# sourceMappingURL=modal.stories.d.ts.map