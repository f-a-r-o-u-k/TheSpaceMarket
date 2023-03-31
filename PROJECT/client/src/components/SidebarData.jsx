import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

export const SidebarData = [
    {
        title:"Users profile",
        icon:<AccountCircleIcon/>,
        Link : "/dashboard"
    },
    {
        title:"Products",
        icon:<ProductionQuantityLimitsIcon/>,
        Link : "/products"
    },
   
];
