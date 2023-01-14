const l = []

function add() {
    const name = document.getElementById('name').value;
    const proffession = document.getElementById('proffession').value;
    const age = document.getElementById('age').value;

    console.log(name, proffession, age);


    if (name === '' || proffession === '' || age === '') {
        const ltext = document.getElementById('ltext')
        ltext.style.color = 'red';

        ltext.innerHTML = 'Error : Please Make sure All the fields are filled before adding in an employee !'
        ltext.style.marginTop = '21%';
        ltext.style.marginLeft = '3.5%';
    } else {
        ltext.innerHTML = 'Success : Employee Added!'
        ltext.style.color = 'green';
        ltext.style.marginTop = '21%';
        ltext.style.marginLeft = '3.5%';



        
        const employee = document.getElementById('employee')
        employee.style.display = 'none';

        l.push({
            name: name,
            proffession: proffession,
            age: age,})
            
          


    }

    let table1 = document.getElementById('table1')
    table1.innerHTML = '';

    l.map((el, i)=> {

        table1.innerHTML += `
        <tbody>
        <tr>
        <td>${i+1}.</td>
        <td>Name:${el.name}</td>
        <td>Profession:${el.proffession}</td>
        <td>Age:${el.age}</td>
        <td><button onclick=d(${i}) type="button" class="btn">Delete User</button></td>
        </tr>
        </tbody>
        
`
    })

}

function f(el) {
    delete l[el]
    table1.innerHTML = ''
    l.map((el, i)=> {

        table1.innerHTML += `
        <tbody>
        <tr>
        <td>${i+1}.</td>
        <td>Name:${el.name}</td>
        <td>Profession:${el.proffession}</td>
        <td>Age:${el.age}</td>
        <td><button onclick=d(${i}) type="button" class="btn">Delete</button></td>
        </tr>
        </tbody>
`
    })
}
console.log(table1)