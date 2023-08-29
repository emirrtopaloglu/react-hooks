# `useQuery`

## Description

React hook for working with URL query string.

## Usage

```typescript jsx
import * as React from "react";
import { useQuery } from "@hooks";

const App = () => {
  const query = useQuery();

  return (
    <div>
      <span>Name: {query.get("name")}</span>
    </div>
  );
};
```

`.get(key: string)`

Returns the value of the query string parameter specified by `string`.

`.getAll(key: string)`

Returns an object containing all query string parameters.

`.set(key: string, value: string)`

Sets the value of the query string parameter specified by `string` to `string`.

`.has(key: string)`

Returns `true` if the query string contains the parameter specified by `string`.

`.size`

Returns the number of query string parameters.


