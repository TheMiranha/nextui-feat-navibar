import {styled, VariantProps} from "../theme/stitches.config";
import {sharedFocus, sharedVisuallyHidden} from "../theme/shared-css";

export const StyledSwitchContainer = styled("label", {
  WebkitTapHighlightColor: "transparent",
  d: "inline-block",
  verticalAlign: "center",
  whiteSpace: "nowrap",
  us: "none",
  transition: "$default",
  padding: "$1 0",
  position: "relative",
  cursor: "pointer",
  "@motion": {
    transition: "none",
  },
  variants: {
    color: {
      default: {
        $$switchColor: "$colors$primary",
        $$switchColorShadow: "$colors$primaryShadow",
        $$switchColorHover: "$colors$primarySolidHover",
      },
      primary: {
        $$switchColor: "$colors$primary",
        $$switchColorShadow: "$colors$primaryShadow",
        $$switchColorHover: "$colors$primarySolidHover",
      },
      secondary: {
        $$switchColor: "$colors$secondary",
        $$switchColorShadow: "$colors$secondaryShadow",
        $$switchColorHover: "$colors$secondarySolidHover",
      },
      success: {
        $$switchColor: "$colors$success",
        $$switchColorShadow: "$colors$successShadow",
        $$switchColorHover: "$colors$successSolidHover",
      },
      warning: {
        $$switchColor: "$colors$warning",
        $$switchColorShadow: "$colors$warningShadow",
        $$switchColorHover: "$colors$warningSolidHover",
      },
      error: {
        $$switchColor: "$colors$error",
        $$switchColorShadow: "$colors$errorShadow",
        $$switchColorHover: "$colors$errorSolidHover",
      },
    },
    size: {
      xs: {
        $$switchWidth: "$space$12",
        $$switchHeight: "$space$9",
        width: " $$switchWidth",
        maxWidth: "$$switchWidth",
        height: "$$switchHeight",
      },
      sm: {
        $$switchWidth: "$space$14",
        $$switchHeight: "$space$10",
        width: "$$switchWidth",
        maxWidth: "$$switchWidth",
        height: "$$switchHeight",
      },
      md: {
        $$switchWidth: "$space$15",
        $$switchHeight: "$space$11",
        width: "$$switchWidth",
        maxWidth: "$$switchWidth",
        height: "$$switchHeight",
      },
      lg: {
        $$switchWidth: "$space$17",
        $$switchHeight: "$space$12",
        width: "$$switchWidth",
        maxWidth: "$$switchWidth",
        height: "$$switchHeight",
      },
      xl: {
        $$switchWidth: "$space$18",
        $$switchHeight: "$space$13",
        width: "$$switchWidth",
        maxWidth: "$$switchWidth",
        height: "$$switchHeight",
      },
    },
    borderWeight: {
      light: {
        $$switchBorderW: "$borderWeights$light",
      },
      normal: {
        $$switchBorderW: "$borderWeights$normal",
      },
      bold: {
        $$switchBorderW: "$borderWeights$bold",
      },
      extrabold: {
        $$switchBorderW: "$borderWeights$extrabold",
      },
      black: {
        $$switchBorderW: "$borderWeights$black",
      },
    },
    disabled: {
      true: {
        cursor: "not-allowed",
      },
    },
    animated: {
      false: {
        transition: "none",
      },
    },
  },
  defaultVariants: {
    color: "default",
    size: "md",
    borderWeight: "normal",
  },
});

export const StyledSwitchCircle = styled("span", {
  position: "absolute",
  display: "flex",
  size: "calc($$switchHeight * 0.7)",
  jc: "center",
  ai: "center",
  top: "calc(50% - $$switchHeight * 0.35)",
  left: "0",
  transition: "transform 0.25s ease, width 0.2s ease",
  bg: "$background",
  br: "$pill",
  "& svg": {
    bg: "transparent",
    size: "calc($$switchHeight * 0.44)",
  },
  "@motion": {
    transition: "none",
  },
});

