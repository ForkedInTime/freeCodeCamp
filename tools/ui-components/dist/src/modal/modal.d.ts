import React, { type ReactNode } from 'react';
import { type ModalProps, type HeaderProps, BodyProps } from './types';
declare const Modal: {
    ({ children, open, onClose, size, variant }: ModalProps): React.JSX.Element;
    Header: ({ children, showCloseButton, closeButtonClassNames }: HeaderProps) => React.JSX.Element;
    Body: ({ children, alignment }: BodyProps) => React.JSX.Element;
    Footer: ({ children }: {
        children: ReactNode;
    }) => React.JSX.Element;
};
export { Modal };
//# sourceMappingURL=modal.d.ts.map