// import styled from "styled-components/macro";
import { Dialog, Checkbox, withStyles } from "@material-ui/core";

// export const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   gap: 0.5em;
//   height: 20px;
//   .back-btn,
//   .proceed-btn {
//     padding: 1.4em 1.3em;
//     border-radius: 5px;
//     outline: none;
//     height: 10px;
//     border: none;
//     cursor: pointer;

//     font-size: 0.7rem;
//     z-index: 99;
//     text-transform: capitalize;
//     font-family: "Roboto";
//     font-weight: 20;
//   }

//   .back-btn {
//     background-color: transparent;
//     color: #5840bb;
//     font-weight: 700;
//     &:hover {
//       font-weight: 700;
//     }
//   }

//   .proceed-btn {
//     background-color: rgb(88, 64, 187);
//     color: whitesmoke;
//     min-width: none;
//     &:hover {
//       background-color: #2b235f;
//     }
//   }
// `;

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
