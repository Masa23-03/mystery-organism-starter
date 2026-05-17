# Mysterious Organism

A JavaScript practice project that creates simulated DNA objects for a fictional organism called **Pila aequor**.

This project was completed as part of Codecademy's **Back-End Engineer Career Path**, under the **Software Engineering Foundations** section, in the **Challenge Project: Mysterious Organism**.

The implementation and code structure are my own solution to the project requirements.

---

## Project Overview

The goal of this project is to create objects that represent a fictional organism named **Pila aequor**.

Each organism has:

- a unique specimen number
- a DNA strand made of 15 bases
- methods to mutate DNA
- methods to compare DNA with another organism
- logic to determine whether the organism is likely to survive
- an optional method to generate a complementary DNA strand

The project focuses on practicing JavaScript objects, factory functions, methods, loops, arrays, and object behavior.

---

## DNA Bases

DNA is represented using four bases:

| Base | Name |
|---|---|
| `A` | Adenine |
| `T` | Thymine |
| `C` | Cytosine |
| `G` | Guanine |

Each **Pila aequor** object stores its DNA as an array of 15 bases.

Example:

```js
["A", "C", "T", "G", "G", "A", "T", "C", "C", "G", "A", "T", "G", "C", "A"]
```

---

## What the Program Does

The program can:

- generate random DNA bases
- generate random DNA strands
- create unique specimen numbers
- create Pila aequor objects using a factory function
- mutate one random DNA base
- compare DNA between two organisms
- check whether an organism is likely to survive
- create 30 organisms that are likely to survive
- generate a complementary DNA strand

---

## Main Functions

### `returnRandBase()`

Returns one random DNA base.

Possible return values:

```js
"A", "T", "C", "G"
```

---

### `mockUpStrand()`

Creates a random DNA strand containing 15 DNA bases.

Example:

```js
mockUpStrand();
```

Possible output:

```js
["A", "T", "G", "C", "A", "A", "G", "T", "C", "G", "T", "A", "C", "C", "G"]
```

---

### `createUniqueSpecimenNum()`

Creates a unique specimen number for each organism.

The specimen numbers are generated sequentially.

Example:

```js
1, 2, 3, 4, ...
```

---

### `pAequorFactory(num, arr)`

Factory function that creates a **Pila aequor** object.

Parameters:

- `num`: unique specimen number
- `arr`: DNA array containing 15 bases

Returns an object with:

- `specimenNum`
- `dna`
- `mutate()`
- `compareDNA()`
- `willLikelySurvive()`
- `complementStrand()`

Example:

```js
const organism = pAequorFactory(createUniqueSpecimenNum(), mockUpStrand());
```

---

## Object Methods

### `.mutate()`

Randomly selects one DNA base and changes it to a different base.

The selected base cannot mutate into the same value.

Example:

```js
organism.mutate();
```

Returns the updated DNA array.

---

### `.compareDNA(otherOrganism)`

Compares the current organism's DNA with another organism's DNA.

It checks how many bases are identical and in the same position, then prints the percentage of DNA they have in common.

Example output:

```txt
specimen #1 and specimen #2 have 46.67% DNA in common
```

---

### `.willLikelySurvive()`

Checks whether the organism is likely to survive.

According to the project requirements, **Pila aequor** is likely to survive if at least 60% of its DNA bases are either `C` or `G`.

Returns:

- `true` if the organism is likely to survive
- `false` otherwise

Example:

```js
organism.willLikelySurvive();
```

---

### `.complementStrand()`

Returns the complementary DNA strand.

Complement rules:

| Base | Complement |
|---|---|
| `A` | `T` |
| `T` | `A` |
| `C` | `G` |
| `G` | `C` |

Example:

```js
organism.complementStrand();
```

If the DNA strand is:

```js
["A", "T", "C", "G"]
```

The complement is:

```js
["T", "A", "G", "C"]
```

---

## Creating Surviving Organisms

### `createpAequorArray(number)`

Creates a requested number of **Pila aequor** objects that are likely to survive.

The function keeps generating organisms until it has enough organisms where:

```js
organism.willLikelySurvive() === true
```

Example:

```js
const survivingSpecimens = createpAequorArray(30);
```

This creates 30 organisms that meet the survival condition.

---

## Final Test

The final test creates 30 surviving specimens and verifies that every specimen is likely to survive.

```js
const survivingSpecimens = createpAequorArray(30);

console.log(survivingSpecimens);

console.log(
  survivingSpecimens.every((specimen) => specimen.willLikelySurvive())
);
```

Expected final check:

```js
true
```

---

## Concepts Practiced

- JavaScript objects
- factory functions
- object methods
- `this` keyword
- arrays
- loops
- conditionals
- random number generation
- mutation
- comparing arrays
- working with nested data
- creating multiple object instances
- debugging with `console.log`

---

## How to Run

Make sure Node.js is installed.

Clone the repository or download the project files.

Run:

```bash
node main.js
```

---

## Notes

This is a beginner JavaScript practice project.

The focus is not on real biological simulation. The focus is practicing JavaScript objects, methods, factory functions, loops, and data processing.
