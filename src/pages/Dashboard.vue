<template>
<div>
   <div class="header">
  <div >
      <h2 class='fontFamily'>Welcome back, Diana!</h2>
      <p>you have new insight for this week</p>
    </div>
    <div class="calender">
          <div class="dx-field">        
        <div class="dx-field-value">
          <DxDateBox
            :value="now"
            display-format="MMM dd-MM, yyyy"
          />
        </div>
      </div>
    </div>
</div>

<div class="tilespace">
<div class="tile" v-for="data in tileData" :key="data.index">
<h5 class='h5 font500'>{{data.summaryTitle}}</h5>
<div >
   <div>
    <div class="end p10">
<img v-if="data.chart=== 'up' " style='width:45px' src='@/pages/uparrow.png' />
<img v-if="data.chart=== 'down' " style='width:45px' src='@/pages/down.png' />
    </div>
    <div class="end">
<h4 class="font400 mr">{{`${data.basePercentage} %`}} </h4>
    </div>
  </div>
  <div>
<h2 v-if="data.percentage" class="font500 center mt">{{`${data.percentage} %`}} </h2>
<h2 v-else-if="data.multipleTime" class="font500 center mt">{{`${data.multipleTime} X`}} </h2>
<h2 v-else-if="data.actualValue" class="font500 center mt">{{`${data.actualValue}`}} 
  <h4 class="mt20">{{`/ ${data.exceptedValue}`}}</h4> 
</h2>
<div v-if="data.loaderPercentage">
	<VueSlideBar class="p20" 	:draggable="false" v-model='data.loaderPercentage'
  		:tooltipStyles="{ backgroundColor: '#FFFFFF', borderColor: '#FFFFFF' }" />
 </div>
  </div> 
</div>
</div>
</div>

<div class="backGround">
  <h4 class="headingColor">Assert Utillization</h4>
  <DxChart
    id="chart"
    :data-source="doubleBarGraph"      
  >
   <DxSeries
      value-field="firstCandle"     
      name="2021"
      stack="2021"
       color="#5e9da4"
    />
  
    <DxSeries
      value-field="secondCandle"     
      name="2022"
      stack="2022"
      color="#2c3f97"
    />

    <DxCommonSeriesSettings
      argument-field="month"
      type="stackedbar"
    />
    <DxValueAxis>
      <DxTitle />
    </DxValueAxis>
   
   
    <DxLegend
      :customize-items="customizeItems"
      :column-count="2"
      position="inside"
      horizontal-alignment="right"
    >
      <DxBorder :visible="true"/>
    </DxLegend>
    <DxExport :enabled="false"/>
    <DxTooltip :enabled="false"/>
  </DxChart>
  </div>
<div class="tilespace p20">
  <div class="backGround wh600">
  <h4 class="headingColor">Assert Utillization</h4>
<DxChart    
    :rotated="true"
    :data-source='sideBarGraph'   
  >

    <DxArgumentAxis>
      <DxLabel :customize-text="customizeLabelText"/>
    </DxArgumentAxis>

    <DxValueAxis>
      <DxTick :visible="true"/>
      <DxLabel :visible="true"/>
    </DxValueAxis>

    <DxSeries
      argument-field="item"
      value-field="sales"
      type="bar"
      color="#5e9da4"
    >
      <DxLabel
        :visible="true"
        :customize-text="customizeText"
        background-color="#c18e92"
      />
    </DxSeries>

    <DxLegend :visible="false"/>

    <DxExport :enabled="false"/>

  </DxChart>
  </div>
    <div class="backGround wh600">
  <h4 class="headingColor">Bed Utillization rate</h4>
  <DxChart
    id="chart"
    :data-source="singleBarGraph"      
  >
  <DxSize :height="100"
            :width="300"/>
   <DxSeries
      value-field="firstCandle"
          color="#5e9da4"
    />     

    <DxCommonSeriesSettings
      argument-field="day"
      type="bar"
    />
    <DxValueAxis>
      <DxTitle />
    </DxValueAxis>
   
   
    <DxLegend
      :customize-items="customizeItems"
      :column-count="2"
      position="inside"
      horizontal-alignment="right"
    >
      <DxBorder :visible="true"/>
    </DxLegend>
    <DxExport :enabled="false"/>
    <DxTooltip :enabled="false"/>
    
  </DxChart>
  </div>
  </div>
  </div>
