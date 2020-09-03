# Thematic Slider
This plugin let you add a thematic slider to your map. It loop trought an array of layers to show comparaison or evolution of geolocation data. At the same time, the plugin can show title and description for each of the layers.

[Demo page](https://jolevesq.github.io/contributed-plugins/thematic-slider/samples/thematic-slider-index.html)

## How to use the plugin
Inside your configuration file you need
```
"plugins": {
      "thematicSlider": {
        "open": true,
        "autorun": false,
        "loop": true,
        "description": true,
        "slider": true,
        "stack": false,
        "layers": [
          { "id": "0",
            "duration": 3000,
            "title": "Petroleum",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et pulvinar odio, id tincidunt mi. Phasellus dictum nulla tortor, vitae facilisis arcu blandit eget. Duis eget aliquet quam. Mauris maximus malesuada tortor, vitae sollicitudin orci. Maecenas eu tellus molestie, ornare lorem eget, semper lectus. Phasellus vitae elementum nisi. Nunc vulputate, lectus et accumsan tincidunt, nibh quam vehicula eros, at tempus neque libero sed orci. In nunc arcu, tincidunt in condimentum sed, congue a dolor. Morbi vulputate magna et ante fermentum auctor. Nunc suscipit ultrices lorem ac finibus. Vivamus convallis nisi lorem, quis tempor urna tincidunt nec. Donec quis urna eget nunc elementum tincidunt. Etiam iaculis ornare sapien, sed blandit sapien dictum quis. Praesent cursus nec eros eu volutpat."
          }, {
            "id": "1",
            "duration": 3000,
            "title": "Hydro Electric",
            "description": "Aliquam tempus nec nisl a maximus. Ut congue volutpat tempor. Suspendisse maximus odio tortor, nec finibus sapien cursus id. Nullam tristique massa sit amet egestas auctor. Aliquam pharetra libero sed nibh interdum luctus. Duis nec vulputate arcu. Maecenas in sem vel lectus iaculis dignissim. Quisque ultricies aliquam velit, vitae rhoncus diam lobortis ac. Ut vel arcu sit amet neque pharetra vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut massa enim. Fusce vitae mauris nulla. Donec pellentesque nisi quis convallis pretium."
          }, {
            "id": "2",
            "duration": 3000,
            "title": "Solar",
            "description": "Morbi imperdiet mauris id dignissim ultricies. Etiam aliquet, lorem nec euismod vehicula, mauris est euismod lorem, ut vestibulum magna nunc quis mauris. Phasellus non felis auctor, consequat dui egestas, aliquam lectus. Quisque aliquet vitae felis sit amet porta. Donec lectus est, posuere ac dui sit amet, ornare aliquet neque. Maecenas a libero tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam sollicitudin velit eget nulla malesuada sagittis. Integer at tempor metus, fermentum sagittis arcu."
          }, {
            "id": "3",
            "duration": 5000,
            "title": "Wind",
            "description": "In purus urna, auctor eget magna eu, pretium molestie lectus. Aliquam erat volutpat. Phasellus vitae justo finibus, sollicitudin ipsum egestas, interdum orci. Mauris tristique, nisi ac finibus tempus, purus sem luctus sem, ac eleifend ex enim porttitor nulla. Mauris eu nulla tristique, varius mi sit amet, interdum magna. Cras felis nunc, vulputate non ante eu, mollis eleifend ipsum. Vestibulum cursus mauris risus, ut auctor lacus rutrum accumsan. Maecenas ex dolor, dictum nec nisl eu, blandit lobortis enim. Nullam congue lacinia mollis. Vivamus nec lectus quis elit malesuada vestibulum in nec ipsum. Nulla eu urna ut elit finibus facilisis a ut purus. Ut mattis nulla ac sem interdum, sed semper tellus pulvinar."
          }
        ]
      }
    }
```

Configuration parameters
- open: boolean to set the controls panel (description and slider) open by default
- autorun: boolean to start the animation automatically (if true, open should be true as well)
- loop: boolean to restart automatically the animation when it reaches the end of the array
- description: boolean to show the description control
- slider: boolean to show the slider controls (description needs to be true for slider to be true)
- stack: boolean to specify if only the active layer is show or if we stack all layers visibility from 0 to the active layer
- layers: array of layers to loop trought
    - id: layer id as define in layer section
    - duration: duration in millisecond to stay on the active layer
    - title: title to show in description control
    - description: text to show inside description control

**Note** It will work with ESRI feature and ESRI dynamic layer.

Inside your html, add this to your head section then replace href and src with your path.
```
<link rel="stylesheet" href="/thematic-slider.css" />
<script src="/thematic-slider.js"></script>
```

## Test page
To play with the code, from the plugin folder, do npm install, run build then npm run serve.
- http://localhost:6001/samples/thematic-slider-index.html

To deploy a test page, from the plugin folder, do npm run build then npm run deploy. The page will be created at
- https://"Your GitHub UserName".github.io/contributed-plugins/thematic-slider/samples/thematic-slider-index.html

## Author and support
Author and maintainer [NRCan FGP - Johann Levesque](https://github.com/jolevesq)

To report issue, please create an issue from the [GitHub repository](https://github.com/fgpv-vpgf/contributed-plugins/issues). Add the plugin-thematic-slider label and any other applicable one.

## RAMP version
Developed with RAMP version 3.3