export const StyledSwitch = styled(
  "div",
  {
    opacity: 1,
    width: "$$switchWidth",
    height: "$$switchHeight",
    transition: "$default",
    position: "relative",
    overflow: "hidden",
    padding: 0,
    br: "$pill",
    bg: "$accents2",
    "@motion": {
      transition: "none",
    },
    variants: {
      checked: {
        true: {
          bg: "$$switchColor",
          "&:hover:not(&:active)": {
            bg: "$$switchColorHover",
          },
        },
      },
      bordered: {
        true: {
          bg: "transparent",
          border: "$$switchBorderW solid $border",
          "&:hover": {
            borderColor: "$$switchColor",
          },
          [`& ${StyledSwitchCircle}`]: {
            bg: "$accents2",
          },
        },
      },
      squared: {
        true: {
          br: "2px",
          [`& ${StyledSwitchCircle}`]: {
            br: "2px",
          },
        },
      },
      shadow: {
        true: {},
      },
      disabled: {
        true: {
          borderColor: "$accents2",
          bg: "$accents2",
          [`& ${StyledSwitchCircle}`]: {
            bg: "$accents4",
          },
        },
      },
      animated: {
        true: {
          "&:active": {
            [`& ${StyledSwitchCircle}`]: {
              width: "calc($$switchHeight * 0.7 + ($$switchWidth / 10))",
            },
          },
        },
        false: {
          transition: "none",
          [`& ${StyledSwitchCircle}`]: {
            transition: "none",
          },
        },
      },
    },
    compoundVariants: [
      {
        // checked && disabled
        checked: true,
        disabled: true,
        css: {
          bg: "$accents3",
          [`& ${StyledSwitchCircle}`]: {
            bg: "$accents0",
          },
          "&:hover:not(&:active)": {
            bg: "$accents4",
          },
        },
      },
      // shadow && checked
      {
        shadow: true,
        checked: true,
        css: {
          normalShadowVar: "$$switchColorShadow",
        },
      },
      // checked && bordered
      {
        checked: true,
        bordered: true,
        css: {
          bg: "$$switchColor",
          border: "$$switchBorderW solid transparent",
          "&:hover:not(&:active)": {
            borderColor: "transparent",
          },
          [`& ${StyledSwitchCircle}`]: {
            bg: "$background",
          },
        },
      },
    ],
  },
  sharedFocus,
);

export const StyledSwitchInput = styled(
  "input",
  {
    [`& + ${StyledSwitch} > ${StyledSwitchCircle}`]: {
      transform: "translateX(calc($$switchWidth / 15))",
    },
    [`&:checked + ${StyledSwitch} > ${StyledSwitchCircle}`]: {
      transform: "translateX(calc($$switchWidth - $$switchWidth / 15 - $$switchHeight * 0.7))",
    },
    variants: {
      animated: {
        true: {
          [`& + ${StyledSwitch}:active > ${StyledSwitchCircle}`]: {
            transform: "translateX(calc($$switchWidth / 7.5))",
          },
          [`&:checked + ${StyledSwitch}:active > ${StyledSwitchCircle}`]: {
            transform:
              "translateX(calc($$switchWidth - $$switchWidth / 7.5 - $$switchWidth / 10 - $$switchHeight * 0.7))",
          },
        },
      },
      bordered: {
        true: {
          [`& + ${StyledSwitch} > ${StyledSwitchCircle}`]: {
            transform: "translateX(calc($$switchWidth / 15 - $$switchBorderW / 2))",
          },
          [`&:checked + ${StyledSwitch} > ${StyledSwitchCircle}`]: {
            transform:
              "translateX(calc($$switchWidth - $$switchWidth / 15 - $$switchBorderW * 1.5 - $$switchHeight * 0.7))",
          },
        },
      },
    },
    compoundVariants: [
      {
        animated: true,
        bordered: true,
        css: {
          [`& + ${StyledSwitch}:active > ${StyledSwitchCircle}`]: {
            transform: "translateX(calc($$switchWidth / 7.5 - $$switchBorderW / 2))",
          },
          [`&:checked + ${StyledSwitch}:active > ${StyledSwitchCircle}`]: {
            transform:
              "translateX(calc($$switchWidth - $$switchWidth / 7.5 - $$switchWidth / 10 - $$switchBorderW * 1.5 - $$switchHeight * 0.7))",
          },
        },
      },
    ],
  },
  sharedVisuallyHidden,
);

// types
export type SwitchVariantsProps = VariantProps<typeof StyledSwitch>;
export type SwitchContainerVariantsProps = VariantProps<typeof StyledSwitchContainer>;
