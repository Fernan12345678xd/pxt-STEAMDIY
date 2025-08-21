# STEAM DIY

Extensión para micro:bit que permite encender y apagar un LED externo desde los bloques de MakeCode.

## Uso

- Agregar la extensión en MakeCode.
- Aparecerán bloques nuevos bajo la categoría **STEAM DIY**.

Ejemplo:

```blocks
STEAMDIY.prenderLED(DigitalPin.P0)
basic.pause(1000)
STEAMDIY.apagarLED(DigitalPin.P0)
