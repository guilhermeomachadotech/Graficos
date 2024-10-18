import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Abr', 'Maio', 'Jun'], //Eixo X
  datasets:[
    {
      data: [70, 50, 30, 80, 90, 40], //Valores dos dados
    },
  ],
};

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Gráfico de Barras</Text>
      <BarChart
        data={data}
        width={screenWidth-16}
        height={220}
        yAxisLabel='R$ '
        chartConfig={{
          backgroundColor: '#000000',
          backgroundGradientFrom: '#0000ff',
          backgroundGradientTo:'#4fb7cd',
          decimalPlaces:2,
          color:(opacity = 1) => `rgba(255,255,255, ${opacity})`,
          labelColor:(opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style:{
            borderRadius:16,
          },
        }}
        style={styles.chart}
      ></BarChart>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  chart: {
    marginVertical: 8,
  },
});
