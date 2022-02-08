def reverse_string(str)
    return "" if str.length < 1
    str[-1] + reverse_string(str[0...-1]) 
end

def flatten(data)
    return data if data.class != Array
    flat = data.map do |ele|
        if ele.class == Array
            flatten(ele)
        else
            flat << ele
        end
    end
    flat
end

array_1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
p flatten(array_1)  # => [ 1, 2, 3, 4, 5, 6, 7, 8 ]

array_2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]
p flatten(array_1)  # => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]

flatten('base case')  # => [ 'base case' ]