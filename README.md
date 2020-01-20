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

![bigO](/assets/operations.PNG)

# Data Structures
## Array
![bigO](/assets/array.PNG)
Organizes items sequentially in memory
#### Static vs Dynamic Arrays
- Static arrays are fixed in size. The size needs to be specified at the start. If the size needs to change later on, the data has to be reallocated to a new area in memory.
- Dynamic arrays can change length as needed. Memory is dynamicly allocated as needed.

<br>
<strong>A lot of string questions can be thought of as array questions.</strong> For example, reversing a string can be thought of as reversing an array. 

## Hash Table
## Linked List
## Stacks + Queues
## Trees
## Graphs

# Algorithms
## Recursion
## Sorting
## Searching
## Dynamic Programming
