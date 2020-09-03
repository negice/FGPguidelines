# Swiper Plugin

The Swiper enables you to easily compare the content of different layers. It provides a horizontal view mode which allows you to interact with the map. You can slide the swipe tool to reveal the content of another layer. The plugin works with the following mapping services:

- ESRI Feature
- ESRI Dynamic
- ESRI Image
- OGC WMS
- OGC WFS
- OGC WCS

More information on Web map services can be found [here.](https://www.nrcan.gc.ca/earth-sciences/geomatics/canadas-spatial-data-infrastructure/8902)

## Configure the Swiper Plugin

To configure this plugin to work with a mapping web service the following parameters are required.

<table>
  <tr>
    <th></th>
    <th>Parameters</th>
    <th>Description</th>
  </tr>
 <tr>
    <th rowspan="2">General</th>
    <td id=parameters>Type</td>
    <td>Determines of the swiper is vertical or horizontal. Note: Only vertical is supported at the moment</td>
  <tr>
    <td id=parameters>Keyboard Offset</td>
    <td>Determines the number of pixels to move the swiper when the keyboard is used for navigation</td>
  </tr>
  <tr>
    <th rowspan="1">Layers</th>
    <td id=parameters>Id</td>
    <td>Layer id as defined in layer section</td>
  </tr>
</table>

## Best Practices

The Swiper is a visualization enhancer used to compare different layers. For example, you may want to use it to show before-and-after imagery of a flood, or display two related thematic layers in a map. You have the capability to move the slider back and forth to see the changes.

**Tips for interacting with the Swiper Plugin**

The recommended way to utilize this plugin effectively is as a comparative tool. You can use the swiper plugin to compare layers for an extra layer of visual analysis. As you swipe, the enabled layer will be temporarily erased relative to the position of the swiper.
It is recommended that the layer with the swiper plugin enabled should be the top most layer in the legend tree.

![swiper1](../imgs/swiper1.png)

In the example above, the Swiper plugin is enable on the top most layer. It is important to note that when using the swiper tool with two different layers, the layer with the swiper tool enabled can obscure the underlying layer.

The tool could be used to explore satellite or aerial images of locations before and after disasters such as wildfires or landslides. You can also use this tool to compare historical and current maps to see how change occurs over time

### Use Case Example

In this example, the swiper plugin was used to highlight the changes in land cover for Agricultural Regions for Canada between 1995 and 2000 [layer](https://gcgeo.gc.ca/geonetwork/metadata/eng/16d2f828-96bb-468d-9b7d-1307c81e17b8). These layers are examples of ESRI Image layer being used with the swiper plugin.

<iframe width=960px height="450"
        src=https://jolevesq.github.io/contributed-plugins/swiper/samples/swiper-index.html>
</iframe>
