# Bar Chart

Bar charts summarize and compare categorical data by using proportional bar lengths to represent values.

Bar charts are composed of an x-axis and a y-axis. The x-axis represents discrete categories that correspond to one or many bars. Each bar’s height corresponds to a numeric value, which is measured by the y-axis.

A bar chart (aka bar graph, column chart) plots numeric values for levels of a categorical feature as bars. Levels are plotted on one chart axis, and values are plotted on the other axis. Each categorical value claims one bar, and the length of each bar corresponds to the bar’s value. Bars are plotted on a common baseline to allow for easy comparison of values.

A grouped bar chart (aka clustered bar chart, multi-series bar chart) extends the bar chart, plotting numeric values for levels of two categorical variables instead of one. Bars are grouped by position for levels of one categorical variable, with color indicating the secondary category level within each group

## Configure the Bar Chart

To configure this plugin to work with a mapping web service the following parameters are requited to be completed.

<table>
  <tr>
    <th></th>
    <th>Parameters</th>
    <th>Description</th>
  </tr>
 <tr>
    <th rowspan="2">General</th>
    <td id=parameters>Type</td>
    <td>Determines the type of chart to be created. This includes pie chart, bar chart or line chart</td>
  </tr>
  <tr>
    <td id=parameters>Title</td>
    <td>Determines the chart title to be displayed</td>
  </tr>
   <tr>
    <th rowspan="1">Options</th>
    <td id=parameters>Colors</td>
    <td>An option to include hexadecimal color values to use to display the chart</td>
  </tr>
   <tr>
    <th rowspan="5">Labels   Axis</th>
    <td colspan="2" id=parameters>This option is only available when creating the bar and line chart.</td>
    </tr>
    <tr>
    <td id=parameters>Type</td>
    <td>Determines the type of label to be used. The label names can be retrieved from a field from the layer (linear or time for line chart) or from configuration</td>
  </tr>
  <tr>
    <td id=parameters>Title</td>
    <td>Determines the title name to be used for the different axis</td>
  </tr>
    <tr>
    <td id=parameters>Values</td>
    <td>Determines the label names to be used for the charting tool. Depending on the type chosen you can either enter a field name which contains the label names or if the configuration type is chosen values are listed and separated by a semicolon.</td>
  </tr>
      <tr>
    <td id=parameters>Split</td>
    <td>Determines the special character to use to split the labels</td>
  </tr>
   <tr>
    <th rowspan="3">Layers</th>
    <td id=parameters>Id</td>
    <td>Determines which layer the charting plugin with work with as defined in the layer section. *The plugin, for the moment will only work when there is on layer on the moment</td>
  </tr>
  <tr>
    <td id=parameters>Data</td>
    <td >Determines the different datasets for the layer to use to create the chart
        <ol type="i">
            <li id=tablelist>
            <i>Type</i> - Determines the type of value to be expected. There are two options available to choose from; “Single” or “combine”. If “Single” is used it is expected that there is only one value inside the field. If “combine” is used it is expected that a date and value are part of the field
            </li>
            <li id=tablelist>
            <i>Measure</i> - Determines the field name to be used to create the chart. Note, this must be the field name and not the alias for this to work.
            </li>
            <li id=tablelist>
            <i>Dataset Splitter</i> - Regex expression to split datasets inside the field. this field is to manage when you have multiple datasets or combine values in the same field. To be able to seperate datasets from values a regex expression will be used. It is encouraged to use your data and test your regex expression on an online [site](https://regex101.com/)
            (e.g. '\\[|\\];\\[|\\]' for '[255;255;255];[120;232;23]'. There is 2 different values [];[]). We strongly recommand using a regex validator with your data to test your expression.
            </li>
            <li id=tablelist>
            <i>Value Splitter</i> - character to use to slit values inside a field (e.g. "val1:val2:val3" will use : as split character)
            </li>
            <li id=tablelist>
            <i>Prefix</i> - Determines the prefix to be added to the data hover.
            </li>
            <li id=tablelist>
            <i>Suffix</i> - Determines the suffix to be added to the data hover.
            </li>
        </ol>
    </td>
  </tr>
</table>

## Best Pratices

**Tips for interacting with the Bar Charts**

Use a common zero-valued baseline First and foremost, make sure that all of your bars are being plotted against a zero-value baseline. Not only does that baseline make it easier for readers to compare bar lengths, it also maintains the truthfulness of your data visualization. A bar chart with a non-zero baseline or some other gap in the axis scale can easily misrepresent the comparison between groups since the ratio in bar lengths will not match the ratio in actual bar values.

**When to use a Bar Chart**

A bar chart is used when you want to show a distribution of data points or perform a comparison of metric values across different subgroups of your data. From a bar chart, we can see which groups are highest or most common, and how other groups compare against the others. Since this is a fairly common task, bar charts are a fairly ubiquitous chart type. Common Misuses

### Use Case Examples
