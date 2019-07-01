# Email Client

## About

[Email Client](https://d358ioepy2yz0y.cloudfront.net)

Ephemeral online email client that will securely check your emails anywhere without holding you information.

Static website with serverless backend.

![](credentials.gif)

![](folder-and-view-email.gif)

![](compose-email.gif)

### Front End Stack

- [Node JS v10.16.0](v10.16.0)
- [React JS](https://reactjs.org/)
- [Axios](https://github.com/axios/axios)
- [Moment](https://momentjs.com/)
- [AWS Amplify](https://aws-amplify.github.io/)

### Back End Stack

- [Python](https://www.python.org/)
- [AWS Chalice](https://chalice.readthedocs.io/en/latest/)
- [Imbox](https://github.com/martinrusev/imbox)
- [Sender](https://sender.readthedocs.io/)

### Internet

- [IMAP Protocol Documentation](http://www.networksorcery.com/enp/protocol/imap.htm); IMAP4 Protocol.
- I believe the imbox library uses .uid() to build its query
- [UID Source Code](https://github.com/python/cpython/blob/3.7/Lib/imaplib.py#L862)

### Thing To Improve

- Add Pagination
- In Reply Email

### Internet Message Access Protocol

Imbox uses a uid lookup. It makes it hard to make the necessary changes to the library, such as reverse as it creates a unique id's for that session. Ordering must be done with those ids and not by date as it would be with [list()](https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.list), [search()](https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.search), or [sort()](https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.sort). The reason to do this is to add pagination. Read More Here: [INTERNET MESSAGE ACCESS PROTOCOL - VERSION 4rev1](http://www.networksorcery.com/enp/rfc/rfc3501.txt)

```
2.3.1.1.

Unique identifiers are assigned in a strictly ascending fashion in the mailbox; as each message is added to the mailbox it is assigned a higher UID than the message(s) which were added previously.
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
