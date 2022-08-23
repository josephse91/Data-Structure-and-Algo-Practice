/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {

    if(!n){
        return true
    }
       
    //create adjList from edges:
    
    const adjList = [...Array(n)].map((e) => new Array())
    const hasNeighbours = new Set()
    for(const edge of edges){
        adjList[edge[0]].push(edge[1])  
        adjList[edge[1]].push(edge[0])
    }


    
    const dfs = (i, prev) => {
        if(visited.has(i)){ //loop detected
            return false
        }
        
        visited.add(i)
        for(const neighbour of adjList[i]){
            if(neighbour === prev){
                continue
            }
            if(!dfs(neighbour, i)){ //cycle detected
                return false
            }
        }
        
        return true
    }
    
    let visited = new Set()
    
    if(dfs(0, -1)){
        return visited.size === n
    }else{
        return false
    }   
};