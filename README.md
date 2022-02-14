# Gmail Autoarchive
Simple google app scripts for automatically archiving old notifications, newsletters and promo emails. 

## Clasp Installation
Visit https://github.com/google/clasp and follow instructions for installing Clasp as a global npm dependency. Clasp can be used to automatically deploy this project to your google account.

## Usage
These scripts are best configured to run periodically and are designed to gradually reduce the footprint of an inbox. Be careful with the gmailAutoDelete command as it will remove messages that aren't marked as important and older than 6 months. Always test these functions with a smaller subset of messages to verify everything is working as expected and having the desired effect.
