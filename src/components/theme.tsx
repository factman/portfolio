import React from "react"
import {FiMoon, FiSun} from "react-icons/fi"
import {IconButton, useTheme} from "@material-ui/core"
import {useDispatch} from "react-redux";
import {AppStore} from "../utilities/types";
import {useSelector} from "../reduxStore";
import {Action_SetTheme} from "../reduxStore/themeSwitch/actions";

type Props = {
    color?: string;
};

export default function Theme({color}: Props) {
    const theme = useTheme();
    const classes = styles(color)(theme);
    const dispatch = useDispatch();
    const {mode} = useSelector((store: AppStore) => store.themeSwitch);

    return (
        <IconButton
            style={classes.toggle}
            onClick={() => {
                dispatch(Action_SetTheme(mode === "light" ? "dark" : "light"));
            }}
        >
            {mode === "light" ? (
                <FiMoon color={color || "white"} size={25}/>
            ) : (
                <FiSun color={color || "white"} size={25}/>
            )}
        </IconButton>
    )
}

const styles = (color: string | any) =>
    (theme: any) => ({
        toggle: {
            color: color || theme.palette.colors.white,
            marginLeft: theme.spacing(2)
        }
    })
