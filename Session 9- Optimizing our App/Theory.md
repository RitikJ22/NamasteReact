## Namaste React Course by Akshay Saini
# Chapter 08 - Let's get Classy


## Q: When and why do we need `lazy()`?
A: Lazy loading is a technique that allows you to load only the parts of your application that are needed, which can improve performance. In React, you can use the React.lazy() function to lazy load a component. This will cause the component to be loaded only when it is needed, which can improve the performance of your application.
To use React.lazy(), you need to first import the component that you want to lazy load. Then, you can use the React.lazy() function to wrap the component. For example:
```
import React from 'react';
import MyComponent from './MyComponent';

const LazyMyComponent = React.lazy(() => import('./MyComponent'));

   
```



## Q:  What is `suspense`?
A: React Suspense is a feature that allows you to render your app in a way that's reactive to asynchronous operations, such as network requests. When you use Suspense, your components can "suspend" their rendering until the asynchronous operation completes. This can help improve the user experience by preventing UI glitches and providing smooth transitions during data fetching.
Suspense is implemented in React by using a new component called Suspense. Suspense takes two props: children and fallback. The children prop is a React element that will be rendered when the asynchronous operation completes. The fallback prop is a React element that will be rendered while the asynchronous operation is still in progress.
To use Suspense, you can wrap your component in a Suspense tag. For example, if you have a component that fetches data from an API, you could wrap it in a Suspense tag like this:
```
import React, {Suspense} from 'react';

const MyComponent = () => {
  const [data, loading] = useState(null);

  if (loading) {
    return <Suspense fallback={<Spinner />}>
      <MyComponent />
    </Suspense>;
  }

  return <MyComponent data={data} />;
};

```

## Q:  Why we got this `error`: A component was suspended while responding to `synchronous input`. This will cause the `UI` to be replaced with a `loading indicator`. To `fix this`, `updates that suspend` should be wrapped with `start transition`? How does `suspense fix` this error?
A: We got this error because we have lazy load the component because of which the code for the specific component is not avaiable in the browser so on rendering the component for a small time react is in state where it does'nt have access to any code for the component thus it suspends the loading and throw error.
Using suspense resoves this error as it provides a fallback value for the component till its code files loads up in the browser. Thus react have something to render to the UI in between the componenet files are loading onto browser.



## Q:  `Advantages and Disadvantages` of using this `code splitting pattern`?
A: Bundling is great, but as your app grows, your bundle will grow too. Especially if you are including large third-party libraries. You need to keep an eye on the code you are including in your bundle so that you don’t accidentally make it so large that your app takes a long time to load.

To avoid winding up with a large bundle, it’s good to get ahead of the problem and start “splitting” your bundle. Code-Splitting is a feature supported by bundlers like Webpack, Rollup and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime.

Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.

Code splitting is a technique in React (and other modern JavaScript frameworks) that involves breaking down a large application bundle into smaller, more manageable pieces. This can help improve the performance and user experience of your application. Here are some advantages and disadvantages of using code splitting in React:

```
Advantages:

Faster Initial Page Load: Code splitting reduces the size of the initial JavaScript bundle that needs to be downloaded when a user visits your website. This results in faster page load times, especially on slower internet connections.

Improved Performance: Smaller bundles mean faster parsing and execution by the browser, resulting in improved application performance. It also reduces the risk of the main thread being blocked, leading to a smoother user experience.

Better Resource Management: With code splitting, you can load JavaScript code only when it's needed. This allows for more efficient use of system resources and can reduce memory consumption.

Optimized for Mobile Devices: On mobile devices with limited processing power and bandwidth, code splitting can significantly improve the overall performance of your application.

Enhanced Caching: Smaller code chunks are more cache-friendly, as they can be more easily stored in the browser cache. This reduces the need for re-downloading code on subsequent visits.

Reduced Maintenance Complexity: Smaller, more focused bundles are easier to manage, test, and maintain. It can make codebases more modular and understandable.
```
```
Disadvantages:

Complex Configuration: Setting up code splitting can be a bit complex, especially if you're new to the concept. You may need to configure your build tools and bundler to handle dynamic imports or use additional tools like Webpack.

Potential for Over-Splitting: If not implemented carefully, code splitting can lead to over-segmentation, resulting in too many small bundles. This can have a negative impact on performance, as it can increase the number of HTTP requests and overhead.

Runtime Overhead: Dynamic imports add a small amount of runtime overhead for fetching and loading modules when needed. While this is usually negligible, it's something to be aware of.

Debugging Complexity: Debugging can be more challenging when your code is spread across multiple bundles, especially if you have to deal with asynchronous loading issues.

Compatibility and Browser Support: Code splitting relies on modern JavaScript and browser features. While support is generally good, some older browsers might not fully support dynamic imports, so you may need to include additional polyfills or provide fallbacks.

Initial Loading Delay: While code splitting speeds up the initial page load, it can introduce a slight delay in rendering content if the required modules are not immediately available. This is especially noticeable on slower networks.
```

In conclusion, code splitting in React can greatly benefit your application's performance and user experience, but it also comes with some challenges and trade-offs. It's essential to carefully plan and implement code splitting to maximize its advantages while mitigating its disadvantages.

## Q: When `do we and why do we need suspense`?
A: In React, Suspense is a feature that allows you to handle asynchronous operations, such as data fetching, more elegantly and with better user experience. You might need to use Suspense in the following situations:

1. Data Fetching:

When you're fetching data from an API or making network requests in your React components, these operations are asynchronous. Suspense can help you manage the loading and error states more effectively.
Instead of using conditional rendering or loading states, you can use Suspense with the React.lazy function or the useEffect hook to handle data fetching and code splitting.
2. Code Splitting:

When you're code-splitting your React application to load parts of it on-demand, you can use React.lazy with Suspense to display loading indicators while components are being loaded.
3. Concurrent Mode:

In React Concurrent Mode (an experimental mode as of my last knowledge update in January 2022), Suspense is more integrated and powerful. It allows you to pause rendering, display fallback UI, and handle asynchronous data fetching and rendering in a more seamless way.
4. Improved User Experience:

Suspense helps provide a better user experience by allowing you to display loading spinners or fallback content while waiting for data to be fetched or components to load. This can prevent the user from seeing a partially rendered or empty page.
5. Error Handling:

Suspense also enables better error handling. You can use it to catch and handle errors that occur during asynchronous operations, providing a more graceful way to communicate errors to users.
6. Reducing Complexity:

By using Suspense, you can simplify your component logic. It eliminates the need for managing loading and error states in your components manually, making your code cleaner and more maintainable.
Here's an example of using Suspense for data fetching with the React.lazy function:

```
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

```
In this example, when LazyComponent is being loaded, the fallback UI (in this case, a "Loading..." message) will be displayed, making the user experience smoother.


