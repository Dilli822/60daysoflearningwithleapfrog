import matplotlib.pyplot as plt
# Define the corpus
positive_tweets = ["I am happy because I am learning NLP", "I am happy"]
negative_tweets = ["I am sad, I am not learning NLP", "I am sad"]

# Tokenize the tweets
import re
from collections import defaultdict

def tokenize(tweet):
    return re.findall(r'\b\w+\b', tweet.lower())

# Build the frequency dictionary
freqs = defaultdict(lambda: [0, 0])

def build_freqs(tweets, label):
    for tweet in tweets:
        for word in tokenize(tweet):
            freqs[word][label] += 1

build_freqs(positive_tweets, 1)
build_freqs(negative_tweets, 0)

# Print the frequency dictionary
print("Frequency Dictionary:")
for word, freq in freqs.items():
    print(f"{word}: {freq}")

from collections import defaultdict
import re

positive_tweets = ["I am happy because I am learning NLP", "I am happy"]
negative_tweets = ["I am sad, I am not learning NLP", "I am sad"]

# Tokenize the tweets
def tokenize(tweet):
    return re.findall(r'\b\w+\b', tweet.lower())

# Build the frequency dictionary
freqs = defaultdict(lambda: [0, 0])

def build_freqs(tweets, label):
    for tweet in tweets:
        for word in tokenize(tweet):
            freqs[word][label] += 1

build_freqs(positive_tweets, 1)
build_freqs(negative_tweets, 0)

# Prepare the output in a single variable
output = []
output.append("Frequency Dictionary:")
for word, freq in freqs.items():
    output.append(f"{word}: {freq}")

# Join the output into a single string
output_str = "\n".join(output)

# Print or use the output_str as needed
print("Assigned in a new output variable: ", output_str)

freqs = {
    'i': [3, 3],
    'am': [3, 3],
    'happy': [0, 2],
    'because': [0, 1],
    'learning': [1, 1],
    'nlp': [1, 1],
    'sad': [2, 0],
    'not': [1, 0]
}

# Summing up values at index 0 and index 1, excluding 'because' and 'learning'
sum_index_0 = sum(freqs[key][0] for key in freqs if key not in ['because', 'happy'])
sum_index_1 = sum(freqs[key][1] for key in freqs if key not in ['because', 'happy'])

print("Sum at index 0 (excluding 'because' and 'learning'):", sum_index_0)
print("Sum at index 1 (excluding 'because' and 'learning'):", sum_index_1)
print("final encoded for both positive and negative tweets are: ", [1, sum_index_0, sum_index_1])

# Extract words and their frequencies
words = list(freqs.keys())
positive_freqs = [freqs[word][1] for word in words]  # Frequencies for positive tweets
negative_freqs = [freqs[word][0] for word in words]  # Frequencies for negative tweets

# Plotting
plt.figure(figsize=(10, 6))
bar_width = 0.35
index = range(len(words))

# Plotting
plt.figure(figsize=(10, 6))
bar_width = 0.35
index = range(len(words))

plt.bar(index, positive_freqs, bar_width, label='Positive', color='b')
plt.bar(index, negative_freqs, bar_width, label='Negative', color='r', bottom=positive_freqs)

plt.xlabel('Words')
plt.ylabel('Frequency or the repetition of the words in both +ve and -ve sentences')
plt.title('Word Frequency in Positive and Negative Tweets')
plt.xticks(index, words, rotation=45)
plt.legend()

plt.tight_layout()
plt.show()