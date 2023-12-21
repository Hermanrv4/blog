const inputFile = document.querySelector('#file');
const button = document.querySelector('#button');
var fileXML = null;
var dropArea = document.querySelector('.drop-container');
var inputContainer = document.querySelector('.input-list');
var btnsData = document.querySelector('.btns-data');
var dataContainer = document.querySelector('.data-container');
var TABLA = document.querySelector('#table')

var dataForAdd = [];


button.addEventListener('click', () => {
    if (fileXML) {
        loadXMLNEW();
        button.style.display = "none";
        inputContainer.style.display = "none"
        btnsData.style.display = "flex";
        dataContainer.style.display = "flex";


    } else {
        return
    }
});

function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            loadXML(this);
        }
    };
    xhttp.open("GET", "datos.xml", true);
    xhttp.send();
}

const loadXML = (xml) => {
    /* let docXML = xml.responseXML; */
    let docXML = xml;

    let currentDate = new Date();

    let pedido = docXML.getElementsByTagName("cbc:ID")[2].childNodes[0].nodeValue;
    let fechaFacturacion = docXML.getElementsByTagName("cbc:IssueDate")[0].childNodes[0].nodeValue;
    let referencia = docXML.getElementsByTagName("cbc:ID")[0].childNodes[0].nodeValue;
    let fechaContabilizacion = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    let importe = parseFloat(docXML.getElementsByTagName("cbc:Amount")[0].childNodes[0].nodeValue).toFixed(2);
    let valorVenta = parseFloat(importe / 1.18).toFixed(2);
    /* let IGV = parseFloat(valorVenta * 0.18).toFixed(2); */
    let IGV = docXML.getElementsByTagName("cbc:TaxAmount")[0].childNodes[0].nodeValue;
    let texto = docXML.getElementsByTagName("cbc:Description")[0].childNodes[0].nodeValue;
    let retencion = "";
    let detraccion = "";
    

    if (docXML.getElementsByTagName("cac:OrderReference").length > 0) {
        // Bienes
        let OrderReference = docXML.getElementsByTagName("cac:OrderReference")[0].children[0].innerHTML
        console.log("Empieza con 45", OrderReference.startsWith("45"));
        console.log("Si tiene Order refence");
        console.log("Tiene Retención");
        console.log(docXML.getElementsByTagName("cac:OrderReference")[0].children[0].innerHTML);
        if (importe > 700) {
            console.log("Se aplica");
            console.log("descuento:", importe * 0.12);
            retencion = parseFloat(importe * 0.12).toFixed(2)
        } else {
            console.log("no se aplica");
        }
    } else {
        console.log("No tiene Order refence");
        console.log("Tiene Detracción");
        if (importe > 700) {
            if (IGV == 0) {
                console.log("No Se aplica");
            } else {
                console.log("Se aplica");
                console.log("descuento:", importe * 0.12);
                detraccion = parseFloat(importe * 0.12).toFixed(2)
            }
        } else {
            console.log("no se aplica");
        }
    }
    let importeFinal = parseFloat(importe - retencion - detraccion).toFixed(2)

    let arrayData = [pedido, fechaFacturacion, referencia, fechaContabilizacion, importe, valorVenta, IGV, texto, retencion, detraccion, importeFinal];

    dataForAdd = arrayData;

    let dataHTML = document.querySelector('.data-right');
    let dataTable = document.querySelector('#data');
    dataHTML.innerHTML = "";
    dataTable.innerHTML = "";


    for (let i = 0; i < arrayData.length; i++) {
        dataHTML.innerHTML += `
            <div class="value">
                ${arrayData[i]}
            </div>
        `
        dataTable.innerHTML += `
            <td>
                ${arrayData[i]}
            </td>
        `
    }
}

const loadXMLNEW = async () => {
    let reader = new FileReader();
    reader.readAsText(fileXML);
    reader.onloadend = function () {
        /* console.log(reader.result); */
        let XMLData = reader.result;
        let parser = new DOMParser();
        let xmlDOM = parser.parseFromString(XMLData, 'application/xml');
        loadXML(xmlDOM);
    }
}


inputFile.addEventListener('change', (e) => {
    fileXML = e.target.files[0]
    dropArea.style.display = "none"
    inputContainer.style.display = "block"
});

dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.classList.add('dd-select');
});
dropArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropArea.classList.remove('dd-select');
});
dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    let files = e.dataTransfer.files;
    if (files.length != 1) {
        return
    }
    fileXML = files[0]
    dropArea.style.display = "none"
    inputContainer.style.display = "block"
});

const remove = () => {
    inputContainer.style.display = "none"
    dropArea.style.display = "flex"
    fileXML = null
    dataForAdd = []
}

const restablecer = () => {
    dropArea.style.display = "flex"
    fileXML = null
    btnsData.style.display = "none"
    dataContainer.style.display = "none"
    button.style.display = "block"
    dataForAdd = []
}


function exportTableToExcel(tableID, filename = '') {
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

    // Specify file name
    filename = filename ? filename + '.xls' : 'excel_data.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }
}

const addTicket = async () => {

    if (dataForAdd.length > 0) {
        let newTicket = {
            pedido: dataForAdd[0],
            fechaFacturacion: dataForAdd[1],
            referencia: dataForAdd[2],
            fechaContabilizacion: dataForAdd[3],
            importe: dataForAdd[4],
            valorVenta: dataForAdd[5],
            IGV: dataForAdd[6],
            texto: dataForAdd[7],
            retencion: dataForAdd[8],
            detraccion: dataForAdd[9],
            importeFinal: dataForAdd[10]
        }

        try {
            const response = await fetch("https://etrapersac.herokuapp.com/api/ticket",
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(newTicket)
                });
            const data = await response.json();
            if (data.status) {
                alert("Se registró correctamente")
            } else {
                alert("Ocurrió un error al registrar")
            }
        } catch (error) {
            alert("Ocurrió un error al registrar")
        }



    } else {
        console.log("No hay data para agregar");
    }

}

const downloadAll = async () => {

    try {
        const response = await fetch('https://etrapersac.herokuapp.com/api/ticket');
        const data = await response.json();
        let tickets = data.tickets;

        let dataTable = document.querySelector('#data2');
        dataTable.innerHTML = "";

        tickets.map((t) => {
            dataTable.innerHTML += `
            <tr>
                <td>
                    ${t.pedido}
                </td>
                <td>
                    ${t.fechaFacturacion}
                </td>
                <td>
                    ${t.referencia}
                </td>
                <td>
                    ${t.fechaContabilizacion}
                </td>
                <td>
                    ${t.importe}
                </td>
                <td>
                    ${t.valorVenta}
                </td>
                <td>
                    ${t.IGV}
                </td>
                <td>
                    ${t.texto}
                </td>
                <td>
                    ${t.retencion}
                </td>
                <td>
                    ${t.detraccion}
                </td>
                <td>
                    ${t.importeFinal}
                </td>
            </tr>
            `
        });

        exportTableToExcel("table2", "AllData")


    } catch (error) {
        alert("Ocurrió un error al obtener los datos")
    }

}