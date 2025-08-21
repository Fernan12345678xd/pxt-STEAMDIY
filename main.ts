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
}
