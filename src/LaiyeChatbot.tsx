import { ReactElement, createElement, useEffect } from "react";

import { LaiyeChatbotContainerProps } from "../typings/LaiyeChatbotProps";

import "./ui/LaiyeChatbot.css";

export function LaiyeChatbot({ token }: LaiyeChatbotContainerProps): ReactElement {
    useEffect(() => {
        const script = document.createElement("script");

        script.src = "https://widget.destygo.com/destygo-webchat.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return createElement("destygo-webchat", { id: "destygo_widget", className: "destygo_widget", token: token.value });
}
