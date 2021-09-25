# heartbeat-led-pi

A TypeScript implementation of a heartbeat LED for Node.js on a Raspberry Pi.

## Table of Contents

1. [Description](#1-description)
1. [Installation](#2-installation)
1. [Usage](#3-usage)
1. [Contributing](#4-contributing)
1. [Version History](#5-version-history)
1. [License](#6-license)

## 1. Description

This is a simple TypeScript implementation of a heartbeat LED for Node.js on a Raspberry Pi. It pulses a LED connected to a GPIO every 2s for 10ms.

## 2. Installation

This framework is available as a Node.js-module. You can thus use Node.js' package manager `npm` to install the latest production version from the [npm registry](https://npmjs.com). Depending on your use case, the installation method differs slightly.

### 2.1 Standalone application

For using the standalone application it is best to install the package globally by running the following command.

    sudo npm i -g --unsafe-perm @henningkerstan/heartbeat-led-pi

### 2.2 Library

For using the library in your own application install the package locally by running the following command

    npm i @henningkerstan/heartbeat-led-pi

in your project's directory.

## 3. Usage

### 3.1 Standalone application

Once the package is installed, you can run it with

```
heartbeat-led-pi 4
```

if your LED is connected to GPIO pin 4; otherwise simply change to the GPIO pin you use.

### 3.2 Use the library in your own application

Since this framework is written in TypeScript, you can use it both with TypeScript as well as with plain JavaScript. Below you can find short examples to get you started in both languages.

The library also comes with an online [documentation](https://henningkerstan.github.io/heartbeat-led-pi/). A good starting point for further reading is the [documentation of the HeartbeatLED class](https://henningkerstan.github.io/heartbeat-led-pi/classes/HeartbeatLED.HeartbeatLED-1.html). Moreover, as this documentation is generated from source code comments using [TypeDoc](https://typedoc.org), a supported editor (like [Visual Studio Code](https://code.visualstudio.com/)) can provide on-the-fly information on functions, parameters, etc..

All major functionality is contained in the [HeartbeatLED class](https://henningkerstan.github.io/heartbeat-led-pi/classes/HeartbeatLED.HeartbeatLED-1.html), hence you will most likely only need to import this class:

```typescript
import { HeartbeatLED } from '@henningkerstan/heartbeat-led-pi'
```

and then create an instance of that class for each heartbeat LED you require. Have a look at the [source code of the standalone application](https://github.com/henningkerstan/heartbeat-led-pi/blob/main/src/heartbeat-led-pi.ts) and the [documentation of the HeartbeatLED class](https://henningkerstan.github.io/heartbeat-led-pi/classes/HeartbeatLED.HeartbeatLED-1.html) to see how it works in detail.

## 4. Contributing

Contact the main author ([Henning Kerstan](https://henningkerstan.de)) if you want to contribute. More details will be available here soon.

This project uses [semantic versioning](https://semver.org/). However, despite most of the API being ready, note that since we are still in development (version 0.x.y), anything may yet change at any time.

## 5. Version history

Please have a look at the git commit log for a version history.

## 6. License

Copyright 2021 [Henning Kerstan](https://henningkerstan.de)

SPDX-License-Identifier: Apache-2.0
