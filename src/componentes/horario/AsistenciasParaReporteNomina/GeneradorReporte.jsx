import * as XLSX from "xlsx"

import React from 'react'

export const GeneradorReporte = () => {


//nuevoObjeto.reduce((acc,current))
const [excel, setExcel] = useState()
function ExportData() {
  //var XLSX = require("xlsx")
  var data = [{
    "name": "John",
    "city": "Seattle"
  },
  {
    "name": "Mike",
    "city": "Los Angeles"
  },
  {
    "name": "Zach",
    "city": "New York"
  }
]; 

   /* 创建worksheet */
  var ws = XLSX.utils.json_to_sheet(Asistencias);

   /* 新建空workbook，然后加入worksheet */
    var wb = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(wb, ws, "People");

   /* 生成xlsx文件 */
   XLSX.writeFile(wb, `${NombreProyecto}.xlsx`);
}




  return (
    <div>GeneradorReporte</div>
  )
}



