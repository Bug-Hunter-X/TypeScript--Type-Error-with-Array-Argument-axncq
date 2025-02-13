# TypeScript Type Error with Array Argument

This repository demonstrates a common TypeScript error involving type mismatches when passing arrays to functions expecting single values. The `bug.ts` file contains the erroneous code, while `bugSolution.ts` provides a corrected version.

## Problem

The original code attempts to pass an array of strings to a function that expects a single string. TypeScript's type system correctly identifies this as a type error.

## Solution

The solution involves modifying the function signature or the function call to ensure type compatibility.  Two possible solutions are shown in `bugSolution.ts`.