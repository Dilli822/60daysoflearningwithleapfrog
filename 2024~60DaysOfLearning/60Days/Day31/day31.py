import matplotlib.pyplot as plt
import networkx as nx

# Forward Pass
a = 5
b = 3
c = 2

# Compute intermediate values
u = b * c
v = a + u
J = 3 * v

# Backward Pass (Backpropagation)
dJ_dv = 3   # dJ/dv
dv_da = 1   # dv/da
dv_du = 1   # dv/du
du_db = c   # du/db
du_dc = b   # du/dc

# Applying the chain rule
dJ_da = dJ_dv * dv_da
dJ_du = dJ_dv * dv_du
dJ_db = dJ_du * du_db
dJ_dc = dJ_du * du_dc

# Print results
print("Forward Pass:")
print(f"u = {u}")
print(f"v = {v}")
print(f"J = {J}")

print("\nBackward Pass (Backpropagation):")
print(f"dJ/da = {dJ_da}")
print(f"dJ/db = {dJ_db}")
print(f"dJ/dc = {dJ_dc}")

# Plotting the computation graph
G = nx.DiGraph()

# Adding nodes
G.add_node("a", value=a)
G.add_node("b", value=b)
G.add_node("c", value=c)
G.add_node("u", value=u)
G.add_node("v", value=v)
G.add_node("J", value=J)

# Adding edges
G.add_edge("a", "v")
G.add_edge("u", "v")
G.add_edge("b", "u")
G.add_edge("c", "u")
G.add_edge("v", "J")

# Get positions for the nodes
pos = {
    "a": (0, 0),
    "b": (1, 0),
    "c": (2, 0),
    "u": (1.5, -1),
    "v": (1.5, -2),
    "J": (1.5, -3)
}

# Draw the graph
plt.figure(figsize=(8, 6))
nx.draw(G, pos, with_labels=True, node_size=3000, node_color='white', edgecolors='black', font_size=10, font_weight='bold')

# Draw the edge labels
edge_labels = {
    ("a", "v"): f"dv/da = {dv_da}",
    ("u", "v"): f"dv/du = {dv_du}",
    ("b", "u"): f"du/db = {du_db}",
    ("c", "u"): f"du/dc = {du_dc}",
    ("v", "J"): f"dJ/dv = {dJ_dv}"
}
nx.draw_networkx_edge_labels(G, pos, edge_labels=edge_labels, font_color='red')

# Annotate the nodes with their values
for node, (x, y) in pos.items():
    plt.text(x, y + 0.2, f"{G.nodes[node]['value']}", fontsize=12, ha='center')

plt.title("Computation Graph with Derivatives")
plt.show()
