# **Google Sheets Incident Email Notifier** 

## **Versión en Español**

Este script está diseñado para su uso en Google Sheets para enviar automáticamente un correo cuando una incidencia sea marcada como resuelta. El correo se envía cuando el usuario ingresa el valor `"si"` en la columna I (columna de estado) de una fila específica.

### **Características**

- Envía automáticamente un correo cuando el estado de la incidencia se marca como `"si"` en la columna I.
- Recupera detalles de la incidencia desde otras columnas, como:
  - **Dirección de correo electrónico** (columna G)
  - **Contenido de la incidencia** (columna F)
  - **Persona responsable** (columna J)
  - **Fecha de resolución** (columna H)
- Valida que los datos necesarios estén presentes antes de enviar el correo.

### **Instalación**

1. Abre la hoja de Google Sheets donde deseas agregar el script.
2. Haz clic en **`Extensiones`** > **`Apps Script`**.
3. Reemplaza el código predeterminado en el editor de scripts con el script que aparece más arriba.
4. Guarda el script.
5. Asegúrate de que tu hoja de Google Sheets tenga las columnas necesarias (G, F, H, I y J) con los datos correspondientes.

### **Uso**

- Edita una celda en la **columna I** y pon el valor `"si"`, y el script enviará automáticamente un correo con los detalles de esa fila.
- El correo incluirá el **contenido de la incidencia**, la **persona responsable** y la **fecha de resolución**.

### **Requisitos**

- Hoja de Google Sheets con las columnas necesarias.
- **Google Apps Script** habilitado.

---

## **English Version**

This script is designed for use in Google Sheets to automatically send an email when an incident is marked as resolved. The email is sent when the user enters the value `"si"` in column I (the status column) of a specific row.

### **Features**

- Automatically sends an email when an incident status is marked as `"si"` in column I.
- Retrieves incident details from other columns such as:
  - **Email address** (column G)
  - **Incident content** (column F)
  - **Responsible person** (column J)
  - **Resolution date** (column H)
- Validates that necessary data is present before sending the email.

### **Installation**

1. Open the Google Sheet where you want to add the script.
2. Click on **`Extensions`** > **`Apps Script`**.
3. Replace the default code in the script editor with the script provided above.
4. Save the script.
5. Make sure your Google Sheet has the appropriate columns (G, F, H, I, and J) with the necessary data.

### **Usage**

- Edit a cell in **column I** and enter `"si"`, and the script will automatically send an email with the details from that row.
- The email will include the **incident content**, the **responsible person**, and the **resolution date**.

### **Requirements**

- Google Sheets with the necessary columns.
- **Google Apps Script** enabled.

