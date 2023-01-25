import React, {FC, ReactNode} from 'react';
import classes from "./TemplateName.module.scss"

type TemplateNameProps = {
    children?: ReactNode
}

export const TemplateName: FC<TemplateNameProps> = ({children}: TemplateNameProps) => {
    return (
        <div className={classes.templateName}>
            {children}
        </div>
    );
};
