import type { ThemeConfig } from "antd";

export const TouchersTheme: ThemeConfig = {
  token: {
    fontFamily: "Arial, sans-serif",
    // colorBgLayout: "#FFFBF2",
  },
  components: {
    Layout: {
      // colorBgHeader: "#6B2B2B",
      // colorPrimary: "#333333",
    },
    Input: {
      colorBgContainer: "#a96e6e",
      colorText: "white",
      colorTextPlaceholder: "rgba(255, 255, 255, 0.85)",
    },
    Radio: {
        colorPrimary: "#812c21", // Main brand color for active state
        colorPrimaryHover: "#6a241c",
        colorPrimaryActive: "#5a1e18",

        buttonSolidCheckedBg: "#812c21",
        buttonSolidCheckedColor: "#ffffff",

        buttonBg: "#f7e6dd", // background of unselected buttons
        buttonColor: "#812c21", // text color of unselected buttons

        controlHeight: 40, // button height
        borderRadius: 8, // rounded corners
        padding: 12, // internal padding
      },
  },
};
