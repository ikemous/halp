import { DropdownsOptions } from "./types";

export const STATUS_OPTIONS:Array<DropdownsOptions> = [
    { text: "New", value: "New" },
    { text: "In Progress", value: "In Progress" },
    { text: "Waiting for Customer", value: "Waiting for Customer" },
    { text: "Completed", value: "Completed" },
];
export const TYPE_OPTIONS:Array<DropdownsOptions> = [
    { text: "Hardware", value: "Hardware" },
    { text: "Software", value: "Software" },
    { text: "Inquiry", value: "Inquiry" },
    { text: "Misc.", value: "Misc." },
];

export const PRIORITY_OPTIONS:Array<DropdownsOptions> = [
    { text: "1 - Critical", value: 1 },
    { text: "2", value: 2 },
    { text: "3 - Moderate", value: 3 },
    { text: "4", value: 4 },
    { text: "5 - Very Low", value: 5 },
];
