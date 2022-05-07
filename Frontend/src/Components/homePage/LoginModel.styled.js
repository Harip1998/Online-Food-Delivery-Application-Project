import { Dialog, Checkbox, withStyles } from "@material-ui/core";

export const StyledDialog = withStyles({
  scrollPaper: {
    alignItems: "baseline",
  },
  paperWidthSm: {
    maxWidth: 800,
  },
})(Dialog);

export const StyledCheckbox = withStyles({
  root: {
    padding: 0,
    color: "white",
    backgroundColor: "#5840bb",
    borderRadius: 0,
    "& .MuiSvgIcon-root ": {
      fill: "#5840bb",
    },
    "&$checked": {
      color: "white",
    },
    "&:hover": {},
  },
  checked: {},
})(Checkbox);
