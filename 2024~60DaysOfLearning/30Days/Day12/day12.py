
def depth_first_search_with_path(graph, start, goal):
    # Initialize the open list with the start node and its path
    open_list = [(start, [start])]
    # Initialize the closed set to keep track of visited nodes
    closed_set = set()

    # Loop while there are nodes to explore
    while open_list:
        # Pop the first element in the list (acting as a stack)
        current_node, current_path = open_list.pop(0)

        # Check if we have reached the goal
        if current_node == goal:
            return "SUCCESS", current_path

        # If not, add the current node to the closed set
        closed_set.add(current_node)

        # Get all children (connected nodes) of the current node
        children = graph.get(current_node, [])

        # Iterate over each child
        for child in children:
            # If the child has not been visited yet
            if child not in closed_set:
                # Add the child to the open list with the updated path
                open_list.insert(0, (child, current_path + [child]))

    # If the loop ends without finding the goal, return failure
    return "FAIL", []

# Example family graph
family_graph = {
    'Great_grandparents': ['Grandparents', 'Parents_Uncle'],
    'Grandparents': ['Uncle', 'Parents'],
    'Parents_Uncle': ['XYZ', 'ABC'],
    'Uncle': [],
    'Parents': ['You'],
    'You': [],
    'XYZ': [],
    'ABC': [],
}

start_node = 'Great_grandparents'
goal_node = 'You'

# Execute the depth-first search
result, path = depth_first_search_with_path(family_graph, start_node, goal_node)

# Print the result
if result == "SUCCESS":
    print("Path from Great_grandparents to You:", " -> ".join(path))
else:
    print("No path found from Great_grandparents to You.")


from collections import deque

# Define state space as a dictionary of lists
graph = {
    'Biratnagar': ['Rangeli', 'Dhankuta'],
    'Rangeli': ['Urlabari'],
    'Dhankuta': ['Bhojpur', 'Chainpur'],
    'Bhojpur': [],
    'Chainpur': ['Khandbari'],
    'Khandbari': [],
    'Urlabari': ['Shivasatakshi', 'Gauradaha'],
    'Gauradaha': [],
    'Shivasatakshi': ['Bhae', 'Suryo'],
    'Bhae': [],
    'Suryo': ['Illam'],
    'Illam': [],
}

# Define the start and goal state/nodes
start_node = 'Biratnagar'
goal_node = 'Kathmandu'

# Create a queue for BFS
queue = deque([start_node])

# Create a set to keep track of visited nodes
visited = set([start_node])

# Create a dictionary to keep track of the parent node of each visited node
parents = {start_node: None}

# Perform BFS
while queue:
    # Get the next node from the queue
    current_node = queue.popleft()
    # Check if the current node is the goal node
    if current_node == goal_node:
        # We have found a path to the goal node, so exit the loop
        break
    # Explore the neighbors of the current node
    for neighbor in graph.get(current_node, []):
        # Check if the neighbor has not been visited yet
        if neighbor not in visited:
            # Add the neighbor to the queue and mark it as visited
            queue.append(neighbor)
            visited.add(neighbor)
            # Set the parent of the neighbor to be the current node
            parents[neighbor] = current_node

# If we have found a path to the goal node, print the path
if goal_node in parents:
    # Follow the parent links from the goal node to the start node
    path = [goal_node]
    while path[-1] != start_node:
        path.append(parents[path[-1]])
    # Reverse the order of the nodes to get the path from start to goal
    path.reverse()
    print("Found a path from", start_node, "to", goal_node, ":")
    print("Goal Node is:", goal_node)
    print("Path is:", path)
else:
    print("Could not find a path from", start_node, "to", goal_node)
    print("Goal node:", goal_node, "doesn't exist")

print("Parent : Children mapping:", parents)
