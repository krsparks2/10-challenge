const Employee = require("../lib/Employee");

test('Does this track a new employee email', ()=>{
    const emp =  new Employee('Name', 2, 'test@email.com')
    expect(emp.email).toBe('test@email.com')
    expect(emp.getEmail()).toBe('test@email.com')
})

test('Does this track the employee name', ()=>{
    const emp =  new Employee('Name', 2, 'test@email.com')
    expect(emp.name).toBe('Name')
    expect(emp.getName()).toBe('Name')
})