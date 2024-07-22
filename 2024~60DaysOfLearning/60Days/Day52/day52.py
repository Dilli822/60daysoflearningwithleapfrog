import re
from collections import defaultdict

class NaiveBayesClassifier:
    def __init__(self):
        self.word_counts = {'pos': defaultdict(int), 'neg': defaultdict(int)}
        self.class_counts = {'pos': 0, 'neg': 0}
        self.vocab = set()
        self.word_probs = {'pos': {}, 'neg': {}}

    def preprocess(self, text):
        # Convert to lowercase and split into words
        return re.findall(r'\w+', text.lower())

    def train(self, tweets, labels):
        for tweet, label in zip(tweets, labels):
            words = self.preprocess(tweet)
            self.class_counts[label] += len(words)
            for word in words:
                self.word_counts[label][word] += 1
                self.vocab.add(word)

        # Calculate word probabilities
        for label in ['pos', 'neg']:
            for word in self.vocab:
                self.word_probs[label][word] = (self.word_counts[label][word] + 1) / (self.class_counts[label] + len(self.vocab))

    def classify(self, tweet):
        words = self.preprocess(tweet)
        pos_score = neg_score = 1

        for word in words:
            if word in self.vocab:
                pos_score *= self.word_probs['pos'].get(word, 1)
                neg_score *= self.word_probs['neg'].get(word, 1)

        return 'Positive' if pos_score > neg_score else 'Negative', pos_score, neg_score

# Example usage
classifier = NaiveBayesClassifier()

# Training data
positive_tweets = [
    "I am happy because I am learning NLP",
    "I am happy, not sad."
]
negative_tweets = [
    "I am sad, I am not learning NLP",
    "I am sad, not happy"
]

tweets = positive_tweets + negative_tweets
labels = ['pos'] * len(positive_tweets) + ['neg'] * len(negative_tweets)

# Train the classifier
classifier.train(tweets, labels)

# Test the classifier
test_tweet = "I am happy today."
result, pos_score, neg_score = classifier.classify(test_tweet)
print(f"The sentiment of '{test_tweet}' is: {result}")
print(f"Positive score: {pos_score}, Negative score: {neg_score}")

import networkx as nx
import matplotlib.pyplot as plt
import matplotlib.animation as animation

# Create a directed graph
G = nx.DiGraph()

# Define the lexical categories
lexical_categories = ['Noun', 'Verb', 'Adjective', 'Adverb', 'Pronoun', 'Preposition', 'Conjunction', 'Determiner', 'Interjection']

# Define the syntactic categories
syntactic_categories = ['NP', 'VP', 'AP', 'AdvP', 'PP', 'Sentence']

# Add lexical categories as nodes
for category in lexical_categories:
    G.add_node(category, type='lexical')

# Add syntactic categories as nodes
for category in syntactic_categories:
    G.add_node(category, type='syntactic')

# Define relationships (edges) between lexical and syntactic categories
edges = [
    ('Noun', 'NP'), ('Pronoun', 'NP'),
    ('Verb', 'VP'), 
    ('Adjective', 'AP'), 
    ('Adverb', 'AdvP'), 
    ('Preposition', 'PP'), 
    ('Determiner', 'NP'),
    ('NP', 'Sentence'), ('VP', 'Sentence')
]

# Add nodes to the graph (without edges initially)
G.add_nodes_from(lexical_categories + syntactic_categories)

# Define node colors based on type
node_colors = ['lightblue' if G.nodes[node]['type'] == 'lexical' else 'lightgreen' for node in G.nodes]

# Define a custom layout to ensure at least 10 cm apart
def custom_layout(G):
    pos = nx.multipartite_layout(G, subset_key="type")
    scale = 250  # Scale factor to ensure the nodes are spaced sufficiently apart
    for node in pos:
        pos[node][0] *= scale
        pos[node][1] *= scale
    return pos

# Define node positions using the custom layout
pos = custom_layout(G)

# Create a figure and axis for the animation
fig, ax = plt.subplots(figsize=(16, 12))

def update(num):
    ax.clear()
    
    # Add edges progressively
    edges_to_add = edges[:num+1]
    G.add_edges_from(edges_to_add)
    
    # Draw the graph
    nx.draw(G, pos, with_labels=True, node_color=node_colors, node_size=3000, font_size=10, font_weight='bold', edge_color='gray', arrows=True, connectionstyle='arc3,rad=0.1', ax=ax)
    ax.set_title("Lexical and Syntactic Categories (Tree Structure)")

# Create an animation object
ani = animation.FuncAnimation(fig, update, frames=len(edges), interval=1000, repeat=False)

plt.show()
