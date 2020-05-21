// TODO: Update these graphs to go on the cumulative screen
import React from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import moment from 'moment';
import Color from 'util/Color';

function Chart({reverse, formatYLabel, days}) {
  const labels = [];
  const endDate = moment().format('MMM Do');
  const startDate = moment()
    .subtract(days.length, 'days')
    .format('MMM Do');

  for (let i = 0; i < days.length; i++) {
    if (i === 2) {
      labels.push(startDate);
    } else if (i === days.length - 4) {
      labels.push(endDate);
    } else {
      labels.push('');
    }
  }

  const current = days[days.length - 1];
  const start = days[0];

  const decreasing = reverse ? current > start : current < start;

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.root}>
      <LineChart
        bezier
        withDots={false}
        withInnerLines={false}
        withOuterLines={false}
        data={{
          labels,
          datasets: [{data: days}],
        }}
        width={screenWidth - 32}
        height={180}
        formatYLabel={formatYLabel ? formatYLabel : l => l}
        chartConfig={{
          backgroundColor: Color.white,
          backgroundGradientFrom: Color.white,
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: Color.white,
          backgroundGradientToOpacity: 0,
          decimalPlaces: 0,
          color: (opacity = 1) => {
            return Color.hexToRgba(
              decreasing ? Color.ok.light : Color.warning.light,
              0.6,
            );
          },
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
      />
    </View>
  );
}

Chart.defaultProps = {
  reverse: false,
};

export default Chart;

const styles = StyleSheet.create({
  root: {},
});
