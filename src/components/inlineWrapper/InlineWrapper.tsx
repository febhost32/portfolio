import React from "react";

type ChildrenProps = { children: React.ReactNode };

export const InlineWrapper : React.FunctionComponent<ChildrenProps> = ({children}) => {
    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            {children}
        </div>
    )
}