import { collapseImgixParams } from "../../src/HOFs/propFormatter"

describe('collapseImgixParams()', () => {

  it("should shorten params keys", () => {
    // TODO(luis): break these up into individual tests?
    const params = {
      brightness: 1,
      contrast: 1,
      exposure: 1,
      gamma: 1,
      highlights: 1,
      hue: 1,
      invert: 1,
      saturation: 1,
      shaddows: 1,
      shadows: 1,
      sharpness: 1,
      "unsharp-mask": 1,
      "unsharp-radius": 1,
      vibrance: 1,
      "auto-features": 1,
      "background-color": 1,
      blend: 1,
      "blend-mode": 1,
      "blend-align": 1,
      "blend-alpha": 1,
      "blend-padding": 1,
      "blend-width": 1,
      "blend-height": 1,
      "blend-fit": 1,
      "blend-crop": 1,
      "blend-size": 1,
      "blend-x": 1,
      "blend-y": 1,
      border: 1,
      padding: 1,
      "face-index": 1,
      "face-padding": 1,
      faces: 1,
      "chroma-subsampling": 1,
      "color-quantization": 1,
      download: 1,
      DPI: 1,
      format: 1,
      "lossless-compression": 1,
      quality: 1,
      "mask-image": 1,
      "noise-blur": 1,
      "noise-sharpen": 1,
      "flip-direction": 1,
      orientation: 1,
      "rotation-angle": 1,
      "crop-mode": 1,
      "fit-mode": 1,
      "image-height": 1,
      "image-width": 1,
      blurring: 1,
      halftone: 1,
      monotone: 1,
      pixelate: 1,
      "sepia-tone": 1,
      height: 1,
      width: 1,
    }
    const expected = {
      "bri": 1,
      "con": 1,
      "exp": 1,
      "gam": 1,
      "high": 1,
      "hue": 1,
      "invert": 1,
      "sat": 1,
      "shad": 1,
      "sharp": 1,
      "usm": 1,
      "usmrad": 1,
      "vib": 1,
       "auto": 1,
      "bg": 1,
      "blend": 1,
      "bm": 1,
      "ba": 1,
      "balph": 1,
      "bp": 1,
      "bw": 1,
      "bh": 1,
      "bf": 1,
      "bc": 1,
      "bs": 1,
      "bx": 1,
      "by": 1,
      "border": 1,
      "pad": 1,
      "faceindex": 1,
      "facepad": 1,
      "faces": 1,
      "chromasub": 1,
      "colorquant": 1,
      "dl": 1,
      "dpi": 1,
      "fm": 1,
      "lossless": 1,
      "q": 1,
      "mask": 1,
      "nr": 1,
      "nrs": 1,
      "flip": 1,
      "or": 1,
      "rot": 1,
      "crop": 1,
      "fit": 1,
      "h": 1,
      "w": 1,
      "blur": 1,
      "htn": 1,
      "mono": 1,
      "px": 1,
      "sepia": 1,
      "h": 1,
      "w": 1,
    }

    const result = collapseImgixParams(params)
    expect(result).toEqual(expected)
  })
  
})
