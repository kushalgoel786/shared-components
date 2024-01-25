This is a Library for Shared Components.

It includes a RoundButton, that can be customized with its text and onClick.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

```react
import { RoundButton } from "@/components";
<RoundButton
    onClick={() => {
        console.log("Clicked");
    }}>
    "Button"
</RoundButton>
```