</template>
<script>

import DxDateBox from 'devextreme-vue/date-box';
import 'devextreme/dist/css/dx.light.css';
import chartData from '@/pages/doublebargraphdata.js';
import singleChartData from '@/pages/singlebargraphdata.js';  
import VueSlideBar from 'vue-slide-bar'
import {
    DxChart,
    DxSeries,
    DxCommonSeriesSettings,
    DxValueAxis,
    DxTitle,
    DxLegend,
    DxBorder,
    DxExport,
    DxTooltip,
    DxArgumentAxis, 
    DxLabel,
    DxTick,
} from 'devextreme-vue/chart';


export default {
  components: {
    VueSlideBar,    
    DxDateBox,
    DxChart,
    DxSeries,
    DxCommonSeriesSettings,
    DxValueAxis,
    DxTitle,
    DxLegend,
    DxBorder,
    DxExport,
    DxTooltip,     
    DxArgumentAxis,       
    DxLabel,   
    DxTick,
  },
  data() {
    return {
       now: new Date(),
       	 processStyle: {                  
           none: {
                    backgroundColor: '#FFFFFF'  									          
             }},
      doubleBarGraph:chartData.getAssertData(),
      singleBarGraph:singleChartData.getBedData(),
      tileData:[{
summaryTitle:'Summary data info',
percentage:56,
multipleTime:'',
exceptedValue:'',
actualValue:'',
basePercentage:28,
loaderPercentage:'',
chart:'up'
      },
      {
summaryTitle:'Summary data info',
percentage:'',
multipleTime:3,
exceptedValue:'',
actualValue:'',
basePercentage:28,
loaderPercentage:'',
chart:'up'
      },
      {summaryTitle:'Summary data info',
percentage:'',
multipleTime:'',
exceptedValue:520,
actualValue:425,
basePercentage:28,
loaderPercentage:40,
chart:'up'
 },
      {
        summaryTitle:'Summary data info',
  percentage:'',
  multipleTime:'',
  exceptedValue:215,
  actualValue:84,
  basePercentage:15,
loaderPercentage:40,
chart:'down'
 }],
      sideBarGraph:[
	{ "item": "Monitors", "sales": 30 },
	{ "item": "Pumps", "sales": 35 },
	{ "item": "Mobility", "sales": 35 },
	{ "item": "Beds", "sales": 40 },
	{ "item": "Ventilators", "sales": 45 },
	{ "item": "Lifts", "sales": 50 },
	{ "item": "Tables", "sales": 60 },
]
    };
  },
  methods: {
    customizeLabelText({ valueText }) {
      return `${valueText}`;
    },
    customizeText({ valueText }) {
      return `${valueText} %`;
    },
    customizeItems(items) {
      const sortedItems = [];

      items.forEach((item) => {
        const startIndex = item.series.stack === 'firstCandle' ? 0 : 3;
        sortedItems.splice(startIndex, 0, item);
      });
      return sortedItems;
    },
  },
};
</script>
<style>
#chart {
  height: 440px;
}
.backGround{
  background-color:#FFF; 
}

.headingColor{
  font-weight: 500;
    color: #676666;
}
.header{
      display: flex;
    justify-content: space-between;
}
.fontFamily{
  font-family: sans-serif
}
.calender{
  padding: 25px;
    width: 30%;
}
.tile{
  width: 355px;
    height: 175px;
    background-color: #fff;
}
.tilespace{
      display: flex;
    justify-content: space-between;
}
.h5{
  margin-left: 10px;   
}
.font500{
   font-weight: 500;
}
.font400{
   font-weight: 400;
}
.center{
  display: flex;
    justify-content: center;
}
.end{
  display: flex;
    justify-content: end;    
}
.p10{
  padding:10px;
}
.mr{
  margin-right: 10px
}
.mt{
  margin-top: -80px
}
.mt20{
  margin-top: 20px
}
.p20{
  padding: 20px !important;
}
.wh600{
  width:600px !important;
  height:500px !important;
}
</style>