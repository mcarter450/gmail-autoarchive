function gmailAutoMarkAsRead() {
  var threads = GmailApp.search('older_than:14d is:unread', 0, 100);
  GmailApp.markThreadsRead(threads);
}
