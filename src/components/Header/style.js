const headerStyles = {
  header: {
    width: "100%",
    padding: "0 10px",
    backgroundColor: "blue",
    color: "white",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bolder",
    margin: "10px 0",

    span: {
      border: "2px solid white",
      borderRadius: "5px",
      padding: "5px",
      marginRight: "5px",
    },
  },
  searchPlaces: {
    margin: "10px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    span: {
      marginRight: "10px",
      // fontWeight:'bold',
      fontSize: "0.9rem",
    },

    searchInput: {
      order: "3",
      // border:'2px solid red',
      padding: "5px",
    },

    searchIconBox: {
      // border:'1px solid white',
      // padding:'3px',
      order: "1",
      marginRight: "7px",
      width: "20px",

      img: {
        width: "100%",
        height: "auto",
      },
    },
  },
};

window.addEventListener("resize", () => {
  const mediaQueryList = window.matchMedia("(max-width: 370px)");
  if (mediaQueryList.matches) {
    console.log("first");
    headerStyles.header.flexFlow = "column wrap";
  } else {
    console.log("second");
    headerStyles.header.flexFlow = "row wrap";
  }
});

export default headerStyles;
