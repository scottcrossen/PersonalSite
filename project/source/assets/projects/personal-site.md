# The Basics

This site acts as my personal portfolio, blog, and playground. It was developed
entirely by me, Scott Leland Crossen, to showcase my talent. I did not use any
site-creation tools except for basic editors and tools common to all languages.

While designing this site, I had two main requirements:
- This site could be hosted statically on AWS S3.
- Blog posts and projects could be written in markdown and added to the site
without actually changing any source code.

The first requirement was simple as no state needed to persist on the site. The
latter requirement was accomplished by using a manifest of all posts and projects.
Added posts would be resolved from this file.

# Frameworks and Tools

This site was built around a webpack bundle with custom loaders and hot module
replacement in dev.

The majority of source code for this site was created with react, react-redux,
and react-router. React is a user interfacing tool common to a lot of sites.
React router is the tool that allows for the page to connect with the browser's
location. React redux is the state-managing device. Because of how blog posts
and projects are loaded, redux was a necessary component to store the dynamic content.

Styling was performed using a postcss/sass/css chain. Common webpack plugins
were included to handle some customizable and specific tasks and to also make the
code more readable. Flex-box was used liberally throughout. A github markdown
styling project was partially used for markdown pages. The styling work is
ongoing for the site.

Markdown and a custom html parser were used to create the blog and project posts.
These are considered dynamic content and thus loaded separately from the overall page.
A 'ReactMarkdown' module was used to avoid dangerously setting the inner html.

I also essentially created my own language parser to be used with webpack.
This allowed for raw texts to include import statements within them. This loader
would recurse through the files and handle them according to user-defined options.

Finally, This site is hosted on AWS and uses the S3 and Route53 services.

## More details

The source code and assets for this site are on github.  
https://github.com/scottcrossen/PersonalSite

The source code for the custom webpack loader is also on github.  
https://github.com/scottcrossen/text-replace-file-loader
