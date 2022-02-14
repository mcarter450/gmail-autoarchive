function driveAutoDeleteSpam() {
  // Log the name of every file in the user's Drive.
  var files = DriveApp.getFiles();
  while (files.hasNext()) {
    var file = files.next();
    Logger.log(file.getName());
  }
}
