// Alice and Bob have an undirected graph of n nodes and three types of edges:

// Type 1: Can be traversed by Alice only.
// Type 2: Can be traversed by Bob only.
// Type 3: Can be traversed by both Alice and Bob.
// Given an array edges where edges[i] = [typei, ui, vi] represents a bidirectional edge of type typei between nodes ui and vi, find the maximum number of edges you can remove so that after removing the edges, the graph can still be fully traversed by both Alice and Bob. The graph is fully traversed by Alice and Bob if starting from any node, they can reach all other nodes.

// Return the maximum number of edges you can remove, or return -1 if Alice and Bob cannot fully traverse the graph.

class Solution {
    public int maxNumEdgesToRemove(int n, int[][] edges) {
        UnionFind Alice = new UnionFind(n);
        UnionFind Bob = new UnionFind(n);

        int edgesRequired = 0;
        for(int[] edge: edges) {
            if(edge[0] == 3) {
                edgesRequired += (Alice.performUnion(edge[1], edge[2]) | Bob.performUnion(edge[1], edge[2]));
            }
        }

        for(int[] edge: edges) {
            if(edge[0] == 1) {
                edgesRequired += Alice.performUnion(edge[1], edge[2]);
            } else if(edge[0] == 2) {
                edgesRequired += Bob.performUnion(edge[1], edge[2]);
            }
        }

        if(Alice.isConnected() && Bob.isConnected()) return edges.length - edgesRequired;

        return 0;
    }

    private class UnionFind {
        int[] representative;
        int[] componentSize;

        int components;

        public UnionFind(int n) {
            components = n;
            representative = new int[n+1];
            componentSize = new int[n+1];

            for(int i=0;i <= n;i++) {
                representative[i] = i;
                componentSize[i] = 1;
            }
        }

        int findRepresentative(int x) {
            if(representative[x] == x) {
                return x;
            }

            return representative[x] = findRepresentative(representative[x]);
        }

        int performUnion(int x, int y) {
            x = findRepresentative(x);
            y = findRepresentative(y);

            if(x == y) return 0;

            if(componentSize[x] > componentSize[y]) {
                componentSize[x] += componentSize[y];
                representative[y] = x;
            } else {
                componentSize[y] += componentSize[x];
                representative[x] = y;
            }

            components--;
            return 1;
        }

        boolean isConnected() {
            return components == 1;
        }
    }
}

class RemoveMaxEdges {
    public static void main(String args[]) {
        Solution sol = new Solution();
        int[][] edges = {{3,1,2},{3,2,3},{1,1,3},{1,2,4},{1,1,2},{2,3,4}};
        System.out.println(sol.maxNumEdgesToRemove(4, edges));
    }
}