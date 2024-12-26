import { lazy } from "react";

export const RoutingPart = [
    {
        name: "login",
        path: "/",
        component: lazy(() => import("../Login/Login"))
    },
    {
        name: "language",
        path: "/language",
        component: lazy(() => import("../Language/Language"))
    },

    {
        name: "home",
        path: "/home",
        component: lazy(() => import("../Home/Home"))
    },
    {
        name: "balance",
        path: "/balance",
        component: lazy(() => import("../CheckBalance/CheckBalance"))
    },
    {
        name: "showbalance",
        path: "/showbalance",
        component: lazy(() => import("../ShowBlance/ShowBalance"))
    },
    {
        name: "cashwithdraw",
        path: "/cashwithdraw",
        component: lazy(() => import("../CashWithdraw/CashWithdraw"))
    },
    {
        name: "cashdeposit",
        path: "/cashdeposit",
        component: lazy(() => import("../Cashdeposit/CashDeposit"))
    }
   
]

