class Employee {
    constructor(id, importance, subordinates) {
        this.id = id;
        this.importance = importance;
        this.subordinates = subordinates;
    }
}

var GetImportance = function(employees, id) {
    let root = employees.map(function(employee) {
        new Employee(employee[0],employee[1],employee[2])
    })

    console.log(root)
    return root;
};

console.log(GetImportance([[1,5,[2,3]],[2,3,[]],[3,3,[]]],0))