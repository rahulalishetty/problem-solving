// You are given an array routes representing bus routes where routes[i] is a bus route that the ith bus repeats forever.

// For example, if routes[0] = [1, 5, 7], this means that the 0th bus travels in the sequence 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... forever.
// You will start at the bus stop source (You are not on any bus initially), and you want to go to the bus stop target. You can travel between bus stops by buses only.

// Return the least number of buses you must take to travel from source to target. Return -1 if it is not possible.

 

// Example 1:

// Input: routes = [[1,2,7],[3,6,7]], source = 1, target = 6
// Output: 2
// Explanation: The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.
// Example 2:

// Input: routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12
// Output: -1
 

// Constraints:

// 1 <= routes.length <= 500.
// 1 <= routes[i].length <= 105
// All the values of routes[i] are unique.
// sum(routes[i].length) <= 105
// 0 <= routes[i][j] < 106
// 0 <= source, target < 106


function numBusesToDestination (routes, source, target) {
    if (source === target) return 0;
    
    let graph = {};
    for (let i = 0; i < routes.length; i++) {
        for (let j = 0; j < routes[i].length; j++) {
            let bus = i;
            let stop = routes[i][j];
            if (!graph[stop]) graph[stop] = [];
            graph[stop].push(bus);
        }
    }

    let q = [source], buses = 1, visitedBus = new Set();
    while (q.length) {
        let accessibleStopsQ = [];
        while (q.length) {
            let currentStop = q.pop();
            // Check all unvisited, accessible buses from current stop
            for (let nextBus of graph[currentStop]) {
                if (visitedBus.has(nextBus)) continue;
                visitedBus.add(nextBus);
                // Check for accessible stops from each accessible bus
                for (let nextStop of routes[nextBus]) {
                    if (nextStop === target) return buses;
                    accessibleStopsQ.push(nextStop);
                }
            }
        }
		buses++;
        q = accessibleStopsQ;
    }
    return -1;
}

console.log(numBusesToDestination([[1,2,7],[3,6,7]], 1, 6));