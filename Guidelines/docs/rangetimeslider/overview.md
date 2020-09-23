# Range Slider/Time Slider

**What is the Range/Time Slider?**

The Range/Time Slider offers a dynamic way to visualize your data. The basic slider is a horizontal bar and has anchors that can be moved to establish the range of the values to be used. To visualize your data as a dynamic range, you can use any layer that contains numeric or date fields.
Once you define the range properties for your layer, an interactive, on-screen slider is used to explore the data through a range/time you customized. Using this plugin, you can control the animation of the data with buttons to play and pause, go to the previous range/time, and go to the next range/time.

**Range Slider**

> Range Slider properties can be set using any numerical or date field stored in the attribute field. For example, a range of values for a particular parameter.

**Time Slider**

> The Time Slider plugin simplifies the visualization of temporal data in your maps. Before adding the Time Slider to your application, you first should understand how it can be configured to correctly display your temporal data.

<br>

## Advantages of the Range/Time Slider

**What are the advantages of using the Range/Time Slider plugin?**

The Range/Time Slider plugin offers many advantages to both the data contributor and the user.

1.  The main advantage to the data contributor when using the Range/Time Slider plugin is the ability to provide Time Series Animation or Range filtering of the data using only one layer.

2.  The advantages the Range/Time Slider provides to the user can be summarized in the following points:

    - The ability to animation a GIF.
    - Granular control over the time increment
    - Lock or unlock the anchors when step or play.

<br>

## Best Pratices

**Get the best out of the Range/Time Slider**

The Range/Time Slider is best used in cases where you have a single layer with a numeric / date field. In this regard, you can filter the data using the slider and the results are displayed dynamically on the map.
Take, for example, this map layer [General distribution of humpback whales in the Estuary and Gulf of St. Lawrence](https://gcgeo.gc.ca/geonetwork/metadata/eng/8cf43e2b-f276-4fb7-8d3a-e20fecc618b4) dataset.
If we look at the map service for this dataset, we can see that there are a few fields that can work with the Range/Time Slider Plugin. In this example, the “Year” field was used.

Utilizing the Range/Time Slider together with this rich data, we can dynamically filter the data to narrow results immediately. You can interactively adjust the minimum and maximum values of the displayed range, or move the entire range up and down. The slider and range settings are fully configurable using the Range tab, allowing you to look through the full range extent of your data using logical increments.
By pressing the play button, the map will begin a time-series animation based on the range set. This may be 1-year or 5-year increments. This is a useful ability to determine trends or patterns occurring within the dataset.

<iframe width=960px height="550" allowfullscreen=true
        src=https://jolevesq.github.io/contributed-plugins/range-slider/samples/range-slider-index.html?sample=10>
</iframe
