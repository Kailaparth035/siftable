import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");


import Colors from "./Colors";





const SIZES = {
    h1: 30,
    h2: 24,
    h3: 20,
    h4: 18,
    h5: 16,
    body1: 30,
    body2: 24,
    body3: 20,
    body4: 18,
    body5: 16,
    fontBarlow: 14,
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    width,
    height
}


export const FONTS = {
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 30 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 24 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 20 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 18 },
    h5: { fontFamily: "Roboto-Bold", fontSize: SIZES.h5, lineHeight: 16 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 30 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 24 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 20 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 18 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 16 },
};





export default {
    Colors,
    SIZES,
    FONTS
}   