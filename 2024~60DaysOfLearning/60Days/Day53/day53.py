
import random

# Define the grammar and probabilities
grammar = {
    'S': [('NP VP', 0.9), ('S Conj S', 0.1)],
    'NP': [('Pronoun', 0.3), ('Name', 0.1), ('Noun', 0.1), ('Article Noun', 0.25), 
           ('Article Adjs Noun', 0.05), ('Digit Digit', 0.05), ('NP PP', 0.1), ('NP RelClause', 0.05)],
    'VP': [('Verb', 0.4), ('VP NP', 0.35), ('VP Adjective', 0.05), ('VP PP', 0.1), ('VP Adverb', 0.1)],
    'Adjs': [('Adjective', 0.8), ('Adjective Adjs', 0.2)],
    'PP': [('Prep NP', 1.0)],
    'RelClause': [('RelPro VP', 1.0)],
    'Pronoun': [('I', 0.1), ('you', 0.03), ('he', 0.1), ('it', 0.1)],
    'Name': [('John', 0.01), ('Mary', 0.01), ('Boston', 0.01)],
    'Noun': [('wumpus', 0.15), ('pits', 0.05)],
    'Verb': [('is', 0.1), ('feel', 0.1), ('smells', 0.1), ('stinks', 0.05)],
    'Adjective': [('right', 0.1), ('dead', 0.05), ('smelly', 0.02), ('breezy', 0.02)],
    'Adverb': [('here', 0.05), ('ahead', 0.05), ('nearby', 0.02)],
    'Article': [('the', 0.4), ('a', 0.3), ('an', 0.1), ('every', 0.05)],
    'Prep': [('to', 0.2), ('in', 0.1), ('on', 0.05), ('near', 0.1)],
    'Conj': [('and', 0.5), ('or', 0.1), ('but', 0.2), ('yet', 0.02)],
    'Digit': [('0', 0.2), ('1', 0.2), ('2', 0.2), ('3', 0.2), ('4', 0.2)],
    'RelPro': [('that', 0.4), ('which', 0.15), ('who', 0.2), ('whom', 0.02)]
}

def generate(category):
    if category not in grammar:
        return category
    
    # Select a rule based on probabilities
    rule = random.choices(grammar[category], weights=[r[1] for r in grammar[category]])[0][0]
    
    # Recursively generate each part of the rule
    return ' '.join(generate(part) for part in rule.split())

# Generate a sentence
sentence = generate('S')
print(sentence)

import random
import nltk
from nltk import PCFG
from nltk.tree import Tree

# Define the probabilistic grammar
grammar = """
    S -> NP VP [0.9] | S Conj S [0.1]
    NP -> Pronoun [0.3] | Name [0.1] | Noun [0.1] | Article Noun [0.25] | Article Adjs Noun [0.05] | Digit Digit [0.05] | NP PP [0.1] | NP RelClause [0.05]
    VP -> Verb [0.4] | VP NP [0.35] | VP Adjective [0.05] | VP PP [0.1] | VP Adverb [0.1]
    Adjs -> Adjective [0.8] | Adjective Adjs [0.2]
    PP -> Prep NP [1.0]
    RelClause -> RelPro VP [1.0]
    Pronoun -> 'I' [0.3] | 'you' [0.3] | 'he' [0.2] | 'it' [0.2]
    Name -> 'John' [0.33] | 'Mary' [0.33] | 'Boston' [0.34]
    Noun -> 'wumpus' [0.75] | 'pits' [0.25]
    Verb -> 'is' [0.29] | 'feel' [0.29] | 'smells' [0.29] | 'stinks' [0.13]
    Adjective -> 'right' [0.53] | 'dead' [0.26] | 'smelly' [0.11] | 'breezy' [0.10]
    Adverb -> 'here' [0.42] | 'ahead' [0.42] | 'nearby' [0.16]
    Article -> 'the' [0.47] | 'a' [0.35] | 'an' [0.12] | 'every' [0.06]
    Prep -> 'to' [0.44] | 'in' [0.22] | 'on' [0.11] | 'near' [0.23]
    Conj -> 'and' [0.61] | 'or' [0.12] | 'but' [0.24] | 'yet' [0.03]
    Digit -> '0' [0.2] | '1' [0.2] | '2' [0.2] | '3' [0.2] | '4' [0.2]
    RelPro -> 'that' [0.4] | 'which' [0.15] | 'who' [0.2] | 'whom' [0.25]
"""

# Convert the grammar to an NLTK PCFG
pcfg = PCFG.fromstring(grammar)

def generate_tree(production, parent=None):
    tree = Tree(production.lhs().symbol(), [])
    for child in production.rhs():
        if isinstance(child, str):
            tree.append(child)
        else:
            child_prod = random.choices(
                population=pcfg.productions(lhs=child),
                weights=[prod.prob() for prod in pcfg.productions(lhs=child)]
            )[0]
            tree.append(generate_tree(child_prod, tree))
    return tree

# Generate a parse tree for a sentence
start_symbol = pcfg.start()
start_production = random.choices(
    population=pcfg.productions(lhs=start_symbol),
    weights=[prod.prob() for prod in pcfg.productions(lhs=start_symbol)]
)[0]
parse_tree = generate_tree(start_production)

# Print and visualize the parse tree
print(parse_tree)
parse_tree.pretty_print()

# Visualize the tree
parse_tree.draw()



import random
import nltk
from nltk import PCFG
from nltk.tree import Tree
import matplotlib.pyplot as plt
import matplotlib.animation as animation
import networkx as nx

# [Previous code for grammar definition and parse tree generation remains the same]

# Function to convert Tree to NetworkX graph
def tree_to_networkx(tree):
    G = nx.Graph()
    def add_nodes(t, parent=None):
        node_id = id(t)
        G.add_node(node_id, label=t.label())
        if parent:
            G.add_edge(parent, node_id)
        for child in t:
            if isinstance(child, Tree):
                add_nodes(child, node_id)
            else:
                child_id = id(child)
                G.add_node(child_id, label=child)
                G.add_edge(node_id, child_id)
    add_nodes(tree)
    return G

# Create the graph
G = tree_to_networkx(parse_tree)

# Set up the matplotlib figure
fig, ax = plt.subplots(figsize=(12, 8))
pos = nx.spring_layout(G, k=0.9, iterations=50)

# Animation update function
def update(num):
    ax.clear()
    # Draw nodes
    nx.draw_networkx_nodes(G, pos, node_size=700, node_color='lightblue', ax=ax)
    # Draw edges
    nx.draw_networkx_edges(G, pos, ax=ax)
    # Draw labels
    labels = nx.get_node_attributes(G, 'label')
    visible_labels = {node: label for node, label in labels.items() if num >= list(G.nodes()).index(node)}
    nx.draw_networkx_labels(G, pos, visible_labels, ax=ax)
    ax.set_title(f"Parse Tree Animation (Step {num+1}/{len(G.nodes())})")

# Create the animation
anim = animation.FuncAnimation(fig, update, frames=len(G.nodes()), interval=500, repeat=False)

# Save the animation (optional)
# anim.save('parse_tree_animation.gif', writer='pillow', fps=2)

# Show the plot
plt.tight_layout()
plt.show()