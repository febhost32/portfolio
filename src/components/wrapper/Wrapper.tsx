import React from "react";

type ChildrenProps = { children: React.ReactNode};

export const Wrapper : React.FunctionComponent<ChildrenProps> = ({children}) => {
    return (
        <div style={{textAlign:"justify"}}>
            {children}
        </div>
    )
}