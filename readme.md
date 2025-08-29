1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans: GetElementById() is used to find an element by its id. It is qnique so it's only work on one element. getElementsByClassNamed is also find an element by it's class name. But it's work on multiple element by by using same class name. querySelector fine the element by their className, idName and tagName, and when element have multiple item and you need all of them then you use querySelectorAll. It can take all of the item into the element.

2. How do you **create and insert a new element into the DOM**?

Ans: fiestly call creatElement() to make new element then call innerText or innerHTML to write contant finaly call appendChild() or use others methods to insert into the DOM

3. What is **Event Bubbling** and how does it work?

Ans: When we click on any element the click doesn't stop inside the element, it's also gose to other elements step by step. When we click the Button firstly come chid button alart then parent div alert finaly come body alert and this is the Event Bubbling.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans: Event Delegation is a technique where we place an even listener on the parent element instead of the child element to check event to find where is the child element in the element.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans:preventDefault() and stopPropagation() both code use for control event behavior.But their work is different.
preventDefault() this prevents the default work of event, means browser can work normaly it can stop this work
stopPropagation() it's stop event bubbling or capturing, means event can't reach into the parent elements.

