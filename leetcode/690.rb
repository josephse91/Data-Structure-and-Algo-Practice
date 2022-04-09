require "byebug"

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

rescue => exception
    
end

def build_tree(employees)
    company = {}
    new_subs = []
    
    employees.each do |employee| 
        company[employee[0]] = Employee.new(employee[0],employee[1],employee[2])
    end
    
    employees.each_with_index do |e,i|
        if (e[2].length > 0)
            subs = company[e[0]].subordinates
            subs.each do |sub|
                new_subs << company[sub];
            end

            company[e[0]].subordinates = new_subs
        end
    end
    
    company
end

# p get_importance([[1,5,[2,3]],[2,3,[]],[3,3,[]]],1)
# p get_importance([[1,2,[5]],[5,-3,[]]],5)
# p get_importance([[101,3,[]],[2,5,[101]]],2)
# p get_importance([[1,10,[2,3,4]],[2,-1,[]],[3,-2,[]],[4,-3,[]]],1)

# # --------------------------------------------------------------

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

p get_importance([[1,5,[2,3]],[2,3,[]],[3,3,[]]],1)
p get_importance([[1,2,[5]],[5,-3,[]]],5)
p get_importance([[101,3,[]],[2,5,[101]]],2)
p get_importance([[1,10,[2,3,4]],[2,-1,[]],[3,-2,[]],[4,-3,[]]],1)

# After trying this problem using dfs, it seems to make far more sense with bfs. This is because, once you have your root, can simply add the importance scanning down each level of children