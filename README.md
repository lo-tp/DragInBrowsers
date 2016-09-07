# DragInBrowser

This is an example to demonstrate **how to implement drag actions in mobile browsers** for this [article][hello]. 

## How to Run

### Node

```sh
npm install
node server.js
```

### Python

```sh
pip install -r requirements.txt
python server.py
```

### Ruby
```sh
ruby server.rb
```

### PHP
```sh
php server.php
```

### Go
```sh
go run server.go
```

### Perl

```sh
cpan Mojolicious
perl server.pl
```

And visit <http://localhost:3000/>. Try opening multiple tabs!

## Changing the port

You can change the port number by setting the `$PORT` environment variable before invoking any of the scripts above, e.g.,

```sh
PORT=3001 node server.js
```

[hello]:http://blog.lotp.xyz/2016/09/07/Drag-Gestures-Inside-Mobile-Browsers-Purely-in-CSS-and-JS/
