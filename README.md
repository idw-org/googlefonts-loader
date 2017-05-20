##googlefonts-loader

This module uses webfontloader internally.  What it adds is dedupe functionality of loaded fonts.  Which means it won't load a font that is already loaded.

It leverages [FontFaceSet](https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet) web api.  It is currently expiremental.  However, if this module detects it doesn't have fontFaceSet it just loads the font (which is the default behavior).