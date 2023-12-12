import {Method} from "axios"

export type RequestMethods = Extract<Method, "get" | "post" | "put" | "delete" | "option" | "head" | "patch">