# Part 1. Intro to Javascript

## Variables & Scoping

1. console.log(i) prints `i` which has the value of `prices.length` after the for loop above. This is because `var` has no block scope, meaning it must either be function-scoped or global-scoped (in this case it is function-scoped). 

2. console.log(discountedPrice) prints `prices[prices.length-1] * (1 - discount)` as it was overwritten every time in the loop and it is not block-scoped because it is a `var` declaration, so its value is the value we assigned to it in the last iteration of loop.

3. console.log(finalPrice) prints `Math.round(prices[prices.length-1] * (1 - discount) * 100) / 100` which is from final iteration of the loop above. This was declared as `var` in the function body so it is function-scoped. 

4. After calling `discountPrices([100,200,300], .5)` we get the output:
```
3
150
150
```
This makes sense from what we mentioned before, we see that `i = prices.length = 3` as expected, `discountedPrice = prices[2] * .5 = 300 * .5 = 150` as expected, and `finalPrice = Math.round(150) * 100 / 100 = 150` as expected.

5. We get the following error on line 11: `ReferenceError: i is not defined` which makes sense because now we are using `let` declarations which are block-scoped. 

6. If we comment out above line to get past previous error we get same error here `ReferenceError: discountedPrice is not defined` again because this is a `let` declaration which is block-scoped inside the loop.

7. If we comment out above line to get past previous error we see that because finalPrice was delcared outside the loop it is in the same function-scope as the consol.log(), and it was computed using discountedPrice from inside the loop which was 150 in its final iteration, so we would output `Math.round(prices[prices.length-1] * (1 - discount) * 100) / 100` assuming previous two errors are commented out.

8. If we run the code as-is, we will get a `ReferenceError` on line 11 because `i` is out of scope. If we comment out line 11 and 12, our output would be `150`.

9. Running the code as-is actually won't even reach line 11 because line 7 throws the error `TypeError: Assignment to constant variable.` because we are tryiing to overwrite a const variable (bad!). If we change declaration type of `finalPrice` to let, then we see the following error on line 11: `ReferenceError: i is not defined` as expected because const is block-scoped so `i` is not defined outside the loop.

10. Similarly to before if we comment out line 11 we will get `ReferenceError: discountedPrice is not defined` as expected because again, discountedPrice is const declared within the loop which is block-scoped.

11. Again we had the error on line 7 because we tried to overwrite a const, however if we change declaration type of `finalPrice` to let then the output would be `Math.round(prices[prices.length-1] * (1 - discount) * 100) / 100` similar to question 7.

12. We will get this error `TypeError: Assignment to constant variable.` if we run as-is. If we change finalPrice to let and comment out lines 11 and 12 then ouput will be `150`.

## Data Types

13. Notations:
	1. `student.name`
	2. `student["Grad Year"]`
	3. `student.greeting()`
	4. `student["Favorite Teacher"].name`
	5. `student.courseLoad[0]`

## Basic Operators & Type Conversion

14. Arithmetic:
	1. `'3' + 2 = '32'` because `+` is treated as string concat
	2. `'3' - 2 = 1` because `-` treats string "3" as num
	3. `3 + null = 3` because `+` treats null as 0
	4. `'3' + null = '3null'` because `+` is treated as string concat
	5. `true + 3 = 4` because true is treated as 1
	6. `false + null = 0` because both false and null are treated as 0
	7. `"3" + undefined =  '3undefined'` because `+` is treated as string concat
	8. `"3" - undefined = NaN` doesn't know how to handle subtracting undefined

15. Comparison:
	1. `'2' > 1` returns `true` because string is converted to number
	2. `'2' < '12'` returns `false` because it is doing alphabetical string compare by char
	3. `2 == '2'` returns `true` because type conversion of string to num
	4. `2 === '2'` returns `false` because strict equality doesn't do type conversion
	5. `true == 2` returns `false` because true is converted to int val 1
	6. `true === Boolean(2)` returns `true` because Boolean(2) does proper conversion before strict equality comparison

16. A strict equality `===` checks for equality without type conversion, whereas `==` does implicit type conversion before comparison.

## Conditionals

17. From running the code snippet, the following is outputted `How are you?` so we converted true to 1 and then did comparison 2 == 1 which returned false, then we jumped to second case where 2 is converted to a boolean true and executes the block.

## Loops

18. See code in file `part1-question18.js` for solution.

## Functions

19. after running `modifyArray([1,2,3], doSomething)` we get out the list `[6,8,10]` because we first assign `doSomething` as the callback function for `modifyArray` and then assign the lambda `function(x) { return x * 2; }` as the callback function for `doSomething` so for each element of the array `array[i]` the new element of the array would be `(array[i] + 2) * 2`. For input `[1,2,3]` this gives us `[(1+2) * 2,(2+2) * 2,(3+2) * 2] = [6,8,10]` as expected.

## setInterval(), setTimeout(), clearTimeout()

20. See code in file `part1-question20.js` for solution.

21. Running the code gives the following output:
```
1
4
3
2
```
This makes sense with my understanding of setTimeout because when `setTimeout()` is called with zero delay, the execution is placed on a scheduled queue to run at the next available opportunity which may not be immediately. As mentioned in the linked references provided, "currently-executing code must complete before functions on the queue are executed, thus the resulting execution order may not be as expected" so we see `2` taking the longest to print, and `3` taking second to longest because both setTimeout calls are placed in queue to be executed after current processes which are the two local `console.log()` calls printing `1` and `4`.

