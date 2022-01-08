import React from "react"
import {Button, useTheme} from "@material-ui/core"
import Box from "@material-ui/core/Box"
import InnerContainer from "./inner-container"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import {FiMail, FiMapPin, FiPhone} from "react-icons/fi"
import SmartBr from "./smart-br"
import Link from "./Link";

export default function Footer() {
  const theme = useTheme()
  const classes = styles(theme)
  const MenuItems = [
    {path: "/", title: "Home"},
    {path: "/about", title: "About"},
    {path: "/creative", title: "Creative"},
    {path: "/company", title: "Organization"},
    {path: "/blog", title: "Blog"},
    {path: "/contact", title: "Contact"}
  ]
  const contactInfo = [
    {
      icon: <FiMapPin color={theme.palette.primary.main} size={20}/>,
      text: "824 Bel Meadow Drive, California, USA"
    },
    {
      icon: <FiPhone color={theme.palette.primary.main} size={20}/>,
      text: "(+00) 236 547 8899 OR 236 547 8800"
    },
    {
      icon: <FiMail color={theme.palette.primary.main} size={20}/>,
      text: "Support@createensemble.com"
    }
  ]

  return (
      <Box style={classes.root} component={"footer"}>
        <InnerContainer>
          <Grid container spacing={10}>
            <Grid item sm={12} md={4}>
              <Typography variant={"h4"} style={classes.header}>
                About Us
              </Typography>
              <Typography style={classes.text}>
                Create Ensemble is a dynamic platform that allows you to convert your entertainment projects from dreams
                to reality. <SmartBr/> By connecting creatives across theatre, film, television, gaming and new media,
                Create
                Ensemble places you at the helm of your creative destiny.
              </Typography>
              <Button
                  style={classes.readMore as any}
                  variant={"text"}
                  color={"primary"}
                  disableRipple
              >
                <Link href={"/about"}>Read More</Link>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                  sx={{
                    paddingLeft: [0, 0, "100px"]
                  }}
                  component={"div"}
              >
                <Typography variant={"h4"} style={classes.header}>
                  Quick Links
                </Typography>
                {MenuItems.map((item, index) => (
                    <Button
                        key={index}
                        style={classes.link as any}
                        disableRipple
                    >
                      <Link href={item.path}>{item.title}</Link>
                    </Button>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant={"h4"} style={classes.header}>
                Contact Us
              </Typography>
              {contactInfo.map((info, index) => (
                  <Box key={index} component={"div"} style={classes.contactCon as any}>
                    <Box component={"div"}>{info.icon}</Box>
                    <Typography style={classes.info}>{info.text}</Typography>
                  </Box>
              ))}
              <Button
                  style={classes.sendButton}
                  variant={"contained"}
                  color={"primary"}
                  size={"large"}
              >
                <Link href={"/contact"}>Send Us Message</Link>
              </Button>
            </Grid>
          </Grid>
          <Box
              style={{
                color: theme.palette.common.white,
                padding: `${theme.spacing(5)}px 0`
              }}
              sx={{textAlign: ["center", "center", "left"]}}
              component={"div"}
          >
            <Typography>© 2021 All rights reserved.</Typography>
          </Box>
        </InnerContainer>
      </Box>
  )
}

const styles = (theme: any) => ({
  root: {
    backgroundColor: theme.palette.colors.backgroundDark,
    padding: `${theme.spacing(10)}px 0 ${theme.spacing(5)}px`
  },
  header: {
    color: theme.palette.colors.white,
    marginBottom: theme.spacing(4)
  },
  text: {
    color: theme.palette.colors.white,
    fontStyle: "italic"
  },
  readMore: {
    marginTop: theme.spacing(2),
    textTransform: "uppercase",
    backgroundColor: "transparent",
    paddingLeft: 0,
    paddingRight: 0,
    fontWeight: "bold",
    color: theme.palette.colors.primary,
    "&:hover": {
      textDecoration: "underline",
      textTransform: "uppercase",
      backgroundColor: "transparent",
      paddingLeft: 0,
      paddingRight: 0,
      fontWeight: "bold",
      color: theme.palette.colors.primary
    }
  },
  link: {
    textTransform: "capitalize",
    backgroundColor: "transparent",
    padding: 0,
    color: theme.palette.colors.white,
    display: "block",
    fontSize: "15px",
    lineHeight: "42px",
    "&:hover": {
      textDecoration: "underline",
      textTransform: "capitalize",
      backgroundColor: "transparent",
      padding: 0,
      color: theme.palette.colors.white,
      display: "block",
      fontSize: "15px",
      lineHeight: "42px"
    }
  },
  contactCon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: theme.spacing(2)
  },
  info: {
    color: theme.palette.colors.white,
    marginLeft: theme.spacing(2),
    fontSize: "15px",
    lineHeight: "28px"
  },
  sendButton: {
    marginTop: theme.spacing(2),
    color: theme.palette.colors.white,
    "&:hover": {
      color: theme.palette.colors.white
    }
  }
})
