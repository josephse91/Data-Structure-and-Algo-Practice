# https://leetcode.com/submissions/detail/669970533/

=begin SOLUTION USING DFS OR BFS
    It is important to note that if a solution is base upon visiting every node of a tree, a breath first search is probably the faster solution.

    If the solution is dependent on the leaves or we know it is deeper in the tree, we would use DFS
=end

class Employee
    attr_accessor :id,:importance, :subordinates

    def initialize(id, importance,subordinates)
        @id = id;
        @importance = importance;
        @subordinates = subordinates;
    end


end

# def get_importance(employees, id)
#     company = build_tree(employees)
#     return company[id].importance if company[id].subordinates.empty?

#     # debugger
#     if company[id].subordinates.length > 1
#         sum_importance = company[id].subordinates.inject do |acc,i|
#             get_importance(employees,acc.id) + get_importance(employees,i.id)
#         end
#     else
#         sum_importance = get_importance(employees,company[id].subordinates[0].id)
#     end
    
#     return company[id].importance + sum_importance
# end

# rescue => exception
    
# end

def build_tree(employees)
    company = {}
    new_subs = []
    
    employees.each do |employee| 
        company[employee[0]] = Employee.new(employee[0],employee[1],employee[2])
    end
    company
end

# p get_importance([[1,5,[2,3]],[2,3,[]],[3,3,[]]],1)
# p get_importance([[1,2,[5]],[5,-3,[]]],5)
# p get_importance([[101,3,[]],[2,5,[101]]],2)
# p get_importance([[1,10,[2,3,4]],[2,-1,[]],[3,-2,[]],[4,-3,[]]],1)

# # --------------------------------------------------------------

=begin
def get_importance(employees, id)
    company = build_tree(employees)
    importance = 0
    queue = [company[id]]

    while queue.length > 0
        current_employee = queue.shift
        importance += current_employee.importance

        if current_employee.subordinates.length > 0
            current_employee.subordinates.each {|subordinate| queue.push(subordinate)}
        end
        
    end
    importance
end
=end

def get_importance(employees, id)
    employees = build_tree(employees)
    employee_list = employees.values
    total_importance = 0
    employee_list.each do |employee|
        if employee.id == id
            total_importance = group_importance(employee,employees)
        end
    end
    total_importance
end

def group_importance(sel_employees, employees)
    return sel_employees.importance if (sel_employees.subordinates.length == 0)
    
    total_importance = 0
    sel_employees.subordinates.each do |employee_id|
        employee = employees[employee_id]
        total_importance += group_importance(employee,employees)
    end

    sel_employees.importance + total_importance
end

p get_importance([[1,5,[2,3]],[2,3,[]],[3,3,[]]],1)
p get_importance([[1,2,[5]],[5,-3,[]]],5)
p get_importance([[101,3,[]],[2,5,[101]]],2)
p get_importance([[1,10,[2,3,4]],[2,-1,[]],[3,-2,[]],[4,-3,[]]],1)

# p build_tree([[1,5,[2,3]],[2,3,[]],[3,3,[]]])
# p build_tree([[1,2,[5]],[5,-3,[]]])
# p build_tree([[101,3,[]],[2,5,[101]]])
# p build_tree([[1,10,[2,3,4]],[2,-1,[]],[3,-2,[]],[4,-3,[]]])