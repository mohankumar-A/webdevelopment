bod# Performance of website

Big companies like Amazon, Google will loose millions of searchs, if its website is slow.  
Results in loss in sales and advertisement.

## Optimization:

client -> server  

client fetches html page  
html page can have style sheet, images, scripts which will be fetched in the background one bt one.

## client behaviour:
half of the customer will leave the site more then 3 seconds.  

3 sections to concentrate while optimization:

1. client page rendering
2. network transfer
3. backend processing

there are infinte ways to optimize web site.  

always find efficiant and valuable solution.  

## part 1 (network transfer and critical render path):
### shrink the files
- minimize file size (ugilify manually, web pack, etc)
- minimize image size (jpg, svg, png, gif)
    jpg: no tranperant background, little bit big, with lot of color
    gif: low in color count, little in size
    png: limit the color, transperent bakground, used in logo
    svg: completly scalar vectar graphic, incredebily small and customized.
    other file formats: jpeg-2000. jpeg-xr, xp, etc
    choose right format and compress to mimize the image size.
### image optimization:
1. If you want transperant: use png
2. If you want animation: use gif
3. If you want colorful images: use jpg
4. If you want simple icons, logos and illustration: use svg
5. Reduce the png with [tiny PNG](https://tinypng.com/)
6. Reduce the jpeg with [jpeg-optimizer](http://www.jpeg-optimizer.com/)
7. Try to choose simple illustration over highly detailed image.
8. Always lower jpeg image quality (30-60%)
9. Resize the image based on the size it will be displayed (based on container size).
10. Display different sized image for different background (media-queries)
11. Use cdn like [imgix](https://imgix.com/)
12. Remove image meta tags (unneccsary information). https://www.verexif.com/en/

### Media Queries resources

https://www.verexif.com/en/

[Media Queries](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)

[Media Queries Cheat Sheet](https://gist.github.com/bartholomej/8415655)

    II. traveling delivery man

## Resources: Image File Formats

Want to learn more about Image file types? I recommend you check out these resources:

https://99designs.com/blog/tips/image-file-types/

https://pageweight.imgix.com/

https://www.sitepoint.com/gif-png-jpg-which-one-to-use/

### network transfer
    - less trips of network
    - ex: bootstarp, jquery can be build in native.
    - may be light weight libs.
    - 2-6 max cuncurrent reuest on browser.
    - may be combine all the css to one, as well scripts.
    - minimize requests.

### Resources: Delivery Optimizations
Here are some extra resources that may be useful to you!
[Max Parallel Requests Per Browser](https://stackoverflow.com/questions/985431/max-parallel-http-connections-in-a-browser)

## part 2 (optimize code and PWA progressive web app):

### optimize code:
client while load the page:  
Gets the page from server and build.

DOM (document object model)  
CSS (COM - CSS object model)  
JS - excutes if any changes in DOM or CSS-OM  

Critical render path:  
combines both (DOM and CSS-OM) and starts the rendering layout.  
    - render tree
    - layout
    - paint

Images (takes lower priority) are loaded background and it visible after download.

### how to optimize?

HTML:
load CSS first as soon as possible.  
load script as late as possible with few exceptions.  
postioning the css tag (top after <head>) and script tag (bottom before </body>)  

css:
only load what ever needed
above the fold loading (load style sheet only for viewable page, load other styles with script)
media attributes (use media att in css to control view of the page)
less specificity (limit css specificity)
internal style sheet instead of external
inline style css (really fast)

JS:

```
<!-- critical scripts -->
<script>
<!-- 3rd party scripts which wont manupulate dom -->
<script async>
<!-- 3rd party scripts not so important, not used before fold -->
<script defer>
```

load script async (downloads async, executes after download (html parsing will get paused), should be used for lib, utils, tracking, etc, without manupulating DOM)
defer loading of scripts (downloads async, executes after html parsed, script be used for )
Mininize DOM manupulation
Avoid long running scripts

### Resources: Async + Defer
https://stackoverflow.com/questions/10808109/script-tag-async-defer

### Optional: Resource Prefetching
https://css-tricks.com/prefetching-preloading-prebrowsing/


## part 3 (backend improve performance and scale):


## HTTP-2

- binary
- multiplex
- one connection with many files

### Resources: HTTP/2
Here is a great resource if you want to learn more about what will be coming up in the future with HTTP/2:  

https://developers.google.com/web/fundamentals/performance/http2/

## Performance part II

Updated Code For This Section
You can find all the code used in this section with the latest up to date libraries below if you encounter any issues:

https://github.com/aneagoie/code-splitting-exercise

https://github.com/aneagoie/code-splitting-exercise-updated

https://github.com/aneagoie/robofriends-pwa

https://github.com/aneagoie/Center-For-Robotos-Who-Cant-Be-In-The-App-Store-And-Wanna-Learn-To-Do-Other-Stuff-Good-Too-update

### Code splitting / progressive bootstraping

React.lazy
suspense

loadable component

React router
React loader

### (?react_perf) performance:

shouldComponentUpdate (use cautiosly for performance improvement)

use why did you update (why-did-you-update)? to find the unneccessary component update.

PureComponent: renders only the props changes, one caveat is this will shallow compare the props, since this will work inproperly sometimes.

common performance issue is unneccessary re-render.

To get familiar with the asynchronous nature of setState(), have a look at:

https://medium.com/@wereHamster/beware-react-setstate-is-asynchronous-ce87ef1a9cf3

https://vasanthk.gitbooks.io/react-bits/patterns/19.async-nature-of-setState.html

Finally, have a look at this tool mentioned in the previous video:


Why did you update package now is deprecated and the newer: [Why did you render?](https://www.npmjs.com/package/@welldone-software/why-did-you-render) is recommended.

### Optimizing Code Review:

Only load what needed:
- Code spliting
- Tree shaking
Avoid blocking main thread
Avoid memory leaks
Avoid multiple rerendering.

### Resources: Tree Shaking 101
Tree shaking is one of those things that will get optimized and improved upon in the Javascript landscape. For now, though, the best way to use tree shaking in your apps is to follow this wonderful guide:

https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/



