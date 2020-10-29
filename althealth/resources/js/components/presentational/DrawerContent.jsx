import React,{Fragment} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';


import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice';
import LocalPharmacyOutlinedIcon from '@material-ui/icons/LocalPharmacyOutlined';
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import ArrowDropUpOutlinedIcon from '@material-ui/icons/ArrowDropUpOutlined';
import WarningOutlinedIcon from '@material-ui/icons/WarningOutlined';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import ReportRoundedIcon from '@material-ui/icons/ReportRounded';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import ReceiptRoundedIcon from '@material-ui/icons/ReceiptRounded';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import PaymentIcon from '@material-ui/icons/Payment';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const DrawerContent =(user)=>{

    let content = user && user.is_employee? EmployeeContent(): ClientContent();
    return(
        <List>
            {content}
        </List>
    )
}
const EmployeeContent = ()=>{
    let clientContent = ClientContent();
    return(
    <Fragment>
        {clientContent}
        <ListItem button>
            <ListItemIcon>
                <SupervisedUserCircleOutlinedIcon />
            </ListItemIcon>
                <Link component={RouterLink} to="/clients">
                    Clients
                </Link>

        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ArrowDropUpOutlinedIcon />
            </ListItemIcon>
                <Link component={RouterLink} to="/10">
                    Top Ten Clients
                </Link>

        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <WarningOutlinedIcon />
            </ListItemIcon>
                <Link component={RouterLink} to="/no-info">
                    Clients with missing info
                </Link>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <CakeOutlinedIcon />
            </ListItemIcon>
                <Link component={RouterLink} to="/birthdays">
                    Birthdays
                </Link>
        </ListItem>
        <Divider />
            <ListItem button>
            <ListItemIcon>
                <LocalPostOfficeIcon />
            </ListItemIcon>
                <Link component={RouterLink} to="/suppliers">
                    Suppliers
                </Link>

            </ListItem>
            <Divider />
            <ListItem button>
            <ListItemIcon>
                <LocalPharmacyOutlinedIcon />
            </ListItemIcon>
                <Link component={RouterLink} to="/supplements">
                    Supplements
                </Link>

            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <ReportOutlinedIcon />
            </ListItemIcon>
                <Link component={RouterLink} to="/lowstock">
                    Low Stock
                </Link>

            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <CalendarTodayIcon />
            </ListItemIcon>
                <Link component={RouterLink} to="/monthly">
                    Monthly Sales
                </Link>

            </ListItem>
    </Fragment>
    );
}

const ClientContent = ()=>{
    return (
        <Fragment>
        <ListItem button>
        <ListItemIcon>
                <ShoppingCart />
            </ListItemIcon>
                <Link component={RouterLink} to="/shop">
                    Shop
                </Link>

            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <ReceiptRoundedIcon />
            </ListItemIcon>
                <Link component={RouterLink} to="/invoices">
                    Invoices
                </Link>

            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <PaymentIcon />
            </ListItemIcon>
                <Link component={RouterLink} to="/unpaid">
                    Unpaid Invoices
                </Link>

            </ListItem>
            <Divider />
            <ListItem button>
            <ListItemIcon>
                <VerifiedUser />
            </ListItemIcon>
                <Link component={RouterLink} to="/profile">
                    Profile
                </Link>

            </ListItem>
    </Fragment>
    );
}

const GuestContent = ()=>{
    return (
        <List>
            <ListItem button>
            <ListItemIcon>
                <LockOpenOutlinedIcon />
            </ListItemIcon>
                <Link component={RouterLink} to="/login">
                    Login
                </Link>
            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <HowToRegIcon />
            </ListItemIcon>
                <Link component={RouterLink} to="/register">
                    Register
                </Link>

            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <VpnKeyIcon />
            </ListItemIcon>
                <Link component={RouterLink} to="/passwordreset">
                    Forgot Password
                </Link>

            </ListItem>
        </List>

    )
}
export default DrawerContent;
export {DrawerContent,EmployeeContent,ClientContent,GuestContent}
