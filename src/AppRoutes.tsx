import {Route} from "react-router-dom";
import React from "react";
import DashboardPage from "./js/pages/DashboardPage";
import LoginPage from "./js/pages/LoginPage";

type ProtectedProps = {
    element: React.JSX.Element
}

const Authenticated = ({element}: ProtectedProps): React.JSX.Element => {
    // useUserState();

    return element;
};

const protectedRoute = (route: string, element: React.JSX.Element) => {
    <Route key={route} path={route} element={<Authenticated element={element} />} />
};

const publicRoute = (route: string, element: React.JSX.Element): React.JSX.Element => {
    return <Route key={route} path={route} element={element}/>;
};

export const appRoutes: React.JSX.Element[] = [
    publicRoute('/', <DashboardPage/>),
    publicRoute('/dashboard', <DashboardPage/>),
    publicRoute('/login', <LoginPage/>)
];