// Project: thermostat-pi-dht
// File: heartbeat-led-pi.ts
//
// Copyright 2021 Henning Kerstan
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { HeartbeatLED } from './HeartbeatLED'

let heartbeatLED: HeartbeatLED = undefined

function shutdown(signalName: string) {
  console.log(
    'Inititiating shutdown due to received "' + signalName + '" signal'
  )

  if (heartbeatLED) {
    heartbeatLED.stop()
  }
  process.exit()
}

// ensure proper shutdown on signals
process.on('SIGINT', () => {
  void shutdown('SIGINT')
})
process.on('SIGQUIT', () => {
  void shutdown('SIGQUIT')
})
process.on('SIGTERM', () => {
  void shutdown('SIGTERM')
})
process.on('SIGHUP', () => {
  void shutdown('SIGHUP')
})

const args = process.argv.slice(2)

if (args.length !== 1) {
  console.log(
    'Usage: "heartbeat-led-pi PIN", where PIN is a valid GPIO pin number.'
  )
  process.exit(-1)
}

heartbeatLED = new HeartbeatLED(Number.parseInt(args[0]))
heartbeatLED.start()
