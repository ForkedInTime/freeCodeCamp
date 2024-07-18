import React from 'react';
import { StoryObj } from '@storybook/react';
import { Row } from '.';
declare const story: {
    title: string;
    component: ({ className, children, ...rest }: import("./types").RowProps) => React.JSX.Element;
};
type Story = StoryObj<typeof Row>;
export declare const Default: Story;
export default story;
//# sourceMappingURL=row.stories.d.ts.map