function gmailAutoDelete() {
  function moveItemsToTrash(query) {
    var threads = GmailApp.search(query, 0, 100);
    GmailApp.moveThreadsToTrash(threads);
  }
  
  moveItemsToTrash('older_than:14d label:social');
  moveItemsToTrash('older_than:14d label:promotions');
  //moveItemsToTrash('older_than:14d label:forums');
  moveItemsToTrash('older_than:6m -is:important -is:starred -label:important');
}
