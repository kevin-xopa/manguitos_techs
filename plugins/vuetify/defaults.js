export default {
  VBtn: {
    size: "small",
    rounded: "lg",
    variant: "elevated",
    elevation: 4,
  },
  VCard: {
    elevation: 4,
    rounded: "lg",
    VCardTitle: {
      class: "text-justify text-wrap",
    },
    VCardSubtitle: {
      class: "text-justify text-wrap",
    },
    VCardActions: {
      VBtn: { variant: "elevated", size: "small", rounded: "lg", elevation: 4 },
    },
  },
  VDataTable: {
    fixedHeader: true,
    noDataText: "No existen datos",
    loadingText: "Preparando datos",
    density: "compact",
    class: "rounded-lg elevation-4",
    fixedFooter: true,
    hover: true,
    height: "600",
    itemsPerPageOptions: [20, 50, 100],
    itemsPerPageText: "Registros por pagina",
    mobileBreakpoint: "sm",
    itemsPerPageAll: "Todo",
    pageText: "{0}-{1} de {2}",
  },
  VDataTableServer: {
    fixedHeader: true,
    noDataText: "No existen datos",
    loadingText: "Preparando datos",
    density: "compact",
    class: "rounded-lg elevation-4",
    fixedFooter: true,
    hover: true,
    height: "600",
    itemsPerPageOptions: [20, 50, 100],
    itemsPerPageText: "Registros por pagina",
    mobileBreakpoint: "sm",
    itemsPerPageAll: "Todo",
    pageText: "{0}-{1} de {2}",
  },
  VTextField: {
    elevation: 4,
    variant: "outlined",
    rounded: "lg",
    color: "primary",
    density: "compact"
  },
  VTextarea: {
    elevation: 4,
    variant: "outlined",
    density: "compact",
    rounded: "lg",
    color: "primary",
  },
  VSelect: {
    elevation: 4,
    variant: "outlined",
    rounded: "lg",
    noDataText: "Nada por aquí",
    dense: true,
    color: "primary",
    density: "compact"
  },
  VDialog: {
    scrollable: true,
  },
};
