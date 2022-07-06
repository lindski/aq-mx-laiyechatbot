/**
 * This file was generated from LaiyeChatbot.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue, EditableValue } from "mendix";

export type ValueTypeEnum = "expression" | "attribute";

export interface CustomVariablesType {
    variableName: DynamicValue<string>;
    valueType: ValueTypeEnum;
    expressionValue?: DynamicValue<string>;
    attributeValue?: EditableValue<string>;
}

export interface CustomVariablesPreviewType {
    variableName: string;
    valueType: ValueTypeEnum;
    expressionValue: string;
    attributeValue: string;
}

export interface LaiyeChatbotContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    token: DynamicValue<string>;
    customVariables: CustomVariablesType[];
}

export interface LaiyeChatbotPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    token: string;
    customVariables: CustomVariablesPreviewType[];
}
