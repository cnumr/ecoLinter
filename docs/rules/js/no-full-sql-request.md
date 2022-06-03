# SQL request should not select all fields in a table (no-full-sql-request)

Using SQL requests that select all fields in a table is not efficient and can increase CPU and memory usage.

## Rule Details

The rule enforces that no "SELECT \* FROM" is used in literals.

Examples of **incorrect** code for this rule:

```js
var sql = `SELECT * FROM users`;
```

Examples of **correct** code for this rule:

```js
var sql = `SELECT username, email, name FROM users`;
```
