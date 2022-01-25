import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {Bar} from 'react-chartjs-2'
//npm install react-chartjs-2@3.0.4 (TIK SITAS VEIKIA)
//Parodo darbuotojo varda ir kiek valandu isdirbo
//Gali paprasta collection sukurti su vardais ir valandomis

const DynamicChart = () => {
    const [chartData, setChartData]  = useState({});
    const [employeeSalary, setEmployeeSalary] = useState([]);
    const [employeeName, setEmployeeName] = useState([]);
    //Button handling
    function handleSubmit(e) {
        e.preventDefault();
        saveFile()
      }

      const saveFile = async () => {
        //Sita funkcija dirba kai mygtukas paspaustas
        var data = [];
        console.log("Button pressed");

        //
        // Funkcija kuri gauna JSON is mongoDB
        //

        //Veikiantis failo atsiuntimas! Tik reikia paduoti JSON is mongoDB
        //Failo atsiuntimas, const json turi tureti json is mongodb
        const fileName = "file";
        const json = JSON.stringify(data);
        const blob = new Blob([json],{type:'application/json'});
        const href = await URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = fileName + ".json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        };

 const Chart = () => {
        let empSal = [];
        let empName = [];

        //Jei su mongodb sunkiai GET, tai pabandyk mongodb gauti JSON duomenu tipa ir tada .then(res)...
        axios.get("http://dummy.restapiexample.com/api/v1/employees")
        .then(res => {
            console.log(res);
            for(const dataObj of res.data.data){
                empSal.push(parseInt(dataObj.employee_salary));
                empName.push(dataObj.employee_name );
                //employee_name
            }
            setChartData({
                labels: empName,
                datasets: [{
                                             label: 'Isdirbta valandu',
                                             data: empSal,
                                             backgroundColor: [
                                                 'rgba(255, 99, 132, 0.2)',
                                                 'rgba(54, 162, 235, 0.2)',
                                                 'rgba(255, 206, 86, 0.2)',
                                                 'rgba(75, 192, 192, 0.2)',
                                                 'rgba(153, 102, 255, 0.2)',
                                                 'rgba(255, 159, 64, 0.2)',
                                                 'rgba(255, 99, 132, 0.2)',
                                                 'rgba(54, 162, 235, 0.2)',
                                                 'rgba(255, 206, 86, 0.2)',
                                                 'rgba(75, 192, 192, 0.2)',
                                                 'rgba(153, 102, 255, 0.2)',
                                                 'rgba(255, 159, 64, 0.2)',
                                                 'rgba(255, 99, 132, 0.2)',
                                                 'rgba(54, 162, 235, 0.2)',
                                                 'rgba(255, 206, 86, 0.2)',
                                                 'rgba(75, 192, 192, 0.2)',
                                                 'rgba(153, 102, 255, 0.2)',
                                                 'rgba(255, 159, 64, 0.2)',
                                                 'rgba(255, 99, 132, 0.2)',
                                                 'rgba(54, 162, 235, 0.2)',
                                                 'rgba(255, 206, 86, 0.2)',
                                                 'rgba(75, 192, 192, 0.2)',
                                                 'rgba(153, 102, 255, 0.2)',
                                                 'rgba(255, 159, 64, 0.2)',
                                             ],
                                             borderColor: [
                                                 'rgba(255, 99, 132, 1)',
                                                 'rgba(54, 162, 235, 1)',
                                                 'rgba(255, 206, 86, 1)',
                                                 'rgba(75, 192, 192, 1)',
                                                 'rgba(153, 102, 255, 1)',
                                                 'rgba(255, 159, 64, 1)',
                                                 'rgba(255, 99, 132, 1)',
                                                 'rgba(54, 162, 235, 1)',
                                                 'rgba(255, 206, 86, 1)',
                                                 'rgba(75, 192, 192, 1)',
                                                 'rgba(153, 102, 255, 1)',
                                                 'rgba(255, 159, 64, 1)',
                                                 'rgba(255, 99, 132, 1)',
                                                 'rgba(54, 162, 235, 1)',
                                                 'rgba(255, 206, 86, 1)',
                                                 'rgba(75, 192, 192, 1)',
                                                 'rgba(153, 102, 255, 1)',
                                                 'rgba(255, 159, 64, 1)',
                                                 'rgba(255, 99, 132, 1)',
                                                 'rgba(54, 162, 235, 1)',
                                                 'rgba(255, 206, 86, 1)',
                                                 'rgba(75, 192, 192, 1)',
                                                 'rgba(153, 102, 255, 1)',
                                                 'rgba(255, 159, 64, 1)',
                                             ],
                                             borderWidth: 1
                                         }]
            });
        })
        .catch(err =>{
            console.log(err);
        })
        
    }
    useEffect(() => {
        Chart();
      }, []);
      return(
          <div className="App">
              <h1>Darbuotoju valandos</h1>
              <form onSubmit={handleSubmit}>
            <button type="submit">Download .xls</button>
            </form>
              <div>
                  <Bar
                    data={chartData}
                    options={{
                        responsive:true,
                        title: { text: "Isdirbta valandu", display: true },
                        scales:{
                            yAxes:{
                                ticks:{
                                    beginAtZero: true
                                }
                            }
                        }
                    }}
                  />
              </div>
          </div>
      )
}

export default DynamicChart;