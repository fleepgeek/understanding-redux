# Understanding Redux

This is the corresponding repo for my online YouTube series to understand why you need a state
management library like redux.

The simple project shows the problem of managing states manually when your application grows
and how to start thinking about scalabilty.

[This YouTube Series](https://youtu.be/uvna8tX57PE) promises to give you a good
understanding of state management and why libraries where created for them.
I try to remove the fear associated with redux and introduce redux as a messiah in this series.

## The Problems

These are some of the problems you could face when you try to manage state manually by passing props
in a deeply nested component tree (which is what most complex apps are):

- Deep prop drilling nightmare
- Bulky parent components
- Passing props through components that don't use or need it
- Passing values to components that don't share the same parent can be complicated

Of course, i cover all these steps in a practical way in the series, to make you see the problems first,
before writing any redux related code.

## Branches

- **master**: is the starter code
- **the-problem**: without a state mangement library and the problems with this approach
- **the-solution-redux**: solves the problems with redux