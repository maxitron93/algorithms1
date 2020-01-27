# Algorithms

## Recursion

Recursion is more a concept than an algorithm. Recursion is used in a lot of algorithms.

A Recursive function is a function that refers to itself inside the body of the function.

```javascript
function inception() {
    inception()
}
```

Recursion is good when there are tasks that need to be repeated (e.g. traversing a tree, searching).

Need to ensure that a stopping criterion is eventually met - otherwise the function won't stop calling itself and eventually lead to a stack overflow. 

Every recursive function needs to have a <strong>base case</strong> (a stop condition):

```javascript
let counter = 0
function inception() {
    if (counter > 3) { // Base case (when to stop)
        return 'Done'
    } else {
        counter++
        return inception() // Recursive case
    }
}
```
<strong>Note</strong>: Need to return the last call to inception() so the result <em>'Done'</em> can 'bubble up' to the last call. Otherwise, only the last call to inception wil lreturn 'Done', and the other calls to the function will return undefined (because they're not tasked with returning anything).

Overall, there are a number of things to remember when building a recursive function:

1. Identify the <strong>Base Case</strong> (when to stop)

2. Identify the <strong>Recursive Case</strong> (when to keep going)

3. Make sure you keep getting closer and closer to the base case, and return when needed. 

4. Usually, there are <strong>two returns</strong>; one for the final value, and one for the recursive call.

#### Tree diagram for recurrsive fibonacci algorithm
![Recurrsion](../assets/recurrsion.PNG)

There's a theorem that states <em>Anything that can be done recursively can be done itteratively</em>

However, there are times when recursion can be beneficial. e.g. Functions written in fewer lines of code, so more DRY and readable.

#### Recursion Pros
DRY and readable

#### Recursion Cons
Large stack (inefficient)

#### When to use Recursion

- When it comes to traversing to trees or graphs, recursion is very useful and can be better than itterative approaches.

- When you're using a tree or converting something into a tree.

- Some criteria for questions that can be answered recursively:
    1. The problem can be divided into a number of subproblems that are smaller instances of the same problem

    2. Each instance of the subproblem is identical in nature

    3. The solutions of each subproblem can be combined to solve the problem at hand

## Sorting



## Searching



## Dynamic Programming


