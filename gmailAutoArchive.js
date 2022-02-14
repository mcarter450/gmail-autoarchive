function gmailAutoArchive() {
  var threads = GmailApp.search('older_than:3m in:inbox', 0, 300);
  for (var i = 0; i < threads.length; i++) {
    threads[i].moveToArchive();
  }
}
