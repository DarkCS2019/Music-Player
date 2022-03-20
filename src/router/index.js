import React from 'react';
import { Redirect } from "react-router";
import WYDiscover from "../pages/discover";

import WYRecommend from "../pages/discover/c-pages/recommend";
import WYPlayer from '../pages/player';

const routes = [

    {
        path:"/",
        exact: true,
        render: () => {
            <Redirect to = "/discover/"/>
        }
    },

    {
        path:"/discover",
        component:WYDiscover,
        routes: [
            {
              path: "/discover",
              exact: true,
              render: () => (
                <Redirect to="/discover/recommend"/>
              )
            },
            {
              path: "/discover/recommend",
              component: WYRecommend
            },
            {
              path: "/discover/player",
              component: WYPlayer
            },
          ]
    },
];

export default routes;