// DashboardStyle.js
const DashboardStyle = {
    rootStyle: {
        height: "100vh",
        overflowY: "auto",
        textAlign: "center",
    },
    contentStyle: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        maxWidth: "800px",
        margin: "0 auto",
    },
    boxStyle: {
        width: "150px", // Ajuster la largeur du box
        height: "100px", // Ajuster la hauteur du box
        margin: "10px",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
        fontSize: "16px", // Réduire la taille des titres
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer",
        background: "#007bff",
        textDecoration: "none", // Enlève le soulignage du lien
    },
    itemStyle: {
        textAlign: "center",
        minWidth: "150px", // Ajuster la largeur minimale du box
        margin: "5px",
        textDecoration: "none", // Enlève le soulignage du lien
    },
    titleStyle: {
        marginBottom: "5px",
        textDecoration: "none", // Enlève le soulignage du lien
    },
};

export default DashboardStyle;
