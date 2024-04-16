// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.


function destinationCity (paths) {
    const n = paths.length, stops = new Set(), adj = {};

    for(let i=0;i<n;i++) {
        const [u, v] = paths[i];

        if(adj.hasOwnProperty(u)) {
            adj[u].push(v);
        } else {
            adj[u] = [v];
        }

        stops.add(u);
        stops.add(v);
    }

    const stopsInBetween = Object.keys(adj);

    stopsInBetween.forEach(stop => {
        stops.delete(stop);
    });

    return Array.from(stops)[0];
}

console.log(destinationCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]));