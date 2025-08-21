/**
 * Extensión STEAM DIY para micro:bit
 */
//% weight=100 color=#FFD700 icon="🔧"
namespace STEAMDIY {
    
    /**
     * Enciende un LED en el pin especificado
     * @param pin pin donde está conectado el LED
     */
    //% block="STEAM DIY encender LED en pin %pin"
    export function prenderLED(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 1)
    }

    /**
     * Apaga un LED en el pin especificado
     * @param pin pin donde está conectado el LED
     */
    //% block="STEAM DIY apagar LED en pin %pin"
    export function apagarLED(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 0)
    }
    let pulseMin = 480;   // Ajusta ligeramente menor para llegar a 0°
    let pulseMax = 2650;  // Ajusta ligeramente mayor para llegar a 270°

    export function Servo2(num: enServo, value: number): void {
      // Limitar value entre 0 y 270
      if (value < 0) value = 0;
      if (value > 270) value = 270;

      // Convertir grados (0-270) a ancho de pulso (µs)
      let us = Math.map(value, 0, 270, pulseMin, pulseMax);

      // Convertir µs a valor PWM 12-bit para PCA9685
      let pwm = us * 4096 / 20000;

      // Enviar señal PWM al servo
      setPwm(num, 0, Math.round(pwm));
  }
}

