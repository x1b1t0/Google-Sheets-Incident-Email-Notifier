English Version
Google Sheets Incident Email Notifier
This script is designed for use in Google Sheets to automatically send an email when an incident is marked as resolved. The email is sent when the user enters the value "si" in column I (the status column) of a specific row.

Features
Automatically sends an email when an incident status is marked as "si" in column I.
Retrieves incident details from other columns such as:
Email address (column G)
Incident content (column F)
Responsible person (column J)
Resolution date (column H)
Validates that necessary data is present before sending the email.
Installation
Open the Google Sheet where you want to add the script.
Click on Extensions > Apps Script.
Replace the default code in the script editor with the script above.
Save the script.
Ensure your Google Sheets has the appropriate columns (G, F, H, I, and J) with the necessary data.
Usage
Edit a cell in column I to "si", and the script will send an email with the details from the row.
The email will contain the incident content, responsible person, and resolution date.
Requirements
Google Sheets with the necessary columns.
Google Apps Script enabled.
Versión en Español
Notificador de Correos para Incidencias en Google Sheets
Este script está diseñado para su uso en Google Sheets con el fin de enviar automáticamente un correo cuando una incidencia sea marcada como resuelta. El correo se envía cuando el usuario ingresa el valor "si" en la columna I (columna de estado) de una fila específica.

Características
Envía automáticamente un correo cuando el estado de la incidencia se marca como "si" en la columna I.
Recupera detalles de la incidencia de otras columnas como:
Dirección de correo electrónico (columna G)
Contenido de la incidencia (columna F)
Persona responsable (columna J)
Fecha de resolución (columna H)
Valida que los datos necesarios estén presentes antes de enviar el correo.
Instalación
Abre el Google Sheet donde deseas agregar el script.
Haz clic en Extensiones > Apps Script.
Reemplaza el código predeterminado en el editor de scripts con el script anterior.
Guarda el script.
Asegúrate de que tu hoja de Google Sheets tenga las columnas correspondientes (G, F, H, I y J) con los datos necesarios.
Uso
Edita una celda en la columna I para poner "si", y el script enviará un correo con los detalles de la fila.
El correo incluirá el contenido de la incidencia, la persona responsable y la fecha de resolución.
Requisitos
Google Sheets con las columnas necesarias.
Google Apps Script habilitado.
