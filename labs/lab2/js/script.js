const Xavier = ["Xavier", 95, 90, 88, 94];
const Eve = ["Eve", 89, 87, 85, 96] ;
const Paul = ["Paul", 70, 60, 50,  60];
const Mario = ["Mario", 40, 30, 30, 70];
const Steve = ["Steve", 70, 85, 43, 79];
const Carlo = ["Carlo", 42, 67, 69];
const Lily = ["Lily", 78, 84, 74, 87];
const Fatty = ["Fatty", 67, 89,];

const students = [Xavier, Eve, Paul, Mario, Steve, Mario, Carlo, Lily, Fatty];
console.log(students);

const table = document.getElementById("student-table");

// fill table with data
students.forEach(student => {
    let row = document.createElement("tr");

    student.forEach(value => {
        let data = document.createElement("td");
        data.textContent = value;
        row.appendChild(data);
    });
    table.appendChild(row);
});

// calculate average grades
function AverageGrade(){
    // iterate over all students
    for(let i = 1; i < table.rows.length; i++){
        let row = table.rows[i];
        let data = row.cells;

        let sum = 0; 
        let courseCount = 0;

        for(let j = 1; j < 5; j++){
            // missing grade, skip
            if(data[j] == undefined|| data[j].textContent == ""){
                continue
            }
            else{
                sum += Number(data[j].textContent);
                courseCount++;
            }
        }

        let missingCells = 4 - courseCount;

        // fill in missing cells
        for(let k = 0; k < missingCells; k++){
            let emptyCell = document.createElement("td");
            emptyCell.textContent = "N/A";
            row.appendChild(emptyCell);
        }

        let average = (sum/courseCount).toFixed(0);
        let averageCell = document.createElement("td");
        averageCell.textContent = average;
        console.log(`${data[0].textContent} Avg : ${average}`);
        row.appendChild(averageCell);

    }
}

AverageGrade();

// calculate letter grade 
function letterGrade(){
    for(let i = 1; i < table.rows.length; i++){
        let row = table.rows[i];
        let data = row.cells;
        let average = Number(data[5].textContent).toFixed(0);
        let letterGrade = "";

        switch(true){
            case (average >= 90):
                letterGrade = "A+";
                break;
            case (average >= 85):
                letterGrade = "A";
                break;
            case (average >= 80):
                letterGrade = "A-";
                break;
            case (average >= 77):
                letterGrade = "B+";
                break;
            case (average >= 73):
                letterGrade = "B";
                break;
            case (average >= 70):
                letterGrade = "B-";
                break;
            case (average >= 65):
                letterGrade = "C+";
                break;
            case (average >= 60):
                letterGrade = "C";
                break;
            case (average >= 55):
                letterGrade = "C-";
                break;
            case (average >= 50):
                letterGrade = "D";
                break;
            case (average <= 49):
                letterGrade = "F";
                break;
        }
        console.log(`${data[0].textContent} Avg : ${letterGrade}`);
        let letterCell = document.createElement("td");
        letterCell.textContent = letterGrade;
        row.appendChild(letterCell);
    }
}

letterGrade();


function linkStudentNames() {
  const linkStudents = ["Xavier", "Eve", "Paul"];

  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i];
    let nameCell = row.cells[0];
    let name = nameCell.textContent;

    if (linkStudents.includes(name)) {
      let link = document.createElement("a");
      link.href = "studentpages/" + name + ".html";
      link.textContent = name;

      nameCell.textContent = ""; 
      nameCell.appendChild(link);
    }
  }
}

linkStudentNames();

