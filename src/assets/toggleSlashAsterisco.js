const toggleSlashAsterisco = (texto) => {
  if (texto.includes("/")) {
    // Reemplazar todas las ocurrencias de "/" por "*"
    const textoModificado = texto
      .split("")
      .map((c) => (c === "/" ? "*" : c))
      .join("");
    return textoModificado;
  } else if (texto.includes("*")) {
    // Reemplazar todas las ocurrencias de "*" por "/"
    const textoModificado = texto
      .split("")
      .map((c) => (c === "*" ? "/" : c))
      .join("");
    return textoModificado;
  } else {
    // Si no hay ni "/" ni "*", devolver el mismo texto
    return texto;
  }
};

export default toggleSlashAsterisco;
