# Range Slider / Time Slider

The Range / Time Slider offers a dynamic way to visualize your data. The basic slider is a horizontal bar and has anchors that can be moved to establish the range of the values to be used. To visualize your data as a dynamic range, you can use any layer that contain numeric or date fields. Once you define the range properties for your layer, an interactive, on-screen slider is used to explore the data through a range / time you customized. Using this plugin, you can control the animation of the data with buttons to play and pause, go to the previous range / time period, and go to the next range / time period.

**Range Slider**

> Range Slider properties can be set using any numerical or date field stored in the attribute field. For example, a range of values for a particular parameter.

**Time Slider**

> The Time Slider plugin simplifies visualization of temporal data in your maps. Before adding the Time Slider to your application, you first should understand how it can be configured to correctly display your temporal data.

## Best Practices

Once you have defined a range for a layer, the range slider appears as an on-screen control along the side of your map or scene. You can interactively adjust the minimum and maximum values of the displayed range, or move the entire range up and down. The slider and range settings are fully configurable using the Range tab, allowing you to look through the full range extent of your data using logical increments.

Tips for interacting with the Range / Time Slider:

- Numeric fields containing a timestamp or date field are best used with the time slider. They will be filtered from your selection when using range.

- \*The range slider will automatically snap to whole numbers if the fields driving the range are integers.

### Use Case Examples

**Range Slider**

In this example, the Range / Time Slider plugin was used with the Permafrost by ecoprovince [layer](https://gcgeo.gc.ca/geonetwork/metadata/eng/4baa66ad-aa29-4233-a6a8-7f5cbefb5ea8). This layer is an example of an ESRI Feature layer being used with the range slider. The PERMAFROST_PERCENT field was used with the range slider plugin to give the ability to the viewer to select specific percentages of permafrost they may be interested in.

It is important to note the data structure of this layer. Looking closer at this dataset we can see that the PERMAFROST_PERCENT field consists of only integers. This enables the range slider to automatically identify the limits of the ranges present.

![rangeslider1](../imgs/rangeslider1.png)

<iframe width=960px height="450"
        src=https://jolevesq.github.io/contributed-plugins/range-slider/samples/range-slider-index.html?sample=1>
</iframe>

---

**Time Slider**

In the Range / Time Slider plugin was used with

<iframe width=960px height="450"
        src=https://jolevesq.github.io/contributed-plugins/range-slider/samples/range-slider-index.html?sample=1>
</iframe>
