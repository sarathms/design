let colors = {
  BLACK: '#000000',
  WHITE: '#ffffff',
  LIGHT_BLUE: '#5DB8FE',
  OONI_BLUE: '#0588CB',
  DARK_BLUE: '#005B9A',
  SUNFLOWER: '#F39C12',
  ALIZARIN: '#E74C3C',
  BLUE_GREY: '#37474F',
  BLUE_GREY_LIGHT: '#62727B',
  BLUE_GREY_DARK: '#102027'
}

/*
 * The colors below are the result of running this:
colors.palette = palette(colors.OONI_BLUE, {
  // These magic numbers are used to generate the color palette
  darkestGrey: 0.018,
  lightestGrey: 0.94,
  darkestColor: 0.07,
  lightestColor: 0.89
}).flattened
*/

colors.palette = {
  "base": "#0588CB",
  "black: "#f8f9fa",
  "gray0": "#f8f9fa",
  "gray1": "#f1f3f5",
  "gray2": "#e9ecef",
  "gray3": "#dee2e6",
  "gray4": "#ced4da",
  "gray5": "#adb5bd",
  "gray6": "#868e96",
  "gray7": "#495057",
  "gray8": "#343a40",
  "gray9": "#212529",
  "blue0": "#E7F5FF",
  "blue1": "#C9E8FF",
  "blue2": "#94D1FF",
  "blue3": "#5DB8FE",
  "blue4": "#37A6ED",
  "blue5": "#0588CB",
  "blue6": "#0F77B8",
  "blue7": "#056AA6",
  "blue8": "#005F9C",
  "blue9": "#005A99",
  "indigo0": "#edf2ff",
  "indigo1": "#dbe4ff",
  "indigo2": "#bac8ff",
  "indigo3": "#91a7ff",
  "indigo4": "#748ffc",
  "indigo5": "#5c7cfa",
  "indigo6": "#4c6ef5",
  "indigo7": "#4263eb",
  "indigo8": "#3b5bdb",
  "indigo9": "#364fc7",
  "violet0": "#f3f0ff",
  "violet1": "#e5dbff",
  "violet2": "#d0bfff",
  "violet3": "#b197fc",
  "violet4": "#9775fa",
  "violet5": "#845ef7",
  "violet6": "#7950f2",
  "violet7": "#7048e8",
  "violet8": "#6741d9",
  "violet9": "#5f3dc4",
  "fuschia0": "#f8f0fc",
  "fuschia1": "#f3d9fa",
  "fuschia2": "#eebefa",
  "fuschia3": "#e599f7",
  "fuschia4": "#da77f2",
  "fuschia5": "#cc5de8",
  "fuschia6": "#be4bdb",
  "fuschia7": "#ae3ec9",
  "fuschia8": "#9c36b5",
  "fuschia9": "#862e9c",
  "pink0": "#fff0f6",
  "pink1": "#ffdeeb",
  "pink2": "#fcc2d7",
  "pink3": "#faa2c1",
  "pink4": "#f783ac",
  "pink5": "#f06595",
  "pink6": "#e64980",
  "pink7": "#d6336c",
  "pink8": "#c2255c",
  "pink9": "#a61e4d",
  "red0": "#fff5f5",
  "red1": "#ffe3e3",
  "red2": "#ffc9c9",
  "red3": "#ffa8a8",
  "red4": "#ff8787",
  "red5": "#ff6b6b",
  "red6": "#fa5252",
  "red7": "#f03e3e",
  "red8": "#e03131",
  "red9": "#c92a2a",
  "orange0": "#fff4e6",
  "orange1": "#ffe8cc",
  "orange2": "#ffd8a8",
  "orange3": "#ffc078",
  "orange4": "#ffa94d",
  "orange5": "#ff922b",
  "orange6": "#fd7e14",
  "orange7": "#f76707",
  "orange8": "#e8590c",
  "orange9": "#d9480f",
  "yellow0": "#fff9db",
  "yellow1": "#fff3bf",
  "yellow2": "#ffec99",
  "yellow3": "#ffe066",
  "yellow4": "#ffd43b",
  "yellow5": "#fcc419",
  "yellow6": "#fab005",
  "yellow7": "#f59f00",
  "yellow8": "#f08c00",
  "yellow9": "#e67700",
  "lime0": "#f4fce3",
  "lime1": "#e9fac8",
  "lime2": "#d8f5a2",
  "lime3": "#c0eb75",
  "lime4": "#a9e34b",
  "lime5": "#94d82d",
  "lime6": "#82c91e",
  "lime7": "#74b816",
  "lime8": "#66a80f",
  "lime9": "#5c940d",
  "green0": "#ebfbee",
  "green1": "#d3f9d8",
  "green2": "#b2f2bb",
  "green3": "#8ce99a",
  "green4": "#69db7c",
  "green5": "#51cf66",
  "green6": "#40c057",
  "green7": "#37b24d",
  "green8": "#2f9e44",
  "green9": "#2b8a3e",
  "teal0": "#e6fcf5",
  "teal1": "#c3fae8",
  "teal2": "#96f2d7",
  "teal3": "#63e6be",
  "teal4": "#38d9a9",
  "teal5": "#20c997",
  "teal6": "#12b886",
  "teal7": "#0ca678",
  "teal8": "#099268",
  "teal9": "#087f5b",
  "cyan0": "#e3fafc",
  "cyan1": "#c5f6fa",
  "cyan2": "#99e9f2",
  "cyan3": "#66d9e8",
  "cyan4": "#3bc9db",
  "cyan5": "#22b8cf",
  "cyan6": "#15aabf",
  "cyan7": "#1098ad",
  "cyan8": "#0c8599",
  "cyan9": "#0b7285",
  "white": "#212529"
}
colors.palette.white = '#ffffff'

export default colors
