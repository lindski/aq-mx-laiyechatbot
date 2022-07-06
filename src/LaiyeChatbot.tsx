import { ReactElement, createElement, useEffect } from "react";

import { LaiyeChatbotContainerProps } from "../typings/LaiyeChatbotProps";

import "./ui/LaiyeChatbot.css";

export function LaiyeChatbot({ token, customVariables }: LaiyeChatbotContainerProps): ReactElement {
    useEffect(() => {
        const script = document.createElement("script");

        script.src = "https://widget.destygo.com/destygo-webchat.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const getCustomVariables = (): any => {
        const variables: any = {};
        customVariables.forEach(variable => {
            const variableName: any = variable.variableName.value;
            const expressionValue: any = variable.expressionValue ? variable.expressionValue.value : "";
            const attributeValue: any = variable.attributeValue ? variable.attributeValue.value : "";
            variables[variableName] = variable.valueType === "expression" ? expressionValue : attributeValue;
        });

        return variables;
    };

    return createElement("destygo-webchat", {
        id: "destygo_widget",
        className: "destygo_widget",
        token: token.value,
        ...getCustomVariables()
    });
}
