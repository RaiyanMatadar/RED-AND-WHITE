new feature for nextjs.16 - turbopack file system catching

### project struture

tsconfig.json - this is an configuration file for typescript what should be type checked, ignored and which rules to follow

README.md - which ig u know about it so i wont go deep into it

postcss.config.mjs - configuration for postcss
The postcss.config.mjs file is a configuration file for PostCSS, a tool for transforming CSS with JavaScript. It allows you to add features like autoprefixing, minification, and more by using plugins. The file typically exports a JavaScript object that defines the plugins to be used. Using TypeScript for configuration can bring benefits such as static type checking, better code organization, and improved developer experience.

package-lock.json is an auto-generated file by npm that locks the exact versions of installed dependencies to ensure consistent installs across environments.

package.json (u knows it right!)

next-env.d.ts - this shouldnt be touched is an auto-generated TypeScript declaration file in Next.js that ensures TypeScript recognizes Next.js types without manual configuration.

next.config.ts - which allow us to configure nextjs features

eslint.config.mjs
.gitignore
node_modules
public

### App routers

App > page.tsx - represent the home page
App > globals.css - for writing all the global css
App > layout.tsx - this is the main entry point for the application so anything we do here apply to all the pages & routes of the whole nextjs application

### React Client & server components

in nextjs the all components are rendered on the serverside
for spacific things like interactivity from the broswer we can use the clientside components and for that we uses 'use-client' then it became the clientside component

client components are pre-rendered on the serverside to create a static shell and moved to the client side

everything in the client components that doesnt required the interactivity still rendered on the serverside, if the component need the interactivity its placed as an placeholder to the serverside pre-rendering to the server once the component reaches the client then the browser renders the component then the browser fill the components with the placeholders

you can use the inbuit compiler for let the nextjs auto use the useCallback & useMemo for redeucing the re-renders you can reserch forther about it im not getting deep dive into it

### routing

we use file based routing system in nextjs
we can also use nested routes for nested routing

e.g below
dashboard/users
dashboard/analytics

dynamic routing

params for seeing dynamic content - also known as page params

#### Layout

at the beggining we have talk about the layout as its the entry point of the whole nextjs app so writing anything above the body in the layout.tsx will go to all the components its like its act as an parent component

```tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      Navbar - anything you add here will remain for the whole application
      <body className="min-h-full flex flex-col">{children}</body>
      Footer - anything you add here will remain for the whole application
    </html>
  );
}
```

this layout is for the whole applcaition if you want to make an layout for the specific route (e.g - dashboard/users/1) then you can make for your routes too

### for making specific layout for the specific routes

```tsx
function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>Dashboard Navbar</div>
      {children}
    </>
  );
}

export default layout;
```

we have used props of childrens in the parameter of the layout and by doing this only the dashboard route will have the <div>Dashboard Navbar</div> in the whole dashboard route

but wait what if we dont want the root Element(here its navbar) to the dashboard then we can use the Routes Groups 

### Routes Groups 
they allow 