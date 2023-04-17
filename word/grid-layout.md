## 父元素

grid-template-columns  定义每一列的列宽
grid-template-rows     定义每一行的行高

.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}

三行三列 列宽和行高都是100px

1. repeat函数
2. auto-fill 自动填充
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
}
3. fr关键字
grid-template-columns: 1fr 2fr;
后者是前者的两倍

grid-template-columns: 150px 1fr 2fr;
第一列宽度是150px 然后第三列是第二列的两倍
4. minmax()
grid-template-columns: 1fr 1fr minmax(100px, 1fr);  
列宽不小于100px 不大于1fr


grid-row-gap: 20px;       行与行的间隔
grid-column-gap: 20px;    列与列的间隔  

grid-gap: <grid-row-gap> <grid-column-gap>;
grid-gap: 20px 20px;

根据最新标准，上面三个属性名的grid-前缀已经删除，grid-column-gap和grid-row-gap写成column-gap和row-gap，grid-gap写成gap。

grid-auto-flow  先行后列还是先列后行


## 项目属性

grid-column-start: 2;
grid-column-end: 4;

第二根垂直网格线开始  到第四根垂直网格线结束


grid-column-end: span 2;
左边框到有边框跨越2个网格


## 子项目水平和 垂直
justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;