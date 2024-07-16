import re

# Define stop words and punctuation manually
STOP_WORDS = {'and', 'is', 'are', 'at', 'has', 'for', 'a'}
PUNCTUATION = {',', '.', ':', '!', '"', "'"}

def simple_stemmer(word):
    suffixes = ['ing', 'ly', 'ed', 'ious', 'ies', 'ive', 'es', 's', 'ment']
    for suffix in suffixes:
        if word.endswith(suffix):
            return word[:-len(suffix)]
    return word

def preprocess_text(text):
    # Remove handles and URLs
    text = re.sub(r'@\w+|https?://\S+', '', text)
    
    # Tokenize the string into words
    words = re.findall(r'\b\w+\b', text)
    
    # Convert words to lower case
    words = [word.lower() for word in words]
    
    # Remove stop words
    words = [word for word in words if word not in STOP_WORDS]
    
    # Remove punctuation
    words = [word for word in words if word not in PUNCTUATION]
    
    # Perform simple stemming
    words = [simple_stemmer(word) for word in words]

    return words

# Example tweet
tweet = "@YMourri and @AndrewYNg are tuning a GREAT AI model at https://deeplearning.ai!!!"
preprocessed_tweet = preprocess_text(tweet)
print(preprocessed_tweet)


import re
import numpy as np
from collections import defaultdict
import matplotlib.pyplot as plt

# Define stop words and punctuation manually
STOP_WORDS = {'and', 'is', 'are', 'at', 'has', 'for', 'a'}
PUNCTUATION = {',', '.', ':', '!', '"', "'"}

# Simple stemmer function
def simple_stemmer(word):
    suffixes = ['ing', 'ly', 'ed', 'ious', 'ies', 'ive', 'es', 's', 'ment']
    for suffix in suffixes:
        if word.endswith(suffix):
            return word[:-len(suffix)]
    return word

# Preprocessing function
def preprocess_text(text):
    # Remove handles and URLs
    text = re.sub(r'@\w+|https?://\S+', '', text)
    
    # Tokenize the string into words
    words = re.findall(r'\b\w+\b', text)
    
    # Convert words to lower case
    words = [word.lower() for word in words]
    
    # Remove stop words
    words = [word for word in words if word not in STOP_WORDS]
    
    # Remove punctuation
    words = [word for word in words if word not in PUNCTUATION]
    
    # Perform simple stemming
    words = [simple_stemmer(word) for word in words]

    return words

# Sample data
tweets = [
    "I am happy because I am learning NLP",
    "I am sad because I am not understanding NLP",
    "I love deep learning and NLP",
    "I hate bugs in my code",
    "Debugging is fun when you find the solution"
]
labels = [1, 0, 1, 0, 1]  # 1 for positive, 0 for negative

# Build frequency dictionary
def build_freqs(tweets, labels):
    freqs = defaultdict(lambda: [0, 0])
    for tweet, label in zip(tweets, labels):
        for word in preprocess_text(tweet):
            freqs[word][label] += 1
    return freqs

# Extract features
def extract_features(tweet, freqs):
    word_list = preprocess_text(tweet)
    x = np.zeros((1, 3))
    x[0, 0] = 1  # Bias term
    for word in word_list:
        if word in freqs:
            x[0, 1] += freqs[word][1]  # Positive frequency
            x[0, 2] += freqs[word][0]  # Negative frequency
    return x

# Main code
m = len(tweets)  # Number of tweets
X = np.zeros((m, 3))  # Initialize matrix X

freqs = build_freqs(tweets, labels)  # Build frequencies dictionary

for i in range(m):
    X[i, :] = extract_features(tweets[i], freqs)  # Extract features for each tweet

print("Feature matrix X:\n", X)

# Visualization
fig, axes = plt.subplots(m, 1, figsize=(10, 2*m), sharex=True)

for i in range(m):
    axes[i].bar(['Bias', 'Positive', 'Negative'], X[i, :], color=['blue', 'green', 'red'])
    axes[i].set_title(f'Tweet {i+1}')
    axes[i].set_ylim(0, max(X[:, 1:].flatten()) + 1)  # Adjust y-axis limits for better visualization

plt.xlabel("Features")
plt.show()

