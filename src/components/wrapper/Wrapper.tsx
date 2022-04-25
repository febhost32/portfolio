import React from "react";

type ChildrenProps = { children: React.ReactNode };

export const Wrapper : React.FunctionComponent<ChildrenProps> = ({children}) => {
    return (
        <div style={{maxWidth: "600px", textAlign:"justify"}}>
            {children}
        </div>
    )
}