# Swiper Plugin

The Swiper plugin enables you to easily compare the content of different layers. It provides horizontal and vertical view modes. You can slide the swipe tool to reveal the content of another layer. The plugin works with the following mapping services:

- ESRI Feature
- ESRI Dynamic
- ESRI Image
- OGC WMS
- OGC WFS
- OGC WCS

## Configure the Swiper Plugin

To configure this plugin to work with a mapping web service the following parameters are requited to be configured.

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

## Best Pratices

The Swiper plugin is a visualization enhancer used to compare different layers. For example, you may want to use it to show before-and-after imagery of a flood, or display two related thematic layers in a map. You have the capability to move the slider back and forth to see the changes. The recommended way to utilize this plugin effectively is as a comparative tool. You can use the swiper plugin to compare layers for an extra layer of visual analysis. As you swipe, the enabled layer will be temporarily erased relative to the position of the swiper. It is important to note that when using the swiper tool with two different layers, the layer with the swiper tool enabled can obscure the underlying layer. The tool could be used to explore satellite or aerial images of locations before and after disasters such as wildfires or landslides. You can also use this tool to compare historical and current maps to see how change occurs over time

### Use Case Example

For example, the swiper tool was used to show the changes in land cover for Agricultural Regions for Canada between 1995 and 2000.

Layer:

<iframe width=960px height="450"
        src=https://jolevesq.github.io/contributed-plugins/swiper/samples/swiper-index.html>
</iframe>
