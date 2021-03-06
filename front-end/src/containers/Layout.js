/*
  Layout

  use of Matrial UI

  current standards and practice use react hooks
*/

import React from 'react'

import { BrowserRouter as Router, Link } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles, useTheme, createStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DeleteIcon from '@material-ui/icons/Delete'
import SendIcon from '@material-ui/icons/Send'
import AddIcon from '@material-ui/icons/Add'

const drawerWidth = 240

const useStyles = makeStyles((theme) =>
  createStyles({
    menuPadding: {
      paddingTop: '15px',
      paddingBottom: '15px'
    },
    root: {
      display: 'flex'
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    hide: {
      display: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  })
)

export default function PersistentDrawerLeft (props) {
  const classes = useStyles()
  const theme = useTheme()

  const [open, setOpen] = React.useState(false)

  function handleDrawerOpen () {
    setOpen(true)
  }

  function handleDrawerClose () {
    setOpen(false)
  }

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              {props.currentMenu}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link
              to="/inbox"
              style={{ textDecoration: 'none' }}
              onClick={() => props.changeMenu('Inbox')}
            >
              <ListItem button key={'Inbox'}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'Inbox'} />
              </ListItem>
            </Link>

            <Link
              to="/sent"
              style={{ textDecoration: 'none' }}
              onClick={() => props.changeMenu('Sent Emails')}
            >
              <ListItem button key={'Sent'}>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText primary={'Sent'} />
              </ListItem>
            </Link>

            <Link
              to="/all-mail"
              style={{ textDecoration: 'none' }}
              onClick={() => props.changeMenu('All Emails')}
            >
              <ListItem button key={'AllMail'}>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={'All Mail'} />
              </ListItem>
            </Link>

            <Divider />

            <Link
              to="/compose"
              style={{ textDecoration: 'none' }}
              className={classes.menuPadding}
              onClick={() => props.changeMenu('Compose A New Email')}
            >
              <ListItem button key={'ComposeEmail'}>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary={'Compose Email'} />
              </ListItem>
            </Link>

            <Divider />

            <Link
              to="/trash"
              style={{ textDecoration: 'none' }}
              className={classes.menuPadding}
              onClick={() => props.changeMenu('Trash')}
            >
              <ListItem button key={'Trash'}>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary={'Trash'} />
              </ListItem>
            </Link>
          </List>
          <Divider />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          {props.children}
        </main>
      </div>
    </Router>
  )
}
