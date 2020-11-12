# Chart Types

## Pie Chart

### Overview

A pie chart is a circular chart divided into sections. Each section is proportional to the quantity it represents. A pie chart contains a single series of data points. The pie charts are used to show part-to-whole relationships or for data composition.

Pie charts are not intended for comparing individual sections with each other or representing exact values ( it is recommended that a serial chart should be used instead). Pie charts are also not meant to show more than five to eight data points.

**Doughnut plot**

The Plugin is capable of using implementing an alternative representation of the common pie chart commonly known as the doughnut plot.

A doughnut plot (aka donut plot) is simply a pie chart with a central circle removed. For the most part, there aren’t significant differences in readability between a pie chart and donut chart, so the choice of a doughnut over a standard circle is mostly that of aesthetic. One small boon for the ring shape is that the central area can be used for additional information or to report statistics.

### Best Practices

**Tips for interacting with the Pie Charts**

Keep the followin in mind when using a Pie Chart to visualize data:

- Don’t use more than five sections It is reccomended that around 5 sections is an adequate amount of slices to be used with the pie charts. Too many slices are hard to read. It is easy to overwhelm the user.

- Make sure all data adds up to 100% Verify that values total 100% and that pie slices are sized proportionately to their corresponding value

**When to use a Pie Chart**

Pie charts are best used when making part-to-whole comparisons. hey have the most impact when the proportion being expressed holds more importance than the specific numbers. They are most clearly understood when using small data sets, often grouping smaller data into an “other” category on the chart.

It is recommended tha you use a Pie chart when you’ve got 2-3 data points that are significantly different. This is the one instance when pie charts are helpful ‒ they’re good at showing people what a fraction of something looks like.

**Common Misuses**

Fitting a pie to incompatible data One of the most common mistakes with using a pie chart is to fit it to data that does not represent a parts-to-whole comparison. This confusion occurs most often when the values to be plotted are percentages or proportions, but don’t comprise a complete whole. The example below shows how frequently the people surveyed used each of four applications, but since many people used multiple apps, the proportions sum to much more than 100%.

### Use Case Examples

In this example, the PIE chart was used to represent the data from [Percentage of population with knowledge of English and French by census division, 2016](https://gcgeo.gc.ca/geonetwork/metadata/eng/7043f8c1-d5e5-492f-8bb1-7eeac9f2a74f).

### Configure the Pie Chart

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
    <td>Determines the type of chart to be created. This includes pie chart, bar chart or line chart</td>
  </tr>
  <tr>
    <td id=parameters>Title</td>
    <td>Determines the chart title to be displayed</td>
  </tr>
   <tr>
    <th rowspan="2">Options</th>
    <td id=parameters>Colors</td>
    <td>An option to include hexadecimal color values to use to display the chart</td>
  </tr>
  <tr>
    <td id=parameters>Cutout</td>
    <td>Determines the percentage to cut out when creating the pie chart. This option is only available when creating a pie chart</td>
  </tr>
    <tr>
    <th rowspan="3">Labels</th>
    <td id=parameters>Type</td>
    <td>Determines the type of label to be used. The label names can be retrieved from a field from the layer (linear or time for line chart) or from configuration</td>
  </tr>
  <tr>
    <td id=parameters>Values</td>
    <td>Determines the label names to be used for the charting tool. Depending on the type chosen you can either enter a field name which contains the label names or if the configuration type is chosen values are listed and separated by a semicolon</td>
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
    <td>Determines the different datasets for the layer to use to create the chart
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
        </ol>
    </td>
  </tr>
    <tr>
    <td id=parameters>Dataset Labels</td>
    <td>
        <ol type="i">
            <li id=tablelist>
            <i>Type</i> -  Determines the type of value to be expected. There are two options available to choose from; “Single” or “combine”. If “Single” is used it is expected that there is only one value inside the field. If “combine” is used it is expected that a date and value are part of the field
            </li>
            <li id=tablelist>
            <i>Values</i> - Values seperated by semicolon or field name
            </li>
            <li id=tablelist>
            <i>Split Character</i> - character to use to slit values inside a field (e.g. "val1:val2:val3" will use : as split character)
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
<br>

---

## Bar Chart

### Overview

Bar charts summarize and compare categorical data by using proportional bar lengths to represent values. The Chart Plugin supports two different types of bar charts. The traditional bar chart as well as grouped bar charts.

Bar charts are composed of an x-axis and a y-axis. The x-axis represents discrete categories that correspond to one or many bars. Each bar’s height corresponds to a numeric value, which is measured by the y-axis.

A grouped bar chart extends the bar chart, plotting numeric values for levels of two categorical variables instead of one. Bars are grouped by position for levels of one categorical variable, with color indicating the secondary category level within each group

### Best Pratices

**Tips for interacting with the Bar Charts**

Use a common zero-valued baseline First and foremost, make sure that all of your bars are being plotted against a zero-value baseline. Not only does that baseline make it easier for readers to compare bar lengths, it also maintains the truthfulness of your data visualization.

A bar chart with a non-zero baseline or some other gap in the axis scale can easily misrepresent the comparison between groups since the ratio in bar lengths will not match the ratio in actual bar values.

When attempting to use the barchart to represet multi year data information. It is important to note the data structure which will enable you to accomplish this. In the example below the population for each year is represented as an attribute field.

**When to use a Bar Chart**

A bar chart is used when you want to show a distribution of data points or perform a comparison of metric values across different subgroups of your data. From a bar chart, we can see which groups are highest or most common, and how other groups compare against the others. Since this is a fairly common task, bar charts are a fairly ubiquitous chart type.

### Use Case Examples

In this example,

### Configure the Bar Chart

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
<br>

---

## Line Chart

### Overview

A line chart consists of one or more lines connecting successive attribute values. Line graphs are useful for showing how things change or move over time and what the trends in the data may be. Since a line graph uses straight line segments to connect data points, it is easy to determine the data range, minimum and maximum, gaps, clusters, and outliers.

When the primary categorical variable is continuous in nature, especially if it deals with time, then a useful alternative chart type to consider is the line chart. A line chart is especially useful when there are a lot of levels in the primary categorical variable: the need to cluster many bars around each position can make the chart difficult to read. The line chart cleans this up by aligning each of the sub-groups vertically, and the connected line between points makes it easier to track how each sub-group changes.

### Best Practices

**Tips for interacting with the Line Charts**

To use the Line chart to its best, data must be formatted in a specific way.

**When to use a Line Chart**

Line charts are useful when you want to show the changes in value of a given variable with respect to the changes in some other variable. The other variable is usually time. For example, line charts can be used to show the speed of a vehicle during specific time intervals.
Multiple lines can also be plotted in a single line chart to compare the trend between series. A common use case for this is to observe the breakdown of the data across different subgroups. The ability to plot multiple lines also provides the line chart a special use case where it might not usually be selected.

### Use Case Examples

### Configure the Line Chart

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
