import { Component, OnInit } from '@angular/core';

enum fileExtensions {
  csv = 'csv',
  xlsx = 'xlsx'
}

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  headers: string[] = []
  lines: string[][] = []

  constructor() { }

  ngOnInit(): void {
  }

  setFile(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    const file = files.item(0)
    
    if (!file) return

    if (!file.name.endsWith(`.${fileExtensions.csv}`)) {
      console.error("file extension not supported, use csv!")
      return
    }
    
    let reader: FileReader = new FileReader()

    reader.readAsText(file, 'utf-8')
  
    reader.onload = (e) => {

      let csv: any = reader.result;
      let allTextLines = csv.split(/\r|\n|\r/);
     
      if(allTextLines.length < 1) return

     //Table Headings
      const headerRowIndex = String(allTextLines[0]).startsWith("sep") ? 1 : 0
      let headerRow = allTextLines[headerRowIndex].split(';');

      let headers = []
      for (let j = 0; j < headerRow.length; j++) {
        headers.push(headerRow[j]);
      }

      this.headers = headers

      let dataRows = [];
      for(let i = headerRowIndex + 1; i < allTextLines.length; i++){
        dataRows.push(allTextLines[i].split(';'));
      }

      this.lines = dataRows.filter(row => row.length === this.headers.length)

      console.log(this.lines.map(line => {
        let lineObj: {[key: string]: any} = {}
        line.map((content: any, index: number) => {
          lineObj[this.headers[index]] = content
        })

        return lineObj
      }).map(el => Number(el!["VALOR BRUTO"].replace('R$', '').replace('.', '').replace(',','.'))).reduce((a,b) => {
        return a + b
      }))
      console.log(this.lines)
      console.log(this.headers)
    }

    reader.onprogress = (data) => {
      if (data.lengthComputable) {                                            
          var progress = (data.loaded / data.total) * 100;
          console.log('loading:', progress, '%');
      }
  }
  }
}
