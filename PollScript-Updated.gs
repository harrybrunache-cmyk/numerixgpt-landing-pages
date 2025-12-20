function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    Logger.log('Received POST request');
    Logger.log('Parameters: ' + JSON.stringify(e.parameter));
    
    var option = e.parameter.option || '';
    var comment = e.parameter.comment || '';
    var name = e.parameter.name || '';
    var email = e.parameter.email || '';
    
    var timestamp = new Date();
    var hasComment = comment ? 'Yes' : 'No';
    
    Logger.log('Writing: ' + [timestamp, option, comment, hasComment, name, email]);
    sheet.appendRow([timestamp, option, comment, hasComment, name, email]);
    
    return ContentService.createTextOutput('Success');
    
  } catch(error) {
    Logger.log('ERROR: ' + error.toString());
    return ContentService.createTextOutput('Error: ' + error.toString());
  }
}
