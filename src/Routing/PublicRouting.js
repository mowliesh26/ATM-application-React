import { lazy } from "react";

export const PublicRouting = [
    {
        name: "login",
        path: "/",
        component: lazy(() => import("../Login/Login"))
    },
    {
        name: "wrong",
        path: "*",
        component: lazy(() => import("../Login/Login"))
    }
]