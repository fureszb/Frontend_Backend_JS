const UrlapLeriro = {
  nev: {
    megj: "Név",
    type: "text",
    placeholder: "Valaki vagyok",
    value: "",
    regex: "[A-Z][a-z]{2,15}",
    valid: "Nagybetűvel kezdődik, legalább 3 betű legyen!"
  },
  szul: {
    megj: "Születési idő",
    type: "number",
    placeholder: "",
    value: "",
    regex: {
      min: 1000,
      max: 2023,
    },
    valid: "1000 és 2023 közötti szám legyen"
  },
  nem: {
    megj:"Nemed",
    type:"radio",
    value:{
      ferfi: "Férfi",
      no: "Nő",
    }

  }
};
export default UrlapLeriro;
