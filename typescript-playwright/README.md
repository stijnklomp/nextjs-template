# NextJs template

![GitHub](https://img.shields.io/github/license/stijnklomp/nextjs-template?style=flat)

Project template for creating web applications with Typescript and NextJs.

### Testing

#### Unit tests

Unit tests are written and executed in [Jest](https://jestjs.io/).

##### Run unit tests

```bash
npm run test
```

#### Acceptance tests

Acceptance tests are executed with [Gauge](https://gauge.org/) and [Taiko](https://taiko.dev/) for running them in the (headless) browser.

#### Prerequisites

If using WSL on Windows (10), install the following software to run GUI's through WSL:

1. Install an X server to allow GUI to run via WSL

    Here is an example using [VcXsrv](https://sourceforge.net/projects/vcxsrv/):

    1.1. After installation, create a new desktop shortcut and add the following command to properties -> shortcut -> target

    ```bash
    "C:\Program Files\VcXsrv\vcxsrv.exe" :0 -ac -terminate -lesspointer -multiwindow -clipboard -wgl -dpi auto
    ```

    - `"C:\Program Files\VcXsrv\vcxsrv.exe"`: This is the path to the VcXsrv executable file, which is the main program that runs the X server

    - `:0`: This specifies the display number for the X server. In this case, it's set to `0`

    - `-ac`: This option allows any client to connect to the X server

    - `-terminate`: This option terminates the X server when the last client disconnects

    - `-lesspointer`: This option hides the mouse pointer when it's over a window.

    - `-multiwindow`: This option enables multiple windows instead of a single root window

    - `-clipboard`: This option enables clipboard synchronization between the X server and Windows

    - `-wgl`: This option uses Windows Graphics Library for OpenGL rendering

    - `-dpi auto`: This option automatically determines the DPI (dots per inch) setting based on the Windows display configuration

    1.2. *Optional step:* Add the newly created shortcut to your startup folder

2. Install [Google Chrome for Linux](https://learn.microsoft.com/en-us/windows/wsl/tutorials/gui-apps#install-google-chrome-for-linux)

##### Run acceptance tests

```bash
npm run test:acceptance
```