# Mantra QR demo application

This is a simple Mantra application to generate QR codes.

To install it, run this inside the project folder:

```bash
$ mantrad install
```

Then, to run it just type:

```bash
$ mantra startapp mainapp
```

Then, open the browser pointing to http://localhost:8080

# Components
This simple app implements two basic components:

* qrmain: with two views, one to enter the url and another to generate the QR code.
* qrcodegenerator: defines a simple API to generate the QR code in base64 image format.

# About Mantra
Mantra is the core of a framework to build scalable an higly maintenable applications.
More info at [https://www.mantrajs.com](Mantra Site).