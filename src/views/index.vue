<template>
  <div class="app-container">
    <el-row :gutter="20" class="module-list">
      <el-col :span="6" v-for="item in moduleList">
          <el-card style="height: 95px;" shadow="always">
            <div class="module-title">{{item.title}}</div>
            <div class="module-value">
              <el-statistic :value="item.value" />
            </div>
          </el-card>
       
      </el-col>
      
    </el-row>
      <div ref="chartRef" class="chart-container"></div>

  </div>
</template>

<script setup name="Index">
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
import { useTransition } from '@vueuse/core'

const moduleList = ref([
  {title: '数据源表', id: 1,value:0},
  {title: '数据模型', id: 2,value:0},
  {title: '执行任务', id: 3,value:0},
  {title: '构建任务', id: 4,value:0},
]);

const chartRef = ref(null);

// 生成过去7天的日期数组（格式：MM-DD）
const generatePast7Days = () => {
  const result = [];
  const today = new Date();

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    result.push(`${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`);
  }

  return result;
};
const transition = (value)=>{
  return useTransition(value, {
      duration: 1500,
    })
  }
const setData =()=>{
  moduleList.value.map(item=>{
    const value = Math.floor(Math.random() * 100000);
    item.value =value
  })
}
const initChart =()=>{
 const chartInstance = echarts.init(chartRef.value);
  const option = {
    title: {
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['数据系列']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: generatePast7Days() // 使用动态生成的日期数组
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: '数据系列',
      type: 'line',
      stack: 'Total',
      smooth: true,
      data: [120, 132, 101, 134, 90, 230, 210]
    }]
  };

  chartInstance.setOption(option);
  window.addEventListener('resize', () => {
    chartInstance.resize();
  });
}
onMounted(() => {
 initChart()
 setData()
});
</script>

<style scoped lang="scss">
.home {
  padding: 20px;
}

.module-list {
  margin-bottom: 20px;
  .module-title,
  .module-value {
    font-size: 14px;
    height: 50%;
  }
  .module-title {
    font-weight: bold;
    font-size: 24px;
  }
  .module-value {
    font-size: 16px;
    text-align: right;
  }
}

.chart-container {
  width: 100%;
  height: 400px;
  background-color: #fff;
  box-shadow: 0px 0px 12px rgba(0,0,0,0.12);
}
</style>