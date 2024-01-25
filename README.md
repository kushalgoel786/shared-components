This is a Library for Shared Components. See a [Live Demo](https://shared-components-ruddy.vercel.app/).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

### RoundButton

It can be customized with its text and onClick.

```react
import { RoundButton } from "@/components";
<RoundButton
    onClick={() => {
        console.log("Clicked");
    }}>
    "Button"
</RoundButton>
```
