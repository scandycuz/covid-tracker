// TODO: Update these graphs to go on the cumulative screen
import React from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import moment from 'moment';
import Color from 'util/Color';

const weekDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

function Chart({days}) {
  const today = moment().day();
  const labels = [...weekDays.slice(today), ...weekDays.slice(0, today)].slice(
    2,
  );

  const screenWidth = Dimensions.get('window').width;

  const decreasing =
    days[0].positiveIncrease > days[days.length - 1].positiveIncrease;

  const data = days.map(day => day.positiveIncrease);

  return (
    <View style={styles.root}>
      <LineChart
        bezier
        withDots={false}
        withInnerLines={false}
        withOuterLines={false}
        data={{
          labels: labels,
          datasets: [{data}],
        }}
        width={screenWidth - 32}
        height={240}
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
              0.5,
            );
          },
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
      />
    </View>
  );
}

export default Chart;

const styles = StyleSheet.create({
  root: {},
});
