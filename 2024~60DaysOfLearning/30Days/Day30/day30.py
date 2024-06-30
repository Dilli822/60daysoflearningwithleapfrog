import sympy as sp
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns

# Define the variable
a = sp.symbols('a')

# Define the functions
f1 = a**2
f2 = a**3
f3 = sp.log(a)

# Calculate the derivatives
df1_da = sp.diff(f1, a)
df2_da = sp.diff(f2, a)
df3_da = sp.diff(f3, a)

# Convert sympy expressions to numerical functions for plotting
f1_func = sp.lambdify(a, f1, 'numpy')
f2_func = sp.lambdify(a, f2, 'numpy')
f3_func = sp.lambdify(a, f3, 'numpy')

df1_da_func = sp.lambdify(a, df1_da, 'numpy')
df2_da_func = sp.lambdify(a, df2_da, 'numpy')
df3_da_func = sp.lambdify(a, df3_da, 'numpy')

# Define the range of values for a
a_values = np.linspace(0.1, 5, 400)

# Calculate the function values
f1_values = f1_func(a_values)
f2_values = f2_func(a_values)
f3_values = f3_func(a_values)

# Calculate the derivative values
df1_da_values = df1_da_func(a_values)
df2_da_values = df2_da_func(a_values)
df3_da_values = df3_da_func(a_values)

# Plot the functions and their derivatives
plt.figure(figsize=(12, 8))

# Plot f(a) = a^2 and its derivative
plt.subplot(3, 1, 1)
plt.plot(a_values, f1_values, label=r'$f(a) = a^2$')
plt.plot(a_values, df1_da_values, label=r"$f'(a) = 2a$")
plt.xlabel('a')
plt.ylabel('f(a) and f\'(a)')
plt.title(r'Function $a^2$ and its derivative $2a$')
plt.legend()
plt.grid(True)

# Plot f(a) = a^3 and its derivative
plt.subplot(3, 1, 2)
plt.plot(a_values, f2_values, label=r'$f(a) = a^3$')
plt.plot(a_values, df2_da_values, label=r"$f'(a) = 3a^2$")
plt.xlabel('a')
plt.ylabel('f(a) and f\'(a)')
plt.title(r'Function $a^3$ and its derivative $3a^2$')
plt.legend()
plt.grid(True)

# Plot f(a) = log(a) and its derivative
plt.subplot(3, 1, 3)
plt.plot(a_values, f3_values, label=r'$f(a) = \log(a)$')
plt.plot(a_values, df3_da_values, label=r"$f'(a) = 1/a$")
plt.xlabel('a')
plt.ylabel('f(a) and f\'(a)')
plt.title(r'Function $\log(a)$ and its derivative $1/a$')
plt.legend()
plt.grid(True)

plt.tight_layout()
plt.show()

import matplotlib.pyplot as plt
import seaborn as sns

# Define the function J = 3(a + b * c)
def compute_J(a, b, c):
    u = b * c
    V = a + u
    J = 3 * V
    return J, u, V

# Forward pass to compute J and intermediate variables
a, b, c = 5, 3, 2
J, u, V = compute_J(a, b, c)

# Derivatives (gradients) using backward pass
dJ_dV = 3
dV_da = 1
dV_du = 1
du_db = c
du_dc = b

# Gradients w.r.t. inputs
dJ_da = dJ_dV * dV_da
dJ_db = dJ_dV * dV_du * du_db
dJ_dc = dJ_dV * dV_du * du_dc

# Print the results
print(f"J: {J}, u: {u}, V: {V}")
print(f"dJ/da: {dJ_da}, dJ/db: {dJ_db}, dJ/dc: {dJ_dc}")

# Plot the computation graph for forward and backward passes
sns.set(style="whitegrid")
fig, axs = plt.subplots(1, 2, figsize=(16, 6))

# Nodes and their positions in the graph
nodes = {'a': (0, 1), 'b': (0, 0), 'c': (0, -1), 'u': (1, -0.5), 'V': (2, 0), 'J': (3, 0)}

# Define function to plot graph with equations and annotations
def plot_graph(ax, edges, title, equations):
    for node, (x, y) in nodes.items():
        ax.scatter(x, y, s=1000, c='white', edgecolors='black')
        ax.text(x, y, f'  {node}', ha='center', va='center', fontsize=12, color='black')

    for start, end in edges:
        start_pos = nodes[start]
        end_pos = nodes[end]
        ax.arrow(start_pos[0], start_pos[1], end_pos[0] - start_pos[0], end_pos[1] - start_pos[1],
                 head_width=0.1, length_includes_head=True, color='black')

    ax.set_xticks([])
    ax.set_yticks([])
    ax.set_xlim(-0.5, 3.5)
    ax.set_ylim(-1.5, 1.5)
    ax.set_title(title, fontsize=16)
    
    # Annotate equations
    for i, equation in enumerate(equations, 1):
        ax.text(3.5, 1.2 - i * 0.3, equation, fontsize=12, ha='right')

# Equations for each step
equations_forward = [
    r'$u = b \cdot c$',
    r'$V = a + u$',
    r'$J = 3 \cdot V$'
]

equations_backward = [
    r'$\frac{\partial J}{\partial V} = 3$',
    r'$\frac{\partial V}{\partial a} = 1$',
    r'$\frac{\partial V}{\partial u} = 1$',
    r'$\frac{\partial u}{\partial b} = c$',
    r'$\frac{\partial u}{\partial c} = b$'
]

# Edges for forward and backward passes
edges_forward = [('b', 'u'), ('c', 'u'), ('a', 'V'), ('u', 'V'), ('V', 'J')]
edges_backward = [('J', 'V'), ('V', 'u'), ('V', 'a'), ('u', 'b'), ('u', 'c')]

# Plot forward propagation
plot_graph(axs[0], edges_forward, "Forward Propagation", equations_forward)

# Plot backward propagation
plot_graph(axs[1], edges_backward, "Backward Propagation", equations_backward)

plt.tight_layout()
plt.show()
