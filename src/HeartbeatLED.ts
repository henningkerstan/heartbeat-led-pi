// Project: heartbeat-led-pi
// File: HeartbeatLED.ts
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

import { Gpio } from 'onoff'

/**
 * An implementation of a heartbeat (LED) GPIO.
 * A heartbeat LED will be pulsed regularly to indicate that a program is still running.
 */
export class HeartbeatLED {
  /** GPIO pin to which the heartbeat LED is connected. */
  public get heartbeatPin(): number {
    return this._heartbeatPin
  }

  /** Starts the heartbeat. */
  public start(): void {
    if (this._isActive) {
      return
    }

    if (!this._heartbeatGpio) {
      return
    }

    this._isActive = true

    void this.ledOn()
  }

  /** Stops the heartbeat. */
  public stop(): void {
    this._isActive = false
  }

  private ledOn() {
    if (!this._isActive) {
      this._heartbeatGpio.writeSync(0)
      return
    }
    this._heartbeatGpio.writeSync(1)
    setTimeout(this.ledOff.bind(this), 10)
  }

  private ledOff() {
    this._heartbeatGpio.writeSync(0)

    if (!this._isActive) {
      return
    }

    setTimeout(this.ledOn.bind(this), 2000)
  }

  /** Constructs a new heartbeat LED.
   * @param pin The GPIO pin to which the LED is connected.
   */
  constructor(pin: number) {
    this._heartbeatPin = pin
    this._heartbeatGpio = new Gpio(pin, 'out')
  }

  // Private members
  /** GPIO pin to which the heartbeat LED is connected. */
  private _heartbeatPin: number = undefined

  /** GPIO to which the heartbeat LED is connected. */
  private _heartbeatGpio: Gpio = undefined

  private _isActive = false
}
