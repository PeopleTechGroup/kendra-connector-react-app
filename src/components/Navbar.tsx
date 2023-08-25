import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	InputBase,
	Collapse,
	Drawer,
	List,
	ListItem,
	ListItemText,
	Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		grow: {
			flexGrow: 1,
		},
		inputRoot: {
			color: "inherit",
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create("width"),
			width: "calc(100% + 10px)",
			[theme.breakpoints.up("md")]: {
				width: "20ch",
			},
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		nested: {
			paddingLeft: theme.spacing(4),
		},
		search: {
			position: "relative",
			borderRadius: theme.shape.borderRadius,
			marginRight: theme.spacing(2),
			marginLeft: 0,
			width: "100%",
			[theme.breakpoints.up("sm")]: {
				marginLeft: theme.spacing(3),
				width: "auto",
			},
		},
		searchIcon: {
			padding: theme.spacing(0, 2),
			height: "100%",
			position: "absolute",
			pointerEvents: "none",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		defaultColor: {
			color: "initial",
		},
		drawerPaper: {
			minWidth: "400px",
			width: "fit-content",
		},
		listItemRoot: {
			paddingLeft: "10px",
		},
	})
);


const NavBar = () => {
    const [isDrawerOpen,setIsDrawerOpen] = useState(false);
    const classes = useStyles();

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    		if (
    			event.type === "keydown" &&
    			((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    		) {
    			return;
    		}
    		setIsDrawerOpen(open);
    	};

    const [open, setOpen] = React.useState(true);
    const [expand, setExpand] = React.useState(true);
    const [searchValue, setSearchValue] = useState("");

    const handleClick = () => {
        setOpen(!open);
    };

    const handleExpand = () => {
            setExpand(!expand);
        };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    		setSearchValue(event.target.value);
    	};

    const handleSelectChange = (
    		ev: React.ChangeEvent<{
    			name?: string | undefined;
    			value: unknown;
    		}>
    	) => {
    		setMenuItemPath(ev.target.value as string);
    	};

    const [selectedMenuItemPath, setMenuItemPath] = useState<string>("/home");


    return(
    <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.grow}>
                       Kendra Connector Management
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ "aria-label": "search" }}
                            value={searchValue}
                            onChange={handleSearchChange}
                            onKeyPress={(event: any) => {
                                if (event.key === "Enter") {
                                   return null;
                                }
                            }}
                        />
                    </div>
                    <div className={classes.grow} />
                </Toolbar>      {/* The Toolbar with items to be visible in the home page header */}
           </AppBar>  {/* The Appbar in the home page header */}
           <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)} classes={{ paper: classes.drawerPaper }}>
           <List> {/* The Drawer to pop-out of the hamburger menu */}
                <ListItem button  component={Link} to="/">
                		<ListItemText primary="Home" />
                </ListItem>
                <ListItem button  component={Link} to="/kendraHome">
                        <ListItemText primary="AWS Kendra Service" />
                </ListItem>
                <ListItem>
                    <Grid item data-testid="documentation">
                        <ListItemButton
                        data-testid="kendraIndexes"
                        component={Link}
                        to="/kendraDocumentation"
                        onClick={handleClick}>
                            {/*List item icon can placed here*/}
                            <ListItemText primary="Documentation" />
                        </ListItemButton>
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid item data-testid="documentation">
                        <ListItemButton
                        data-testid="kendraIndexes"
                        component={Link}
                        to="/kendraIndexes"
                        onClick={handleClick}>
                            {/*List item icon can placed here*/}
                            <ListItemText primary="Manage Indices " />
                        </ListItemButton>
                    </Grid>
                </ListItem>
                <ListItem button  component={Link} to="/">
                        <ListItemText primary="AWS Kendra DataSources" />
                </ListItem>
                <ListItem button  component={Link} to="/">
                    <Grid item data-testid="datasources-dropdown">
                        <ListItemButton onClick={handleExpand}>
                            {/*List item icon can placed here*/}
                            <ListItemText primary="Manage Data Sources" />
                            {expand ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={expand} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="Alfresco" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
{/*                                 <ListItemIcon> */}
{/*                                   <StarBorder /> */}
{/*                                 </ListItemIcon> */}
                                <ListItemText primary="Github" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="ServiceNow" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="SharePoint" />
                            </ListItemButton>
                              <ListItemButton sx={{ pl: 4 }}>
                                  <ListItemText primary="S3" />
                              </ListItemButton>
                            </List>
                        </Collapse>
                    </Grid>
                </ListItem>
           </List>
           </Drawer>
        </div>
    );
};

export default NavBar;