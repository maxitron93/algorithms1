# bigO

![bigO](/assets/bigO.PNG)

Comparing element vs number of operations
![bigO](/assets/linear_time.PNG)
Above example is O(n) - aka Linear Time

![bigO](/assets/constant_time.PNG)
Above example is O(1) - aka Constant Time

![bigO](/assets/O(3).PNG)
O(3) is still Constant time. It's still denotated as O(1) using bigO notation

## Big O Rules to Simplify calculation:
### 1. Worst Case
Assume we have to perform every operation (the objective happens at the end)

### 2. Remove Constants
Drop the constants from the Big O calculation. Because as n gets larger, the constants become relatively less significant.

### 3. Different Terms for Inputs
For example, if there are 2 inputs, each used in different for loops, we need to use two terms. i.e. O(a + b)

### 4. Drop non-Dominants
For example, if the total complexity is O(n + n^2), then drop the O(n) for just O(n^2) because O(n) will become relatively less important as n increases

Interesting note:
- O(1) - no loops
- O(log(n)) - searching when the items are sorted
- O(n) - single loop
- O(n*log(n)) - sorting
- O(n^2) - nested loops
- O(2^n) is common when doing recurrsion
- O(n!) is when a loop is bing added for every element

# Overview

### Data Structures
- Arrays
- Linked Lists
- Stacks
- Queues
- Trees
- Tries
- Graphs
- Hash Tables

### Algorithms
- Sorting
- Searching
- Recurrsion
- Dynamic Programming

### Operations on Data Structures
- Access
- Searching
- Insertion
- Deletion
- Traversal (Access each point exactly once for processing)
- Sorting

### There are tradeoffs between different data structures and algorithms:
- Readability
- Space Complexity
- Time Complexity

![operations](/assets/operations.PNG)

# Data Structures
## Array
![arrays](/assets/array.PNG)
Organizes items sequentially in memory
#### Static vs Dynamic Arrays
- Static arrays are fixed in size. The size needs to be specified at the start. If the size needs to change later on, the data has to be reallocated to a new area in memory.
- Dynamic arrays can change length as needed. Memory is dynamicly allocated as needed.

<br>
<strong>A lot of string questions can be thought of as array questions.</strong> For example, reversing a string can be thought of as reversing an array. 

#### Array Pros
- Fast lookups
- Fast push/pop
- It's ordered

#### Array Cons
- Slow inserts
- Slow deletes
- Fixed size (if using static array)

## Hash Table
a.k.a. Objects (JavaScript), Dictionaries (Python), Maps (Java), Hashes (Ruby).

A Hash Table is a collection of key-value pairs.

Hash Tables are kind-of a black box in the way it stores the data. It's not ordered like an array. The Hash Table will decide where the data is stored in Memory.

A hash function generates an output of fixed length for any input that it gets. For example, SHA-1, SHA-256, md5, etc. These hash functions create a memory address for any given input. This is why it's fast to retrieve data from a Hash Map.

![arrays](/assets/hash.PNG)

<strong>Hash collision a problem with using Hash Tables</strong>

Hash collisions occur when two different inputs generate the same hashed output, and get saved in the same memory address. The big downside of this is that it can cause lookup operations to be of time complexity O(n) instead of O(1). There are many different methods for dealing with hash collisions.

#### Array Pros
- Fast lookups
- Fast inserts/deletes
- Flexible keys

#### Array Cons
- Unordered
- Slow key itteration

## Linked List
## Stacks + Queues
## Trees
## Graphs

# Algorithms
## Recursion
## Sorting
## Searching
## Dynamic Programming
