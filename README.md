# packNumbers

Given an array of integers, write a method that will pack neighbouring numbers that are the same into the string X:N, where X is the integer value and N is the sequence length.

For example, this
```javascript
pack([5, 5, 5, 7, 7, 3, 4, 7])
```

should return
```javascript
['5:3', '7:2', 3, 4, 7]
```
