## Namaste React Course by Akshay Saini
# Episode 10- Jo Dhikta h vo bikta h


## Q:Explore all the ways of writing css.
A: There are differernt ways of ussing CSS in in our application.

1. Writing normal Native CSS : By creating `.css` files and adding them to our `html` files
2. By using css preprocessors like sass or scss.
3. By writing inline CSS : writing csss inside the components itself.
4. Using Librraries like Chakra UI, Tailwind CSS etc.


## Q:  How do we configure tailwind?
A: For configuring the Tailwind CSS with Parcel.

1. Create your project
Start by creating a new Parcel project if you don’t have one set up already. The most common approach is to add Parcel as a dev-dependency to your project as outlined in their getting started guide.
```
mkdir my-project
cd my-project
npm init -y
npm install -D parcel
mkdir src
touch src/index.html
```
2. Install Tailwind CSS
   Install tailwindcss and its peer dependencies via npm, and then run the init command to generate tailwind.config.js.

```
npm install -D tailwindcss postcss
npx tailwindcss init
```

3. Configure PostCSS
   Create a .postcssrc file in your project root, and enable the tailwindcss plugin.

```
{
  "plugins": {
    "tailwindcss": {}
  }
}
```

This will create a `tailwind.config.js` file.

4. Configure your template paths
   Add the paths to all of your template files in your tailwind.config.js file.

   ```
   /** @type {import('tailwindcss').Config} */
        module.exports = {
         content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
      ],
     theme: {
    extend: {},
    },
   plugins: [],
   }
   ```

5. Add the Tailwind directives to your CSS
 Create a ./src/index.css file and add the @tailwind directives for each of Tailwind’s layers.

```
@tailwind base;
@tailwind components;
@tailwind utilities;

```

6. Start your build process
 Run your build process with npx parcel src/index.html.

```
Run your build process with npx parcel src/index.html.
```

7. Start using Tailwind in your project
   Add your CSS file to the <head> and start using Tailwind’s utility classes to style your content.
   ```
       <!doctype html>
       <html>
      <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link href="./index.css" rel="stylesheet">
    </head>
   <body>
    <h1 class="text-3xl font-bold underline">
    Hello world!
    </h1>
   </body>
   </html>
   ```


 

## Q: In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?
A: The `tailwind.config.js` file contains the configurations for the our application.
Following are the configurations we require to setup tailwind.

1.  `content` : This configuration of the file formats, on which the styles are applied.

    e.g.

    ```
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    ```

    This configuration means that in files extensions of `html , js, ts ,tsx, jsx` files will use the stylings of Tailwind.

2.  `theme` : Theme is where we design our own custom configurations for our project like colors and font-families for our application.

    ```
    module.exports = {
         theme: {
             screens: {
                 sm: '480px',
                 md: '768px',
                 lg: '976px',
                 xl: '1440px',
             },
             colors: {
                 'blue': '#1fb6ff',
                 'purple': '#7e5bef',
                 'pink': '#ff49db',
             },
         }
    }

    ```

3.  `extend` : Here we can extend more properties for Tailwind like adding values that does not exist for tailwind or overriding the existing the values for tailwind.

    ```
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
    ```

4.  `plugins`: We can use to inject new style in our project using JavaScript instaed of css.

    const plugin = require('tailwindcss/plugin')

        module.exports = {
            plugins: [
                plugin(function({ addUtilities, addComponents, e, config }) {
                // Add your custom styles here
                }),
            ]
        }



