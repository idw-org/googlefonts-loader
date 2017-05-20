import WebFont from 'webfontloader'

const load = fonts =>
  WebFont.load({
    google: {
      families: fonts
    }
  })

const fontCheck = string => {
  let arr = string.split(/:|,/)
  let family = arr[0]
  let variants = arr.slice(1)

  return variants.reduce((isLoaded, variant) => {
    if (variant.indexOf('italic') >= 0) {
      variant = variant.replace('italic', ' italic')
    }

    if (family.indexOf('+') >= 0) {
      family = family.replace('+', ' ')
    }

    return isLoaded && !document.fonts.check(`${variant} 1em ${family}`)
  }, true)
}

const loadFont = fonts => {
  if (document.fonts) {
    if (
      fonts.reduce((isLoaded, font) => {
        fontCheck(font)
        return isLoaded && fontCheck(font)
      }, true)
    ) {
      load(fonts)
    }
  } else {
    load(fonts)
  }
}

module.exports = loadFont
