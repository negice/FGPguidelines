# Bar Chart

Bar charts summarize and compare categorical data by using proportional bar lengths to represent values. The Chart Plugin supports two different types of bar charts. The traditional bar chart as well as grouped bar charts.

Bar charts are composed of an x-axis and a y-axis. The x-axis represents discrete categories that correspond to one or many bars. Each bar’s height corresponds to a numeric value, which is measured by the y-axis.

A grouped bar chart extends the bar chart, plotting numeric values for levels of two categorical variables instead of one. Bars are grouped by position for levels of one categorical variable, with color indicating the secondary category level within each group

## Best Pratices

**Tips for interacting with the Bar Charts**

Use a common zero-valued baseline First and foremost, make sure that all of your bars are being plotted against a zero-value baseline. Not only does that baseline make it easier for readers to compare bar lengths, it also maintains the truthfulness of your data visualization.

A bar chart with a non-zero baseline or some other gap in the axis scale can easily misrepresent the comparison between groups since the ratio in bar lengths will not match the ratio in actual bar values.

When attempting to use the barchart to represet multi year data information. It is important to note the data structure which will enable you to accomplish this. In the example below the population for each year is represented as an attribute field.
![bar1](../imgs/barchart1.png)
**When to use a Bar Chart**

A bar chart is used when you want to show a distribution of data points or perform a comparison of metric values across different subgroups of your data. From a bar chart, we can see which groups are highest or most common, and how other groups compare against the others. Since this is a fairly common task, bar charts are a fairly ubiquitous chart type.

### Use Case Examples

In this example,
