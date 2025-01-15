// Script hecho por @X1b1t0
function onEdit(e) {
  try {
    // Verifica que el objeto 'e' esté definido y tenga las propiedades necesarias
    if (!e || !e.source || !e.range) {
      Logger.log("El objeto de evento es indefinido o no tiene las propiedades necesarias.");
      return; // Sale de la función si el objeto 'e' no es válido
    }

    // Obtiene la hoja activa desde el objeto de evento
    var sheet = e.source.getActiveSheet();
    
    // Obtiene el rango editado y la posición (fila y columna)
    var editedRange = e.range;
    var editedColumn = editedRange.getColumn();
    var editedRow = editedRange.getRow();

    // Verifica si la edición fue en la columna 9 (columna I)
    if (editedColumn === 9) {
      var status = editedRange.getValue().toString().toLowerCase().trim(); // Asegura que el valor es texto en minúsculas
      
      // Si el valor de la celda editada es "si"
      if (status === "si") {
        // Obtiene el email, el contenido de la incidencia, el responsable y la fecha de resolución
        var email = sheet.getRange(editedRow, 7).getValue();       // Columna 7 (G)
        var contenido = sheet.getRange(editedRow, 6).getValue();   // Columna 6 (F)
        var resolvedBy = sheet.getRange(editedRow, 10).getValue(); // Columna 10 (J)
        var fechaResolucion = sheet.getRange(editedRow, 8).getValue(); // Columna 8 (H)
        
        // Validar que las celdas necesarias no estén vacías
        if (!email || !contenido || !resolvedBy || !fechaResolucion) {
          Logger.log("Faltan datos en la fila " + editedRow + ". No se enviará el correo.");
          return;
        }
        
        // Asunto y mensaje del correo
        var subject = "Incidència Resolta";
        var message = "L'incidència informàtica que vas reportar ha sigut resolta.\n\n" +
                      "Detalls de la incidència:\n" + contenido + "\n" +
                      "Resolució per: " + resolvedBy + "\n" +
                      "Data de resolució: " + fechaResolucion + "\n\n" +
                      "Gràcies per la teua paciència.";

        // Envía el correo electrónico
        MailApp.sendEmail(email, subject, message);
        Logger.log("Correo enviado a: " + email + " (Fila " + editedRow + ")");
      }
    }
  } catch (error) {
    Logger.log("Error en el script: " + error.message);
  }
}
