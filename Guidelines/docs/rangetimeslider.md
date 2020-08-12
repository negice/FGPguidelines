# Range Slider / Time Slider

This plugin allows you add a range slider to your map. The basic slider is horizontal and has anchors that can be moved to establish the range of values to be used. To visualize your data as a dynamic range, you can use any layer that contain numeric or date fields. Once you define the range properties for your layer, an interactive, on-screen slider is used to explore the data through a range you customized.

The Time Slider plugin enables you to view temporal layers in a map and play the animation to see how the data changes over time. Using this plugin, you can control the animation of the data with buttons to play and pause, go to the previous time period, and go to the next time period.

Range Slider properties can be set using any numerical or date field stored in the attribute fields for the following later types.

- ESRI Feature
- ESRI Dynamic
- ESRI WMS
- OGC WMS
- OGC WMS-T
- OGC WCS

## Configure the Range Slider Plugin

To configure this plugin to work with a mapping web service the following parameters are requited to be configured.

<table>
  <tr>
    <th></th>
    <th>Parameters</th>
    <th>Description</th>
  </tr>
  <tr>
    <th rowspan="1">General</th>
    <td id=parameters>Open</td>
    <td >Determines if the plugin will open/load automatically when a layer loads. By default it is set to open on map load</td>
  </tr>
  <tr>
    <th rowspan="5">Slide Bar Controls</th>
    <td id=parameters>Lock</td>
    <td>Lock or unlock left anchor when step or play</td>
  </tr>
  <tr>
    <td id=parameters>Loop</td>
    <td>Loop the animation</td>
  </tr>
    <tr>
    <td id=parameters>Delay</td>
    <td>Add a dropdown menu to change the delay in play animation</td>
  </tr>
    <tr>
    <td id=parameters>Export</td>
    <td>Ability to export the animation to a GIF</td>
  </tr>
    <tr>
    <td id=parameters>Refresh</td>
    <td>Reset the slider with the default values</td>
  </tr>
  <tr>
    <th rowspan="6">Params</th>
    <td id=parameters> Type</td>
    <td>Determines the type of slider (date or number) to be used. If date is selected, range and limit must be in milliseconds.</td>
  </tr>
  <tr>
    <td id=parameters>Units</td>
    <td>Determines the units label to add the right of the slider bar.</td>
  </tr>
    <tr>
    <td id=parameters>Description</td>
    <td>This allows for a description to be added to the slider information section. By default, the layer name and field will be included.</td>
  </tr>
    <tr>
    <td id=parameters>Delay</td>
    <td>Sets the delay between animations in milliseconds</td>
  </tr>
    <tr>
    <td id=parameters>Range</td>
    <td>Determines the minimum and maximum range values to be used in the plugin
        <ol type="i">
          <li id=tablelist>Minimum - Set the minimum value for the range slider. If this is not set the minimum range will be determined from the field selected.</li>
          <li id=tablelist>Maximum – Set the maximum value for the range slider. If this is not set the maximum range will be used</li>
        </ol>
    </td>
  </tr>
    <tr>
    <td id=parameters>Limit</td>
    <td>Determines the minimum and maximum limit values to be used in the plugin
         <ol type="i">
          <li id=tablelist>Minimum - Set the minimum value for the range slider. If this is not set the minimum range will be determined from the field selected.</li>
          <li id=tablelist>Maximum – Set the maximum value for the range slider. If this is not set the maximum range will be used</li>
        </ol>
    </td>
  </tr>
  <tr>
    <th rowspan="2">Layers</th>
    <td id=parameters>Id</td>
    <td>Determines the layer id as defined in the layer section.</td>
  </tr>
  <tr>
    <td id=parameters>Field</td>
    <td>Determines the field name of the field to be used to filter with the range slider. It is important to note that the field name has to be used and not the alias of the field.</td>
  </tr>
</table>

## Best Pratices

Once you have defined a range for a layer, the range slider appears as an on-screen control along the side of your map or scene. You can interactively adjust the minimum and maximum values of the displayed range, or move the entire range up and down. The slider and range settings are fully configurable using the Range tab, allowing you to look through the full range extent of your data using logical increments. You can view the range slider either as a full extent slider.

The Time Slider plugin enables you to view temporal layers in a map and play the animation to see how the data changes over time. Using this plugin, you can control the animation of the data with buttons to play and pause, go to the previous time period, and go to the next time period.

### Use Case Examples

For example the Range Slider plugin was used with the Permafrost by ecoprovince layer. The PERMAFROST_PERCENT was used with the range slider plugin to give the ability to the viewer to select specific percentages of permafrost they may be interested in.

<iframe width=960px height="450"
        src=https://jolevesq.github.io/contributed-plugins/range-slider/samples/range-slider-index.html?sample=1>
</iframe>
