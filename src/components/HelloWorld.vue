<template>
  <div class="hello">
    <div style="position: absolute;top:0;">


        <input style="font-size:16px;" type="file" @change="uploadExcel" />

        <span>Or Load remote xlsx file: </span>

        <a href="javascript:void(0)" @click="downloadExcel">Download source xlsx file</a>
    </div>

    <div
      id="luckysheet"
      style="margin:0px;padding:0px;position:absolute;width:100%;left: 0px;top: 30px;bottom:0px;"
    ></div>

    <div v-show="isMaskShow" style="position: absolute;z-index: 1000000;left: 0px;top: 0px;bottom: 0px;right: 0px; background: rgba(255, 255, 255, 0.8); text-align: center;font-size: 40px;align-items:center;justify-content: center;display:flex;">Downloading</div>

  </div>
</template>

<script>
import LuckyExcel from 'luckyexcel'
//导入库export.js 这个文件是es6的，不能在普通的HTML文件直接引入js文件（虽然都是js文件，但是有区别，具体请百度es6与es5）！需要把es6转es5才可以直接引入使用！
import {testaaa,exportExcel} from './export'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      selected:"",
      isMaskShow: false,
      autoSave:true,
      options : {
            lang: 'zh',
            title: '在线表格多人编辑测试', // 设定表格名称
            //showinfobar:false,
            container: 'luckysheet',
            //userInfo : '导入表格',
            userMenuItem: "",
            myFolderUrl: "",
            showinfobar: true,
            //functionButton: '<input style="font-size: 16px;" type="file" id="Luckyexcel-demo-file" name="Luckyexcel-demo-file" change="demoHandler" />'
            //functionButton: '<button id="" class="btn btn-primary" style="padding:3px 6px;font-size: 12px;margin-right: 10px;">下载</button> <button id="" class="btn btn-primary btn-danger" style=" padding:3px 6px; font-size: 12px; margin-right: 10px;">分享</button> <button id="luckysheet-share-btn-title" class="btn btn-primary btn-danger" style=" padding:3px 6px; font-size: 12px; margin-right: 10px;">秀数据</button>',
            //functionButton: '<input style="font-size: 16px;" type="file" id="Luckyexcel-demo-file" name="Luckyexcel-demo-file" change="demoHandler" />',
            allowUpdate: true,
            loadUrl: "http://127.0.0.1:8081/get",
            hook: {
                updated: function (e) {
                    //监听更新,并在3s后自动保存
                    if (this.autoSave)
                        clearTimeout(this.autoSave)
                    this.autoSave = setTimeout(function () {
                        var excel = luckysheet.getAllSheets();
                        //去除临时数据,减小体积
                        for (var i in excel)
                            excel[i].data = undefined
                        $.post("http://127.0.0.1:8081/set", {
                            jsonExcel: JSON.stringify(excel)
                        }, function () {
                            $(luckysheet_info_detail_save).text("已保存")
                        })
                    }, 1 * 300)
                    return true;
                }
            },
            updateUrl: "ws://127.0.0.1:8082?name=qqqqqqqqqqqqqq"
        }
    }

  },
  mounted() {
    // In some cases, you need to use $nextTick
    // this.$nextTick(() => {
           console.log(this.options,this.data)
            luckysheet.create(this.options);

    // });
  },
  methods:{
    uploadExcel(evt){
        const files = evt.target.files;
        if(files==null || files.length==0){
            alert("No files wait for import");
            return;
        }

        let name = files[0].name;
        let suffixArr = name.split("."), suffix = suffixArr[suffixArr.length-1];
        if(suffix!="xlsx"){
            alert("Currently only supports the import of xlsx files");
            return;
        }
        var _this = this
        LuckyExcel.transformExcelToLucky(files[0], function(exportJson, luckysheetfile){
            console.log("exportJson",exportJson)
            if(exportJson.sheets==null || exportJson.sheets.length==0){
                alert("Failed to read the content of the excel file, currently does not support xls files!");
                return;
            }
            window.luckysheet.destroy();
            const request_data = {
                jsonExcel: JSON.stringify(exportJson)
            }
           
            _this.send_request(request_data)
            _this.options.data = exportJson.sheets
            _this.options.title = exportJson.info.name
            _this.options.userInfo = exportJson.info.name.creator
            window.luckysheet.create(_this.options);
        });
    },
    send_request(request_data){
            console.log(request_data)
            // $.post("http://127.0.0.1:8081/setWorkBook",request_data , function () {
            //   console.log("ok")
            // })
              this.axios.post(`http://127.0.0.1:8081/setWorkBook`,request_data)
              .then(res=>{
                  console.log('res=>',res);            
              })
    },
    downloadExcel(){
          // const value = this.selected;;
          //
          // if(value.length==0){
          //     alert("Please select a demo file");
          //     return;
          // }
          //
          // var elemIF = document.getElementById("Lucky-download-frame");
          // if(elemIF==null){
          //     elemIF = document.createElement("iframe");
          //     elemIF.style.display = "none";
          //     elemIF.id = "Lucky-download-frame";
          //     document.body.appendChild(elemIF);
          // }
          // elemIF.src = value;
          var result = luckysheet.getAllSheets();
          console.log(result)
      exportExcel(result,"下载")
      // testaaa();

    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
